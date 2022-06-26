import React from "react";
import { Link, useParams } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import "./card.css";

function Card({ id, img, title, population, region, capital }) {
  return (
    <>
      <Link
        className="link"
        to={`${id}`}
        style={{ textDecoration: "none", color: "hsl(200, 15%, 8%)" }}
      >
        <div className="boxWrapper">
          <img src={img} alt="countryflag" />
          <div className="flagInfo">
            <h1 className="flagTitle">{title}</h1>
            <p className="population">
              Population: <span>{population}</span>
            </p>
            <p className="region">
              Region: <span>{region}</span>
            </p>
            <p className="capital">
              Captial: <span>{capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
