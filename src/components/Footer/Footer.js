import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-light text-white py-16">
      <div className="container mx-auto flex items-center justify-between   flex-wrap">
        <div className="w-full md:w-4/12 px-4 ">
          <h3 className="font-medium text-2xl mb-2">Skin Check AI</h3>
          <p className="text-sm text-justify">
            Book your appointment with top dermatologists and specialists to
            receive personalized skin treatment and recommendations. Our
            platform connects you with experienced doctors who specialize in
            dermatology, ensuring you get the best care for your skin health.{" "}
          </p>
        </div>
        <div className="w-full md:w-4/12 px-4">
          <h3 className="font-medium text-lg mb-2">Quick links</h3>
          <ul className="list-unstyled text-sm">
            <li className="mb-2">
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="text-white">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="/about" className="text-white">
                Health Blogs
              </a>
            </li>
            <li className="mb-2">
              <a href="/contact" className="text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-4/12 px-4">
          <h3 className="font-medium text-lg mb-2">Contact Us</h3>
          <ul className="list-unstyled text-sm">
            <li className="mb-2">
              <a href="#" className="text-white">
                Email: info@skincheckai.com
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white">
                Tel: +1 123-456-7890
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white">
                Facebook: Skin Check AI
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white">
                Instagram: @skincheckai
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center py-2">
        <p className="text-xs">© 2023 Skin Check AI. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
