import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row mt-5">
                        <div className="col-11 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-lg-1 order-2 d-flex flex-column justify-content-center">
                                    <h1 className=" display-4"> Grow you Business with <strong className="text-primary text-capitalize">Robox Asus</strong></h1>
                                    <h2 className="my-3 display-6">
                                        {props.name}
                                </h2>
                                    <div className="mt-3">
                                        <NavLink exact to={props.visit} className="btn btn-outline-success rounded-pill">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className=" col-md-6 order-1 order-lg-2">
                                    <img src={props.img_src} alt="This is Shutter Stock" className="img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;