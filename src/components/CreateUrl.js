import { React, useState } from "react";
import axios from "axios";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function CreateUrl() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

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
    snapshot.forEach((doc) => {
      doc.data();
    });
  });

  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
    addDoc(colRef, {
      url: url,
      short_link: shortUrl,
      count: 0,
      // date: new Date().toDateString(),
    });
    setUrl("");
  };

  return <div>CreateUrl</div>;
}

export default CreateUrl;
