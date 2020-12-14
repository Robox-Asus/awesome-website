import React from 'react';
import Jdata from './Jdata';
import Card from './Card';

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="display-2 text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row gy-3">
                            {
                                Jdata.map((val,index)=>{
                                    return <Card key={index} id={index}img_src={val.img_src} title={val.title} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;