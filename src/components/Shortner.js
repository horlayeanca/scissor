import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as VectorIV } from "../assets/VectorIV.svg";
import { ReactComponent as VectorV } from "../assets/VectorV.svg";
import { ReactComponent as VectorVII } from "../assets/VectorVII.svg";
import { ReactComponent as VectorVIII } from "../assets/VectorVIII.svg";
import { ReactComponent as VectorIX } from "../assets/VectorIX.svg";
import { ReactComponent as VectorX } from "../assets/VectorX.svg";
import axios from "axios";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Shortner() {
  const [url, setUrl] = React.useState("");
  const [shortUrl, setShortUrl] = React.useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      );
      setShortUrl(data.result.full_short_link);
    } catch (error) {
      alert(error);
    }
  };

  const colRef = collection(db, "setShortUrl");
  getDocs(colRef).then((snapshot) => {
    snapshot.forEach((doc) => {});
  });

  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
    addDoc(colRef, {
      url: url,
      result: shortUrl,
    });

    setUrl("");
  };

  return (
    <div className="flex justify-center items-center bg-secondary py-20">
      <VectorVIII className="absolute left-0 -mt-[194px]" />
      <VectorIX className="absolute left-0 -mt-[230px]" />
      <VectorX className="absolute left-0 -mt-[273px]" />
      <VectorIV className="absolute right-0 mt-[152px]" />
      <VectorV className="absolute right-0 mt-[134px]" />
      <VectorVII className="absolute right-0 mt-[80px]" />
      <div className="border-2 rounded-xl flex flex-col justify-center items-center p-11 gap-5 w-1/3 bg-white">
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste URL here..."
            className="border-2 border-blue-200 rounded-xl w-96 px-4 py-2 font-gilroy text-black focus:outline-blue-400"
          />
          <div className="flex gap-2">
            <select
              type="select"
              className="border-2 border-blue-200 px-4 py-2 rounded-xl font-gilroy text-sm text-blue-400 focus:outline-blue-400"
            >
              <option value="Customize">Customize domain</option>
              <option value="scissor.co">Scissor.com</option>
              <option value="Customize">Enter domain</option>
              <option value="Customize">Add domain</option>
              Customize domain
            </select>
            <input
              type="text"
              placeholder="Type Alias here"
              className="border-2 border-blue-200 px-3 py-2 rounded-xl font-gilroy focus:outline-blue-400"
            />
          </div>
          <button
            onClick={handleClick}
            className="bg-blue-600 py-2 w-full rounded-full text-white font-gilroy font-semibold text-sm hover:bg-blue-500 duration-200"
          >
            Trim URL &nbsp;{" "}
            <FontAwesomeIcon
              icon={faHandScissors}
              style={{ color: "#f4f5f5" }}
            />
          </button>
          <p className="text-center font-gilroy font-medium">{shortUrl}</p>
          <p className="font-gilroy text-blue-500 text-sm font-medium text-center ">
            By clicking Trim URL, I agree to the{" "}
            <span className="font-bold text-base text-blue-600">
              {" "}
              Terms of Service, Privacy Policy
            </span>{" "}
            and use of Cookies.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Shortner;
