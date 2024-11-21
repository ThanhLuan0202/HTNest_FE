import React from "react";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import User from './User'
import Product from './Product'




function UserRouter() {
    return (
      <div>
        <Navigation/>
        {/* <User /> */}
        <Product />
      </div>
    );
  }
  
  export default UserRouter;