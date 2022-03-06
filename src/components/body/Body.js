import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Routes, Route, Navigate, } from 'react-router-dom';
const Body=()=>{
    return (
        <div>
        {/* <Switch>
            <Route path="/home" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Navigate from="/" to="/home"/>
        </Switch> */}
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Navigate to={<Home/>} replace/>}/>
        </Routes>


            {/* <Route path="/" exact component={Home}/>
            <Route path="/menu" exact component={Menu}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/about" exact component={About}/>
            <Redirect from="/" to="/home"/>
            <Route path="/" element={<Navigate replace to="/home" />} />
             */}


        </div>
    );
}

export default Body;