import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import ScrollToTop from "./components/scrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ndd3y2brf81wf5uh.us.auth0.com"
    clientId="IcXMocIwCTHjl0mPKQ5tSvwwRNZZ63IF"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
