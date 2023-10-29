import React, { useEffect, useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import user from "../../assets/doctor.jpg";
import { useNavigate } from "react-router-dom";

const BookAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const navigate = useNavigate();

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  const selectedDay = (val) => {
    // setSelectedDate(val);
  };
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" flex-col flex justify-center bg-gray-100">
      <div className="mx-auto grid max-w-screen-lg mt-8  px-6  bg-white shadow-lg rounded-md">
        <div className="flex items-start lg:w-[35rem]  py-8 px-1">
          <img
            className="w-20 h-20 rounded-full mr-4"
            src={user}
            alt="User Avatar"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-semibold">Dr. Abaid Daud</h3>
            <p className="text-gray-500 text-base">
              SkinCheck AI Video Consultation (Online){" "}
            </p>
            <p className="text-gray-900 font-semibold text-sm">
              Fee : Rs. 1,000
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="mx-auto grid max-w-screen-lg my-10 px-6 pb-20 bg-white shadow-lg rounded-md">
        <div>
          <p className="mt-8 font-serif text-xl font-bold text-blue-900">
            Select a date
          </p>
          {/* <div className="relative mt-4 w-56">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              minDate={new Date()}
              maxDate={
                new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)
              } // Set max date as 10 days from the current date
              dateFormat="MMMM d, yyyy"
              className="datepicker-input block w-full rounded-lg border border-primary-color bg-primary-color/50 p-2.5 pl-10 text-primary-color/800 outline-none ring-opacity-30 placeholder:text-primary-color/800 focus:ring focus:ring-primary-color sm:text-sm"
              placeholderText="Select date"
            />
          </div> */}
          <div className="lg:w-[35rem] w-72">
            <DatePicker
              getSelectedDay={selectedDay}
              endDate={100}
              selectDate={new Date("2020-04-30")}
              labelFormat={"MMMM"}
              color={"#374e8c"}
              marked={[
                {
                  date: new Date(2023, 9, 3),
                  marked: true,
                  style: {
                    color: "#ff0000",
                    padding: "5px",
                    fontSize: 12,
                  },
                  text: "1x",
                },
                {
                  date: new Date(2023, 9, 4),
                  marked: true,
                  text: "5x",
                },
              ]}
            />{" "}
          </div>
          {
            <div>
              <p className="mt-8 font-serif text-xl font-bold text-blue-900">
                Select a time
              </p>
              <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
                <label className="rounded-lg flex justify-center bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 cursor-pointer">
                  <input
                    type="radio"
                    name="time"
                    value="12:00"
                    checked={selectedTime === "12:00"}
                    onChange={handleTimeChange}
                    className="hidden"
                  />
                  12:00
                </label>
                <label className="rounded-lg flex justify-center bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 cursor-pointer">
                  <input
                    type="radio"
                    name="time"
                    value="12:00"
                    checked={selectedTime === "12:00"}
                    onChange={handleTimeChange}
                    className="hidden"
                  />
                  14:00
                </label>
                <label className="rounded-lg flex justify-center bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 cursor-pointer">
                  <input
                    type="radio"
                    name="time"
                    value="12:00"
                    checked={selectedTime === "12:00"}
                    onChange={handleTimeChange}
                    className="hidden"
                  />
                  16:00
                </label>
                <label className="rounded-lg flex justify-center bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 cursor-pointer">
                  <input
                    type="radio"
                    name="time"
                    value="12:00"
                    checked={selectedTime === "12:00"}
                    onChange={handleTimeChange}
                    className="hidden"
                  />
                  18:00
                </label>
                <label className="rounded-lg flex justify-center bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 cursor-pointer">
                  <input
                    type="radio"
                    name="time"
                    value="12:00"
                    checked={selectedTime === "12:00"}
                    onChange={handleTimeChange}
                    className="hidden"
                  />
                  20:00
                </label>
                <label className="rounded-lg flex justify-center bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 cursor-pointer">
                  <input
                    type="radio"
                    name="time"
                    value="12:00"
                    checked={selectedTime === "12:00"}
                    onChange={handleTimeChange}
                    className="hidden"
                  />
                  22:00
                </label>
                <label className="rounded-lg flex justify-center bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 cursor-pointer">
                  <input
                    type="radio"
                    name="time"
                    value="12:00"
                    checked={selectedTime === "12:00"}
                    onChange={handleTimeChange}
                    className="hidden"
                  />
                  08:00
                </label>
                <label className="rounded-lg flex justify-center bg-primary-color px-4 py-2 font-medium text-primary-dark border-2 border-primary-dark hover:bg-[#1193cf] hover:text-white active:scale-95 cursor-pointer">
                  <input
                    type="radio"
                    name="time"
                    value="12:00"
                    checked={selectedTime === "12:00"}
                    onChange={handleTimeChange}
                    className="hidden"
                  />
                  10:00
                </label>
              </div>
            </div>
          }
        </div>
        <button
          onClick={() => navigate("/payment")}
          className="mt-8 w-56 rounded-full border-4 border-primary-dark hover:bg-primary-dark px-10 py-3 text-lg font-bold text-primary-light hover:text-white transition hover:translate-y-1"
        >
          Book Now
        </button>
        <div className="mt-10">
          <h2 className="text-xl font-bold text-primary-dark mb-4">Reviews</h2>
          <div className="grid grid-cols-1  gap-4">
            {/* Review cards */}
            <div className="bg-white max-w-[35rem] rounded-lg p-4 shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={user}
                  alt="User Avatar"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-gray-500 text-sm">Skin Check AI User</p>
                </div>
              </div>
              <p className="text-gray-700">
                I highly recommend Skin Check AI to anyone who wants to take
                proactive care of their skin.
              </p>
            </div>
            <div className="bg-white max-w-[35rem] rounded-lg p-4 shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={user}
                  alt="User Avatar"
                />
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-gray-500 text-sm">Skin Check AI User</p>
                </div>
              </div>
              <p className="text-gray-700">
                I highly recommend Skin Check AI to anyone who wants to take
                proactive care of their skin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
