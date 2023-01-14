import React, { useState } from "react";

const Card = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="card">
      <div className="text-center">
        <img alt="card-img" src={"../img/"+props.img} className="text-center img-fluid" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
          {isReadMore ? props.description.slice(0, 50) : props.description}
          <span style={{fontWeight: "bold"}} onClick={toggleReadMore} className="read-or-hide">
            {isReadMore ? "...read more" : " show less"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
