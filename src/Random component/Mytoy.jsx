import React, { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../Routes/AuthenticationCenter';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mytoy = () => {
  let { user } = useContext(ContextAuth)
  let [mytoys, setmytoy] = useState([])

  let url = `https://wheels-server-one.vercel.app/mytoy?email=${user?.email}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setmytoy(data)
      })


  }, [mytoys])

  let deletetoy = id => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://wheels-server-one.vercel.app/alltoy/${id}`, {
          method: "DELETE",
        }).then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your toy data has been deleted.',
                'success'
              )


            }
          })

      }
    })





  }



  return (
    <div >
      <h1 className='text-center text-uppercase fw-bold py-4 ' >My Toys</h1>

      <div className='my-5 mx-5'>
        <div className='row row-cols-1 row-cols-md-1 g-4 '>
          {
            mytoys.map(mt => (

              <div>
                <div className="alert shadow border border-warning rounded-5 " role="alert">
                  <div>
                    <h3>{mt.name}</h3>
                    <h6 className='fw-semibold'>$ {mt.price}</h6>
                    <h6 className='fw-semibold'>Category:{mt.subCategory}</h6>
                    <p className='fw-semibold'>Available Quantity: {mt.quantity}</p>
                    <p>{mt.description}</p>
                  </div>

                  <Link to={`/update/${mt._id}`} ><button className='btn btn-warning my-5 fw-bold ' >Update</button></Link>
                  <button className='btn my-5 btn-danger mx-2' onClick={() => deletetoy(mt._id)} >Delete</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Mytoy;