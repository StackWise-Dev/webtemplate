import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

export default function HomeAbout(props) {
  return (
    <div className="container-fluid position-absolute top-50 start-50 translate-middle" >
        <div className="row">
            <div className="col-10 mx-auto d-flex align-items-center flex-sm-column flex-lg-row mt-sm-4">
                <div className="left-container col-lg-6 col-sm-10 col-md-10 order-2 order-lg-1">
                    <h1 className="title-text mb-4">{props.title} <strong className="logo"> SiphterTech </strong></h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et eligendi, quaerat amet at non fugiat expedita, nemo quis tempora reiciendis ipsa magni! Autem incidunt sequi quidem quos quaerat quod rerum!</p>
                    <Link to={props.link} className='link-button'> {props.btnLink} </Link>
                </div>
                <div className="col-lg-6 order-1 order-lg-2">
                    <img src={props.image} alt="background" className="img-fluid img-animate mt-3 ms-lg-5"/>
                </div>
            </div>
        </div>
    </div>
  )
}
