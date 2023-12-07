import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ContextAuth } from '../Routes/AuthenticationCenter';
import { signInWithEmailAndPassword } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {
    let {user,google,Login}=useContext(ContextAuth)
    const { register, handleSubmit ,reset} = useForm();

    let location=useLocation();
    let navigate=useNavigate();
    let from=location.state?.from?.pathname || '/';


    const onSubmit = (data )=>{
      Login(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Log in success")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        
      });
      navigate(from , {replace:true});
    reset()
    };

let signIndata=e=>{
    e.preventDefault();
    let F=e.target;
  let email=F.email.value;
  let password=F.password.value;
  Login(email,password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  navigate(from , {replace:true});
F.reset();
}


let Gsignin=()=>{
    google()
    .then((result) => {
      const user = result.user;
    console.log(user);
    
    }).catch((error) => {
      const errorMessage = error.message;
    console.log(errorMessage);
    });
    navigate(from , {replace:true});
}

    return (
        <div className='my-5'>
            <h1 className='text-center fw-bold text-uppercase'>Sign in now</h1>
          

            <div className='w-75 card p-5 my-5 mx-auto mb-5'>


<Form onSubmit={handleSubmit(onSubmit)} >

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='email'  {...register("email")}   placeholder="Enter email" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name='password'  {...register("password")} placeholder="Password" required />

  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Don't have an account? <Link to='/signup' className='text-decoration-none text-dark' >Sign up</Link></Form.Label>
   

  </Form.Group>

  <Button variant="warning" className='w-100' type="submit">
    Log in
  </Button>
  
</Form>
<Button variant="light" onClick={Gsignin} className='w-100 mt-2' type="submit">
    Google log in
  </Button>
</div>
        </div>
    );
};

export default Login;