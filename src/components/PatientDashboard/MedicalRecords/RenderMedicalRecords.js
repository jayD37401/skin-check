import { useState } from "react";
// import doctorImage from "../../assets/doctor.jpg";

function RenderMedicalRecords() {
  const [showPopup, setShowPopup] = useState(false);
  const medicalRecords = [
    {
      id: 1,
      name: "Record 1",
      description: "Description 1",
      date: "2023-05-26",
      attachment: "Attachment 1",
    },
    {
      id: 2,
      name: "Record 2",
      description: "Description 2",
      date: "2023-05-27",
      attachment: "Attachment 2",
    },
    // Add more medical records as needed
  ];

  const handleAddRecord = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleDeleteAttachment = (recordId) => {
    // Implement the logic to delete the attachment for the given record ID
    console.log("Deleting attachment for record ID:", recordId);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-blue-500 font-semibold text-white rounded-lg px-6 py-2 mb-4"
          onClick={handleAddRecord}
        >
          Add Medical Record
        </button>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary-dark text-left text-base uppercase tracking-widest text-white">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Description</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Attachment</th>
                <th className="px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {medicalRecords.map((record) => (
                <tr key={record.id}>
                  <td className="border-b border-gray-200  bg-white px-5 py-5 text-base">
                    {record.name}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    {record.description}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    {record.date}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5  text-base">
                    {record.attachment}
                    <i className="fa fa-download ml-2 text-green-500"></i>
                  </td>
                  <td className="border-b border-gray-200 bg-white   px-5 py-5 box-border">
                    <button
                      className="text-red-600 bg-red-200  rounded-md ml-2  py-1 px-2   "
                      onClick={() => handleDeleteAttachment(record.id)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Medical Record</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Title Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Enter title"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="hospital"
                >
                  Hospital Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="hospital"
                  type="text"
                  placeholder="Enter hospital name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="symptoms"
                >
                  Symptoms
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="symptoms"
                  placeholder="Enter symptoms"
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="date"
                >
                  Date
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date"
                  type="date"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="attachment"
                >
                  Attachment
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="attachment"
                  type="file"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  type="submit"
                >
                  Save
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                  onClick={handleClosePopup}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default RenderMedicalRecords;
