import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import Modal from './Modal'; 
import { NavLink } from 'react-router-dom';
import { resetCartItems } from '../redux/action';

const Cart = () => {
    const cart = useSelector(state => state.handleCart); // Accessing the cart state from Redux store
    const [showModal, setShowModal] = useState(false); // State to control modal visibility
    const [totalPrice, setTotalPrice] = useState(0); // State to store total price
    const dispatch = useDispatch(); // Dispatch function to dispatch actions


    // Calculate total price
    const calculateTotalPrice = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.qty;
        });
        setTotalPrice(total);
        setShowModal(true); // Show modal on button click
    }

    const handleConfirm = () => {
        console.log('Confirmed');
        dispatch(resetCartItems());

  };
    

    return (
        <div className="container py-5">
            <h1 className="text-center mb-4">Shopping Cart</h1>
            <div className="row">
                {cart.map(item => (
                    <div className="col-md-3 mb-4 h-20 text-center" key={item.id}>
                        <div className="card h-40 text-center p-4">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title mb-0">{item.title}</h5>
                                <p className="card-text">${item.price}</p>
                                <p className="card-text">Quantity: {item.qty}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <div className="container text-center mt-5">
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className="text-center">
                    <h2>Total Price: ${totalPrice}</h2>
                    <p>Are you sure you want to proceed with the purchase?</p>
                    {/* <NavLink className="btn btn-success" onClick={() => setShowModal(false)} to="/">Confirm</NavLink> */}
                    {/* <NavLink className="nav-link btn" to="/">Confirm</NavLink> */}
                    <NavLink to="/" className="btn btn-outline-dark ms-2" onClick={handleConfirm} >
                <i className='fa fa-shopping-cart me-1'></i> Confirm</NavLink>
                </div>
            </Modal>
            </div>
            <div className="text-center">
                <button className="btn btn-primary" onClick={calculateTotalPrice}>Buy</button>
            </div>
        </div>
    );
}

export default Cart;
