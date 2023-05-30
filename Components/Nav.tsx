import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../StyledComponents/Styling";

export const NavBar = ()=>{
    return (
        <>
            <nav className="flex">
                <NavLink to="/" className="nav-item active">Home</NavLink>
                <NavLink to="/" className="nav-item">Destination</NavLink>
                <NavLink to="/" className="nav-item">Reservations</NavLink>
                <NavLink to="/" className="nav-item">Blogs</NavLink>
                <NavLink to="/" className="nav-item">About us</NavLink>
                <NavLink to="/" className="nav-item">Contact us</NavLink>
            </nav>
            <div>
                <Button bg="transparent" text="#00BFFF">Login</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                <Button bg="#00BFFF" text="#FFF">Sign up</Button>
            </div>
        </>
    )
}