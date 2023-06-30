import React from "react";
import { ReactComponent as Line } from "../assets/Line.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

function Features() {
  return (
    <div className="">
      <div className="bg-white">
        <div
          className="flex md:flex-row justify-center items-center py-16 px-5
        ml-5 sm:ml-0"
        >
          <div>
            <div className="px-6">
              <h1 className="font-gilroy-light text-4xl font-semibold">
                One Stop. <br /> Four{" "}
                <span className="text-blue-600">Possibilites.</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 px-10">
            <div>
              <h1 className="text-3xl font-gilroy-light font-semibold">3M</h1>
              <p className="font-semibld font-gilroy">Active users</p>
            </div>
            <div className="">
              <h1 className="text-3xl font-gilroy-light font-semibold">60M</h1>
              <p className="font-semibld font-gilroy">
                Links & QR <br /> codes created
              </p>
            </div>
            <div className="">
              <h1 className="text-3xl font-gilroy-light font-semibold">1B</h1>
              <p className="font-semibld font-gilroy">
                Clicked & Scanned <br /> connections
              </p>
            </div>
            <div className="">
              <h1 className="text-3xl font-gilroy-light font-semibold px-4">
                300K
              </h1>
              <p className="font-light font-gilroy px-4">App Integrations</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 py-24 px-6 md:px-40 gap-12">
        <div className="row-span-2">
          <h1 className="text-3xl font-gil font-semibold flex">
            <Line className="inline-block" />
            &nbsp; Why choose
            <span className="text-blue-600"> &nbsp; Scissor</span>
          </h1>
          <p className="font-gilroy text-base font-medium">
            Scissor is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating ones for your
            personal, event usage. Our swift QR code creation, management and
            usage tracking with advance analytics for all of these is second to
            none.
          </p>
        </div>
        <div>
          <div className="bg-blue-100 w-12 h-12 rounded-full flex justify-center items-center">
            <FontAwesomeIcon
              icon={faLink}
              size="lg"
              className="text-slate-800"
            />
          </div>
          <h1 className="font-gilroy font-semibold text-3xl pt-5 pb-2">
            URL Shortening
          </h1>
          <p className="font-gilroy font-semibold text-base">
            Scissor allows yo to shorten URLs of your business, events. Shorten
            your URL at scale, URL redirects.
          </p>
        </div>
        <div>
          <div className="bg-blue-100 w-12 h-12 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
          <h1 className="font-gilroy font-semibold text-3xl pt-5 pb-2">
            Custom URLs
          </h1>
          <p className="font-gilroy font-semibold text-base">
            With Scissor, you can create custom URLs, with the length you want!
            A solution for socials and businesses.
          </p>
        </div>
        <div>
          <div className="bg-blue-100 w-12 h-12 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faQrcode} />
          </div>
          <h1 className="font-gilroy font-semibold text-3xl pt-5 pb-2">
            QR Codes
          </h1>
          <p className="font-gilroy font-semibold text-base">
            Generate QR codes for your business, events, and more. Bring your
            audience and customers to your doorstep with this scan and go
            solution.
          </p>
        </div>
        <div>
          <div className="bg-blue-100 w-12 h-12 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <h1 className="font-gilroy font-semibold text-3xl pt-5 pb-2">
            Data Analytics
          </h1>
          <p className="font-gilroy font-semibold text-base">
            Receive data on the usage of either your shortened URLs, custom URLs
            or generated QR codes. Embedded to monitor progress.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
