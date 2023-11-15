import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../assets/wheel.png'
import { ContextAuth } from '../Routes/AuthenticationCenter';
import { Tooltip } from 'react-tooltip';
const Header = () => {
  let {user,logout}=useContext(ContextAuth);

  let signOut=()=>{
    logout()
    .then(() => {

    }).catch((error) => {
    });
  }
    return (
        <div>
        <Navbar collapseOnSelect expand="lg"  variant="light">
      <Container>
        <Navbar.Brand href="#home" className='fw-bold text-uppercase'>
          <img src={logo} style={{width:'50px'}}  />
         <span className='ps-2'> Speedy Wheels</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" > 

          <Nav className=' mx-auto  align-items-center fw-semibold '>
  <li className="nav-item">
    <Link className="nav-link " to='/' >HOME</Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link "  to='/blog' >FAQ</Link>  </li>
  <li className="nav-item">
  <Link className="nav-link "  to='/alltoy' >ALL TOY</Link>  </li>
  <li className="nav-item">
 { user && <Link className="nav-link "  to='/addtoy' >ADD TOY</Link> }
  
   </li>
  <li className="nav-item">
 { user && <Link className="nav-link "  to='/mytoy' >MY TOY</Link> }
  
   </li>
 



          </Nav>
        
          <Nav className='  ms-auto align-items-center '>
            
<li className='nav-item'>
{
  user? <>
 
  { user?.photoURL?  <img src={user.photoURL}  data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}  style={{width:'40px', height:'40px' , borderRadius:'20px'}} /> 
: <img src='https://img.icons8.com/?size=512&id=gYI9v0NbFgxC&format=png'  data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName || user.email}  style={{width:'40px', height:'40px' , borderRadius:'20px'}} />
}
  <Tooltip id="my-tooltip" />
 <span className='btn' onClick={signOut} >LOGOUT</span>
  </>:
  <Link to='/login' className='btn' >LOGIN</Link>
  
}    



</li>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;