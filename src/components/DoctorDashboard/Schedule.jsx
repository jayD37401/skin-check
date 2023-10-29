import { useState } from "react";
import AppointmentGroup from "./AppointmentGroup";
import AppointmentEditModal from "./AppointmentEditModal";
import BaseModal from "./BaseModal";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";

function getHour(time) {
  return parseInt(time.split(":")[0]);
}

export default function Schedule() {
  const [appointments, setAppointments] = useState([
    {
      id: 3,
      time: "13:30 AM ",
      scheduledStart: "13:30",
      scheduledEnd: "14:30",
      name: "David Johnson",
      purpose: "Consultation",
      onStart: null,
      onEnd: null,
      patient: "Abaid Daud",
      status: "inProgress",
      isSelected: false,
    },
  ]);
  const [editingAppointment, setEditingAppointment] = useState(false);
  const [appointmentToDelete, setAppointmentToDelete] = useState(null);

  const hourStartTimes = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  const groupedAppointments = groupAppointmentsByHour();

  function groupAppointmentsByHour() {
    const groupedAppointments = {};

    hourStartTimes.forEach((hourStartTime) => {
      groupedAppointments[hourStartTime] = appointments.filter(
        (appointment) => getHour(appointment.scheduledStart) === hourStartTime
      );
    });

    groupedAppointments[9].push({
      id: 1,
      time: "9:30 AM ",
      scheduledStart: "9:30",
      scheduledEnd: "10:00",
      name: "John Doe",
      purpose: "Check-up",
      start: null,
      end: null,
      patient: "Abaid Daud",
      status: "ended",
      isSelected: false,
    });

    groupedAppointments[11].push({
      id: 2,
      time: "11:30 AM ",
      scheduledStart: "11:30",
      scheduledEnd: "12:00",
      name: "Jane Smith",
      purpose: "Follow-up",
      start: null,
      end: null,
      patient: "Ali Hassan",
      status: "scheduled",
      isSelected: false,
    });

    return groupedAppointments;
  }

  function addAppointment(newAppointment) {
    setAppointments((prevAppointments) => [
      ...prevAppointments,
      newAppointment,
    ]);
  }

  function selectAppointment(selected) {
    console.log(selected, "selected");
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) => {
        if (appointment.id === selected.id) {
          return {
            ...appointment,
            isSelected: !appointment.isSelected,
          };
        } else {
          return {
            ...appointment,
            isSelected: false,
          };
        }
      })
    );
  }

  function startAppointment(toStart) {
    // Implement your logic here
    console.log("Starting appointment:", toStart);
  }

  function endAppointment(toEnd) {
    // Implement your logic here
    console.log("Ending appointment:", toEnd);
  }

  function confirmDeleteAppointment(toDelete) {
    setAppointmentToDelete(toDelete);
  }

  function deleteAppointment() {
    // Implement your logic here
    setAppointments((prevAppointments) =>
      prevAppointments.filter(
        (appointment) => appointment.id !== appointmentToDelete.id
      )
    );
    setAppointmentToDelete(null);
  }

  return (
    <>
      <div className="bg-white rounded-lg p-4 h-full shadow-lg overflow-y-auto   ">
        <div className="flex items-center mb-4">
          <h3 className="text-lg font-bold">Upcoming Schedule</h3>
          <button
            className="text-indigo-600 border border-gray-300 rounded px-2 py-1 ml-auto hover:bg-gray-50"
            onClick={() => setEditingAppointment(true)}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        {hourStartTimes.map((hourStartTime) => (
          <AppointmentGroup
            key={hourStartTime}
            startTime={hourStartTime}
            appointments={groupedAppointments[hourStartTime]}
            onSelectAppointment={(appointment) =>
              selectAppointment(appointment)
            }
            onStartAppointment={(appointment) => startAppointment(appointment)}
            onEndAppointment={(appointment) => endAppointment(appointment)}
            onDeleteAppointment={(appointment) =>
              confirmDeleteAppointment(appointment)
            }
          />
        ))}
      </div>

      <AppointmentEditModal
        open={editingAppointment}
        onSubmit={(appointment) => addAppointment(appointment)}
        onClose={() => setEditingAppointment(false)}
      />

      <BaseModal
        open={!!appointmentToDelete}
        onClose={() => setAppointmentToDelete(null)}
      >
        <BaseModal.Body>
          Are you sure you want to delete this appointment?
        </BaseModal.Body>
        <BaseModal.Footer>
          <ButtonPrimary onClick={deleteAppointment}>
            Yes, I'm sure
          </ButtonPrimary>
          <ButtonSecondary
            className="mr-2"
            onClick={() => setAppointmentToDelete(null)}
          >
            Cancel
          </ButtonSecondary>
        </BaseModal.Footer>
      </BaseModal>
    </>
  );
}
