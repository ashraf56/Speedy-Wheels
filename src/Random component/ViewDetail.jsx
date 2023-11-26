import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const ViewDetail = () => {
    let viewtoy=useLoaderData()
    return (
        <div className='container mx-auto'>
            <div className='container ' >

            <p className=' text-uppercase py-4' > TOY DETAILS</p>
            <div className=" shadow-lg p-5 align-items-center justify-content-center mx-auto mb-5">
  <div className="row g-5 ">
    <div className='col-md-4 justify-content-center  align-items-center'>
    <img src={viewtoy.url} className="img-fluid rounded" />
    </div>
    <div className="col-md-8">
    
      <div className="card-body ">
 
        <h5 className="card-title fw-bold">Toy Name: {viewtoy.name}</h5>
        <p className="card-text "> <span className='fw-bold'>price:</span> $ {viewtoy.price}</p>
        <p className="card-text  "><span className='fw-bold'>Seller:</span> {viewtoy.seller}</p>
        <p className="card-text "><span className='fw-bold'>Seller-Email:</span> <mark>{viewtoy.email}</mark> </p>
        <p className="card-text "> <span className='fw-bold'>Category:</span> {viewtoy.subCategory}</p>
        <p className="card-text "> <span className='fw-bold'>Available Quantity:</span> {viewtoy.quantity}</p>
        <p className="card-text align-item-center"><span className='fw-bold'>Rating:</span> <FaStar className='text-warning fs-5'/> {viewtoy.rating}</p>
        <p className="card-text"><span className='fw-bold'>Description</span> :{viewtoy.description}</p>
      </div>
    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default ViewDetail;