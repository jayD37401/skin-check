import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faUser,
  faCog,
  faFile,
  faBookMedical,
  faSignOutAlt,
  faMessage,
  faMoneyBill,
  faDisease,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setActiveOption, activeOption }) => {
  const options = [
    { label: "Profile", value: "profile", icon: faUser },
    { label: "Appointments", value: "appointments", icon: faCalendar },
    { label: "Settings", value: "settings", icon: faCog },
    { label: "Medical Records", value: "medical-records", icon: faBookMedical },
    { label: "SkinCheckAI", value: "skincheckai", icon: faDisease },
    { label: "Messages", value: "messages", icon: faMessage },
    { label: "Billing", value: "billing", icon: faMoneyBill },
    { label: "Logout", value: "logout", icon: faSignOutAlt },
  ];

  return (
    <div className="flex flex-col h-full bg-white shadow-xl rounded-md ">
      <div className="py-4 px-6 bg-primary-dark text-white font-bold rounded-t-md shadow-lg">
        Patient Dashboard
      </div>
      <div className="flex-grow px-6 pt-6">
        <ul className="space-y-4">
          {options.map((option) => (
            <li
              key={option.value}
              style={{
                background: option.value === activeOption ? "lightblue" : "",
              }}
              className="cursor-pointer px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={() => setActiveOption(option.value)}
            >
              <FontAwesomeIcon
                color={option.value === activeOption ? "blue" : "gray"}
                icon={option.icon}
                className="mr-3 "
              />
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
