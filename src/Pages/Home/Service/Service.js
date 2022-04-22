import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, _id, img, description, price} = service;

    const navigate = useNavigate();
    const handleServiceDetail = id=>{
        navigate(`/service/${id}`);
    }
    return (
        <div  className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>handleServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;