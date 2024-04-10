import React from 'react';
import { personalInfo } from '../../data';

const info = () => {
  return (
    <>
      {personalInfo.map(({ title, description }, index) => {
        return (
          <li className="info__item" key={index}>
            <span className="info__title">
              {title}
              <span className="info__description">{description}</span>
            </span>
          </li>
        );
      })}
    </>
  );
};

export default info;
