import React, { useState } from "react";
import './ReadMore.scss';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);

  };
  return (
    <div className="text">
      {isReadMore ? parseInt(text.toString().slice(0, 150)) : text} &nbsp;
  

      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Read more" : " Show less"}
      </span>
    </div>
  );
};
export default ReadMore;