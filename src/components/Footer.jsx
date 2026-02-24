import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-16 text-gray-300">
      <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-3">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#1c9bf0]">
            TIJAN <span className="text-base">AT</span>.
          </h1>
          <p className="py-4">
            Telco maintenance ensures reliability and meets tech demands. It
            includes routine checks, repairs, and upgrades to prevent issues and
            service disruptions.
          </p>
          <div className="my-6 flex justify-between md:w-[75%]">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>

        <div className="mt-6 flex justify-between lg:col-span-2">
          <div>
            <h6 className="font-medium text-gray-400">Services</h6>
            <ul>
              <li className="py-2 text-sm">Cell Towers</li>
              <li className="py-2 text-sm">Fiber Optics</li>
              <li className="py-2 text-sm">Data Centers</li>
              <li className="py-2 text-sm">Maintenance</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Company</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1240px] border-t border-white/10 pt-5 text-right text-sm font-semibold text-gray-400">
        <p>
          &copy; {currentYear}, TIJAN AT -{" "}
          <a
            href="https://hzaiman.my"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline hover:underline"
          >
            Powered by Hazim Aiman
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
