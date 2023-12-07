import React from 'react';
import './Footer.css'
import logo from '../assets/wheel.png'
import { FaBeer, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      
        <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                    
  <li className="nav-item">
    <Link className="nav-link " to='/' >HOME</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link "  to='/blog' >FAQ</Link>  </li>
  <li className="nav-item">
  <Link className="nav-link "  to='/alltoy' >ALL TOY</Link>  </li>
 
 
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Location</h3>
                        <ul>
                            <li><a href="#">22, Lorem ipsum dolor, consectetur adipiscing</a></li>
                            <li><a href="#">(541) 754-3010</a></li>
                            <li><a href="#">ashrafulfahim07@gmail.com</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Speedy Wheels</h3>
                        <p>We envision a world where toy enthusiasts can easily find and engage with a wide variety of toys, whether they are collectors, hobbyists, or parents looking for the perfect toy for their child. We aim to create a vibrant community where toy sellers can showcase their collections and buyers can explore a vast selection of toys, fostering a sense of nostalgia and delight. What We Offer</p>
                    </div>
                   
                </div>
                <p class="copyright"> Ashraful islam © 2023</p>
            </div>
        </footer>
    </div>
        
    );
};

export default Footer;