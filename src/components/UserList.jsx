/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faThLarge,
  faClipboardList,
  faCar,
  faUsers,
  faUserCheck,
  faClock,
  faMapMarkerAlt,
  faShieldAlt,
  faSlidersH,
  faSignOutAlt,
  faChevronRight,
  faChevronLeft,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useData } from "../Context/Datacontext";

export function UserList(params) {
  const { tableData } = useData();
  return (
    <>
      <div className="bg-white rounded-4  shadow-sm  overflow-hidden mt-4 ms-4">
        <div className="table-responsive">
          <table
            className="table align-middle py-4 text-secondary"
            style={{ fontSize: "0.8rem" }}>
            <thead className="  fw-semibold">
              <tr className="">
                <th className="ps-3" style={{ width: "40px" }}>
                  <input type="checkbox " className="form-check-input" />
                </th>
                <th className="col-faint">User</th>
                <th className="col-faint">Car Comfort</th>
                <th className="col-faint">Ordered Time</th>
                <th className="col-faint">Start Location</th>
                <th className="col-faint">Finish Location</th>
                <th className="pe-3 text-end col-faint">Income</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className="borderNone">
                  <td className="ps-3">
                    <input type="checkbox" className="form-check-input" />
                  </td>
                  <td>
                    <div className="d-flex align-items-center ">
                      <img
                        src={row?.imgUrl}
                        alt=""
                        className="bg-light mx-2 rounded-circle object-fit-cover"
                        style={{ width: "32px", height: "32px" }}
                      />
                      <div>
                        <strong
                          className="text-dark d-block"
                          style={{ fontSize: "0.78rem" }}>
                          {row.name}
                        </strong>
                        <span
                          className="text-muted"
                          style={{ fontSize: "0.68rem" }}>
                          {row.phone}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="badge text-dark text-capitalize px-2 py-1">
                      {row.comfort}
                    </span>
                  </td>
                  <td className="text-muted">{row.time}</td>
                  <td
                    className="text-truncate text-muted"
                    style={{ maxWidth: "180px" }}>
                    {row.start}
                  </td>
                  <td
                    className="text-truncate text-muted"
                    style={{ maxWidth: "180px" }}>
                    {row.finish}
                  </td>
                  <td className="pe-3 text-end fw-bold text-success">
                    <span className="badge bg-success bg-opacity-10 text-success">
                      {row.income}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="d-flex justify-content-end align-items-center p-3 border-top border-light gap-2">
          <span className="text-muted small">1-2 of items</span>
          <button className="btn btn-sm btn-light border p-1 rounded">
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ fontSize: "10px" }}
            />
          </button>
          <button className="btn btn-sm btn-primary py-0 px-2 rounded-2 small">
            1
          </button>
          <button className="btn btn-sm btn-light border py-0 px-2 rounded-2 small">
            2
          </button>
          <button className="btn btn-sm btn-light border p-1 rounded">
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "10px" }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
