import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { Link } from "react-router-dom";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Largo Corrado Ricci, 37A, 00184, Roma (RM), Italy
        </p>
        <p
          className="p__cormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon - Sun: 09:00 am - 00:00 am</p>
      </div>

      <div>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem", marginRight: "2rem" }}
        >
          Visit Us
        </button>
        <Link
          to={"/review"}
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Leave a review
        </Link>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
