import React from "react";
import "./SnapshotCss.css";

function SnapshotTable({ data }) {
  return (
    <div>
      <div>
        <table>
          <tbody>
            {data.map((value, i) => {
              return (
                <tr key={i} className="imgdisplay">
                  <td>
                    <div className="card" style={{  }}>
                      <img className="card-img-top" src={value.urls.regular} w />
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
