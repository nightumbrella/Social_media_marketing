import React from "react";
import "./testimonial.css";
import man1 from "../../Images/man1.png";
import girl2 from "../../Images/girl2.png";
import man3 from "../../Images/man3.png";

const Testimonial = () => {
  return (
    <div className="testimonial base">
      <h1>
        Give our users a <br />
        great experience
      </h1>
      <div className="grid testimonial__grid">

        <div>
          <p>
            “Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. “
          </p>
          <div className="flex ">
            <img src={man1} alt="testimonial__man__photo" />
            <div className="flex">
              <h3>Eleanor Pena</h3>
              <p>Ceo</p>
            </div>
          </div>
        </div>

        <div>
          <p>
            “Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. “
          </p>
          <div className="flex ">
            <img src={girl2} alt="testimonial__man__photo" />
            <div  className="flex">
              <h3>Eleanor Pena</h3>
              <p>Ceo</p>
            </div>
          </div>
        </div>

        <div>
          <p>
            “Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. Sed massa sit vehicula in ut id donec
            urna.Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor. “
          </p>
          <div className="flex ">
            <img src={man3} alt="testimonial__man__photo" />
            <div className="flex">
              <h3>Eleanor Pena</h3>
              <p>Ceo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
