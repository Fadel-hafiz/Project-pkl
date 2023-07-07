import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    const response = await axios.get("http://localhost:5000/customers");
    setCustomers(response.data);
  };

  const deleteCustomer = async (customerId) => {
    await axios.delete(`http://localhost:5000/customers/${customerId}`);
    getCustomers();
  };

  return (
    <div>
      <h1 className="title">Customer</h1>
      <h2 className="subtitle">List of Customer</h2>
      <Link to="/customers/add" className="button is-info mb-2">
        + Tambah Data Customer
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Kode Customer</th>
            <th>Nama Customer</th>
            <th>Alamat Customer</th>
            <th>Provinsi</th>
            <th>Kota</th>
            <th>Kecamatan</th>
            <th>Telepon</th>
            <th>Email</th>
            <th>PIC</th>
            <th>Koordinat</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.uuid}>
              <td>{index + 1}</td>
              <td>{customer.komer}</td>
              <td>{customer.namer}</td>
              <td>{customer.alamer}</td>
              <td>{customer.provinsi}</td>
              <td>{customer.kota}</td>
              <td>{customer.kecamatan}</td>
              <td>{customer.telp}</td>
              <td>{customer.emailCus}</td>
              <td>{customer.pic}</td>
              <td>{customer.koordinat}</td>
              <td>{customer.user.name}</td>
              <td>
                <Link
                  to={`/customers/edit/${customer.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <a
                  onClick={() => deleteCustomer(customer.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;