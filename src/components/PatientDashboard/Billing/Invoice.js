import React from "react";
import logo from "../../../assets/consultation.jpg";

const Invoice = () => {
  return (
    <div className="bg-white p-2 h-full overflow-y-auto rounded-lg shadow-lg">
      <div className="container  sm:px-4">
        <div className="flex justify-center flex-wrap">
          <div className="w-full md:w-1/2 lg:w-2/3 pr-4 pl-4">
            <div className="invoice-content">
              <div className="flex flex-wrap mb-5">
                <div className="w-full md:w-1/2 pr-4 pl-4">
                  <img className="w-28" src={logo} alt="logo" />
                </div>
                <div className="w-full md:w-1/2 pr-4 pl-4">
                  <p className="text-right mt-5">
                    <strong>Order:</strong> #00124 <br />
                    <strong>Issued:</strong> 20/07/2019
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap mb-5">
                <div className="w-full md:w-1/2 pr-4 pl-4">
                  <div className="invoice-info">
                    <strong className="font-semibold text-xl">
                      Invoice From
                    </strong>
                    <p className="invoice-details">
                      Dr. Darren Elder <br />
                      806 Twin Willow Lane, Old Forge, <br />
                      Newyork, USA <br />
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 pr-4 pl-4">
                  <div className="invoice-info text-right">
                    <strong className="font-semibold text-xl">
                      Invoice To
                    </strong>
                    <p className="invoice-details">
                      Walter Roberson <br />
                      299 Star Trek Drive, Panama City, <br />
                      Florida, 32405, USA <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mb-5">
                <div className="w-full pr-4 pl-4">
                  <div className="invoice-info">
                    <strong className="font-semibold text-lg">
                      Payment Method
                    </strong>
                    <p className="invoice-details">
                      Debit Card <br />
                      XXXXXXXXXXXX-2541 <br />
                      HDFC Bank
                    </p>
                  </div>
                </div>
              </div>

              <div className="invoice-item invoice-table-wrap">
                <div className="block w-full overflow-x-auto scrolling-touch">
                  <table className="invoice-table w-full max-w-full mb-4 bg-transparent border">
                    <thead>
                      <tr>
                        <th className="text-left pl-5">Description</th>
                        <th className="text-center">Quantity</th>
                        <th className="text-center">VAT</th>
                        <th className="text-right pr-5">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-left pl-5">General Consultation</td>
                        <td className="text-center">1</td>
                        <td className="text-center">$0</td>
                        <td className="text-right pr-5">$100</td>
                      </tr>
                      <tr>
                        <td className="text-left pl-5">Video Call Booking</td>
                        <td className="text-center">1</td>
                        <td className="text-center">$0</td>
                        <td className="text-right pr-5">$250</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 pr-4 pl-4 ms-auto">
                  <div className="block w-full overflow-x-auto scrolling-touch">
                    <table className="invoice-table-two w-full max-w-full mb-4 bg-transparent border">
                      <tbody>
                        <tr>
                          <th>Subtotal:</th>
                          <td>
                            <span>$350</span>
                          </td>
                        </tr>
                        <tr>
                          <th>Discount:</th>
                          <td>
                            <span>-10%</span>
                          </td>
                        </tr>
                        <tr>
                          <th>Total Amount:</th>
                          <td>
                            <span>$315</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-lg">Other information</h4>
                <p className="text-gray-700 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget
                  metus non tellus dignissim aliquam ut a ex. Maecenas sed
                  vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem
                  interdum, eu scelerisque tellus fermentum. Curabitur sit amet
                  lacinia lorem. Nullam finibus pellentesque libero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
