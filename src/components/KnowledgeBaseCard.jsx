/** @format */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFolderMinus,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export function KnowledgeBaseCard() {
  return (
    <>
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="py-4  px-3 bg-primary bg-opacity-10 rounded-3 d-flex justify-content-between align-items-center border border-primary border-opacity-10">
            <div className="text-primary d-flex align-items-center small fw-semibold">
              {" "}
              <FontAwesomeIcon
                icon={faFolderMinus}
                className="text-primary fs-2 pe-2"
              />
              Total Orders
            </div>
            <FontAwesomeIcon icon={faChevronRight} className="text-dark" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="py-4 px-3 bg-danger bg-opacity-10 rounded-3 d-flex justify-content-between align-items-center border border-danger border-opacity-10">
            <span className="text-danger small d-flex align-items-center fw-semibold">
              <FontAwesomeIcon
                icon={faFolderMinus}
                className="text-danger fs-2 pe-2"
              />
              Total Earnings
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="text-dark" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="py-4 px-3 bg-warning bg-opacity-10 rounded-3 d-flex justify-content-between align-items-center border border-warning border-opacity-10">
            <span className="text-warning d-flex align-items-center small fw-semibold">
              <FontAwesomeIcon
                icon={faFolderMinus}
                className="text-warning fs-2 pe-2"
              />
              Profit
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="text-dark" />
          </div>
        </div>
      </div>
    </>
  );
}
