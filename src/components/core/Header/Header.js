import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);

  // function toggleShow() {
  //   setShow(!show);
  // }

  useEffect(() => {
    if (sessionStorage.getItem("_authToken")) {
      setShow(false);
    } else {
      setShow(true);
    }
  });

  function logout() {
    sessionStorage.removeItem("_authToken");
    navigate("/");
  }

  return (
    <div className="mainHeader">
      <div className="top-bar">
        <h2>
          <span className="lab la-accusoft"></span>Accusoft
        </h2>
        <div className="container">
          <div className="navItemLinks text-right">
            {show ? (
              <Link to="/login" className=" text-white">
                Login
              </Link>
            ) : null}
            {!show ? (
              <Link to="/login" className=" text-white" onClick={logout}>
                Logout
              </Link>
            ) : null}
            &nbsp;
            <a href="customer-register.html">
              <Link to="/sign-up" className=" text-white">
                Sign-up
              </Link>
            </a>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleShow}>click</button> */}
    </div>
  );
}

export default Header;
