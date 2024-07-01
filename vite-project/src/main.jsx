import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Global.styled.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  //BrowserRouter (Без него не будет работать маршрутизатор страницы)
  
    <BrowserRouter>
      <GlobalStyle />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  
);
