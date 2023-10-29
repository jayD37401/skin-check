import React, { useState } from "react";
import patientImage from "../../assets/doctor.jpg";
import doctorImage from "../../assets/doctor.jpg";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      patientName: "John Smith",
      doctorName: "Dr. John Doe",
      ratings: 4.5,
      description: "Great experience with the doctor.",
      date: "2023-05-10",
    },
    {
      id: 2,
      patientName: "Emma Johnson",
      doctorName: "Dr. Jane Smith",
      ratings: 5,
      description: "Highly recommended!",
      date: "2023-05-15",
    },
    // Add more review objects as needed
  ]);

  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-yellow-400"></i>);
    }

    if (halfStar) {
      stars.push(
        <i key="half" className="fas fa-star-half-alt text-yellow-400"></i>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="fas fa-star "></i>);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg h-full px-4 py-4 sm:px-8 shadow-lg">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700 text-2xl">Reviews List</h2>
          <span className="text-sm text-gray-500">
            View the reviews submitted by patients
          </span>
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary-dark text-left text-base uppercase tracking-widest text-white">
                <th className="px-5 py-3">Patient Name</th>
                <th className="px-5 py-3">Doctor Name</th>
                <th className="px-5 py-3">Ratings</th>
                <th className="px-5 py-3">Description</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              {reviews.map((review) => (
                <tr key={review.id}>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <div className="flex items-center">
                      <div className="h-12 w-12 flex-shrink-0">
                        <img
                          className="h-full w-full rounded-full"
                          src={patientImage}
                          alt="patient"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">
                          {review.patientName}
                        </p>
                      </div>
                    </div>{" "}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <div className="flex items-center">
                      <div className="h-12 w-12 flex-shrink-0">
                        <img
                          className="h-full w-full rounded-full"
                          src={doctorImage}
                          alt="doctor"
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap">
                          {review.doctorName}
                        </p>
                      </div>
                    </div>{" "}
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">
                      <div className="rating">
                        {renderRatingStars(review.ratings)}
                      </div>
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">{review.description}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <p className="whitespace-no-wrap">{review.date}</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-base">
                    <button className="px-2 py-1 bg-red-200 text-red-700 rounded-lg">
                      <i className="fa fa-trash mr-1"></i> Delete
                    </button>
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

export default Reviews;
