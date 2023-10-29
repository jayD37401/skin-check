import React from "react";
import Axios  from "axios";
import { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("");
  const [session_username, setSesssion_username] = useState("");
  const [session_dob, setSesssion_dob] = useState("");
  const [session_email, setSesssion_email] = useState("");
  const [curr_pass, setCurrPass] = useState("");
  const [new_pass, setNewPass] = useState("");


  const ChangePass = (e) =>{
    e.preventDefault();
    console.log("in first step");
    Axios.post('http://localhost:3001/ChangePass', {

      passNew: new_pass,
      
    }).then((response) => {
  console.log("second step login")
  
      if(response.data.message){
        
  
      }
      
      else{
        
        // props.setShowPatientLogin(false);
  
      }
    })
  }





  Axios.post('http://localhost:3001/fetch_patient_details', {
  
}).then((response) => {
console.log("second step login")

  if(response.data.message){
    console.log(response.data.message)


  }
  
  else{
    // props.setShowPatientLogin(false);

    setSesssion_email(response.data[0].or_email)
    setCurrPass(response.data[0].password)
    console.log(response.data[0].email)
    console.log(response.data[0].dob)
    console.log(response.data[0].address)


    console.log(session_username)
  }
})
  return (
    <div className="col-span-8 overflow-hidden rounded-xl bg-white px-8 py-4 shadow-lg h-full">
      <div className="">
        <h1 className="py-2 text-2xl font-semibold">Account settings</h1>
      </div>
      <hr className="mt-4 mb-6" />
      <p className="py-2 text-xl font-semibold">Email Address</p>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <p className="text-gray-600">
          Your email address is <strong>{session_email}</strong>
        </p>
        <button className="inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
          Change
        </button>
      </div>
      <hr className="mt-2 mb-8" />
      <p className="py-2 text-xl font-semibold">Password</p>
      <div className="flex items-center">
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-3">
          <label htmlFor="current-password">
            <span className="text-sm text-gray-500">Current Password</span>
            
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                id="current-password"
                value={curr_pass}
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="***********"
              />
            </div>
          </label>
          <label htmlFor="new-password">
            <span className="text-sm text-gray-500">New Password</span>
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                onChange={(e) => {setNewPass(e.target.value)}}
                id="new-password"
                className="w-full flex-shrink appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="***********"
              />
            </div>
          </label>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mt-5 ml-2 h-6 w-6 cursor-pointer text-sm font-semibold text-gray-600 underline decoration-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
          />
        </svg>
      </div>

      <button
      onClick={ChangePass}
      className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">
      
        Save Password
      </button>
      <hr className="mt-4 mb-8" />
    </div>
  );
};

export default Settings;
