import React from "react";
import img1 from "../../images/brand1.png";
import img2 from "../../images/brand2.png";
import img3 from "../../images/brand3.png";
import img4 from "../../images/brand4.png";
import img5 from "../../images/brand5.png";
import img6 from "../../images/brand6.png";

const Brands = () => {
  return (
    <div>
      <h1 className="text-center fw-bolder pt-3">TRANSPORT AGENCY</h1>
      <div className="container justify-content-around text-center">
        <img src={img1} alt="..." />
        <img src={img2} alt="..." />
        <img src={img3} alt="..." />
        <img src={img4} alt="..." />
        <img src={img5} alt="..." />
        <img src={img6} alt="..." />
      </div>
    </div>
  );
};

export default Brands;
