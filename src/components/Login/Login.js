import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Login.css";

let Login = () => {
  const [email_id, setEmail] = useState("test@mailinator.com");
  const [password, setPassword] = useState("abc@123");
  const navigate = useNavigate();
  const apiBaseURL = process.env.REACT_APP_API_BASEURL; 

    function login(e) {
      e.preventDefault();
      let _formData = { email_id, password };     
      fetch(`${apiBaseURL}/user/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(_formData),
      }).then((serverPromise) => {
        serverPromise.json().then((response) => {
          if (response) {
            console.log("result", response);
            const token = response.data.token;
            sessionStorage.setItem("_authToken", token);
            navigate("/home");
          }
        });
      });
    }

  return (
    <div>      
      <div className="container d-flex justify-content-center">
        <form onSubmit={login}>
          <div className="d-flex flex-column justify-content-between">
            <div className="card mt-3 p-5">
              <div>
                <h4 className="mb-3 text-info">Login</h4>
                <p className="text-info">
                  Don't have account?
                  <a href="#">
                    <Link to="/sign-up">Click here</Link>
                  </a>
                </p>
              </div>
            </div>
            <div className="card two bg-white px-5 py-4 mb-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="mail"
                  value={email_id}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-control-placeholder" htmlFor="mail">
                  Email
                </label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-control-placeholder" htmlFor="name">
                  Password
                </label>
              </div>
              {/* <div className="form-group">
                <input type="password" className="form-control" id="password" />
                <label className="form-control-placeholder" htmlFor="password">
                  Confirm Password
                </label>
              </div> */}
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg mt-1 mb-2"
              >
                <span>
                  Login
                  <i className="fas fa-long-arrow-alt-right ml-2"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>

      {/*  <div>
        <table className="table table-bordered">
          <tr>
            <td>User Id</td>
            <td>Email Id</td>
            <td>Created_at</td>
            <td>Updated_at</td>
            <td>Last_login</td>
          </tr>
          {userList.map((item, key) => {
            return (
              <tr>
                <td>{item.user_id}</td>
                <td>{item.email_id}</td>
                <td>{item.created_at}</td>
                <td>{item.updated_at}</td>
                <td>{item.last_login}</td>
              </tr>
            );
          })}
        </table>
      </div> */}
    </div>
  );
};

export default Login;
