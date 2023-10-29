import React, { useEffect, useState } from "react";
import doc from "../../assets/doctor.jpg";

const Appointments = () => {
  // Example static appointment data
  const appointmentsData = [
    {
      id: 3,
      doctorName: "Dr. John Doe",
      patientName: "John Smith",
      appointmentTime: "10:00 AM",
      status: false,
      amount: "$150",
    },
    {
      id: 7,
      doctorName: "Dr. Jane Smith",
      patientName: "Emma Johnson",
      appointmentTime: "2:30 PM",
      status: false,

      amount: "$200",
    },
    {
      id: 2,
      doctorName: "Dr. Abaid Daud",
      patientName: "Michael Brown",
      appointmentTime: "11:15 AM",
      status: false,
      amount: "$100",
    },
    // Add more appointment objects as needed
  ];
  const [appointments, setAppointments] = useState(appointmentsData);

  function toggleStatus(id) {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) => {
        if (appointment.id === id) {
          return {
            ...appointment,
            status: appointment.status === "Confirmed" ? "Cancel" : "Confirmed",
          };
        }
        return appointment;
      })
    );
  }

  function getClass(value) {
    if (value) {
      return "bg-green-500";
    } else {
      return "bg-red-500";
    }
  }

  return (
    <div className="bg-white rounded-lg h-full px-4 py-4 sm:px-8 shadow-lg">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700 text-2xl">
            Appointments List
          </h2>
          <span className="text-sm text-gray-500">
            View appointments that you have booked
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="ml-10 space-x-8 lg:ml-40"></div>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary-dark text-left text-base uppercase tracking-widest text-white">
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Doctor Name</th>
                <th className="px-5 py-3">Patient Name</th>
                <th className="px-5 py-3">Appointment Time</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Amount</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">{appointment.id}</p>
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
                      <div className="ml-3">
                        <p className="whitespace-nowrap">
                          {appointment.doctorName}
                        </p>
                      </div>
                    </div>{" "}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-nowrap">
                      {appointment.patientName}
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-nowrap">
                      {appointment.appointmentTime}
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <label
                      htmlFor={`status-${appointment.id}`}
                      className="flex items-center cursor-pointer relative"
                    >
                      <input
                        className={`mr-3 mt-[0.3rem] h-5 w-10 appearance-none rounded-[0.6375rem] ${
                          appointment.status ? "bg-green-500" : "bg-red-500"
                        } before:pointer-events-none before:absolute before:h-5 before:w-5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-6 after:w-6 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-6 checked:after:w-6 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-6 focus:after:w-6 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]`}
                        type="checkbox"
                        role="switch"
                        onChange={() => toggleStatus(appointment.id)}
                        id={`status-${appointment.id}`}
                      />
                    </label>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-nowrap">{appointment.amount}</p>
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

export default Appointments;
