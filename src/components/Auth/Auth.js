import React, { useState } from "react";
import loginimg from "../../assets/loginImg.avif";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';


const CloseButton = ({ onClose }) => (
  <button
    className="absolute -top-4  text-gray-500 hover:text-gray-700"
    onClick={onClose}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M3.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-6.293 6.293a1 1 0 001.414 1.414L10 11.414l6.293 6.293a1 1 0 001.414-1.414L11.414 10l6.293-6.293a1 1 0 00-1.414-1.414L10 8.586 3.707 2.293z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);


const LoginPat = (props) => {
  const navigate = useNavigate();
  const handleClose = () => {
    props.setShowPatientLogin(false);
    props.setSelectLogin(false);
  };
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [SignUpStatus, setSignUpStatus] = useState(""); 


 
const login = (e) =>{
  e.preventDefault();
  console.log("in first step");
  Axios.post('http://localhost:3001/login', {
    email: email,
    password: password,
    
  }).then((response) => {
console.log("second step login")

    if(response.data.message){
      setLoginStatus(response.data.message);


    }
    
    else{
      props.setShowPatientLogin(false);
      props.setSelectLogin(false);

      navigate("patient");
      setLoginStatus(response.data[0].email);
    }
  })
}

  return (
    <div className="flex min-h-full flex-col relative justify-center max-h-[85vh] px-4 py-6 lg:px-6">
      <div className=" absolute top-0 right-0">
        <CloseButton onClose={handleClose} />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-28 rounded-full w-auto"
          src={loginimg}
          alt="SkinCheck AI"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to your <span className=" capitalize">Patient</span> account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                onChange={(e) => {setEmail(e.target.value)}}
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => {setPassword(e.target.value)}}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <h1 style={{color:'red',fontSize: '15px', textAligh: 'center', marginTop: '20px'}}>{loginStatus}</h1>
            <button
              // onClick={props.userType == "doctor" ? navigate("doctor") : ""}
              onClick={login}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            onClick={() => {
              props.setShowPatientLogin(false);
              props.setShowPatientSignup(true);
            }}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
};

const LoginDoc = (props) => {
  const navigate = useNavigate();
  const handleClose = () => {
    props.setShowDoctorLogin(false);
    props.setSelectLogin(false);
  };

  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [SignUpStatus, setSignUpStatus] = useState(""); 

  const d_login = (e) =>{
    e.preventDefault();
    console.log("in first step");
    Axios.post('http://localhost:3001/d_login', {
      email: email,
      password: password,
    }).then((response) => {
  console.log("second step login")
  
      if(response.data.message){
        setLoginStatus(response.data.message);
        
  
      }
      
      else{
        
        // props.setShowPatientLogin(false);
        props.setSelectLogin(false);
  
        navigate("doctor");
        setLoginStatus(response.data[0].email);
      }
    })
  }
  
  return (
    <div className="flex min-h-full relative flex-col justify-center max-h-[85vh] px-4 py-6 lg:px-6">
      <div className=" absolute top-0 right-0">
        <CloseButton onClose={handleClose} />
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-28 rounded-full w-auto"
          src={loginimg}
          alt="SkinCheck AI"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login to your <span className=" capitalize">doctor</span> account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                onChange={(e) => {setEmail(e.target.value)}}
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                onChange={(e) => {setPassword(e.target.value)}}
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
          <h1 style={{color:'red',fontSize: '15px', textAligh: 'center', marginTop: '20px'}}>{loginStatus}</h1>

            <button
              // onClick={props.userType == "doctor" ? navigate("doctor") : ""}
              onClick={d_login}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            SignUp
          </a>
        </p>
      </div>
    </div>
  );
};

const SignupPat = (props) => {
  const handleClose = () => {
    props.setShowPatientSignup(false);
    props.setSelectSignup(false);
  };

  const [email, setEmail] = useState("");
const [password , setPassword] = useState("");
const [confirm_password , setconfirm_Password] = useState("");

const [loginStatus, setLoginStatus] = useState("");
const [SignUpStatus, setSignUpStatus] = useState(""); 



const register = (e) =>{
  e.preventDefault();
  console.log("in first step");
  Axios.post('http://localhost:3001/register', {
    email: email,
    password: password,
    confirm: confirm_password,
  }).then((response) => {
console.log("second step")

    if(response.data.message){
      console.log("no")

      setSignUpStatus(response.data.message);
    }
    
    else{
      console.log("yes")
      setSignUpStatus("Account created successfully")
    }
  })
}


  return (
    <div className="flex min-h-full flex-col justify-center relative px-4 py-4 lg:px-6 max-h-[85vh]">
      <div className=" absolute top-0 right-0">
        <CloseButton onClose={handleClose} />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-28 rounded-full w-auto"
          src={loginimg}
          alt="SkinCheck AI"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up for your <span className=" capitalize">Patient</span> Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                onChange={(e) => {setEmail(e.target.value)}}
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={(e) => {setPassword(e.target.value)}}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirmPassword"
                onChange={(e) => {setconfirm_Password(e.target.value)}}

                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
          <h1 style={{color:'red',fontSize: '15px', textAligh: 'center', marginTop: '20px'}}>{SignUpStatus}</h1>
            <button
              type="submit"
              onClick={register}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <a
            onClick={() => {
              props.setShowPatientSignup(false);
              props.setShowPatientLogin(true);
            }}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

const SignupDoc = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClose = () => {
    props.setShowDoctorSignup(false);
    props.setSelectSignup(false);
  };


const [email, setEmail] = useState("");
const [password , setPassword] = useState("");
const [confirm_password , setConformPassword] = useState("");

const [contact, setContact] = useState("");
const [name, setName] = useState("");
const [specialization, setSpecialization] = useState("");
const [gender, setGender] = useState("");





const [loginStatus, setLoginStatus] = useState("");
const [SignUpStatus, setSignUpStatus] = useState(""); 


const d_register = (e) =>{
  e.preventDefault();
  console.log("in first step");
  Axios.post('http://localhost:3001/d_register', {

    email: email,
    specialization: specialization,
    contact: contact,
    gender: gender,
    password: password,
    confirm : confirm_password,
    name : name,
    



  }).then((response) => {
console.log("second step")

    if(response.data.message){
      console.log("no")

      setSignUpStatus(response.data.message);
    }
    
    else{
      console.log("yes")
      setSignUpStatus("Account created successfully")
    }
  })
}

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here

    // Display the popup message
    setShowPopup(true);
  };
  return (
    <div className="grid min-h-full justify-center box-content relative  px-4 py-4 lg:px-6 max-h-[82vh] overflow-y-auto">
      <div className=" absolute top-4 right-5">
        <CloseButton onClose={handleClose} />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
        <img
          className="mx-auto mb-4 h-28 rounded-full w-auto"
          src={loginimg}
          alt="SkinCheck AI"
        />
        <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign Up for your <span className="capitalize">Doctor</span> Account
        </h2>
      </div>

      <div className="pt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                onChange={(e) => {setEmail(e.target.value)}}
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                onChange={(e) => {setName(e.target.value)}}
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Contact
            </label>
            <div className="mt-2">
              <input
                id="contact"
                name="contact"
                onChange={(e) => {setContact(e.target.value)}}
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="specialization"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Specialization in Dermatology
            </label>
            <div className="mt-2">
              <select
                id="specialization"
                name="specialization"
                onChange={(e) => {setSpecialization(e.target.value)}}
                required
                className="block w-full px-1 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select specialization</option>
                <option value="General Dermatology">General Dermatology</option>
                <option value="Cosmetic Dermatology">Cosmetic Dermatology</option>
                <option value="Surgical Dermatology">Surgical Dermatology</option>
                <option value="Pediatric Dermatology">Pediatric Dermatology</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Gender
            </label>
            <div className="mt-2">
              <select
                id="gender"
                name="gender"
                onChange={(e) => {setGender(e.target.value)}}
                required
                className="block w-full px-1 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                onChange={(e) => {setPassword(e.target.value)}}
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirmpassword"
                name="confirmpassword"
                onChange={(e) => {setConformPassword(e.target.value)}}
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
          <h1 style={{color:'red',fontSize: '15px', textAligh: 'center', marginTop: '20px'}}>{SignUpStatus}</h1>

            <button
            onClick={d_register}
             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <a
            onClick={() => {
              props.setShowDoctorSignup(false);
              props.setShowDoctorLogin(true);
            }}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
          >
            Login
          </a>
        </p>
      </div>
      {/* Popup message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center  bg-gray-300 ">
          <div className="bg-white border-2 p-8 flex flex-col items-center rounded-lg shadow-lg opacity-100 ">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Verification Link Sent
            </p>
            <p className="text-gray-700 mb-4">
              A verification link has been sent to your email address. Please
              verify your account before logging in.
            </p>
            <div className="flex justify-center bg-blue-100 border rounded-md border-blue-500">
              <button
                className="text-gray-600 p-2  hover:text-gray-800"
                onClick={() => {
                  setShowPopup(false);
                  props.setShowDoctorSignup(false);
                  props.setShowDoctorLogin(true);
                }}
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export { LoginPat, SignupPat, LoginDoc, SignupDoc };
