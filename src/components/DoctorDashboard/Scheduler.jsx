import React from "react";

function AppointmentScheduling() {
  const [selectedTime, setSelectedTime] = React.useState(null);

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="h-full p-5 pt-3 bg-white shadow-lg rounded-lg">
      <div>
        <p className=" font-serif text-xl font-bold text-blue-900">
          Select a time
        </p>
        <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
          <button
            className={`rounded-lg bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 ${
              selectedTime === "12:00" && "bg-[#1193cf] text-white"
            }`}
            onClick={() => handleTimeSelection("12:00")}
          >
            12:00
          </button>
          <button
            className={`rounded-lg bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 ${
              selectedTime === "14:00" && "bg-[#1193cf] text-white"
            }`}
            onClick={() => handleTimeSelection("14:00")}
          >
            14:00
          </button>
          <button
            className={`rounded-lg bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 ${
              selectedTime === "09:00" && "bg-[#1193cf] text-white"
            }`}
            onClick={() => handleTimeSelection("09:00")}
          >
            16:00
          </button>
          <button
            className={`rounded-lg bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 ${
              selectedTime === "12:00" && "bg-[#1193cf] text-white"
            }`}
            onClick={() => handleTimeSelection("12:00")}
          >
            18:00
          </button>
          <button
            className={`rounded-lg bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 ${
              selectedTime === "15:00" && "bg-[#1193cf] text-white"
            }`}
            onClick={() => handleTimeSelection("15:00")}
          >
            20:00
          </button>
          <button
            className={`rounded-lg bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 ${
              selectedTime === "12:00" && "bg-[#1193cf] text-white"
            }`}
            onClick={() => handleTimeSelection("12:00")}
          >
            22:00
          </button>
          <button
            className={`rounded-lg bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 ${
              selectedTime === "14:00" && "bg-[#1193cf] text-white"
            }`}
            onClick={() => handleTimeSelection("14:00")}
          >
            10:00
          </button>
          <button
            className={`rounded-lg bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 ${
              selectedTime === "12:00" && "bg-[#1193cf] text-white"
            }`}
            onClick={() => handleTimeSelection("12:00")}
          >
            8:00
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentScheduling;
