import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/4041.png'

const Errorpage = () => {
    const { error, status } = useRouteError();
    return (
        
               <section className='d-flex   m-5'>
      <div className='container mt-5 px-5 mx-auto my-8'>
        <div className='text-center'>
         <img src={img} className='img-fluid w-50'   />   
        </div>
    

        <div className='text-center'>
          <h2 className='mb-8 fw-bold  '>
          </h2>
          <p className=' fw-semibold  mb-5'>
            {error?.message}
          </p>
          <Link to='/' className='px-5 py-3 fw-semibold rounded text-decoration-none '
          >
          <button className='btn' >Home</button>
          </Link>
        </div>
      </div>
    </section> 
       
    );
};

export default Errorpage;