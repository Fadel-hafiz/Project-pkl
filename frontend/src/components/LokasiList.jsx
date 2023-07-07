import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LokasiList = () => {
  const [lokasis, setLokasis] = useState([]);

  useEffect(() => {
    getLokasis();
  }, []);

  const getLokasis = async () => {
    const response = await axios.get("http://localhost:5000/lokasis");
    setLokasis(response.data);
  };

  const deleteLokasi = async (lokasiId) => {
    await axios.delete(`http://localhost:5000/lokasis/${lokasiId}`);
    getLokasis();
  };

  return (
    <div>
      <h1 className="title">Lokasi</h1>
      <h2 className="subtitle">List of Lokasi</h2>
      <Link to="/lokasis/add" className="button is-primary mb-2">
        + Tambah Data Alamat/Lokasi
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Kode Alamat</th>
            <th>Kode Customer</th>
            <th>Alamat</th>
            <th>Keterangan</th>
            <th>Aktivasi</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lokasis.map((lokasi, index) => (
            <tr key={lokasi.uuid}>
              <td>{index + 1}</td>
              <td>{lokasi.komat}</td>
              <td>{lokasi.komer}</td>
              <td>{lokasi.alamat}</td>
              <td>{lokasi.keterangan}</td>
              <td>{lokasi.aktivasi}</td>
              <td>{lokasi.user.name}</td>
              <td>
                <Link
                  to={`/lokasis/edit/${lokasi.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <a
                  onClick={() => deleteLokasi(lokasi.uuid)}
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

export default LokasiList;