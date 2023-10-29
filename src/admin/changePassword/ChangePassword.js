import React from "react";

const ChangePassword = () => {
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [successMessage, setSuccessMessage] = useState("");
  //   const handlePasswordChange = () => {
  //     // Handle password change logic here
  //     if (password === confirmPassword) {
  //       // Passwords match, update password
  //       // Example logic: Call an API to update the password
  //       setSuccessMessage("Password updated successfully.");
  //       setPassword("");
  //       setConfirmPassword("");
  //       setPasswordError("");
  //     } else {
  //       setPasswordError("Passwords do not match.");
  //     }
  //   };
  return (
    <div className="col-span-8 overflow-hidden rounded-lg bg-white px-5 py-3 shadow-lg h-full">
      <p className="py-2 text-xl mb-4 font-semibold">Change Password</p>

      <div className="flex flex-col space-y-4 items-start p-1">
        <div>
          <label htmlFor="current-password">
            <span className="text-sm text-gray-500">Current Password</span>
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="password"
                id="current-password"
                className=" flex-shrink lg:w-80 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="***********"
              />
            </div>
          </label>
        </div>

        <div>
          <label htmlFor="new-password">
            <span className="text-sm text-gray-500">New Password</span>
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="password"
                id="new-password"
                className=" flex-shrink lg:w-80 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="***********"
              />
            </div>
          </label>
        </div>

        <div>
          <label htmlFor="confirm-password">
            <span className="text-sm text-gray-500">Confirm New Password</span>
            <div className="relative flex overflow-hidden rounded-md border-2 transition focus-within:border-blue-600">
              <input
                type="password"
                id="confirm-password"
                className=" flex-shrink lg:w-80 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                placeholder="***********"
              />
            </div>
          </label>
        </div>
      </div>

      <button className="mt-6 rounded-lg ml-1 bg-blue-600 px-4 py-2 text-white">
        Save Password
      </button>
      <hr className="mt-4 mb-8" />
    </div>
  );
};

export default ChangePassword;
