import React from "react";
import "./SnapshotCss.css";

function SnapshotTable({ data }) {
  return (
    <div>
      <div>
       
            {data.map((value, i) => {
              return (
                <tr key={i} className="imgdisplay">
                  <td>
                    <div className="card" style={{ width: "18rem" }}>
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
