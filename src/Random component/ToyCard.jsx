import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar, FaStar } from "react-icons/fa";

const ToyCard = ({ toy }) => {
  return (
    <div>
      <div className="col h-100">
        <div className="card rounded-5 rounded-top-0 p-2 h-100" >
          <div className='mx-3 mt-3 ' style={{ height: '200px' }}>
            <img src={toy.url} className="img-fluid " style={{ width: '200px' }} />
          </div>

          <div className="card-body ">
            <div className=''>
            <h5 className="display-6 fs-5 fw-semibold">{toy.name}</h5>
            <p className="card-text fw-bold text-danger">${toy.price}</p>
            </div>
            <p className="card-text"><FaStar className='text-warning' /> <FaStar className='text-warning' />  <FaStar className='text-warning' />   <FaStar className='text-warning' />  {toy.rating}</p>
            <p className="card-text "> <FaCar/> {toy.subCategory}</p>
            <Link to={`/detail/${toy._id}`} ><button className='btn btn-warning'>View Detail</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;