import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Contatct() {
    
    let [data, setData] = useState({
        fullName: "",
        contact: "",
        email: "",
        summary: "",
    });

    let changeEvent = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setData((oldValue) => {
            return {
                ...oldValue,
                [name] : value,
            }
        });
    }

    let submitFunction = (e) => {
        e.preventDefault();
        alert("Your name is: " + data.fullName + "\nYour contact is: " + data.contact + "\nYour email is: " + data.email + "\nYour message is: " + data.summary);
    }

  return (
    <>
      <div className="col-6 mx-auto mt-5 text-center border-2 border-bottom">
        <h1>Contact US</h1>
      </div>
      <div className="col-8 mx-auto mt-5">
        <form onSubmit={submitFunction}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mt-3 p-3"
            name="fullName"
            id="fname"
            placeholder="Enter your name"
            onChange={changeEvent}
            value={data.fullName}
            required
          />
          <input
            type="text"
            className="form-control mt-3 p-3"
            name="contact"
            id="contact"
            placeholder="Enter mobile number"
            onChange={changeEvent}
            value={data.contact}
            required
            />
          <input
            type="email"
            name="email"
            className="form-control mt-3 p-3"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={changeEvent}
            value={data.email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter your opinions...
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            name="summary"
            onChange={changeEvent}
            value={data.summary}
          ></textarea>
          <button type="submit" className="link-button mt-5 mx-auto border-0">
            Send
          </button>
        </div>
        </form>
      </div>
    </>
  );
}
