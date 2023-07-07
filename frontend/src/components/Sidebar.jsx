import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
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
      <ul className="menu-list">
      <li>
        <NavLink to={"/dashboard"}>
          <IoHome /> Dashboard
        </NavLink>
          </li>
        </ul>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">MASTER DATA</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/customers"}>
              <IoPricetag /> Customer
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoPricetag /> Product
            </NavLink>
          </li>
          <li>
            <NavLink to={"/lokasis"}>
              <IoPricetag /> Lokasi
            </NavLink>
          </li>
          <p className="menu-label">TRANSAKSI</p>
        <ul className="menu-list"></ul>
          <li>
          <NavLink to={"/schedules"}>
              <IoPricetag /> Schedules
            </NavLink>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;