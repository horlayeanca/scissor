import React from "react";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function Urls() {
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
  return (
    <div>
      <div className="flex w-full">
        <table className="w-3/4 mx-auto">
          <thead>
            <tr>
              <th>Original Link</th>
              <th>Short Link</th>
              <th>Clicks</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {urls.map((url) => {
              return (
                <tr key={url.id}>
                  <td>{url.url}</td>
                  <td>{url.result}</td>
                  <td>{url.count}</td>
                  <td>{url.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Urls;
