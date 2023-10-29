import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import doc1 from "../../assets/doctor.jpg";
import doc2 from "../../assets/bookappointment.png";
import Axios from "axios";
console.log("in first step");
let Doctor1;



const DoctorsPage = () => {
  
  const [doctorEmail, setDoctorEmail] = useState(null);
  const [doctorEmail2, setDoctorEmail2] = useState(null);
  const [doctorEmail3, setDoctorEmail3] = useState(null);
  const [doctorEmail4, setDoctorEmail4] = useState(null);
  const [doctorEmail5, setDoctorEmail5] = useState(null);





  const [showMore, setShowMore] = useState(false);

  Axios.post('http://localhost:3002/patients_fetch', {
  // email: email,
  // password: password,
}).then((response) => {
  console.log("second step");

  if (response.data.message) {
    Doctor1 = response.data[1].email;
    // console.log(Doctor1); // Now Doctor1 has a value
  } else {
    setDoctorEmail(response.data[0].name);
    setDoctorEmail2(response.data[1].name);
    setDoctorEmail3(response.data[2].name);
    setDoctorEmail4(response.data[3].name);
    setDoctorEmail5(response.data[4].name);





    console.log("yes");
  }

  // You can perform other actions that rely on Doctor1 here
});

  const handleLoadMore = () => {
    setShowMore(true);
  };
  
  const getDoctorCards = () => {
     // e.preventDefault();
    const allDoctors = [
      {
        name: doctorEmail,
        education: "MBBS, MD (Dermatology)",
        experience: 10,
        rating: 4.5,
        fee: 1000,
        image: doc1,
        status: true,
      },
      {
        name: doctorEmail2,
        education: "MBBS, MS (Dermatology)",
        experience: 8,
        rating: 4.8,
        status: true,
        image: doc2,
        fee: 1000,
      },
      {
        name: doctorEmail3,
        education: "MBBS, MD (Dermatology)",
        experience: 10,
        status: true,
        rating: 4.5,
        image: doc1,
        fee: 1000,
      },
      {
        name: doctorEmail4,
        education: "MBBS, MS (Dermatology)",
        experience: 8,
        status: true,
        rating: 4.8,
        fee: 1000,
        image: doc2,
      },
      {
        name: doctorEmail5,
        education: "MBBS, MD (Dermatology)",
        experience: 10,
        fee: 1000,
        status: true,
        rating: 4.5,
        image: doc1,
      },
      {
        name: "Dr. Ali Hassan",
        education: "MBBS, MS (Dermatology)",
        experience: 8,
        rating: 4.8,
        fee: 1200,
        status: true,
        image: doc2,
      },
      // Add more doctors as needed
    ];

    if (showMore) {
      return allDoctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          name={doctor.name}
          education={doctor.education}
          experience={doctor.experience}
          rating={doctor.rating}
          image={doctor.image}
          fee={doctor.fee}
          status={doctor.status}
        />
      ));
    } else {
      return allDoctors
        .slice(0, 3)
        .map((doctor, index) => (
          <DoctorCard
            key={index}
            name={doctor.name}
            education={doctor.education}
            experience={doctor.experience}
            fee={doctor.fee}
            rating={doctor.rating}
            image={doctor.image}
            status={doctor.status}
          />
        ));
    }
  };

  return (
    <div className="bg-gray-100 h-full">
      <main>
        <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-primary-dark text-center mb-20 sm:text-5xl md:text-6xl">
            Meet Our Doctors
          </h1>
          <div className="grid lg:grid-flow-row gap-6 mb-8">
            {getDoctorCards()}
          </div>
          {!showMore && (
            <div className="flex w-full ">
              <button
                className=" bg-indigo-100 border border-dashed border-primary-dark w-full text-primary-dark font-semibold   py-4 rounded-md"
                onClick={handleLoadMore}
              >
                <i className="fa fa-angle-double-down text-sm mr-2 "></i>
                Load More Doctors
              </button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default DoctorsPage;
