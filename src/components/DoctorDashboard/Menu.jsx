import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faCog,
  faFile,
  faBookMedical,
  faSignOutAlt,
  faMessage,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";

const Menu = ({ setActiveOption, activeOption }) => {
  function getClass(value) {
    if (value === activeOption) {
      return "text-indigo-600 font-bold bg-blue-200";
    }
    return "text-gray-500";
  }

function go_to_video_call(){
  navigate("../videohome")
}

  function updateSelected(selected) {
    setActiveOption(selected);
  }
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-white shadow-xl rounded-md overflow-y-auto ">
      <div className="py-4 px-6 bg-primary-dark text-white font-bold rounded-t-md shadow-lg">
        Doctor Dashboard
      </div>
      <div className="flex-grow px-6 pt-4">
        <ul className="space-y-3">
          <li>
            <span
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "dashboard"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("dashboard")}
            >
              <svg
                aria-hidden="true"
                className={`flex-shrink-0 w-6 h-6 text-gray-500 ${getClass(
                  "dashboard"
                )} transition duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-white`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </span>
          </li>
          <li>
            <span
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "patients"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("patients")}
            >
              <svg
                aria-hidden="true"
                className={`flex-shrink-0 w-6 h-6 text-gray-500 transition ${getClass(
                  "patients"
                )}  duration-75 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-white`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Patients</span>
            </span>
          </li>
          <li>
            <span
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "messages"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("messages")}
            >
              <i className="fas fa-envelope ml-1" />
              <span className="flex-1 ml-3 whitespace-nowrap">Messages</span>
            </span>
          </li>
          <li>
            <span
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "skincheckai"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("skincheckai")}
            >
              <i className="fas fa-disease ml-1" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                SkinCheck AI
              </span>
            </span>
          </li>
          <li>
            <span
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "tasks"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("tasks")}
            >
              <i className="fas fa-tasks ml-1" />
              <span className="flex-1 ml-3 whitespace-nowrap">Schedule</span>
              {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                3
              </span> */}
            </span>
          </li>
          {/* <li>
            <span
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "tasks"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("schedule")}
            >
              <i className="fas fa-calendar ml-1" />
              <span className="flex-1 ml-3 whitespace-nowrap">Schedule</span>
            </span>
          </li> */}
          <li>
            <span
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "profile"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("profile")}
            >
              <i className="far fa-user ml-1" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Profile Settings
              </span>
            </span>
          </li>
          <li>
            <span
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "changePassword"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("changePassword")}
            >
              <i className="fa fa-lock ml-1" />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Change Password
              </span>
            </span>
          </li>
          <li>
            <span
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "withdraw"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("withdraw")}
            >
              <i className="fa fa-dollar-sign ml-1 " />
              <span
              onClick={() => go_to_video_call() }
              
              className="flex-1 ml-3 whitespace-nowrap">
              Video Consultation

              </span>
            </span>
          </li>
          <li>
            <span
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "withdraw"
              )} rounded-lg hover:bg-gray-100`}
            >
              <i className="fa fa-dollar-sign ml-1 " />
              <span 
              className="flex-1 ml-3 whitespace-nowrap">
                Withdraw Funds


              </span>
            </span>
          </li>
          <li>
            <span
              href="#"
              className={`flex items-center p-2 text-base font-normal ${getClass(
                "logout"
              )} rounded-lg hover:bg-gray-100`}
              onClick={() => updateSelected("logout")}
            >
              <i className="fa fa-sign-out   ml-1" />
              <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
