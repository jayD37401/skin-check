import React, { useState } from "react";
import patientImage from "../../assets/doctor.jpg";

const InvoiceReports = () => {
  const [invoices, setInvoices] = useState([
    {
      id: 1,
      invoiceNumber: "INV12345",
      patientId: "P001",
      patientName: "John Smith",
      totalAmount: "$150",
      createdDate: "2023-05-25",
      status: "Paid",
    },
    {
      id: 2,
      invoiceNumber: "INV54321",
      patientId: "P002",
      patientName: "Emma Johnson",
      totalAmount: "$200",
      createdDate: "2023-05-24",
      status: "Pending",
    },
    // Add more invoices as needed
  ]);

  const [selectedInvoice, setSelectedInvoice] = useState(null);

  function openEditModal(invoice) {
    setSelectedInvoice(invoice);
  }

  function closeEditModal() {
    setSelectedInvoice(null);
  }

  function handleEditInvoice(invoiceData) {
    // Handle updating the invoice data here (e.g., making an API call to update the data)
    console.log("Updated invoice data:", invoiceData);
    closeEditModal();
  }

  return (
    <div className="bg-white rounded-lg h-full px-4 w-[76vw] py-4 sm:px-8 shadow-lg">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700 text-2xl">
            Invoice Reports
          </h2>
          <span className="text-sm text-gray-500">
            View the invoice reports
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
                <th className="px-5 py-3">Created Date</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {invoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">
                      {invoice.invoiceNumber}
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">{invoice.patientId}</p>
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
                          {invoice.patientName}
                        </p>
                      </div>
                    </div>{" "}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">{invoice.totalAmount}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">{invoice.createdDate}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">{invoice.status}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white flex items-center px-5 py-5 text-base">
                    <button
                      className="mr-2 text-primary text-green-700 bg-green-200 rounded-lg flex items-center px-2 py-1"
                      onClick={() => openEditModal(invoice)}
                    >
                      <i className="fa fa-edit "></i>
                      Edit
                    </button>
                    <button className="px-2 py-1 bg-red-200 text-red-700 rounded-lg flex items-center">
                      <i className="fa fa-trash mr-1"></i> Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Invoice Modal */}
      {selectedInvoice && (
        <div className="absolute rounded-lg left-[40%] bg-white h-[70vh] w-[40vw]   p-4 shadow-md top-[20%]">
          <div className="">
            <h2 className="font-semibold text-gray-700 text-2xl mb-4">
              Edit Invoice
            </h2>
            <form>
              <div className="flex justify-between gap-4">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="invoiceNumber"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Invoice Number
                  </label>
                  <input
                    type="text"
                    id="invoiceNumber"
                    name="invoiceNumber"
                    value={selectedInvoice.invoiceNumber}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="patientId"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Patient ID
                  </label>
                  <input
                    type="text"
                    id="patientId"
                    name="patientId"
                    value={selectedInvoice.patientId}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>
              </div>

              <div className="flex justify-between gap-4">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="patientName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Patient Name
                  </label>
                  <input
                    type="text"
                    id="patientName"
                    name="patientName"
                    value={selectedInvoice.patientName}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="totalAmount"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Total Amount
                  </label>
                  <input
                    type="text"
                    id="totalAmount"
                    name="totalAmount"
                    value={selectedInvoice.totalAmount}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-between gap-4">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="createdDate"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Created Date
                  </label>
                  <input
                    type="text"
                    id="createdDate"
                    name="createdDate"
                    value={selectedInvoice.createdDate}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>
                <div className="mb-4 w-full">
                  <label
                    htmlFor="status"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={selectedInvoice.status}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) =>
                      setSelectedInvoice((prevInvoice) => ({
                        ...prevInvoice,
                        status: e.target.value,
                      }))
                    }
                  >
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  className="mr-2 text-primary border border-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white"
                  onClick={closeEditModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  onClick={(e) => {
                    e.preventDefault();
                    handleEditInvoice(selectedInvoice);
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoiceReports;
