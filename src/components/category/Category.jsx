import React from "react";
import "./category.css";
import digital from "../../Images/marketing__img.png";
import social from "../../Images/social__strategy__img.png";
import search from "../../Images/search__engine__img.png";
import target from "../../Images/target__img.png";
import follow from "../../Images/search__sofware.png";
import { BsArrowRight } from "react-icons/bs";

const Category = () => {
  return (
    <div className="cat base">
      <div className="cat__head flex space__between">
        <h2>
          Take the lead in smartly <br />
          social media marketing
        </h2>
        <p className="cat__head__subtitle">
          Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
          pellentesque tortor. Sed massa sit vehicula in ut id donec urna.Lorem
          ipsum dolor sit amet consectetur. Cras feugiat massa pellentesque
          tortor. Sed massa sit vehicula in ut id donec urna.
        </p>
      </div>

      <div className="cat__grid grid">
        <div className="cat__grid__items">
          <img src={digital} alt="digital__marketing" />
          <h3>Digital marketing plan</h3>
          <p className="cat__grid__subtitle">
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras
          </p>
          <button className="flex">
            Discover more <BsArrowRight className="arrow" />
          </button>
        </div>

        <div className="cat__grid__items">
          <img src={social} alt="digital__marketing" />
          <h3>Digital marketing plan</h3>
          <p className="cat__grid__subtitle">
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras
          </p>
          <button className="flex">
            Discover more <BsArrowRight className="arrow" />
          </button>
        </div>

        <div className="cat__grid__items">
          <img src={search} alt="digital__marketing" />
          <h3>Digital marketing plan</h3>
          <p className="cat__grid__subtitle">
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras
          </p>
          <button className="flex">
            Discover more <BsArrowRight className="arrow" />
          </button>
        </div>
      </div>

      <div className="social__user flex space__between">
        <img src={target} alt="" />
        <div>
          <h2>
            Bring your target users <br />
            tigether on social media
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet{" "}
          </p>
        </div>
      </div>

      <div className="social__follow flex space__between">
        <div>
          <h2>
            Build your bran & reach <br />
            out to social followers
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec urna.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet
          </p>
        </div>
      <img src={follow} alt="follow__photo" />
      </div>
    </div>
  );
};

export default Category;
