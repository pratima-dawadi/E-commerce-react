import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () =>{
    const state=useSelector(state=>state.handleCart)


    const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0(); 


  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light bg-white py-3 shadow-sm">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4" to="#">E-Commerce</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-10 mb-2 mb-lg-0 me-auto fs-4">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li> */}
 
      </ul>
      <div className="buttons">


      {
        isAuthenticated ?<div>
      <button className="btn btn-outline-dark ms-2 fa fa-sign-in me-1" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
    <NavLink to="/profile" className="btn btn-outline-dark ms-2">
    <i className='fa fa-user me-1'></i> My Profile</NavLink>
    </div>

        :
        <button className="btn btn-outline-dark ms-2 fa fa-sign-in me-1" onClick={() => loginWithRedirect()}>Log In</button>

      }

            {/* <NavLink to="/login" className="btn btn-outline-dark">
                <i className='fa fa-sign-in me-1'></i> Login</NavLink> */}


            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className='fa fa-shopping-cart me-1'></i> Cart ({state.length})</NavLink>
      </div>

    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;