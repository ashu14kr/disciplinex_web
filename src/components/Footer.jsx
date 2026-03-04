import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full pt-10">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Left */}
        <p className="text-sm text-gray-500 font-body">© 2026 <Link
            to="/"
            className="hover:text-black transition-colors duration-200 text-gray-500"
          >
            Disciplinex
          </Link></p>

        {/* Links */}
        <div className="flex items-center justify-center md:justify-start gap-3 text-[13px] text-gray-400 font-body tracking-tight">
          <Link
            to="/tos"
            className="hover:text-black transition-colors duration-200 text-gray-500"
          >
            Terms
          </Link>
          <span className="text-gray-500"> . </span>{" "}
          {/* Using a slash for a more modern look */}
          <Link
            to="/privacy"
            className="hover:text-black transition-colors duration-200 text-gray-500"
          >
            Privacy
          </Link>
          <span className="text-gray-500"> . </span>
          <Link
            to="/about"
            className="hover:text-black transition-colors duration-200 text-gray-500"
          >
            About
          </Link>
          <span className="text-gray-500"> . </span>
          <Link
            to="/contact"
            className="hover:text-black transition-colors duration-200 text-gray-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
