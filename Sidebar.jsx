import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoHome, IoSettingsSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { BsServer } from "react-icons/bs";
// import { LogOut, reset } from "../features/authSlice";
import "./Nav.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // const logout = () => {
  //   dispatch(LogOut());
  //   dispatch(reset());
  //   navigate("/");
  // };

  return (
    <div>
      <aside className="menu pl-2 has-shadow hero is info">
        <p className="menu-label">
          <IoHome /> DASHBOARD{" "}
        </p>

        {/* <IoLogoOctocat/> */}
        {/* <strong>{user && user.name} </strong> */}

        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          <p className="menu-label">
            <BsServer /> MASTER DATA{" "}
          </p>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/customers"}>Customers</NavLink>
          </li>
          <li>
            <NavLink to={"/alamatp"}>Alamat Pengiriman</NavLink>
          </li>
          <li>
            <NavLink to={"/kendaraan"}>Kendaraan</NavLink>
          </li>
          <li>
            <NavLink to={"/driver"}>Driver</NavLink>
          </li>
        </ul>

        <p className="menu-label">
          <IoSettingsSharp /> TRANSAKSI{" "}
        </p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/delorder"}>Delivery Order</NavLink>
          </li>
        </ul>

        <p className="menu-label"></p>

        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">
              {" "}
              <IoSettingsSharp /> SETTING ADMIN ONLY
            </p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>Users</NavLink>
              </li>
            </ul>
          </div>
        )}
        {/* <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white menu pl-2 has-shadow ">
              <IoLogOut />  Logout
            </button>
          </li>
        </ul> */}
      </aside>
    </div>
  );
};

export default Sidebar;
