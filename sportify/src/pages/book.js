import Search from "../components/search";
import styled from "styled-components";
import Card from "../components/Card";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import "./style/book.css";

function Book() {
  return (
    <>
      <div className="book">
        <div>
          <Search />
        </div>
      </div>
      <div className="book-area">
        <Container>
          <Main>
            <Card />
            <Card1 />
            <Card2 />
            <Card3 />
          </Main>
        </Container>
      </div>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;
  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;
  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }
  /* Tablets */
  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }
  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;

export default Book;
