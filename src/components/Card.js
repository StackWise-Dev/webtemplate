import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Card(props) {
  return (
    <div className="col-md-4 col-sm-10 col-10 mx-auto">
      <div className="card mt-3">
        <img
          src={props.image}
          className="card-img-top border-1 border-bottom p-3 mx-auto"
          alt="img"
          style={{height : "250px"}}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="link-button">
            Know more ?
          </a>
        </div>
      </div>
    </div>
  );
}
