import React from 'react';
import logo from '../assets/wheel.png'
import { FaBeer, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
             <footer className="w-100 py-4 flex-shrink-0 bg-dark h-100">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className=" text-white">
<img src={logo} style={{width:'40px'}}/>
                      <span className='text-light h3 ps-2 '>Speedy Wheels</span> 
                    </h5>
                    <p className="small text-muted">
                          
Speedy Wheels Toy Marketplace
</p>
                    <p className="small text-muted mb-0">&copy; Copyrights 2023 Speedy Wheels. All rights reserved  </p>
                </div>
                <div className="col-lg-2 col-md-6">
                    <h5 className="text-white  mb-3">Follow Us </h5>
                    <div className="small text-muted  ">
                       <span>Follow us on soicial media</span>
                        <div className='fs-3'>
                       
                        <span> <FaFacebook /> </span>    
                        <span> <FaLinkedin  /> </span>    
                        <span>  <FaYoutube /></span>    
                        <span> <FaTwitter /> </span>  



                        </div>


                    </div>
                
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-3">Contact Us:
</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a>Phone: +1-123-456-7890
</a></li>
                        <li><a >Email: info@speedywheels.com

</a></li>
                      
                    </ul>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-3">Adress</h5>
                    <p className="small text-muted">123 Main Street
Anytown, USA
Zip Code: 12345</p>
                
                </div>
            </div>
        </div>
    </footer>
        </div>
    );
};

export default Footer;