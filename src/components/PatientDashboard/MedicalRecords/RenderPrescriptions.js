import doctorImage from "../../../assets/doctor.jpg";

function RenderPrescriptions() {
  const prescriptions = [
    {
      id: 1,
      date: "2023-05-26",
      doctor: "Dr. Abaid",
      name: "prescription",
      action: "View / Download",
    },
    {
      id: 2,
      date: "2023-05-27",
      doctor: "Dr. Hassan",
      name: "prescription",
      action: "View / Download",
    },
    // Add more prescriptions as needed
  ];
  return (
    <div>
      <div class="overflow-y-hidden rounded-lg border">
        <div class="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary-dark text-left text-base uppercase tracking-widest text-white">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Doctor</th>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {prescriptions.map((prescription) => (
                <tr key={prescription.id}>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    {prescription.id}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    {prescription.date}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <div className="flex items-center">
                      <img
                        src={doctorImage}
                        alt="Doctor"
                        className="h-8 w-8 rounded-full mr-2"
                      />
                      {prescription.doctor}
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    {prescription.name}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <div className="flex items-center font-semibold">
                      <button className="bg-cyan-500 text-white px-3 py-2 rounded flex items-center gap-1">
                        <i className="far fa-eye"></i>
                        View
                      </button>
                      <button className="bg-cyan-500 text-white px-3 py-2 rounded ml-2 flex items-center gap-1">
                        <i className="fa fa-download"></i>
                        Download
                      </button>
                    </div>
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
export default RenderPrescriptions;
