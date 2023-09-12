import React from "react";

function Analytics({ urls }) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="mt-20 mx-auto text-xl font-gilroy-light font-semibold text-blue-600">
        Analytics
      </h1>
      <table className="w-4/5 border-2 border-red-400 mt-6 mx-auto">
        <th>
          <tr className="w-full flex justify-between text-sm font-gilroy-light font-medium text-blue-600">
            <th className="">Date Created</th>
            <th className="">Long URL</th>
            <th className="">Short URL</th>
            <th className="">Visits</th>
          </tr>
        </th>
        <tbody>
          <tr>
            <td>{urls}</td>
            <td>{urls}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Analytics;
