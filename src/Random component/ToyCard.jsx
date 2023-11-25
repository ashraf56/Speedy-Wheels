import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ToyCard = ({toy}) => {
    return (
        <div>
         <div className="col h-100">
    <div className="card rounded-5 rounded-top-0 h-100" style={{backgroundImage:'url(https://img.freepik.com/free-vector/colorful-blocks-blank-white-background-vector_53876-67037.jpg?w=740&t=st=1700891472~exp=1700892072~hmac=5bd5628c418334b8460025634e8a3fc010836fc6400feee487b3410639113739)', backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className='mx-3 mt-3 text-center' style={{height:'200px'}}>
             <img src={toy.url} className="img-fluid " style={{width:'200px'}} />
        </div>
     
      <div className="card-body px-5">
        <h5 className="card-title">{toy.name}</h5>
        <p className="card-text fw-semibold">{toy.price}$</p>
        <p className="card-text"><FaStar className='text-warning'/> {toy.rating}</p>
       <Link to={`/detail/${toy._id}`} ><button className='btn btn-warning'>View Detail</button></Link> 
      </div>
    </div>
  </div>
        </div>
    );
};

export default ToyCard;