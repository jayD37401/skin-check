import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faCog,
  faFile,
  faSignOutAlt,
  faMessage,
  faDashboard,
  faUserMd,
  faUsers,
  faStar,
  faCreditCard,
  faChartLine,
  faLock,
  faUserPlus,
  faUserTimes,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setActiveOption, activeOption }) => {
  function getClass(value) {
    if (value === activeOption) {
      return "text-indigo-600 font-bold bg-blue-200";
    }
    return "text-gray-500";
  }

  function updateSelected(selected) {
    setActiveOption(selected);
  }

  return (
    <div className="flex flex-col h-full bg-white shadow-xl rounded-md overflow-y-auto">
      <div className="py-4 px-6 bg-primary-dark text-white font-bold rounded-t-md shadow-lg">
        Admin Panel
      </div>
      <div className="flex-grow px-6 pt-4">
        <ul className="space-y-3">
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "dashboard"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("dashboard")}
            >
              <FontAwesomeIcon
                icon={faDashboard}
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "dashboard"
                )} transition duration-75 group-hover:text-gray-500`}
              />
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "appointments"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("appointments")}
            >
              <FontAwesomeIcon
                icon={faCalendar}
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "appointments"
                )} transition duration-75 group-hover:text-gray-500`}
              />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Appointments
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "doctors"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("doctors")}
            >
              <FontAwesomeIcon
                icon={faUserMd}
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "doctors"
                )} transition duration-75 group-hover:text-gray-500`}
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Doctors</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "patients"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("patients")}
            >
              <FontAwesomeIcon
                icon={faUsers}
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "patients"
                )} transition duration-75 group-hover:text-gray-500`}
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Patients</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "reviews"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("reviews")}
            >
              <FontAwesomeIcon
                icon={faStar}
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "reviews"
                )} transition duration-75 group-hover:text-gray-500`}
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Reviews</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "transactions"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("transactions")}
            >
              <FontAwesomeIcon
                icon={faCreditCard}
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "transactions"
                )} transition duration-75 group-hover:text-gray-500`}
              />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Transactions
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "reports"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("reports")}
            >
              <FontAwesomeIcon
                icon={faChartLine}
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "reports"
                )} transition duration-75 group-hover:text-gray-500`}
              />
              <span className="flex-1 ml-3 whitespace-nowrap">Reports</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "profileSettings"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("profileSettings")}
            >
              <FontAwesomeIcon
                icon={faUser}
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "profileSettings"
                )} transition duration-75 group-hover:text-gray-500`}
              />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Profile Settings
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "changePassword"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("changePassword")}
            >
              <FontAwesomeIcon
                icon={faLock}
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "changePassword"
                )} transition duration-75 group-hover:text-gray-500`}
              />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Change Password
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "doctorAuthentication"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("doctorAuthentication")}
            >
              <FontAwesomeIcon
                icon={faUserTimes}
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "doctorAuthentication"
                )} transition duration-75 group-hover:text-gray-500`}
              />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Doctor Authentication
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "addHealthBlog"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("addHealthBlog")}
            >
              <FontAwesomeIcon
                icon={faBlog}
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "addHealthBlog"
                )} transition duration-75 group-hover:text-gray-500`}
              />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Add Health Blog
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
