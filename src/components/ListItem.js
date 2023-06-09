import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ListItem(faq) {
  const [display, setDisplay] = useState(false);
  const toggleDisplay = (faqs) => {
    setDisplay(!display);
  };
  return (
    <li>
      <div className="flex justify-between items-left flex-col leading-9 border-b-2">
        <h2
          onClick={toggleDisplay}
          className="text-xl font-gilroy font-bold leading-9 flex justify-between cursor-pointer pb-2"
        >
          {faq.question}
          {display && faq.id ? (
            <FontAwesomeIcon icon={faMinus} />
          ) : (
            <FontAwesomeIcon icon={faPlus} />
          )}
        </h2>
        <span className="flex justify-center items-center">
          {display && (
            <p className="text-base pb-3 font-gilroy font-medium">
              {faq.answer}
            </p>
          )}
        </span>
      </div>
    </li>
  );
}

export default ListItem;
