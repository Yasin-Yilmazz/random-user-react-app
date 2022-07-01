import React from "react";
import "./Card.css";

import phoneIcon from "../../assets/217887.png";
import mailIcon from "../../assets/mail.png";
import locationIcon from "../../assets/location.png";

const Card = (user) => {
  // const {
  //   name: { title, first, last },
  // } = user;
  // console.log(first);
  const {
    name: { title, first, last },
    picture: { medium },
    location: { city, country },
    dob: { age },
    registered: { date },
    email,
    phone,
  } = user;

  return (
    <div className="content">
      <div className="image">
        <img src={medium} alt="" />
      </div>
      <h3>
        <span>{title}</span> <span>{first}</span> <span>{last}</span>
      </h3>
      <div className="svg">
        <img className="icon" src={mailIcon} alt="email" />
      </div>
      <h4>{email}</h4>
      <div className="svg">
        <img className="icon" src={phoneIcon} alt="email" />
      </div>
      <h4>{phone}</h4>
      <div className="svg">
        <img className="icon" src={locationIcon} alt="email" />
      </div>
      <h4>
        <span>{country}</span> <span>{city}</span>
        <h4 className="age mt-2">Age: {age}</h4>
        <h4 className="regdate mt-2">Register Date: {date.substring(0, 10)}</h4>
      </h4>
    </div>
  );
};

export default Card;
