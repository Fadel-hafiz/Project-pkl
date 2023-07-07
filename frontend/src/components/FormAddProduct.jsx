import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddProduct = () => {
  const [kodprod, setKodprod] = useState("");
  const [namprod, setNamprod] = useState("");
  const [partname, setPartname] = useState("");
  const [partkode, setPartkode] = useState("");
  const [aktivasi, setAktivasi] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [photo, setFile] = useState("");
  const [msg, setMsg] = useState("");
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    try {
      let data = new FormData();
      data.append("kodprod", kodprod);
      data.append("namprod", namprod);
      data.append("partname", partname);
      data.append("partkode", partkode);
      data.append("aktivasi", aktivasi);
      data.append("keterangan", keterangan);
      data.append("photo", photo);

      await axios.post("http://localhost:5000/products", data);
      navigate("/products");
    } catch (error) {
      if (error.response) {
        // setMsg(error.response.data?.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Product</h1>
      <h2 className="subtitle">Tambah Data Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveProduct}>
              <p className="has-text-centered">{msg}</p>

              <div className="field">
                <label className="label">Kode Produk</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kodprod}
                    onChange={(e) => setKodprod(e.target.value)}
                    placeholder="Kode Product"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Nama Produk</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={namprod}
                    onChange={(e) => setNamprod(e.target.value)}
                    placeholder="Nama Produk"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Part Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={partname}
                    onChange={(e) => setPartname(e.target.value)}
                    placeholder="Part Name"
                  />
                </div>
              </div>

             <div className="field">
                <label className="label">Part Kode</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={partkode}
                    onChange={(e) => setPartkode(e.target.value)}
                    placeholder="Part Kode"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Aktivasi</label>
                <div className="left">
                  <div className="radio-button">
                  <input
                    type="radio"
                    name="aktivasi"
                    value="YES"
                    onChange={(e) => setAktivasi(e.target.value)}
                  />YES
                </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    name="aktivasi"
                    value="NO"
                    onChange={(e) => setAktivasi(e.target.value)}
                  />NO
                </div>
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
                <label className="label">Photo Produk</label>
                <div className="control">
                  <div className="file">
                    <div className="file-label">
                      <span className="file-cta">
                        <span className="file-label">
                          {"Choose File"}
                          <input
                            type="file"
                            className="file-input"
                            onChange={loadImage}
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {preview ? (
                <figure className="image is-128x128">
                  <img src={preview} alt="Preview Images" />
                </figure>
              ) : (
                ""
              )}


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

export default FormAddProduct;