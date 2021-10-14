import React from 'react'
import "./Navbar.css"

function Navbar() {
    return(
        <div className="Navbar">
            <a href="/">Home</a>
            <a href="/register">Register</a>
            <a href="/login">Log In</a>
        </div>
    )
}

export default Navbar