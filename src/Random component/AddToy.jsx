import React, { useContext } from 'react';
import {  Link } from 'react-router-dom';
import { ContextAuth } from '../Routes/AuthenticationCenter';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddToy = () => {
    let {user}=useContext(ContextAuth)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,e) => {
      
fetch('https://b7a11-toy-marketplace-server-three.vercel.app/alltoy',{
  method:"POST",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(data)
})
.then(res=> res.json())
.then(data=>{
  console.log(data);
  if (data.insertedId) {
    
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Toy added successfully',
      showConfirmButton: false,
      timer: 1500
    })
    
    
      }
})

e.target.reset();
}
    ;

    return (
        <div>

<h1 className='text-center text-uppercase fw-bold py-4'>Add Your Toy</h1>

               <div className='w-50 mx-auto mb-5'>


               <form onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label className="form-label">Seller Email </label>
    <input type="email"   className="form-control"  
    {...register("email", { required: true})} 
    defaultValue={user?.email}
    />
  </div>
  <div className="mb-3">
    <label  className="form-label">Name </label>
    <input type="text"   className="form-control"  
    {...register("name", { required: true})} 
   
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Seller Name</label>
    <input type="text"   className="form-control"  
    {...register("seller", { required: true})} 
    defaultValue={user?.displayName}
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Picture URL</label>
    <input type="url"   className="form-control"  
    {...register("url", { required: true})} 
    defaultValue='https://images.unsplash.com/photo-1584641911870-6196a92c1920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Rating</label>
    <input type="text"     className="form-control"  
    {...register("rating", { required: true})} 
   
    />
  </div>
  <div className="mb-3">
    <label className="form-label">Sub-Category</label>
    <select className='form-select' {...register("subCategory")}>
        <option value="SportsCar">Sports-Car</option>
        <option value="truck">truck</option>
        <option value="policecar">police car</option>
      </select>
  </div>

  <div className="mb-3">
    <label className="form-label">Price</label>
    <input type="number" {...register("price", { required: true})}  min="0" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Available quantity</label>
    <input type="number" {...register("quantity", { required: true})}  min="0" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Detail description</label>
    <textarea className="form-control" aria-label="With textarea"    {...register("description", { required: true})}   ></textarea>
  </div>

  <button type="submit" className="btn btn-warning w-100">Add Toy</button>
</form>

</div>
        </div>
    );
};

export default AddToy;