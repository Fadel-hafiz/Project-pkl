import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Lokasis from "./pages/Lokasis";
import Schedules from "./pages/Schedules"
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import AddCustomer from "./pages/AddCustomer";
import EditCustomer from "./pages/EditCustomer";
import AddLokasi from "./pages/AddLokasi";
import EditLokasi from "./pages/EditLokasi";
import AddSchedule from "./pages/AddSchedule";
import EditSchedule from "./pages/EditSchedule";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/add" element={<AddCustomer />} />
          <Route path="/customers/edit/:id" element={<EditCustomer />} />
          <Route path="/lokasis" element={<Lokasis />} />
          <Route path="/lokasis/add" element={<AddLokasi />} />
          <Route path="/lokasis/edit/:id" element={<EditLokasi />} /> 
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/schedules/add" element={<AddSchedule />} />
          <Route path="/schedules/edit/:id" element={<EditSchedule />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;