/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useData } from "../Context/Datacontext";

export function TopDiverslist() {
  const { topDrivers } = useData();
  return (
    <>
      <div className="col-lg-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="m-0 fw-bold text-dark" style={{ fontSize: "0.9rem" }}>
            Top Drivers
          </h6>
          <FontAwesomeIcon icon={faChevronRight} className="text-muted" />
        </div>
        <div className="d-flex flex-column gap-2">
          {topDrivers.map((driver, index) => (
            <div
              key={index}
              className="effect bg-white p-3 rounded-4 border border-light d-flex align-items-center justify-content-between shadow-sm">
              <div className="d-flex align-items-center gap-2 ">
                <img
                  src={driver?.Imgurl}
                  className="bg-light rounded-2"
                  style={{ width: "40px", height: "40px" }}
                />
                <div>
                  <p className="m-0 small fw-bold text-dark">{driver.name}</p>
                  <span
                    className="text-muted d-block"
                    style={{ fontSize: "0.7rem" }}>
                    {driver.phone}
                  </span>
                </div>
              </div>
              <div className="text-end" style={{ fontSize: "0.75rem" }}>
                <span className="text-muted d-block">
                  Orders: <strong className="text-dark">{driver.orders}</strong>
                </span>
                <span className="text-muted">
                  Income: <strong className="text-dark">{driver.income}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
