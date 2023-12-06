import React from 'react';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import Partner from '../Random component/Partner';
import ShopCategory from '../Random component/ShopCategory';
import About from '../Random component/About';

const Home = () => {


    return (
        <div className='container mx-auto' >
         <Banner></Banner>

         <About></About>

        <Gallery></Gallery>    
        

<ShopCategory></ShopCategory>

        
              <Partner></Partner>
        
        </div>
    );
};

export default Home;