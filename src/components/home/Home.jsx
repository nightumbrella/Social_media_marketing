import React from "react";
import "./home.css";
import {HiPlay} from "react-icons/hi"

const Home = () => {
  return (
    <div className="home">
      <h1>
        The best use of social <br />
        media marketing
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque
        tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit
      </p>
      <div className="btn__container">
        <button className="btn__watch">Start 14 days free trial</button>
        <button className="btn__watch btn__play">
        <HiPlay className="btn__play__icons"/> Watch a demo
        </button>
      </div>
    </div>
  );
};

export default Home;
