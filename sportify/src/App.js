import "./App.css";
import Nav from "../src/components/nav";
import Footer from "../src/components/footer";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Body from "../src/pages/body";
import Contact from "./pages/contact";
import List from "./pages/list";
import About from "./pages/aboutus";
import Book from "./pages/book";
import Chat from "../src/components/chat";
import ProductDetailPage from "./pages/productDetail";
import ProductDetailPage1 from "./pages/productDetail1";
import ProductDetailPage2 from "./pages/productDetail2";
import ProductDetailPage3 from "./pages/productDetail3";
import Payment from "./pages/payment";
import Info from "./pages/info";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const promise = loadStripe(
  "pk_test_51MRfixSIsbwwXYkE1oGJR863gbwIbIrY10IFoOq66EpsQuR8cqVVf1ZgJtLngFFUpHUvkXj3yxMKM5HWPa0C71gv00rB7STWPt"
);

function App() {
  return (
    <>
      <Nav />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/detailPage" element={<ProductDetailPage />} />
        <Route path="/detailPage1" element={<ProductDetailPage1 />} />
        <Route path="/detailPage2" element={<ProductDetailPage2 />} />
        <Route path="/detailPage3" element={<ProductDetailPage3 />} />
        <Route path="/info" element={<Info />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
      </Routes>
      <Chat />
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
