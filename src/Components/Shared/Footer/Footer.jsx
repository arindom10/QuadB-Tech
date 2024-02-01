import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Customer Service Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Customer Service</h2>
          <ul className="list-none">
            <li className="mb-2 hover:text-gray-400">Contact Us</li>
            <li className="mb-2 hover:text-gray-400">FAQs</li>
            <li className="mb-2 hover:text-gray-400">Shipping Information</li>
            <li className="mb-2 hover:text-gray-400">Returns & Exchanges</li>
            <li className="mb-2 hover:text-gray-400">Track Order</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Company</h2>
          <ul className="list-none">
            <li className="mb-2 hover:text-gray-400 ">About Us</li>
            <li className="mb-2 hover:text-gray-400">Careers</li>
            <li className="mb-2 hover:text-gray-400">Press</li>
            <li className="mb-2 hover:text-gray-400">Terms of Service</li>
            <li className="mb-2 hover:text-gray-400">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Social Media</h2>
          <ul className="list-none">
            <li className="mb-2 hover:text-gray-400">Facebook</li>
            <li className="mb-2 hover:text-gray-400">Twitter</li>
            <li className="mb-2 hover:text-gray-400">Instagram</li>
            <li className="mb-2 hover:text-gray-400">LinkedIn</li>
            <li className="mb-2 hover:text-gray-400">YouTube</li>
          </ul>
        </div>

        {/* Archive Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Archive</h2>
          <ul className="list-none">
            <li className="mb-2 hover:text-gray-400">2024</li>
            <li className="mb-2 hover:text-gray-400">2023</li>
            <li className="mb-2 hover:text-gray-400">2022</li>
            <li className="mb-2 hover:text-gray-400">2021</li>
            <li className="mb-2 hover:text-gray-400">2020</li>
            <li className="mb-2 hover:text-gray-400">2019</li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <span>@CopyRights2024 By QuadB Tech</span>
      </div>
    </footer>
  );
};

export default Footer;
