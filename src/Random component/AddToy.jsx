import React, { useContext } from 'react';
import {  Link } from 'react-router-dom';
import { ContextAuth } from '../Routes/AuthenticationCenter';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const AddToy = () => {
    let {user}=useContext(ContextAuth)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onData = (data,e) => {

let iData= {  
email:user?.email,
name:data.name,
seller: data.seller,
url:data.url,
description:data.description,
rating:data.rating,
price:data.price,
subCategory:data.subCategory,
quantity:data.quantity,




}
console.log(iData);
      fetch('https://wheels-server-one.vercel.app/alltoy',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(iData)
      })
      .then(res=> res.json())
      .then(data=>{
        console.log(data);
        if (data.insertedId) {
          
         toast.success('Toy added')
          
            }
      })


e.target.reset();
}
    ;

    return (
        <div>

<h1 className='text-center text-uppercase fw-bold py-4'>Add Your Toy</h1>

               <div className=' shadow p-5 w-50 mx-auto mb-5'>


               <form onSubmit={handleSubmit(onData)}>
  
               <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Toy name</label>
    <input type="text" className="form-control" {...register("name", {required:true})}/>
  </div>
               <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Seller name</label>
    <input type="text" className="form-control"  {...register("seller")}  defaultValue={user?.displayName}/>
  </div>
               <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Photo</label>
    <input type="url" className="form-control"  {...register("url")} defaultValue='https://images.unsplash.com/photo-1595641416278-c4469e0a22d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'/>
  </div>
               <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Rating</label>
    <input type="text" className="form-control"  {...register("rating",{required:true})}/>
  </div>
               <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Category</label>
    <select class="form-select form-select"  {...register("subCategory")}>
    <option value="SportsCar" selected>Sports-Car</option>
        <option value="truck">truck</option>
        <option value="policecar">police car</option>
</select>
  </div>
  <div className="mb-3">
    <label className="form-label">Price</label>
    <input type="number" {...register("price", { required: true})}  min="0" className="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Available quantity</label>
    <input type="number" {...register("quantity", { required: true})}  min="0" className="form-control" />
  </div>
  <div className="mb-3">
    <label className="form-label">Detail description</label>
    <textarea className="form-control" aria-label="With textarea"  style={{height: "300px"}}  {...register("description", { required: true})}   ></textarea>
  </div>
  <button type="submit" className="btn btn-warning w-100">Add Toy</button>
</form>
<Toaster></Toaster>
</div>
        </div>
    );
};

export default AddToy;