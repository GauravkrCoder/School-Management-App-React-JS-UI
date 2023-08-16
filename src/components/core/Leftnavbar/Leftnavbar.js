import "./Leftnavbar.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function Leftnavbar() {
  return (
    <div>
      <div className="row">
        <div className="nav-side-menu">
          <div className="menu-list">
            <ul id="menu-content" className="menu-content collapse out">
              <li>
                <a href="#">
                  <i className="fa fa-dashboard fa-lg"></i>
                  <Link to="/home">Home</Link>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dashboard fa-lg"></i>
                  <Link to="/dashboard">Dashboard</Link>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dashboard fa-lg"></i>
                  <Link to="/sign-up" className=" text-white">
                    Sign-up
                  </Link>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dashboard fa-lg"></i> Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Leftnavbar;
