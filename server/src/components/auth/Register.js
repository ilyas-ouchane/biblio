import React, { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import { Fragment } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import ErrorNotice from "../misc/ErrorNotice";
import SuccessNotice from "../misc/SuccessNotice";

export default function Register() {
  /** Tracking the states of the form */
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [username, setUsername] = useState();
  const [fname, setFirstName] = useState();
  const [lname, setLastName] = useState();
  const [error, setError] = useState();

  /** Successful registration of account */
  const [success, setSuccess] = useState();

  /** Successful registration of account */
  const { setUserData } = useContext(UserContext);
  // const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const newUser = {
        username,
        fname,
        lname,
        email,
        password,
        passwordCheck,
      };
      await Axios.post("http://localhost:5000/api/user/register", newUser);

      const loginRes = await Axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.id,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      //  console.log(loginRes.data.user.id);
      if (loginRes.data.token) {
        setSuccess("Account created successfully. Welcome aboard !");
      }
      // history.push("/");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
    // window.location.reload(false);
    // console.log(loginRes);
  };

  return (
    <Fragment>
        <section className="shopping-login-page">
            <div className="container">
                <div className="login-wrapper">
                <div className="row no-gutters">
                <div className="col-lg-6">
                    <div className="reg-box">
                        <div className="form-title">
                        <h3>Register</h3>
                        {success && (
                            <SuccessNotice
                            message={success}
                            clearError={() => setSuccess(undefined)}
                            />
                        )}
                    
                        {error && (
                            <ErrorNotice
                            message={error}
                            clearError={() => setError(undefined)}
                            />
                        )}
                        </div>
                        <form className="login-form" onSubmit={submit}>
                        <p>
                            <label htmlFor="exampleInputusername">Username<span className="required">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                id="reg-username"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </p>
                        <p>
                            <label htmlFor="exampleInputLastName">Last name<span className="required">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                id="reg-lastname"
                                placeholder="Doe"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </p>
                        <p>
                            <label htmlFor="exampleInputFirstName">First Name<span className="required">*</span></label>
                            <input
                                type="text"
                                className="form-control"
                                id="reg-firstname"
                                placeholder="Jane"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </p>
                        <p>
                            <label htmlFor="exampleInputemail">Email address<span className="required">*</span></label>
                            <input
                                type="email"
                                className="form-control"
                                id="reg-email"
                                placeholder="email@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="exampleInputPassword1">Password<span className="required">*</span></label>
                            <input
                                type="password"
                                className="form-control"
                                id="reg-password"
                                placeholder="******"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <br />
                            <input
                                type="password"
                                className="form-control"
                                id="reg-password-vf"
                                placeholder="Verify Password"
                                onChange={(e) => setPasswordCheck(e.target.value)}
                            />
                        </p>
                        <p className="text-center">
                            <button type="submit" className="form-btn">Register</button>
                        </p>
                        </form>
                        <p>
                            <br />
                            Already have an account?
                            <br /> 
                            <Link to="/login"> Sign in</Link>
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
