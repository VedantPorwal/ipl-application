import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h2 className="text-lg font-bold mb-2">Live Cricket Score</h2>
          <p className="text-sm text-gray-400">
            The ultimate destination for cricket fans to stay updated with live
            scores, team standings, and match schedules.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="#" className="hover:text-white">
                Live Scores
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Schedule
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Teams
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Stats
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                News
              </a>
            </li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
          <div className="flex space-x-4 text-xl mb-2">
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-600">
              <FaYoutube />
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Download our mobile app for a better experience
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        © 2025 Live Cricket Score. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
