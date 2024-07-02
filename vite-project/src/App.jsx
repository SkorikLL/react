import "./App.css";

import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./lib/appRoutes.js";
//import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import SignInPage from "./pages/SignInPage/SignInPage.jsx";
import SignUpPage from "./pages/SignUpPage/SignUpPage.jsx";
import ExitPage from "./pages/ExitPage/ExitPage.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import CardPage from "./pages/CardPage/CardPage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
// import { useState } from "react";


const isAuth = true;

function App() {
  

  //let navigate = useNavigation();
  // const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  // function exitAuth() {
  //localStorage.removeItem("token");
  //   setIsAuth(false);
  //navigator(AppRoutes.SIGNIN);
  // }

  // function getInAuth() {
  //   localStorage.setItem("token", "123456");
  //setIsAuth(localStorage.getItem("token"));
  //navigate(AppRoutes.HOME);
  // }

  //11

  // const [isAuth, setIsAuth] = useState(true);

  // function exitAuth() {
  //   setIsAuth(false);
  // }

  return (
    <>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={AppRoutes.HOME} element={<MainPage />}>
            <Route path={AppRoutes.EXIT} element={<ExitPage />} />
            <Route path={AppRoutes.CARD} element={<CardPage />} />
          </Route>
        </Route>
        <Route path={AppRoutes.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={AppRoutes.SIGNIN} element={<SignInPage />} />
        <Route path={AppRoutes.SIGNUP} element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
