import React, { useState } from 'react';

const Contact = () => {

    const [result,setResult] = useState({
        name:'',
        phone:'',
        email:'',
        message:'',
    });

    const InputEvent = (event) => {
        const {name,value} = event.target;
        setResult((oldData)=> {
            return{
                ...oldData,
                [name]:value,
            }
        })
    };

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My name is ${result.name}.My Phone Number is ${result.phone}.My email is ${result.email}.My message is ${result.message}`);
    };


    return (
        <>
            <div className="my-5">
                <h1 className=" display-3 text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="fullname" className="form-label">Full Name : </label>
                                <input type="text" className="form-control" id="fullname" onChange={InputEvent} name="name" value={result.name} placeholder="Enter Your Full Name" required />
                            </div>
                            <div className="mb-3">
                                <label for="mobile" className="form-label"> Phone number : </label>
                                <input type="number" className="form-control" id="mobile" onChange={InputEvent} name="phone" value={result.phone}  placeholder="Enter Your Mobile Number" required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" onChange={InputEvent} name="email" value={result.email} placeholder="name@example.com" required />
                            </div>
                            <div className="mb-3">
                                <label for="message" className="form-label">Message : </label>
                                <textarea className="form-control" id="message" onChange={InputEvent} name="message" value={result.message} rows="3"></textarea>
                            </div>
                            <div className="col-12 mb-3">
                                <button className="btn btn-outline-primary" type="submit">
                                    Submit Form
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;