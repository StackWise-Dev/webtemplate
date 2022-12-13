import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./Card";
import Data from './Data';

export default function Services() {
  return (
    <>
      <div className="container-fluid col-5 mx-auto">
        <h1 className="p-4 text-center border-2 border-bottom"> Services </h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto" style={{height: "70vh", overflowY: "scroll"}}>
            <div className="row">
                {
                    Data.map((values, index) => {
                        return <Card image={values.image} title={values.title} key={index} />
                    })
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
