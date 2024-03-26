import React, { useState } from 'react';
import { InputGroup, Table } from 'react-bootstrap';
import { Form, Link, useLoaderData } from 'react-router-dom';
import ToyCard from './ToyCard';

const AllTOy = () => {
  let Toys = useLoaderData();


  return (
    <div >
      <p className='text-start text-uppercase fs-5 fw-semibold px-5 pt-5' >Toys Galore: A Playground of Playthings</p>
      <div className='my-5 mx-auto  container '>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4  g-4">

          { Toys.length === 0 ? (
            <div>Loading</div>
          ) :
            (Toys.map(toy => (
              <ToyCard toy={toy}></ToyCard>
            )))
          }

        </div>
      </div>
    </div>
  );
};

export default AllTOy;