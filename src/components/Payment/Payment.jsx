import React, { useState } from "react";
import user from "../../assets/book1.png";

function Payment() {
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    // Perform necessary payment processing here
    // Set the bookingConfirmed state to true after successful payment
    setBookingConfirmed(true);
  };
  return (
    <div className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {bookingConfirmed ? (
          <div className="text-center my-20 mx-auto border-2 border-gray-100 shadow-md rounded-lg  lg:w-1/2 p-10">
            <i className="fas fa-check p-4 text-3xl text-white  bg-green-500 rounded-full"></i>
            <h2 className="text-3xl font-semibold text-green-500 mb-4">
              Booking Successful!
            </h2>
            <p className="text-lg text-gray-700">
              Thank you for booking your appointment. We look forward to seeing
              you.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-2">
              <div className="shadow-lg overflow-hidden sm:rounded-lg bg-white">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Personal Information
                  </h3>
                </div>
                <div className="border-t border-gray-200">
                  <form>
                    <div className="px-4 py-5 sm:p-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="first_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First Name
                          </label>
                          <input
                            id="first_name"
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="last_name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last Name
                          </label>
                          <input
                            id="last_name"
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="text"
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <p className="mt-4 text-sm text-gray-500">
                        Existing Customer?{" "}
                        <a href="#" className="text-indigo-500">
                          Click here to login
                        </a>
                      </p>
                    </div>

                    <div className="px-4 py-5 sm:px-6">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Payment Method
                      </h3>
                    </div>
                    <div className="border-t border-gray-200">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="space-y-4">
                          <div>
                            <label className="inline-flex items-center">
                              <input
                                type="radio"
                                name="payment_method"
                                className="form-radio h-4 w-4 text-indigo-600"
                                checked
                              />
                              <span className="ml-2 text-sm font-medium text-gray-700">
                                Credit card
                              </span>
                            </label>
                          </div>
                          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                              <label
                                htmlFor="card_name"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Name on Card
                              </label>
                              <input
                                id="card_name"
                                type="text"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="card_number"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Card Number
                              </label>
                              <input
                                id="card_number"
                                type="text"
                                placeholder="1234 5678 9876 5432"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="expiry_month"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Expiry Month
                              </label>
                              <input
                                id="expiry_month"
                                type="text"
                                placeholder="MM"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="expiry_year"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Expiry Year
                              </label>
                              <input
                                id="expiry_year"
                                type="text"
                                placeholder="YY"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="cvv"
                                className="block text-sm font-medium text-gray-700"
                              >
                                CVV
                              </label>
                              <input
                                id="cvv"
                                type="text"
                                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-5 sm:px-6">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <input
                            id="terms_accept"
                            type="checkbox"
                            className="form-checkbox h-4 w-4 text-indigo-600"
                          />
                          <label
                            htmlFor="terms_accept"
                            className="ml-2 text-sm font-medium text-gray-700"
                          >
                            I have read and accept{" "}
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-500"
                            >
                              Terms &amp; Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-5 sm:p-6 bg-gray-50 flex justify-end">
                      <button
                        onClick={handlePayment}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Confirm and Pay
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 lg:w-full bg-white  pr-2 pl-2">
              <div className="relative flex flex-col min-w-0 rounded-md  bg-white shadow-lg booking-card">
                <div className="py-3 px-6 mb-0 border-b border-gray-200 text-gray-900">
                  <h4 className="mb-3 text-2xl">Booking Summary</h4>
                </div>
                <div className="flex-auto p-6 gap-3 flex-col flex">
                  <div className="flex gap-4">
                    <img
                      className="w-36 rounded-md"
                      src={user}
                      alt="User Image"
                    />
                    <div className="booking-info flex flex-col gap-2">
                      <h4 className="font-semibold text-lg">Dr. Abaid Daud</h4>
                      <div className="rating">
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star text-yellow-400"></i>
                        <i className="fas fa-star"></i>
                        <span className="inline-block average-rating ml-1">
                          35
                        </span>
                      </div>
                      <div className="clinic-details">
                        <p className="doc-location">
                          <i className="fas fa-map-marker-alt text-red-600 mr-2"></i>
                          Islamabad, Pakistan
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="booking-summary">
                    <div className="booking-item-wrap">
                      <ul className="flex items-center text-lg">
                        <li>
                          Date{" "}
                          <span className="font-semibold mx-1">
                            16 Nov 2019
                          </span>
                        </li>
                        <li>
                          Time{" "}
                          <span className="font-semibold mx-1">10:00 AM</span>
                        </li>
                      </ul>
                      <ul className="booking-fee list-none text-lg py-8 border-b">
                        <li className="grid grid-cols-[3fr_1fr] font-semibold py-2">
                          Consulting Fee{" "}
                          <span className="font-normal text-gray-500 text-right">
                            Rs1000
                          </span>
                        </li>
                        <li className="grid grid-cols-[3fr_1fr] font-semibold py-2">
                          Booking Fee{" "}
                          <span className="font-normal text-gray-500 text-right">
                            Rs500
                          </span>
                        </li>
                        <li className="grid grid-cols-[3fr_1fr] font-semibold py-2">
                          Video Call{" "}
                          <span className="font-normal text-gray-500 text-right">
                            Rs1200
                          </span>
                        </li>
                      </ul>
                      <div className="booking-total flex justify-between items-center font-semibold text-xl py-8">
                        <h4>Total</h4>
                        <span className="font-normal text-cyan-500">
                          Rs2700
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Payment;
