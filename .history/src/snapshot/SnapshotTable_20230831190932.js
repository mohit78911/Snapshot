import React from "react";
import "../App.css";

function SnapshotTable({ data }) {
  return (
    <div>
      <div>
        <table>
          <tbody>
            {data.map((value, i) => {
              return (
                <tr key={i} style={{display: "inline-flex";
                  padding: 5px;
                  margin-left:auto;
                  margin-right: auto;}}>
                  <td>
                    <div className="card" style={{ width: "20rem" }}>
                      <img className="card-img-top" src={value.urls.regular} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SnapshotTable;
