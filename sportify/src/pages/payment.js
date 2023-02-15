import React from "react";
import CurrencyFormat from "react-currency-format";
import styled from "styled-components";
import "../pages/style/payment.css";
import Logo from "../images/Court.webp";
import { BsCart3 } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51MRfixSIsbwwXYkE1oGJR863gbwIbIrY10IFoOq66EpsQuR8cqVVf1ZgJtLngFFUpHUvkXj3yxMKM5HWPa0C71gv00rB7STWPt"
    );
  }

  return stripePromise;
};

function Payment() {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1MS2ZkSIsbwwXYkEHCWOzbFI",
    quantity: 1,
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `http://localhost:3000/`,
    cancelUrl: `http://localhost:3000/`,
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);
  return (
    <Container>
      <Main>
        <ReviewContainer>
          <h2>Review Your Order</h2>

          <AddressContainer>
            <h5>
              Cart <BsCart3 />{" "}
            </h5>

            <div>
              <p>Premium Hybrid Court (1)</p>
            </div>
          </AddressContainer>

          <OrderContainer>
            <h5>
              Your Venue Details <BiDetail />
            </h5>

            <div>
              <Product>
                <Image>
                  <img src={Logo} alt="book-pic" />
                </Image>
                <Description>
                  <h2>Sporto Academy</h2>
                  <h4>Hola!!!You have selected the best venue.</h4>

                  <p>Your total is : ₹ 900</p>
                </Description>
              </Product>
            </div>
          </OrderContainer>
        </ReviewContainer>
        <Subtotal>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ( 1 court ) : <strong> {value}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value={900}
            displayType="text"
            thousandSeparator={true}
            prefix={"₹ "}
          />
          <button
            className="checkout-button"
            onClick={redirectToCheckout}
            disabled={isLoading}
          >
            <div className="grey-circle"></div>
            <div className="text-container">
              <span className="text">
                {isLoading ? "Loading..." : "Proceed to Pay"}
              </span>
            </div>
          </button>
        </Subtotal>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  background-color: rgb(234, 237, 237);
  margin-top: 12vh;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
`;

const Main = styled.div`
  padding: 15px;
  display: flex;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ReviewContainer = styled.div`
  background-color: #fff;
  flex: 0.7;
  padding: 15px;
  border-radius: 8px;
  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;

const AddressContainer = styled.div`
  margin-top: 20px;
  div {
    margin-top: 10px;
    margin-left: 10px;
    p {
      font-size: 14px;
      margin-top: 4px;
    }
  }
`;

const OrderContainer = styled.div`
  margin-top: 30px;
`;

const Product = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  flex: 0.3;
  img {
    width: 300px;
    height: 200px;
    border-radius: 8px;
    margin-top: 1vh;
  }
`;
const Description = styled.div`
  flex: 0.7;
  margin-left: 2vw;
  h4 {
    font-weight: 600;
    font-size: 18px;
  }
  p {
    font-weight: 600;
    margin-top: 10px;
  }
  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }
  p {
    font-size: 20px;
  }
  small {
    display: flex;
    align-items: center;
    margin-top: 10px;
    span {
      margin-left: 10px;
    }
  }
  button {
    padding: 0.1em 0.25em;
    width: 17.1em;
    height: 5.8em;
    background-color: #f9ce80;
    margin-top: 20px;
    border: 0.09em solid #454545;
    border-radius: 0.3em;
    font-size: 12px;
  }
`;
export default Payment;
