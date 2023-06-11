import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { ReactComponent as Facebook } from "../assets/Facebook.svg";
import { ReactComponent as Twitter } from "../assets/Twitter.svg";
import { ReactComponent as Linkedin } from "../assets/Linkedin.svg";
import { ReactComponent as VectorXIV } from "../assets/VectorXIV.svg";
import { ReactComponent as VectorXV } from "../assets/VectorXV.svg";
import { ReactComponent as VectorXVI } from "../assets/VectorXVI.svg";
import { ReactComponent as VectorXVII } from "../assets/VectorXVII.svg";
import { ReactComponent as VectorXVIII } from "../assets/VectorXVIII.svg";
import { ReactComponent as VectorXIX } from "../assets/VectorXIX.svg";

function Footer() {
  return (
    <div className="pt-20 pb-10">
      <VectorXIV className="absolute left-0 mt-[205px]" />
      <VectorXV className="absolute left-0 mt-[130px]" />
      <VectorXVI className="absolute left-0 mt-[20px]" />
      <VectorXVII className="absolute right-0 mt-[265px]" />
      <VectorXVIII className="absolute right-0 mt-[240px]" />
      <VectorXIX className="absolute right-0 mt-[186px]" />
      <div className="px-5">
        <div className="grid grid-cols-5 gap-x-10 gap-y-0 px-28 justify-center">
          <div className="row-span-2 px-6">
            <div className="flex pt-2">
              <Logo className="flex items-baseline" />{" "}
              <h1 className="font-gilroy-light text-lg font-bold">
                {" "}
                &nbsp;| SCISSOR
              </h1>
            </div>
            <div className="flex justify-between py-5">
              <Twitter className="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <Linkedin className="" />
              <Facebook className="" />
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
        <div className="text-right pr-20">
          <h3 className="font-gilroy text-base font-medium">
            Term of Service | Security | Scissor 2023
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
