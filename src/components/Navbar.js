import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



const Navbar  = () =>{
    
    return<>
    <Router>
         <nav>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/GetAllProducts">Products</Link></li>
            </ul>
            
            
            
        </nav>
    </Router>
    </>


}


export default Navbar;