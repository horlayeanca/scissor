import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as VectorXIV } from "../assets/VectorXIV.svg";
import { ReactComponent as VectorXV } from "../assets/VectorXV.svg";
import { ReactComponent as VectorXVI } from "../assets/VectorXVI.svg";
import { ReactComponent as VectorXVII } from "../assets/VectorXVII.svg";
import { ReactComponent as VectorXVIII } from "../assets/VectorXVIII.svg";
import { ReactComponent as VectorXIX } from "../assets/VectorXIX.svg";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

function Footer() {
  return (
    <div className="pt-20 pb-10">
      <VectorXIV className="hidden md:flex absolute left-0 mt-[205px]" />
      <VectorXV className="hidden md:flex absolute left-0 mt-[130px]" />
      <VectorXVI className="hidden md:flex absolute left-0 mt-[20px]" />
      <VectorXVII className="hidden md:flex absolute right-0 mt-[265px]" />
      <VectorXVIII className="hidden md:flex absolute right-0 mt-[240px]" />
      <VectorXIX className="hidden md:flex absolute right-0 mt-[186px]" />
      <div className="md:px-5">
        <div className="grid md:grid-cols-5 grid-cols-3 gap-x-2 px-3 md:gap-x-10 gap-y-0 md:px-28 justify-center">
          <div className="row-span-2">
            <div className="flex pt-2 flex-nowrap">
              <Logo className="flex " />{" "}
              <h1 className="font-gilroy-light text-sm md:text-lg font-bold">
                {" "}
                &nbsp;| SCISSOR
              </h1>
            </div>
            <div className="flex px-2 py-5">
              <BsTwitter className="text-[#000000] text-2xl" />
              <FiInstagram className="text-2xl" />
              <AiFillLinkedin className="text-2xl" />
              <AiFillFacebook className="text-2xl" />
            </div>
          </div>
          <div className="">
            <h3 className="font-gilroy-light text-base font-bold py-3">
              Why Scissor ?
            </h3>
            <ul className="font-gilroy text-base font-normal">
              <li>Scissor 101</li>
              <li>Integrations & API</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-gilroy-light text-base font-bold py-3">
              Solutions
            </h3>
            <ul className="font-gilroy text-base font-normal">
              <li>Social Media</li>
              <li>Digital Marketing</li>
              <li>Customer Service</li>
              <li>For Developers</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-gilroy-light text-base font-bold py-3">
              Products
            </h3>
            <ul className="font-gilroy text-base font-normal">
              <li>Link Management</li>
              <li>QR Codes</li>
              <li>Link-in-bio</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-gilroy-light text-base font-bold py-3">
              Company
            </h3>
            <ul className="font-gilroy text-base font-normal">
              <li>About Scissor</li>
              <li>Careers</li>
              <li>Patners</li>
              <li>Press</li>
              <li>Contact</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-gilroy-light text-base font-bold py-3">
              Resources
            </h3>
            <ul className="font-gilroy text-base font-normal">
              <li>Blog</li>
              <li>Resource Library</li>
              <li>Developers</li>
              <li>App Connectors</li>
              <li>Support</li>
              <li>Trust Center</li>
              <li>Browser Extension</li>
              <li>Mobile App</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-gilroy-light text-base font-bold py-3">
              Features
            </h3>
            <ul className="font-gilroy text-base font-normal">
              <li>Branded Links</li>
              <li>Mobile Links</li>
              <li>Campaign</li>
              <li>Management & Analytics</li>
              <li>QR Code generation</li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-gilroy-light text-base font-bold py-3">
              Legal
            </h3>
            <ul className="font-gilroy text-base font-normal">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Terms of Service</li>
              <li>Acceptable Use Policy</li>
              <li>Code of Conduct</li>
            </ul>
          </div>
        </div>
        <div className="md:text-right text-center pr-0 md:pr-20">
          <h3 className="font-gilroy text-base font-medium">
            Term of Service | Security | Scissor 2023
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
