import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    getSchedules();
  }, []);

  const getSchedules = async () => {
    const response = await axios.get("http://localhost:5000/schedules");
    setSchedules(response.data);
  };

  const deleteSchedule = async (scheduleId) => {
    await axios.delete(`http://localhost:5000/schedules/${scheduleId}`);
    getSchedules();
  };

  return (
    <div>
      <h1 className="title">Schedules</h1>
      <h2 className="subtitle">List of Schedules</h2>
      <Link to="/schedules/add" className="button is-primary mb-2">
        + Tambah Data Schedule
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nomor Dokumen</th>
            <th>Tanggal Rencana</th>
            <th>Tanggal Dibuat</th>
            <th>Kode Customer</th>
            <th>Kode Wilayah</th>
            <th>Supir</th>
            <th>ID Kendaraan</th>
            <th>Product</th>
            <th>QTY/Quantity</th>
            <th>Kode Barcode</th>
            <th>Keterangan</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, index) => (
            <tr key={schedule.uuid}>
              <td>{index + 1}</td>
              <td>{schedule.nodok}</td>
              <td>{schedule.taren}</td>
              <td>{schedule.tadib}</td>
              <td>{schedule.komer}</td>
              <td>{schedule.kowil}</td>
              <td>{schedule.supir}</td>
              <td>{schedule.idken}</td>
              <td>{schedule.product}</td>
              <td>{schedule.qty}</td>
              <td>{schedule.kobar}</td>
              <td>{schedule.keterangan}</td>
              <td>{schedule.user.name}</td>
              <td>
                <Link
                  to={`/schedules/edit/${schedule.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <a
                  onClick={() => deleteSchedule(schedule.uuid)}
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

export default ScheduleList;