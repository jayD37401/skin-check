import React, { useState } from "react";
import docImg from "../../../assets/book1.png";
import Axios  from "axios";



const PaitentProfile = () => {
  
  const [name, setName] = useState("");
  const [session_username, setSesssion_username] = useState("");
  const [session_dob, setSesssion_dob] = useState("");
  const [session_email, setSesssion_email] = useState("");

  const [session_address, setSesssion_address] = useState("");


  const [password , setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [SignUpStatus, setSignUpStatus] = useState(""); 
  const [or_email, setOr_mail] = useState("");
  const [addresss, serAdresss] = useState("");
  const [dateob, setDateob] = useState("");


  // const [password , setPassword] = useState("");
  // const [loginStatus, setLoginStatus] = useState("");
  // const [SignUpStatus, setSignUpStatus] = useState(""); 
  Axios.post('http://localhost:3001/fetch_patient_details', {
  
}).then((response) => {
console.log("second step login")

  if(response.data.message){
    setLoginStatus(response.data.message);
    console.log(response.data.message)


  }
  
  else{
    // props.setShowPatientLogin(false);
    // props.setSelectLogin(false);
    setSesssion_username(response.data[0].email);
    setSesssion_dob(response.data[0].dob);
    setSesssion_address(response.data[0].address);
    setSesssion_email(response.data[0].or_email)
    console.log(response.data[0].email)
    console.log(response.data[0].dob)
    console.log(response.data[0].address)


    console.log(session_username)
  }
})
  const [email, setEmail] = useState(session_username);

  const [address, setAddress] = useState("123 Main St, City");
  const [dob, setDOB] = useState("1980-01-01");
  const [profilePicture, setProfilePicture] = useState(docImg);
  

  

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const src = e.target.result;
      // Handle file upload logic here
      setProfilePicture(src);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  

  const register_add = (e) =>{
    e.preventDefault();
    console.log("in first step");
    Axios.post('http://localhost:3001/register_add', {
      email: or_email,
      address: addresss,
      dob: dateob,

    }).then((response) => {
  console.log("second step")
  
      if(response.data.message){
        console.log("no nai")
  
        setSignUpStatus(response.data.message);
      }
      
      else{
        console.log("yes ho gya abhi ka")
        setSignUpStatus("Account created successfully")
      }
    })
  }

var show_email = session_email;
var show_address = session_address;
var show_dob = session_dob;

  return (
    <div className="h-full bg-white overflow-y-auto p-4 pt-3 sm:pl-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">Profile - Welcome {session_username}</h2>
      <div className="max-w- p-2">
        <div className="mb-6">
          <div className="flex sm:flex-row flex-col  items-center gap-4">
            <img
              className="w-32 h-32 object-cover border border-cyan-400 rounded-full"
              src={profilePicture}
              alt="doctor image"
            />
            <div className="flex flex-col items-center">
              <label className="relative flex gap-2 items-center justify-center bg-cyan-500 hover:bg-cyan-700 text-white rounded-xl p-2 w-44 cursor-pointer">
                <i className="fa fa-upload"></i>
                Upload photo
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  className="absolute left-0 opacity-0 z-50 w-full cursor-pointer"
                  onChange={handleProfilePictureChange}
                />
              </label>
              <p className="text-sm text-gray-500">
                Accepted formats: PNG, GIF, JPEG
              </p>
            </div>
          </div>
        </div>
        <form>
        <div className="grid lg:grid-cols-2 gap-5 w-[80%]">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={session_username}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="text"
              onChange={(e) => setOr_mail(e.target.value)}

              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 w-[80%]">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              type="text"
              onChange={(e) => serAdresss(e.target.value)}              
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              onChange={(e) => setDateob(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
        </div>
        <button
          onClick={register_add}
          type="button"
          className="bg-cyan-500 hover:bg-cyan-700 w-44 text-white rounded p-2 mt-4"
        >
          Save Changes
        </button>
        </form>
      </div>
    </div>
  );
};

export default PaitentProfile;
