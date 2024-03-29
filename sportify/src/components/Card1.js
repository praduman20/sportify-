import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Logo from "../images/Court1.webp";
function Card() {
  return (
    <Container>
      <Image>
        <img src={Logo} alt="court-pic" />
      </Image>
      <Description>
        <h5>Sky Sports Arena</h5>
        <Rating
          name="half-rating-read"
          defaultValue={4}
          precision={0.5}
          readOnly
        />
        <p>Rs.1200/hr (For all sports)</p>

        <Link to="/detailPage1">
          <button>SEE DETAILS</button>
        </Link>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
  border: 1px solid #f9ce80;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset !important;b
`;
const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 240px;
    height: 200px;
    border-radius: 6px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;
  h5 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-weight: 600;
  }
  button {
    width: 100%;
    height: 33px;
    color: #fff;
    background-color: #f9ce80;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
  button:hover {
    color: #454545;
  }
`;
export default Card;
