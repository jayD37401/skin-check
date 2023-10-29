import doctorImage from "../../assets/doctor.jpg";

function AppointmentTable({ appointments, onAccept, onReject }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-primary-dark text-left text-base uppercase tracking-widest text-white">
            <th className="px-4 py-3">Patient Name</th>
            <th className="px-4 py-3">Appointment Date</th>
            <th className="px-4 py-3">Purpose</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Paid Amount</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="border-b border-gray-200 bg-white px-4 py-4 text-base">
                {appointment.patientName}
              </td>
              <td className="border-b border-gray-200 bg-white px-4 py-4 text-base">
                {appointment.appointmentDate}
              </td>
              <td className="border-b border-gray-200 bg-white px-4 py-4 text-base">
                {appointment.purpose}
              </td>
              <td className="border-b border-gray-200 bg-white px-4 py-4 text-base">
                {appointment.type}
              </td>
              <td className="border-b border-gray-200 bg-white px-4 py-4 text-base">
                {appointment.paidAmount}
              </td>
              <td className="border-b border-gray-200 bg-white px-4 py-4 text-base">
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-green-600 text-white px-3 py-2 rounded flex items-center gap-1"
                    onClick={() => onAccept(appointment.id)}
                  >
                    <i className="far fa-check-square"></i>
                    Accept
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-2 rounded flex items-center gap-1"
                    onClick={() => onReject(appointment.id)}
                  >
                    <i className="far fa-times-circle"></i>
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentTable;
