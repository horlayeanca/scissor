import React from "react";

function Features() {
  return (
    <div className="">
      <div className="bg-white">
        <div className="flex flex-row justify-center items-center py-16">
          <div>
            <div className="px-6">
              <h1 className="font-gilroy text-4xl font-medium">
                One Stop. <br /> Four{" "}
                <span className="text-blue-600">Possibilites.</span>
              </h1>
            </div>
          </div>
          <div className="flex flex-row gap-12 px-10">
            <div>
              <h1 className="text-3xl font-gilroy">3M</h1>
              <p className="font-semibld font-gilroy">Active users</p>
            </div>
            <div className="">
              <h1 className="text-3xl font-gilroy">60M</h1>
              <p className="font-semibld font-gilroy">
                Links & QR <br /> codes created
              </p>
            </div>
            <div className="">
              <h1 className="text-3xl font-gilroy">1B</h1>
              <p className="font-semibld font-gilroy">
                Clicked & Scanned <br /> connections
              </p>
            </div>
            <div className="">
              <h1 className="text-3xl font-gilroy px-4">300K</h1>
              <p className="font-light font-gilroy px-4">App Integrations</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>Why choose Scissor</h1>
          <p>
            Scissor is the hub of everything that has to do with your link
            management. We shorten your URLs, allow you creating ones for your
            personal, event usage. Our swift QR code creation, management and
            usage tracking with advance analytics for all of these is second to
            none.
          </p>
        </div>
        <div>
          <h1 className="font-gilroy font-semibold text-3xl">URL Shortening</h1>
          <p className="font-gilroy font-semibold text-base">
            Scissor allows yo to shorten URLs of your business, events. Shorten
            your URL at scale, URL redirects.
          </p>
        </div>
        <div>
          <h1 className="font-gilroy font-semibold text-3xl">Custom URLs</h1>
          <p className="font-gilroy font-semibold text-base">
            With Scissor, you can create custom URLs, with the length you want!
            A solution for socials and businesses.
          </p>
        </div>
        <div>
          <h1 className="font-gilroy font-semibold text-3xl">QR Codes</h1>
          <p className="font-gilroy font-semibold text-base">
            Generate QR codes for your business, events, and more. Bring your
            audience and customers to your doorstep with this scan and go
            solution.
          </p>
        </div>
        <div>
          <h1 className="font-gilroy font-semibold text-3xl">Data Analytics</h1>
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