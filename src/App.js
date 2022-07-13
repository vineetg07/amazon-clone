import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link }
  from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_51LJWrkSJYXuNt8alUvCyxCwnQeuwXg39B4Pnni1Yvoz52cSwkdkgfadGOSpAskZIals6dLymiHf8S58yY9RmOEen000q5ZpjXl");

function App() {
  const [{ }, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS>>>", authUser);
      if (authUser) {
        dispatch({

          type: "SET_USER",
          user: authUser

        })

      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })

      }

    })

  }, [])
  return (

    <Router>
      <div className="app">

        <Routes>

          <Route path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            } />

          <Route path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            } />
          <Route path="/login"
            element={
              <>
                <Login />
              </>
            } />
          <Route path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>


              </>
            } />
          <Route path="/orders"
            element={
              <>
                <Header />
                <Orders />
              </>
            } />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
