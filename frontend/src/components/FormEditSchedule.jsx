import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditSchedule = () => {
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
  const { id } = useParams();

  useEffect(() => {
    const getScheduleById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/schedules/${id}`
        );
        setNodok(response.data.nodok);
        setTaren(response.data.taren);
        setTadib(response.data.tadib);
        setKomer(response.data.komer);
        setKowil(response.data.kowil);
        setSupir(response.data.supir);
        setIdken(response.data.idken);
        setProduct(response.data.product);
        setQty(response.data.qty);
        setKobar(response.data.kobar);
        setKeterangan(response.data.keterangan);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getScheduleById();
  }, [id]);

  const updateSchedule = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/schedules/${id}`, {
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
      <h2 className="subtitle">Edit Data Schedule</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateSchedule}>
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
                    placeholder="Tanggal Dibuat"
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
                <label className="label">Kode WIlayah</label>
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
                <label className="label">ID Kendaraan</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={idken}
                    onChange={(e) => setIdken(e.target.value)}
                    placeholder="Idken"
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
                    placeholder="QTY/Quantity"
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

export default FormEditSchedule;