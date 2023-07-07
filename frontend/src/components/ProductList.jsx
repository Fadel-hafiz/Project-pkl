import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  return (
    <div>
      <h1 className="title">Product</h1>
      <h2 className="subtitle">Tabel Tampilan Data Product</h2>
      <Link to="/products/add" className="button is-info mb-2">
        + Tambah Data Product
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Kode Produk</th>
            <th>Nama Produk</th>
            <th>Part Name</th>
            <th>Part Kode</th>
            <th>Aktivasi</th>
            <th>Keterangan</th>
            <th>Photo Produk</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.kodprod}</td>
              <td>{product.namprod}</td>
              <td>{product.partname}</td>
              <td>{product.partkode}</td>
              <td>{product.aktivasi}</td>
              <td>{product.keterangan}</td>
              <td>
                {product.photo}
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-100x100">
                      <img
                        src={
                          "http://localhost:5000/images/" + product.photo
                        }
                        alt="Images"
                      />
                    </figure>
                  </div>
                </div>
              </td>
              <td>{product.user.name}</td>
              <td>
                {/* <Link
                  to={`/products/edit/${product.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link> */}
                <a
                  onClick={() => deleteProduct(product.uuid)}
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

export default ProductList;