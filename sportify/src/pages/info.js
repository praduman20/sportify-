import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Info() {
  return (
    <Container>
      <Main>
        <FormContainer>
          <InputContainer>
            <p>Full Name :</p>
            <input type="text" placeholder="Enter your name" required />
          </InputContainer>
          <InputContainer>
            <p>Phone Number :</p>
            <input
              type="text"
              placeholder="Enter your contact number"
              required
            />
          </InputContainer>
          <InputContainer>
            <p>Sport :</p>
            <input
              type="text"
              placeholder="Enter the sport you want to play"
              required
            />
          </InputContainer>
          <InputContainer>
            <p>Date :</p>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              placeholder="Select the date"
              required
            />
          </InputContainer>
          <InputContainer>
            <p>Time :</p>
            <input type="time" placeholder="Select time" required />
          </InputContainer>
          <InputContainer>
            <p>Duration (in hours) :</p>
            <select id="cars" name="cars">
              <option value="one">ONE</option>
              <option value="two">TWO</option>
              <option value="three">THREE</option>
              <option value="four">FOUR</option>
            </select>
          </InputContainer>
          <Link to="/payment">
            <button>Proceed With The Payment</button>
          </Link>
        </FormContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  margin: auto;
  background-color: rgb(234, 237, 237);
  position: relative;
  margin-top: 12vh;
  margin-bottom: 12vh;
`;

const Main = styled.div`
  padding: 35px;
  border: 2px solid #454545;
  border-radius: 8px;
`;

const FormContainer = styled.form`
  border: 1px solid #f9ce80;
  border-radius: 8px;
  width: 55%;
  min-width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  margin: auto;
  button {
    align-self: flex-start;
    height: 33px;
    width: 250px;
    margin-top: 20px;
    background-color: #f9ce80;
    border: none;
    color: white;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    color: #454545;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;
    &:hover {
      border: 1px solid #f9ce80;
    }
  }
`;
export default Info;
