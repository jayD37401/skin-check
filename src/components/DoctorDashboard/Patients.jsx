import { useState, useEffect } from "react";
import Axios from "axios";

const STATUS_TO_COLOR = {
  Recovered: "bg-green-100 text-green-800 dark:text-green-400 border-green-400",
  "On Treatment": "bg-red-100 text-red-800 dark:text-red-400 border-red-400",
  "Awaiting Surgery":
    "bg-blue-100 text-blue-800 dark:text-blue-400 border-blue-400",
};

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [SignUpStatus, setSignUpStatus] = useState(""); 
  
    // e.preventDefault();
    console.log("in first step");
    Axios.post('http://localhost:3002/patients_fetch', {
      email: email,
      password: password,
    }).then((response) => {
  console.log("second step")
  
      if(response.data.message){
        console.log("no")
        console.log(response.data.message)
        setSignUpStatus(response.data.message);
      }
      
      else{
        console.log(response.data[1].email)
        console.log("yes");
      }})

  const patients = [
    {
      _id: 1,
      name: "Abaid Daud",
      diagnosis: "Influenza",
      status: "On Treatment",
      appointments: [{ date: "2023-05-30" }, { date: "2023-06-15" }],
    },
    {
      _id: 2,
      name: "Hassan Ali",
      diagnosis: "Influenza",
      status: "Recovered",
      appointments: [{ date: "2023-05-30" }, { date: "2023-06-15" }],
    },
    // Add more patient objects as needed
  ];    
  //and now dont make complexity in the replacement of hardcode data store the response.data in patient array 

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      patient.diagnosis.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  function updateSearchTerm(event) {
    setSearchTerm(event.target.value);
  }
  const [optionsVisible, setOptionsVisible] = useState(null);
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  function handleOptionsClick(patientId) {
    if (selectedPatientId === patientId) {
      setSelectedPatientId(null);
      setOptionsVisible(null);
    } else {
      setSelectedPatientId(patientId);
      setOptionsVisible(true);
    }
  }

  return (
    <section>
      <label htmlFor="table-search" className="sr-only">
        Search
      </label>
      <div className="relative ">
        <div className="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 "
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
          id="table-search"
          value={searchTerm}
          className="block p-2 pl-10 text-sm  text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for patient"
          onChange={updateSearchTerm}
        />
      </div>

      <div className="relative overflow-x-auto  mt-3 bg-white rounded-lg h-full shadow-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs bg-white border-b ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Diagnosis
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Last Appointment
              </th>
              <th scope="col" className="px-6 py-3">
                Next Appointment
              </th>
              <th scope="col" className="px-6 py-3">
                Options
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredPatients.map((patient) => (
              <tr
                className="bg-white "
                key={patient._id}
                data-testid="tableRow"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {patient.name}
                </th>
                <td className="px-6 py-4">{patient.diagnosis}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {patient.status && (
                    <span
                      className={`${
                        STATUS_TO_COLOR[patient.status]
                      }text-xs font-medium mr-2 px-2.5 py-0.5 rounded `}
                    >
                      {patient.status}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">{patient.appointments?.[0]?.date}</td>
                <td className="px-6 py-4">{patient.appointments?.[1]?.date}</td>
                <td className="px-6 py-4 relative">
                  <button
                    className="px-4 py-2 text-gray-500"
                    onClick={() => handleOptionsClick(patient._id)}
                  >
                    <i className="fa-solid fa-ellipsis" />
                  </button>
                  {optionsVisible && selectedPatientId === patient._id && (
                    <div
                      className="absolute left-0 -mt-2 -ml-10 z-20 flex flex-col
                     gap-1   bg-white p-2 rounded shadow"
                    >
                      <button
                        className="text-green-600 hover:text-green-800 p-1 hover:bg-green-100 mr-2"
                        onClick={() => console.log("Recover clicked")}
                      >
                        Recover
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800 p-1 hover:bg-red-100"
                        onClick={() => console.log("On Treatment clicked")}
                      >
                        On Treatment
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
