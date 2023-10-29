import React from "react";
import appointmentImg from "../../assets/book1.png";
import consultation from "../../assets/consultation.png";
import homepage from "../../assets/homepage.png";
import { useNavigate } from "react-router-dom";
import general from "../../assets/general.png";
import pediatric from "../../assets/pediatric.png";
import cosmetic from "../../assets/botox.png";
import syringe from "../../assets/svgs/surgeon.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="pb-20 bg-slate-50">
      <main className="bg-gradient-to-r relative  from-cyan-500 overflow-hidden object-cover bg-no-repeat to-primary-dark lg:h-[70vh] py-20 flex  flex-col justify-center items-center rounded-br-[100px] lg:rounded-br-[350px] mb-10">
        <section className="max-w-7xl lg:mr-20  flex flex-wrap bg-no-repeat justify-center lg:justify-start   items-center ">
          <div className="w-full sm:w-1/2">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
                Say No To Skin Diseases!{" "}
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-white sm:mt-4">
                Say No To Skin Diseases!
                <br />
                Get personalized skin health analysis and recommendations using
                SkinCheck AI.
              </p>
              <div className="mt-10 max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="relative w-full sm:w-auto">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full sm:w-96 bg-white border border-gray-300 px-4 py-4 rounded-r-[0px] rounded-md text-sm text-gray-700 focus:outline-none focus:ring-primary focus:border-primary"
                  />
                </div>
                <button className="ml-4 mt-3 sm:mt-0 sm:ml-0 sm:rounded-md sm:w-auto px-6 py-3 text-base sm:rounded-l-[0px] font-medium text-white bg-primary-dark hover:bg-primary-light rounded-md focus:outline-none">
                  Search
                </button>
              </div>
            </div>
          </div>
          {/* <div
            className="absolute top-0 w-12 left-0"
            style={{ backgroundImage: `url(${homepage})` }}
          ></div> */}
          <div className="w-full hidden lg:block absolute -bottom-1 right-0  sm:w-1/2">
            <img
              src={homepage}
              alt="doctor skincheckai"
              className="  w-[35rem] h-auto"
            />
          </div>
        </section>
      </main>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 bg-slate-50">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center">
          <div className="bg-white overflow-hidden shadow-lg rounded-lg flex items-center">
            <img
              src={appointmentImg}
              alt="Book an Appointment"
              className="h-32 w-32 lg:h-52 lg:w-52 object-cover rounded-l-lg"
            />
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-primary-dark">
                Book an Appointment
              </h3>
              <div className="mt-2 sm:flex sm:flex-row flex flex-col sm:items-start sm:justify-between">
                <p className="text-sm text-gray-700">
                  Book an appointment with our dermatologists for a skin checkup
                  and consultation.
                </p>
                <span
                  onClick={() => navigate("/doctors")}
                  className="mt-4 sm:mt-0 sm:ml-4 text-center text-sm font-medium text-white bg-primary-dark rounded-md px-4 py-2 hover:bg-primary-light cursor-pointer"
                >
                  Book Now
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden items-center shadow-lg rounded-lg flex">
            <img
              src={consultation}
              alt="Start Consulting"
              className="h-32 w-32 lg:h-52 lg:w-52 object-cover rounded-l-lg"
            />
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-primary-dark">
                Start Consulting
              </h3>
              <div className="mt-2 sm:flex sm:flex-row flex flex-col sm:items-start sm:justify-between">
                <p className="text-sm text-gray-700">
                  Connect with our dermatologists for a virtual consultation and
                  get personalized advice for your skin concerns.
                </p>
                <span
                  onClick={() => navigate("/doctors")}
                  className="mt-3 sm:mt-0 sm:ml-4 text-sm text-center font-medium text-white bg-primary-dark rounded-md px-4 py-2 hover:bg-primary-light cursor-pointer"
                >
                  Start Now
                </span>
              </div>
            </div>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-sem text-center mb-10">
              Find Doctors by health concern
            </h2>
            <div className="grid text-s grid-cols-1 font-semibold  md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="flex flex-col gap-3 items-center">
                <img
                  className="w-20 bg-[#3bc5ce] shadow-xl  p-4  rounded-full"
                  src={pediatric}
                />
                <p className="text-gray-600">Pediatric Dermatology</p>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <img
                  className="w-20 bg-[#3bc5ce] shadow-xl  p-4  rounded-full"
                  src={cosmetic}
                />
                <p className="text-gray-600">Cosmetic Dermatology</p>
              </div>
              <div className="flex flex-col gap-3 items-center">
                <img
                  className="w-20 bg-[#3bc5ce] p-4 rounded-full "
                  src={general}
                />

                <p className="text-gray-600">General Dermatology</p>
              </div>

              <div className="flex flex-col gap-3 items-center">
                <img
                  className="w-20 bg-[#3bc5ce] shadow-xl  p-4  rounded-full"
                  src={syringe}
                />
                <p className="text-gray-600">Surgical Dermatology</p>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-4">
            Discover Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-primary-dark">
                  Skin Analysis
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Get a detailed analysis of your skin condition using our
                  advanced AI technology.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-primary-dark">
                  Product Recommendations
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Receive personalized recommendations for skincare products
                  that suit your skin type and concerns.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow-lg rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-primary-dark">
                  Expert Consultation
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Consult with our professional dermatologists to address your
                  skin-related questions and concerns.
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default HomePage;
