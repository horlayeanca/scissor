import React from "react";

function Features() {
  return (
    <div>
      <div className="grid gap-2 w-3/4 mx-auto grid-cols-3 py-20">
        <div className="row-span-2">
          <h1 className="font-gilroy text-4xl font-medium">
            One Stop. <br /> Four Possibilites.
          </h1>
          <div className="grid gap-3 grid-cols-2 pt-4">
            <div>
              <h1 className="text-3xl font-gilroy">3M</h1>
              <p className="font-semibld font-gilroy">Active users</p>
            </div>
            <div>
              <h1 className="text-3xl font-gilroy">60M</h1>
              <p className="font-semibld font-gilroy">
                Links & QR codes created
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-gilroy">1B</h1>
              <p className="font-semibld font-gilroy">
                Clicked & Scanned connections
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-gilroy">300K</h1>
              <p className="font-light font-gilroy">App Integrations</p>
            </div>
          </div>
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
