import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddSchedule = () => {
  const [nodok, setNodok] = useState("");
  const [taren, setTaren] = useState("");
  const [tadib, setTadib] = useState("");
  const [komer, setKomer] = useState("");
  const [kowil, setKowil] = useState("");
  const [supir, setSupir] = useState("");
  const [idken, setIdken] = useState("");
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState("");
  const [kobar, setKobar] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveSchedule = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/schedules", {
        nodok: nodok,
        taren: taren,
        tadib: tadib,
        komer: komer,
        kowil: kowil,
        supir: supir,
        idken: idken,
        product: product,
        qty: qty,
        kobar: kobar,
        keterangan: keterangan,
      });
      navigate("/schedules");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Schedules</h1>
      <h2 className="subtitle">Tambah Data Schedule</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveSchedule}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nomor Dokumen</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={nodok}
                    onChange={(e) => setNodok(e.target.value)}
                    placeholder="Nomor Dokumen"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Rencana</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={taren}
                    onChange={(e) => setTaren(e.target.value)}
                    placeholder="Tanggal Rencana"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Tanggal Dibuat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={tadib}
                    onChange={(e) => setTadib(e.target.value)}
                    placeholder="Tanggal Rencana"
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
                <label className="label">Kode Wilayah</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kowil}
                    onChange={(e) => setKowil(e.target.value)}
                    placeholder="Kode Wilayah"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Supir</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={supir}
                    onChange={(e) => setSupir(e.target.value)}
                    placeholder="Supir"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">iD Kendaraan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={idken}
                    onChange={(e) => setIdken(e.target.value)}
                    placeholder="ID Kendaraan"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Product</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    placeholder="Product"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">QTY/Quantity</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    placeholder="Qty/Quantity"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Kode Barcode</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={kobar}
                    onChange={(e) => setKobar(e.target.value)}
                    placeholder="Kode Barcode"
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

export default FormAddSchedule;