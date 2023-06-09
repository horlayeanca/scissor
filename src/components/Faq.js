import React from "react";
import { ReactComponent as Line } from "../assets/Line.svg";
import { ReactComponent as VectorI } from "../assets/VectorI.svg";
import { ReactComponent as VectorII } from "../assets/VectorII.svg";
import { ReactComponent as VectorIII } from "../assets/VectorIII.svg";
import { ReactComponent as VectorIV } from "../assets/VectorIV.svg";
import { ReactComponent as VectorV } from "../assets/VectorV.svg";
import { ReactComponent as VectorVII } from "../assets/VectorVII.svg";
import ListItem from "./ListItem";

function Faq() {
  const faqs = [
    {
      id: 1,
      question: "How does URL Shortening work?",
      answer:
        "URL Shortening works by taking a long URL and creating a shorter, condensed version that redirects to the orignal URL. When a user clicks on the shortened link, ther are redirected to the intended destination.",
    },

    {
      id: 2,
      question:
        "Is it necessary to create an account to use the URL Shortening service?",
      answer:
        "No, you can use the URL Shortening service without creating an account. However, if you create an account, you will be able to track your shortened URLs and view analytics.",
    },
    {
      id: 3,
      question: "How do I create a shortened URL?",
      answer:
        "To create a shortened URL, simply paste the long URL into the text box and click the 'Trim URL' button. You can also customize the domain and alias of the shortened URL.",
    },
    {
      id: 4,
      question: "How do I view analytics for my shortened URLs?",
      answer:
        "To view analytics for your shortened URLs, you must create an account. Once you have created an account, you can view analytics for your shortened URLs by clicking on the 'Analytics' tab in the navigation bar.",
    },
    {
      id: 5,
      question: "How do I customize the domain and alias of my shortened URL?",
      answer:
        "To customize the domain and alias of your shortened URL, simply select the domain you would like to use from the dropdown menu and type in the alias you would like to use in the text box.",
    },
    {
      id: 6,
      question: "How do I share my shortened URL?",
      answer:
        "To share your shortened URL, simply copy the URL from the text box and paste it into an email, text message, or social media post.",
    },
    {
      id: 7,
      question:
        "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activities?",
      answer:
        "Yes, the URL shortening service is secure and the shortened links are protected against spam and malicious activities.",
    },
    {
      id: 8,
      question: "What is a QR code and what can it do?",
      answer:
        "A QR code is a type of barcode that can be scanned by a smartphone camera. It can be used to store information such as a URL, contact information, or a calendar event.",
    },
    {
      id: 9,
      question:
        "Is there an API available for integrating the URL shortening service into my application?",
      answer:
        "Yes, there is an API available for integrating the URL shortening service into your application. You can find more information about the API on the documentation page.",
    },
  ];

  return (
    <div>
      <VectorI className="absolute hidden md:block -left-5" />
      <VectorII className="absolute hidden md:block -left-6" />
      <VectorIII className="absolute hidden md:block -left-3" />
      <div className="flex justify-center items-center py-10">
        <h1 className="text-4xl font-gilroy font-bold">
          <Line className="inline-block" />
          &nbsp;FAQs
        </h1>
      </div>
      <ul className="flex flex-col justify-center items-left py-4 px-10 gap-8 mx-auto w-2/3">
        {faqs.map((faq, index) => (
          <ListItem key={index} {...faq} />
        ))}
        <div className="absolute -right-10 py-10">
          <VectorIV className="absolute hidden md:block -right-5" />
          <VectorV className="absolute hidden md:block -right-6" />
          <VectorVII className="absolute hidden md:block right-3" />
        </div>{" "}
      </ul>
    </div>
  );
}

export default Faq;
