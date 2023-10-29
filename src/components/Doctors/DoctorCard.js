import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({
  name,
  education,
  experience,
  rating,
  image,
  fee,
  status,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-xl w-full rounded-lg p-6 flex lg:flex-row flex-col justify-between  gap-5">
      <div className="flex-shrink-0 flex  items-start">
        <img
          className=" lg:h-48 h-24 rounded-full object-cover w-auto"
          src={image}
          alt="Doctor"
        />
        <div className="flex flex-col">
          <div className="lg:ml-6 ml-2">
            <h2 className="text-xl font-bold text-primary-dark mb-2">{name}</h2>
            <p className="text-black mb-4">{education}</p>
            {/* <p className="text-black mb-4">{experience} years of experience</p> */}
            <div className="flex items-center lg:my-4 lg:mt-6 idden text-sm lg:text-base">
              <div className="border-r-2   lg:pr-10 pr-2 flex flex-col items-center">
                <span className="text-black  font-bold">{rating}</span>
                <span>Rating</span>
              </div>
              <div className="border-r-2   lg:px-10 px-2  flex flex-col items-center">
                <span className="text-black  font-bold">
                  {experience} years
                </span>
                <span>Experience</span>
              </div>
              <div className=" lg:px-10 px-2  flex flex-col items-center">
                <span className="text-black text-center font-bold">200 </span>
                <span>Reviews</span>
              </div>
            </div>
          </div>

          <div className="ml-6 hidden lg:block rounded-md border-2 border-primary-dark p-2 text-sm">
            <div className="flex  font-semibold items-center pb-1">
              <i className="fa fa-video mr-2 text-xs text-primary-dark"></i>
              <span
               className="truncate block mb-1font-semibold text-primary-dark">
                Online Video Consultation (Online)
              </span>
              <span className="hidden ml-auto flex-shrink-0 pl-2 doctor-fee">
                Rs. {fee}
              </span>
            </div>
            <div className="flex ">
              <div className="truncate font-semibold">
                {status ? (
                  <div className="flex flex-wrap  items-center text-available text-decoration-none">
                    <i className="mr-2 fa fa-dot-circle text-green-500 text-xs"></i>
                    <span className="relative flex-grow max-w-full text-green-500 font-normal flex-1 px-4 pl-0 truncate">
                      Available Wed, Jul 12
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-wrap  items-center text-available text-decoration-none">
                    <i className="mr-2 fa fa-dot-circle text-green-500 text-xs"></i>
                    <span className="relative flex-grow max-w-full text-green-500 font-normal flex-1 px-4 pl-0 truncate">
                      Available Wed, Jul 12
                    </span>
                  </div>
                )}
              </div>
              <div className="inline-flex flex-shrink-0 ml-auto font-semibold">
                <span className="doctor-fee">Rs. {fee}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-3 font-semibold text-lg pr-5">
        <div className="  lg:hidden rounded-md border-2 border-primary-dark p-2 text-sm">
          <div className="flex  font-semibold items-center pb-1">
            <i className="fa fa-video mr-2 text-xs text-primary-dark"></i>
            <span className="truncate block mb-1font-semibold text-primary-dark">
              Online Video Consultation (Online)
            </span>
            <span className="hidden ml-auto flex-shrink-0 pl-2 doctor-fee">
              Rs. {fee}
            </span>
          </div>
          <div className="flex ">
            <div className="truncate font-semibold">
              {status ? (
                <div className="flex flex-wrap  items-center text-available text-decoration-none">
                  <i className="mr-2 fa fa-dot-circle text-green-500 text-xs"></i>
                  <span className="relative flex-grow max-w-full text-green-500 font-normal flex-1 px-4 pl-0 truncate">
                    Available Wed, Jul 12
                    
                  </span>
                </div>
              ) : (
                <div className="flex flex-wrap  items-center text-available text-decoration-none">
                  <i className="mr-2 fa fa-dot-circle text-green-500 text-xs"></i>
                  <span className="relative flex-grow max-w-full text-green-500 font-normal flex-1 px-4 pl-0 truncate">
                    Available Wed, Jul 12
                  </span>
                </div>
              )}
            </div>
            <div className="inline-flex flex-shrink-0 ml-auto font-semibold">
              <span className="doctor-fee">Rs. {fee}</span>
            </div>
          </div>
        </div>

      

        <button 
        className=" border-2 border-primary-light hover:bg-primary-dark text-primary-dark hover:text-white w-64 px-4 py-3 rounded-md">
          Video Consultation
        </button>
        <button
          onClick={() => navigate("/bookappointment")}
          className=" border-2 border-[#fdac16] bg-[#ffae18] text-white hover:bg-[#fdb32b]  w-64 px-4 py-3 rounded-md mr-2"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
