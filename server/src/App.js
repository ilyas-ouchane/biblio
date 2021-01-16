import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/layout/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/layout/Header'
import BooksPage from '../../client/src/components/layout/Books/BooksPage'

import UserContext from './context/UserContext'
import Axios from "axios";

function App() {

  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined, //user
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post("/user/verifytoken", null, {
        headers: { "auth-token": token },
      });

      if (tokenRes.data) {
        const userRes = await Axios.get("/user/", {
          headers: {
            "auth-token": token,
          },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/books" component={BooksPage} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
