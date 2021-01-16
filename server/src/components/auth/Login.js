import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { Fragment } from "react";
import Axios from "axios";
import { message } from "antd";


export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    try {
      const loginUser = { email, password };
      //* Here we call an instance of the server route that will proceed the request of type post
      //*using */
      const loginRes = await Axios.post("/user/login", loginUser);
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user.id,
      });

      // message.success("Welcome back");

      setTimeout(() => {}, 2000);

      localStorage.setItem("auth-token", loginRes.data.token);

      history.push("/");
    } catch (err) {
      // err.response.data.msg && setError(err.response.data.msg);

      
      message.error(err.response.data.msg);

      setTimeout(() => {}, 2500);
    }
  };

  return (
    <Fragment>
        <section className="shopping-login-page">
            <div className="container">
                <div className="login-wrapper">
                <div className="row no-gutters">
                    <div className="col-lg-6">
                    <div className="login-box">
                        <div className="form-title">
                        <h3>Login</h3>
                        <p>I'm an existing customer and would like to login.</p>
                        </div>
                        <form className="login-form" onSubmit={submit}>
                        <p>
                            <label htmlFor="exampleInputEmail1">Email address<span className="required">*</span></label>
                            <input
                              type="email"
                              className="form-control"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                              placeholder="Enter email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                        </p>
                        <p>
                            <label htmlFor="exampleInputPassword1">Password<span className="required">*</span></label>
                            <input
                              type="password"
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                        </p>
                        <p className="text-center">
                            <button type="submit" className="form-btn">Login</button>
                        </p>
                        </form>
                        <p>
                            <br />
                            Don't have an account?
                            <br /> 
                            <Link to="/register">Register</Link>
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </Fragment>
  );
}
