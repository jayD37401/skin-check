import { useState } from "react";
import AppointmentTable from "./AppointmentTable";
import circle from "../../assets/patient_icon.png";
import circle3 from "../../assets/broken-leg.png";
import circle2 from "../../assets/calendar_icon.png";
import CircleGraph from "./CircleGraph";

export default function Dashboard() {
  const [totalPatients, setTotalPatients] = useState(150);
  const [todayPatients, setTodayPatients] = useState(50);
  const [appointments, setAppointments] = useState([1, 2, 3]);
  const [selectedOption, setSelectedOption] = useState("upcoming");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  // Function to accept an appointment
  function acceptAppointment(appointmentId) {
    // Implement your logic here
    console.log("Accept appointment:", appointmentId);
  }

  // Function to reject an appointment
  function rejectAppointment(appointmentId) {
    // Implement your logic here
    console.log("Reject appointment:", appointmentId);
  }

  // Dummy data for example
  const upcomingAppointments = [
    {
      id: 1,
      patientName: "Abaid Doe",
      appointmentDate: "2023-06-01",
      purpose: "Check-up",
      type: "New",
      paidAmount: 100,
    },
    // Add more upcoming appointments
  ];

  const todayAppointments = [
    {
      id: 1,
      patientName: "Jane Smith",
      appointmentDate: "2023-05-26",
      purpose: "Follow-up",
      type: "Existing",
      paidAmount: 0,
    },
    {
      id: 1,
      patientName: "Jane Smith",
      appointmentDate: "2023-05-26",
      purpose: "Follow-up",
      type: "Existing",
      paidAmount: 0,
    },
    {
      id: 1,
      patientName: "Jane Smith",
      appointmentDate: "2023-05-26",
      purpose: "Follow-up",
      type: "Existing",
      paidAmount: 0,
    },
    {
      id: 1,
      patientName: "Jane Smith",
      appointmentDate: "2023-05-26",
      purpose: "Follow-up",
      type: "Existing",
      paidAmount: 0,
    },
    {
      id: 1,
      patientName: "Jane Smith",
      appointmentDate: "2023-05-26",
      purpose: "Follow-up",
      type: "Existing",
      paidAmount: 0,
    },
    // Add more today appointments
  ];

  return (
    <div className="bg-white h-full shadow-lg rounded-lg overflow-y-auto">
      <div className="flex flex-col md:flex-row md:justify-between mb-1 p-4 lg:px-10">
        <CircleGraph
          color="#f14556"
          label="Total Patients"
          value={totalPatients}
          imageSrc={circle}
        />
        <CircleGraph
          label="Today Patients"
          value={todayPatients}
          color="#20c997"
          imageSrc={circle3}
        />
        <CircleGraph
          label="Appointments"
          value={appointments.length + 20}
          imageSrc={circle2}
          color="#0dcaf0"
        />
      </div>
      <h2 className="text-xl font-semibold pl-4 pb-1">Patient Appointments</h2>

      <div className="flex mb-2 p-3 text-lg m-2 rounded-lg">
        <button
          className={`mr-2 py-2 px-4 w-32 flex justify-center border border-cyan-800 rounded-full ${
            selectedOption === "upcoming"
              ? "bg-cyan-500 text-white"
              : "bg-gray-00 hover:bg-cyan-500 hover:text-white"
          }`}
          onClick={() => handleOptionChange("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={`py-2 px-4 w-32 flex border border-cyan-800 justify-center rounded-full ${
            selectedOption === "today"
              ? "bg-cyan-500 text-white"
              : "bg-gray-00 hover:bg-cyan-500 hover:text-white"
          }`}
          onClick={() => handleOptionChange("today")}
        >
          Today
        </button>
      </div>

      <div className="p-2 overflow-y-auto max-h-[35vh]">
        {selectedOption === "upcoming" && (
          <AppointmentTable
            appointments={upcomingAppointments}
            onAccept={acceptAppointment}
            onReject={rejectAppointment}
          />
        )}
        {selectedOption === "today" && (
          <AppointmentTable
            appointments={todayAppointments}
            onAccept={acceptAppointment}
            onReject={rejectAppointment}
          />
        )}
      </div>
    </div>
  );
}
