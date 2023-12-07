import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  Link } from 'react-router-dom';
import { ContextAuth } from '../Routes/AuthenticationCenter';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
let {user,Createuser,updateUser}=useContext(ContextAuth)
const { register, handleSubmit ,reset} = useForm();
const onSubmit = (data ,e)=>{
  Createuser(data.email, data.password)
.then((userCredential) => {
    const user = userCredential.user;
    updateUser(data.name,data.photoURL)
    .then(() => {
     
   toast.success('Registration success')
   }).catch((error) => {
    console.log(error);
   });
  })
  .catch((error) => {
    const errorMessage = error.message;
   console.log(errorMessage);
   toast.error(errorMessage)
  });
reset()
};



    return (
        <div  style={{height:'100%'}}>

<h1 className='text-center fw-bold text-uppercase'> Signup now</h1>

            <div className='w-75 mx-auto mb-5 my-5 '>


<Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User name</Form.Label>
    <Form.Control type="name" name='name'  {...register("name")}  placeholder="Enter name"  />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>User photo</Form.Label>
    <Form.Control type='url' name='photo' {...register("photoURL")}  placeholder="Enter photoURL" defaultValue='https://img.icons8.com/?size=512&id=gYI9v0NbFgxC&format=png' />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email' {...register("email")}  placeholder="Enter email" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password' {...register("password")} placeholder="Password" required />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Already have an account? <Link to='/login' className='text-decoration-none text-dark' >Log in now</Link></Form.Label>
   

  </Form.Group>

  <Button variant="warning" className='w-100' type="submit">
    Register
  </Button>
  
</Form>
<Toaster></Toaster>
</div>
        </div>
    );
};

export default Signup;