import React from "react";
import "./promote.css";
import video from "../../Images/pexels-rodnae-productions-7414127.mp4";
import social__video from "../../Images/social__video.png";
import video__image from "../../Images/video__img.png";
import { HiPlay } from "react-icons/hi";

const Promote = () => {
  return (
    <div className="promote base ">
      <div className="promote__video__player flex space__between">
        <div className="promote__video">
          <img src={social__video} alt="video__player" />
          <img
            src={video__image}
            alt="video__image"
            className="promote__image"
          />
          <button className="btn__watch promote__btn flex">
            {" "}
            <HiPlay className="btn__play__icons" /> Watch a demo
          </button>
        </div>
        <div>
          <h2>
            The easiest way to <br />
            promote social media
          </h2>
          <h4>Build a community</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
          </p>
          <h4>Video & live streaming</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet{" "}
          </p>
        </div>
      </div>

      <div className="grid question">
        <div>
          <h4>Q.What support and service package are available?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
          </p>
        </div>
        <div>
          <h4>Q.What support and service package are available?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
          </p>
        </div>
        <div>
          <h4>Q.What support and service package are available?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
          </p>
        </div>
        <div>
          <h4>Q.What support and service package are available?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promote;
