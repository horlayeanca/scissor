import React from "react";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function useFetch() {
  const [isLoading, setIsLoading] = useState(true);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDocs(collection(db, "setShortUrl"));
      setUrls(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div>Loading urls from firebase ...</div>;
  }
  return { isLoading, urls };
}

export default useFetch;
