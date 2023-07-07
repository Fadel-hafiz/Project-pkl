import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import marva from "../marva.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
          <img src={marva} width="310" height="200" alt="marva.jpeg" />
          
          {/* <h1 style={{color: "#B1B2FF"}}>SCHEDULE DELIVERY</h1> */}
          </NavLink>

          <a
            href="!#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;