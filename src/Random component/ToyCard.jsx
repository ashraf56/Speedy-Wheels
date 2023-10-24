import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ToyCard = ({toy}) => {
    return (
        <div>
         <div className="col h-100">
    <div className="card h-100">
        <div className='mx-3 mt-3' style={{height:'200px'}}>
             <img src={toy.url} className="img-fluid " style={{width:'200px'}} />
        </div>
     
      <div className="card-body">
        <h5 className="card-title">{toy.name}</h5>
        <p className="card-text fw-bold">${toy.price}</p>
        <p className="card-text"><FaStar className='text-warning'/> {toy.rating}</p>
       <Link to={`/detail/${toy._id}`} ><button className='btn btn-warning'>View Detail</button></Link> 
      </div>
    </div>
  </div>
        </div>
    );
};

export default ToyCard;