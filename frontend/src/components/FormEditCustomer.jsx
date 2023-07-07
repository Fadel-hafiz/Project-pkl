import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditCustomer = () => {
  const [komer, setKomer] = useState("");
  const [namer, setNamer] = useState("");
  const [alamer, setAlamer] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kota, setKota] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [telp, setTelp] = useState("");
  const [emailCus, setEmailcus] = useState("");
  const [pic, setPic] = useState("");
  const [koordinat, setKoordinat] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getCustomerById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/customers/${id}`
        );
        setKomer(response.data.komer);
        setNamer(response.data.namer);
        setAlamer(response.data.alamer);
        setProvinsi(response.data.provinsi);
        setKota(response.data.kota);
        setKecamatan(response.data.kecamatan);
        setTelp(response.data.telp);
        setEmailcus(response.data.emailCus);
        setPic(response.data.pic);
        setKoordinat(response.data.koordinat);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getCustomerById();
  }, [id]);

  const updateCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/customers/${id}`, {
        komer: komer,
        namer: namer,
        alamer: alamer,
        provinsi: provinsi,
        kota: kota,
        kecamatan: kecamatan,
        telp: telp,
        emailCus: emailCus,
        pic: pic,
        koordinat: koordinat,
      });
      navigate("/customers");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Customer</h1>
      <h2 className="subtitle">Edit Customer</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateCustomer}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Kode Customer</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={komer}
                    onChange={(e) => setKomer(e.target.value)}
                    placeholder="Customer Code"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nama Customer</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namer}
                    onChange={(e) => setNamer(e.target.value)}
                    placeholder="Customer Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Alamat Customer</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={alamer}
                    onChange={(e) => setAlamer(e.target.value)}
                    placeholder="Alamat Customer"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Provinsi</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={provinsi}
                    onChange={(e) => setProvinsi(e.target.value)}
                    placeholder="Masukan Provinsi"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Kota/Kabupaten</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kota}
                    onChange={(e) => setKota(e.target.value)}
                    placeholder="Masukan Kota/Kabupaten"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Kecamatan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kecamatan}
                    onChange={(e) => setKecamatan(e.target.value)}
                    placeholder="Masukan Kecamatan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Telepon</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={telp}
                    onChange={(e) => setTelp(e.target.value)}
                    placeholder="Masukan Nomor Telepon"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={emailCus}
                    onChange={(e) => setEmailcus(e.target.value)}
                    placeholder="Masukan Alamat Email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">PIC</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={pic}
                    onChange={(e) => setPic(e.target.value)}
                    placeholder="Masukan Nama PIC"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Koordinat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={koordinat}
                    onChange={(e) => setKoordinat(e.target.value)}
                    placeholder="Titik koordinat"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
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

export default FormEditCustomer;