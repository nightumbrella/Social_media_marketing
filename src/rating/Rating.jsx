import React from "react";
import "./rating.css";

const Rating = () => {
  return (
    <div className="base rating flex space__between">
        <p>
          <span>15</span>
          Years of experience
        </p>
        <p>
          <span>36K</span>
          Social followers
        </p>
        <p>
          <span>6428</span>
          Project completed
        </p>
        <p>
          <span>92K</span>
          Social profiles
        </p>
    </div>
  );
};

export default Rating;
