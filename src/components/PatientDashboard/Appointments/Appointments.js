import React from "react";
import doc from "../../../assets/doctor.jpg";

const Appointments = () => {
  // Example static appointment data
  const appointments = [
    {
      id: 3,
      doctorName: "Dr. John Doe",
      bookingDate: "Sep 28, 2022",
      appointmentDate: "Oct 5, 2022",
      status: "Confirmed",
    },
    {
      id: 7,
      doctorName: "Dr. Jane Smith",
      bookingDate: "Sep 28, 2022",
      appointmentDate: "Oct 7, 2022",
      status: "Pending",
    },
    {
      id: 2,
      doctorName: "Dr. Abaid Daud",
      bookingDate: "Sep 28, 2022",
      appointmentDate: "Oct 7, 2022",
      status: "Cancel",
    },
    // Add more appointment objects as needed
  ];
  function getClass(value) {
    if (value === "Confirmed") {
      return "text-green-900 bg-green-200";
    } else if (value === "Pending") {
      return "text-yellow-900 bg-yellow-200";
    } else {
      return "text-red-900 bg-red-200";
    }
  }

  return (
    <div class="  bg-white rounded-lg h-full px-4 py-4 sm:px-8 shadow-lg">
      <div class="flex items-center justify-between pb-6">
        <div>
          <h2 class="font-semibold text-gray-700 text-2xl">
            Appointments List
          </h2>
          <span class="text-sm text-gray-500">
            View appointments that you have booked
          </span>
        </div>
        <div class="flex items-center justify-between">
          <div class="ml-10 space-x-8 lg:ml-40">
            <button class="flex items-center gap-2 rounded-md bg-primary-dark px-4 py-2 text-base font-semibold text-white focus:outline-none focus:ring hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
              CSV
            </button>
          </div>
        </div>
      </div>
      <div class="overflow-y-hidden rounded-lg border">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="bg-primary-dark text-left text-base  uppercase tracking-widest text-white">
                <th class="px-5 py-3">ID</th>
                <th class="px-5 py-3">Doctor Name</th>
                <th class="px-5 py-3">Booking Date</th>
                <th class="px-5 py-3">Appointment Date</th>
                <th class="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody class="text-gray-600">
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p class="whitespace-no-wrap">{appointment.id}</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <div class="flex items-center">
                      <div class="h-12   w-12  flex-shrink-0">
                        <img
                          class="h-full w-full rounded-full"
                          src={doc}
                          alt="doctor image"
                        />
                      </div>
                      <div class="ml-3">
                        <p class="whitespace-no-wrap">
                          {appointment.doctorName}
                        </p>
                      </div>
                    </div>{" "}
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p class="whitespace-no-wrap">{appointment.bookingDate}</p>
                  </td>
                  <td class="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p class="whitespace-no-wrap">
                      {appointment.appointmentDate}
                    </p>
                  </td>
                  <td class="border-b border-gray-200  bg-white px-5 py-5 text-base">
                    <span
                      className={`rounded-full ${getClass(
                        appointment.status
                      )} px-3 py-1 text-sm font-semibold  text-green-900`}
                    >
                      {appointment.status}
                    </span>
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
