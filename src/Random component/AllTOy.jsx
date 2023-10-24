import React, { useState } from 'react';
import { InputGroup, Table } from 'react-bootstrap';
import { Form, Link, useLoaderData } from 'react-router-dom';

const AllTOy = () => {
    let Toys=useLoaderData();
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredToys, setFilteredToys] = useState([])




    return (
        <div >
            <h1 className='text-center text-uppercase fw-bold py-4' >Toys Galore: A Playground of Playthings</h1>




<div className='my-5 mx-5'>
<Table striped bordered hover size="sm">
      <thead className='bg-dark text-light text-center' >
        <tr >
        
          <th>#</th>
          <th >Seller </th>
          <th>Toy Name</th>
          <th>Sub-category</th>
          <th>Price</th>
          <th>Available Quantity
</th>
          <th>Detail
</th>
        </tr>
      </thead>
      <tbody className='fw-semibold bg-warning bg-opacity-50 ' >
      {
Toys.map((toy,index)=>(

    <tr>
    <td style={{width:'50px',textAlign:'center'}}>{index+1}</td>
    <td style={{width:'80px'}} >{toy.seller}</td>
    <td>{toy.name}</td>
      <td style={{width:'100px'}}>{toy.subCategory}</td> 
    <td style={{width:'80px'}}>${toy.price}</td>
    <td>{toy.quantity}</td> 
    <td style={{width:'100px'}} > <Link to={`/detail/${toy._id}`} ><button className='btn'>View Detail</button></Link> </td> 
    
  </tr>

))

      }
    
      </tbody>
    </Table>
</div>
        </div>
    );
};

export default AllTOy;