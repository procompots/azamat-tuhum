import React from "react";
import "../table/table.css";
import database from "../../db";
function Table() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {database.map((item) => (
            <tr>
              <td>{item.customer_name}</td>
              <td>{item.Company}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.Email}</td>
              <td>{item.Country}</td>
              <button className={item.Status}>{item.Status}</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
