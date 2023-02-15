import React from "react";
import "./home.css";
import {HiPlay} from "react-icons/hi"

const Home = () => {
  return (
    <div className="home base">
      <h1 className="home__title">
        The best use of social <br />
        media marketing
      </h1>
      <p className="home__subtitle">
        Lorem ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque <br />
        tortor. Sed massa sit vehicula in ut id donec urna.Lorem ipsum dolor sit
      </p>
      <div className="btn__container flex">
        <button className="btn__watch">Start 14 days free trial</button>
        <button className="btn__watch btn__play flex">
        <HiPlay className="btn__play__icons"/> Watch a demo
        </button>
      </div>
    </div>
  );
};

export default Home;
