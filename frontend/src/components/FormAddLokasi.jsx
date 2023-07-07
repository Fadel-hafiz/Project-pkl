import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddLokasi = () => {
  const [komat, setKomat] = useState("");
  const [komer, setKomer] = useState("");
  const [alamat, setAlamat] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [aktivasi, setAktivasi] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveLokasi = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/lokasis", {
        komat: komat,
        komer: komer,
        alamat: alamat,
        keterangan: keterangan,
        aktivasi: aktivasi
      });
      navigate("/lokasis");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Lokasi</h1>
      <h2 className="subtitle">Tambah Data Lokasi</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveLokasi}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Kode Alamat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={komat}
                    onChange={(e) => setKomat(e.target.value)}
                    placeholder="Kode Alamat"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Kode Customer</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={komer}
                    onChange={(e) => setKomer(e.target.value)}
                    placeholder="Kode Customer"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Alamat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Alamat"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Keterangan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={keterangan}
                    onChange={(e) => setKeterangan(e.target.value)}
                    placeholder="Keterangan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Aktivasi</label>
                <div className="control">
                  <input
                    type="radio"
                    name="aktivasi"
                    value="yes"
                    onChange={(e) => setAktivasi(e.target.value)}
                  />Yes
                </div>
              </div>
              <div className="control">
                  <input
                    type="radio"
                    name="aktivasi"
                    value="no"
                    onChange={(e) => setAktivasi(e.target.value)}
                  />No
                </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddLokasi;