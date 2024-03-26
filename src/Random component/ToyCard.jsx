import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ToyCard = ({ toy }) => {
  return (
    <div>
      <div className="col h-100">
        <div className="card rounded-top-0 p-2 h-100" style={{width:'21rem'}} >
          <div className='mx-3 mt-3  ' >
            <img src={toy.url} className="img-thumbnail card-img-top "  style={{ height: '200px',objectFit:'contain' }}/>
          </div>

          <div className="card-body   ">
            <div className='h-75 pb-5'>
            <h5 className=" fs-6 fw-semibold ">{toy.name}</h5>
            <p className="card-text fw-bold text-danger">${toy.price}</p>            
            <p className="card-text"><FaStar className='text-warning' /> <FaStar className='text-warning' />  <FaStar className='text-warning' />   <FaStar className='text-warning' />  {toy.rating}</p>
            </div>
            <Link to={`/detail/${toy._id}`} ><button className='btn btn-warning w-100  '>View Detail</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;