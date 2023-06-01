import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../StyledComponents/Styling";

export const NavBar = ()=>{
    const navigate = useNavigate()
    const handleResponsive = ()=>{
        console.log("Hello")
    }
    return (
        <>
            <nav className="flex nav-links">
                <NavLink to="/" className="nav-item">Home</NavLink>
                <NavLink to="/Destinations" className="nav-item">Destination</NavLink>
                <NavLink to="/Reservations" className="nav-item">Reservations</NavLink>
                <NavLink to="/Blogs" className="nav-item">Blogs</NavLink>
                <NavLink to="/About" className="nav-item">About us</NavLink>
                <NavLink to="/Contact" className="nav-item">Contact us</NavLink>
            </nav>
            <div className="flex menu-btns">
                <Button bg="transparent" text="#00BFFF" onClick={()=> navigate("/login")} >Login</Button>
                <Button bg="#00BFFF" text="#FFF" onClick={()=> navigate("/Signup")}>Sign up</Button>
                <i className="fa-solid fa-bars" id="menu-icon"  onClick={handleResponsive}></i>
            </div>
        </>
    )
}