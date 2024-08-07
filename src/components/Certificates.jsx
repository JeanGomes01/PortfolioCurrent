import React from "react";
import { certificates } from "../../data";

const Certificates = () => {
  return (
    <>
      {certificates.map(
        ({ img, subtitle, description, institution, url }, certificate) => {
          return (
            <div className="certificates__item" key={certificate}>
              <div className="certificates__img">
                <img src={img} alt="" />
              </div>

              <div className="certificates__info">
                <h3 className="certificates__subtitle">{subtitle}</h3>
                <p className="certificates__description">{description}</p>
                <p className="certificates__institution">{institution}</p>
                <p className="certificates__link">{url}</p>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default Certificates;
