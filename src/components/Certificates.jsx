import React from "react";

const Certificates = ({ img, subtitle, description, institution, url }) => {
  return (
    <div className="certificates__item">
      <img src={img} alt="" className="certificates__img" />

      <div className="certificates__info">
        <h3 className="certificates__subtitle">{subtitle}</h3>
        <p className="certificates__description">{description}</p>
        <p className="certificates__institution">{institution}</p>
        <p className="certificates__link">{url}</p>
      </div>
    </div>
  );
};

export default Certificates;
