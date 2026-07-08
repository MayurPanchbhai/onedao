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

export function KnowledgeBaseCard() {
  return (
    <>
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="py-4 px-3 bg-primary bg-opacity-10 rounded-3 d-flex justify-content-between align-items-center border border-primary border-opacity-10">
            <span className="text-primary small fw-semibold">Total Orders</span>
            <FontAwesomeIcon icon={faChevronRight} className="text-primary" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="py-4 px-3 bg-danger bg-opacity-10 rounded-3 d-flex justify-content-between align-items-center border border-danger border-opacity-10">
            <span className="text-danger small fw-semibold">
              Total Earnings
            </span>
            <FontAwesomeIcon icon={faChevronRight} className="text-danger" />
          </div>
        </div>
        <div className="col-md-4">
          <div className="py-4 px-3 bg-warning bg-opacity-10 rounded-3 d-flex justify-content-between align-items-center border border-warning border-opacity-10">
            <span className="text-warning small fw-semibold">Profit %</span>
            <FontAwesomeIcon icon={faChevronRight} className="text-warning" />
          </div>
        </div>
      </div>
    </>
  );
}
