import React from "react";
import image from "../assets/assets/logo-footer.png"

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] mt-20 py-10 px-5 md:px-20">
      {/* Newsletter Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center mx-auto w-full md:w-3/4 lg:w-2/3 relative -top-16">
        <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
        <p className="text-gray-600 mt-2">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-full px-4 py-2 w-full md:w-2/3 focus:outline-none"
          />
          <button className="bg-gradient-to-r from-[#FED7AA] to-[#F43F5E] text-white font-bold px-6 py-2 rounded-full shadow-md">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Content */}

      {/* Logo Section */}
      <div className="text-center flex justify-center md:text-left">
          <img src={image} alt="Cricket Logo"/>
        </div>
      <div className="flex flex-col text-white md:flex-row justify-between items-center mt-8">
        

        {/* Links */}
        <div className="flex justify-around w-full text-left mt-6 md:mt-5">
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-gray-400 mt-1 w-60">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="text-gray-400 space-y-1">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="text-gray-400 mt-1">Subscribe to our newsletter for the latest updates.</p>
            <div className="mt-3 flex items-center border rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full focus:outline-none text-white"
              />
              <button className="bg-gradient-to-r from-[#FED7AA] to-[#F43F5E] text-white font-bold px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-5">
        &copy; 2024 Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
