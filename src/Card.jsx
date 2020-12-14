import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-11 mx-auto">
                <div class="card h-100" style={{ width: '22rem' }}>
                    <img width="400" height="300" src={props.img_src} class="card-img-top" alt="Dinosaur" />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <div className="card-footer">
                        <NavLink exact to="/" class="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;