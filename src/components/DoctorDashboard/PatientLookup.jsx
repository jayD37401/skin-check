import { useState } from "react";
import PatientPhoto from "./PatientPhoto";

// Static data representing patients
const staticPatients = [
  {
    _id: "1",
    name: "Hassan Ali",
    // Add other properties as needed
  },
  {
    _id: "2",
    name: "Abaid Daud",
    // Add other properties as needed
  },
  // Add other patients as needed
];

export default function PatientLookup(props) {
  const [patients, setPatients] = useState(staticPatients);
  const [value, setValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [keepOpen, setKeepOpen] = useState(false);

  const filteredPatients =
    patients?.filter((patient) =>
      patient.name.toLowerCase().includes(value.trim().toLowerCase())
    ) ?? [];

  function handleChange(event) {
    setValue(event.target.value);
  }

  function selectPatient(selected) {
    props.onSelect(selected);
    setValue(selected.name);
    setKeepOpen(false);
    setShowDropdown(false);
  }

  function handleBlur() {
    if (!keepOpen) {
      setShowDropdown(false);
    }
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id={props.id}
        value={value}
        className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
        onFocus={() => setShowDropdown(true)}
        onBlur={handleBlur}
        onChange={handleChange}
        data-testid="input"
      />
      {filteredPatients.length > 0 && (
        <div
          className={`absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700 overflow-y-auto ${
            showDropdown ? "" : "hidden"
          }`}
          onMouseOver={() => setKeepOpen(true)}
          onMouseLeave={() => setKeepOpen(false)}
          data-testid="dropdown"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {filteredPatients.map((patient) => (
              <li key={patient._id}>
                <button
                  type="button"
                  className="inline-flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => selectPatient(patient)}
                  data-testid="dropdownOption"
                >
                  <PatientPhoto {...patient} />
                  <span className="ml-2">{patient.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
