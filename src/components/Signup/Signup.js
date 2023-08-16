import "./Signup.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SignUp() {
  const [email_id, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user_role, setUserRole] = useState("user"); 

  function register(e) {
    e.preventDefault();
    console.log(email_id, password);
    let _formData = { email_id, password, user_role };
    console.log(JSON.stringify(_formData));
    fetch(`http://localhost:3000/api/user/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(_formData),
    }).then((result) => {
      console.log(result);
      this.setEmail({
        email_id: "",
      });
      this.setPassword({
        password: "",
      });
    });
  }

  /* function getUserList(){
    fetch
  } */

  return (
    <div>
      <div className="container d-flex justify-content-center">
        <form onSubmit={register}>
          <div className="d-flex flex-column justify-content-between">
            <div className="card mt-3 p-5">
              <div>
                <p className="mb-1 text-info">Start managing your</p>
                <h4 className="mb-5 text-info">money with us!</h4>
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
                  Get started
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
}

export default SignUp;
