import React from "react";
import { ReactComponent as Line } from "../assets/Line.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

function Pricing() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-3/6 mx-auto px-8 py-12">
        <h1 className="text-4xl font-gilroy font-bold">
          <Line className="inline-block" size="lg" /> A{" "}
          <span className="text-blue-600">price perfect</span> for your needs.
        </h1>
        <p className="text-center font-gilroy text-sm font-medium px-10">
          From catering for your personal, business, event, social needs, you
          can be rest assured we have you in mind in our pricing.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="border-2 border-blue-200 border-r-0 rounded-s-xl px-16 py-8 font-gilroy">
          <h2 className="text-2xl font-medium pb-3">Basic</h2>
          <h1 className="text-4xl font-bold py-2">Free</h1>
          <p className="text-xl font-medium py-1">Free plan for all users</p>
          <ul className="text-sm font-medium py-2 leading-7">
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#005ae2" }}
              />{" "}
              Unlimited URL Shortening
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#005ae2" }}
              />{" "}
              Basic Link Analytics
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#005ae2" }}
              />{" "}
              Customized Short Links
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#005ae2" }}
              />{" "}
              Standard Support
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#005ae2" }}
              />{" "}
              Ad-supported
            </li>
          </ul>
        </div>
        <div className="rounded-xl px-16 py-24 font-gilroy bg-gradient-to-b from-secondary to-secondary text-white">
          <h2 className="text-2xl font-medium pb-3">Profssional</h2>
          <h1 className="text-4xl font-black py-2">$15/month</h1>
          <p className="text-xl font-medium py-1">
            Ideal for business creators
          </p>
          <ul className="text-sm font-medium py-2 leading-9">
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#f4f7fb" }}
              />
              {"  "}
              Enhanced Link Analytics
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#f4f7fb" }}
              />
              {"  "}
              Custom Branded Domains
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#f4f7fb" }}
              />
              {"  "}
              Advanced Link Customization
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#f4f7fb" }}
              />
              {"  "}
              Priority Support
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#f4f7fb" }}
              />
              {"  "}
              Ad-free Experience
            </li>
          </ul>
        </div>
        <div className="border-2 border-blue-200 border-l-0 rounded-e-xl w-auto px-16 py-8 font-gilroy">
          <h2 className="text-2xl font-medium pb-3">Teams</h2>
          <h1 className="text-4xl font-bold py-2">$25/month</h1>
          <p className="text-xl font-medium py-1">Share with up to 10 users</p>
          <ul className="text-sm font-medium py-2 leading-7">
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#005ae2" }}
              />{" "}
              Team Collation
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#005ae2" }}
              />{" "}
              User Roles and Permissions
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#005ae2" }}
              />{" "}
              Enhanced Security
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#005ae2" }}
              />{" "}
              API Access
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="sm"
                style={{ color: "#005ae2" }}
              />{" "}
              Dedicated Account Manager
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 pb-8">
        <button className="text-blue-600 bg-white border-2 border-blue-300 font-gilroy font-bold text-sm px-10 py-2 rounded-full mt-16 hover:bg-gradient-to-br from-blue-600 to-green-400 duration-200 hover:text-white">
          Get Custom Pricing
        </button>
        <button className="bg-blue-600 border-2 border-blue-600 text-white font-gilroy font-bold text-sm px-10 py-2 rounded-full mt-16 hover:bg-gradient-to-br from-green-300 to-blue-400 duration-200 hover:text-white">
          Select Pricing
        </button>
      </div>
    </div>
  );
}

export default Pricing;
