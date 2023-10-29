import React, { useState } from "react";
import patientImage from "../../assets/doctor.jpg";

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      invoiceNumber: "INV12345",
      patientId: "P001",
      patientName: "John Smith",
      totalAmount: "$150",
      status: "Paid",
    },
    {
      id: 2,
      invoiceNumber: "INV54321",
      patientId: "P002",
      patientName: "Emma Johnson",
      totalAmount: "$200",
      status: "Paid",
    },
    // Add more transactions as needed
  ]);

  return (
    <div className="bg-white rounded-lg h-full px-4 py-4 sm:px-8 shadow-lg">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700 text-2xl">
            Transactions List
          </h2>
          <span className="text-sm text-gray-500">
            View the transactions history
          </span>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary-dark text-left text-base uppercase tracking-widest text-white">
                <th className="px-5 py-3">Invoice Number</th>
                <th className="px-5 py-3">Patient ID</th>
                <th className="px-5 py-3">Patient Name</th>
                <th className="px-5 py-3">Total Amount</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">
                      {transaction.invoiceNumber}
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">
                      {transaction.patientId}
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <div className="flex items-center">
                      <div className="h-12 w-12 flex-shrink-0">
                        <img
                          className="h-full w-full rounded-full"
                          src={patientImage}
                          alt="patient"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">
                          {transaction.patientName}
                        </p>
                      </div>
                    </div>{" "}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">
                      {transaction.totalAmount}
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">{transaction.status}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <button className="px-2 py-1 bg-red-200 text-red-700 rounded-lg">
                      <i className="fa fa-trash mr-1"></i> Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
