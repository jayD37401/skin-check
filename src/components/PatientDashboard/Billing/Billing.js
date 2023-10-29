import React, { useState } from "react";
import doc from "../../../assets/doctor.jpg";
import Invoice from "./Invoice";

const Billing = () => {
  const [showInvoice, setShowInvoice] = useState(false);

  // Example static payment data
  const payments = [
    {
      invoiceNo: "INV001",
      doctor: "Dr. John Doe",
      amount: "$100",
      paidOn: "May 10, 2023",
    },
    {
      invoiceNo: "INV002",
      doctor: "Dr. Jane Smith",
      amount: "$150",
      paidOn: "May 15, 2023",
    },
    {
      invoiceNo: "INV003",
      doctor: "Dr. Abaid Daud",
      amount: "$75",
      paidOn: "May 20, 2023",
    },
    // Add more payment objects as needed
  ];

  return (
    <>
      {showInvoice ? (
        <Invoice />
      ) : (
        <div className="bg-white rounded-lg h-full px-4 py-4 sm:px-8 shadow-lg">
          <div className="flex items-center justify-between pb-6">
            <div>
              <h2 className="font-semibold text-gray-700 text-2xl">
                Payments List
              </h2>
              <span className="text-sm text-gray-500">
                View payments that you have made
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="ml-10 space-x-8 lg:ml-40">
                <button className="flex items-center gap-2 rounded-md bg-primary-dark px-4 py-2 text-base font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                    />
                  </svg>
                  CSV
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-y-hidden rounded-lg border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary-dark text-left text-base uppercase tracking-widest text-white">
                    <th className="px-3 py-3">Invoice No</th>
                    <th className="px-5 py-3">Doctor</th>
                    <th className="px-5 py-3">Amount</th>
                    <th className="px-5 py-3">Paid On</th>
                    <th className="px-5 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {payments.map((payment) => (
                    <tr key={payment.invoiceNo}>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                        <p className="whitespace-no-wrap">
                          {payment.invoiceNo}
                        </p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0">
                            <img
                              className="h-full w-full rounded-full"
                              src={doc}
                              alt="doctor image"
                            />
                          </div>
                          <div className="ml-3 whitespace-nowrap">
                            <p className="whitespace-no-wrap">
                              {payment.doctor}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="border-b border-gray-200  bg-white px-5 py-5 text-base">
                        <p className="whitespace-no-wrap">{payment.amount}</p>
                      </td>
                      <td className="border-b border-gray-200 whitespace-nowrap bg-white px-5 py-5 text-base">
                        <p className="whitespace-no-wrap">{payment.paidOn}</p>
                      </td>
                      <td className="border-b whitespace-nowrap border-gray-200 bg-white px-5 py-5 text-base">
                        <button
                          className="text-white bg-cyan-600 hover:bg-cyan-400 px-4 py-2 rounded-md mr-2"
                          onClick={() => setShowInvoice(true)}
                        >
                          <i className="fa fa-eye mr-1 "></i>
                          View
                        </button>
                        <button className="text-white bg-green-400 hover:bg-blue-700 px-4 py-2 rounded-md ">
                          <i className="fa fa-print mr-1"></i>
                          Print
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Billing;
