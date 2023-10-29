import React, { useState } from "react";
import doctorImage from "../../assets/doctor.jpg";

function PaymentsList() {
  function getClass(value) {
    if (value === "Paid") {
      return "text-green-900 bg-green-200";
    } else if (value === "Pending") {
      return "text-yellow-900 bg-yellow-200";
    } else {
      return "text-red-900 bg-red-200";
    }
  }
  const payments = [
    {
      id: 1,
      date: "2023-05-26",
      patientName: "Abaid Daud",
      amount: "Rs 500",
      status: "Paid",
    },
    {
      id: 2,
      date: "2023-05-25",
      patientName: "Ali Hassan",
      amount: "Rs 700",
      status: "Pending",
    },
    // Add more payments as needed
  ];

  return (
    <div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary-dark text-left text-base uppercase tracking-widest text-white">
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Patient Name</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="border-b border-gray-200
                "
                >
                  <td className=" bg-white px-5 py-5 text-base">
                    {payment.date}
                  </td>
                  <td className=" flex gap-2 items-center bg-white px-5 py-5 text-base">
                    <img
                      src={doctorImage}
                      alt="Doctor"
                      className="h-10 w-10 rounded-full "
                    />{" "}
                    {payment.patientName}
                  </td>
                  <td className=" bg-white px-5 py-5 text-base">
                    {payment.amount}
                  </td>
                  <td className=" bg-white px-5 py-5 text-base">
                    <span
                      className={` px-4 py-2 rounded-full text-base ${getClass(
                        payment.status
                      )}`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className=" bg-white px-5 py-5 text-base">
                    <button className="bg-cyan-500 text-white px-3 py-2 rounded flex items-center gap-1">
                      <i className="far fa-eye"></i>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RefundList() {
  const refundRequests = [
    {
      id: 1,
      date: "2023-05-26",
      patientName: "John Doe",
      amount: "Rs 500",
      status: "Requested",
    },
    {
      id: 2,
      date: "2023-05-25",
      patientName: "Jane Smith",
      amount: "Rs 700",
      status: "Requested",
    },
    {
      id: 2,
      date: "2023-05-25",
      patientName: "Jane Smith",
      amount: "Rs 700",
      status: "Requested",
    },
    // Add more refund requests as needed
  ];

  return (
    <div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary-dark text-left text-base uppercase tracking-widest text-white">
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Patient Name</th>
                <th className="px-5 py-3">Amount</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 ">
              {refundRequests.map((refund) => (
                <tr
                  className="border-b border-gray-200
                "
                  key={refund.id}
                >
                  <td className=" bg-white px-5 py-5 text-base">
                    {refund.date}
                  </td>
                  <td className=" flex gap-2 items-center bg-white px-5 py-5 text-base">
                    <img
                      src={doctorImage}
                      alt="Doctor"
                      className="h-10 w-10 rounded-full "
                    />
                    {refund.patientName}
                  </td>
                  <td className=" bg-white px-5 py-5 text-base">
                    {refund.amount}
                  </td>
                  <td className=" bg-white px-5 py-5 text-base">
                    {refund.status}
                  </td>
                  <td className=" bg-white px-5 py-5 text-base">
                    <button className="bg-cyan-500 text-white px-3 py-2 rounded flex items-center gap-1">
                      <i className="far fa-eye"></i>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
function AccountDetails({ editable, onSave }) {
  const [accountDetails, setAccountDetails] = useState({
    accountName: "Abaid Daud",
    bankName: "UBL",
    branchName: "I-14 Branch Isb",
    accountNumber: "123-456-7890",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(accountDetails);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-3  border">
      <div className="flex   justify-between">
        <h2 className="text-xl font-semibold mb-4">Account Details</h2>
        {editable && (
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white w-24 py-1 rounded"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 p-2">
        <div className="mb-4">
          <label className="font-semibold">Account Name:</label>
          <input
            type="text"
            name="name"
            value={accountDetails.accountName}
            onChange={handleChange}
            readOnly={!editable}
            className="block w-full px-1 py-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold">Account Number:</label>
          <input
            type="text"
            name="phone"
            value={accountDetails.accountNumber}
            onChange={handleChange}
            readOnly={!editable}
            className="block w-full px-1 py-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold">Branch Name:</label>
          <input
            type="email"
            name="email"
            value={accountDetails.branchName}
            onChange={handleChange}
            readOnly={!editable}
            className="block w-full px-1 py-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="font-semibold">Bank Name:</label>
          <input
            type="email"
            name="email"
            value={accountDetails.bankName}
            onChange={handleChange}
            readOnly={!editable}
            className="block w-full px-1 py-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

const Withdraw = () => {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [activeTab, setActiveTab] = useState("payments");

  const handleWithdraw = () => {
    // Handle withdraw logic here
    console.log(`Withdraw amount: ${withdrawAmount}`);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const handleSaveAccountDetails = (accountDetails) => {
    console.log("Saving account details:", accountDetails);
    // Implement your save logic here
  };

  return (
    <div className="bg-white rounded-lg shadow-lg px-6 overflow-y-auto py-3 h-full">
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-semibold">Doctor's Account Details</h2>
      </div>

      <div className="flex flex-col rounded-lg p-2 py-2 mb-2">
        <div className="flex flex-col lg:flex-row justify-between gap-2  ">
          <div className=" min-w-[50%]">
            <AccountDetails editable onSave={handleSaveAccountDetails} />
          </div>
          <div className="flex flex-col border  box-border min-w-[45%] shadow-lg   p-2 rounded-lg">
            <div className="grid lg:grid-cols-2  justify-center lg:justify-between gap-4 mb-1">
              <div className="bg-green-200 shadow-md text-green-800 p-4  w-56  lg:w-52 flex flex-col items-center justify-center rounded-lg">
                <p className="text-2xl font-bold">40,000Rs</p>
                <h3 className="font-semibold">Current Balance</h3>
              </div>
              <div className="bg-purple-200 text-purple-800 shadow-md p-4  lg:w-52 flex flex-col items-center justify-center rounded-lg">
                <p className="text-2xl font-bold">100,000Rs</p>
                <h3 className="font-semibold">Total Earnings</h3>
              </div>
              <div className="bg-blue-200 text-blue-800 p-4  shadow-md   lg:w-52 flex flex-col items-center justify-center rounded-lg">
                <p className="text-2xl font-bold">20,000Rs</p>
                <h3 className="font-semibold">Requested</h3>
              </div>
              <div className="flex justify-end items-end pt-1">
                <button
                  className="bg-blue-500 text-white self-end  w-44 py-3 rounded-lg"
                  onClick={handleWithdraw}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-4 font-semibold border-b-2 lg:mx-10 text-sm lg:text-base">
        <button
          className={`bg-white w-full outline-none text-black py-3 -mr-1 rounded ${
            activeTab === "payments"
              ? "border-b-blue-500 border-b-4 text-blue-500 -mb-[1px]"
              : "hover:text-blue-500 hover:-mb-[1px] hover:border-gray-300 hover:border-b-2"
          }`}
          onClick={() => handleTabChange("payments")}
        >
          Payments
        </button>
        <button
          className={`bg-white text-black w-full py-3 outline-none rounded ${
            activeTab === "refundRequests"
              ? "border-blue-500 border-b-4 text-blue-500 -mb-[1px]"
              : "hover:text-blue-500 hover:-mb-[1px] hover:border-gray-300 hover:border-b-2"
          }`}
          onClick={() => handleTabChange("refundRequests")}
        >
          Patients Refund Request
        </button>
      </div>

      {activeTab === "payments" && (
        <div>
          <PaymentsList />
        </div>
      )}

      {activeTab === "refundRequests" && (
        <div className="overflow-y-auto h-[30vh] ">
          <RefundList />
        </div>
      )}
    </div>
  );
};

export default Withdraw;
