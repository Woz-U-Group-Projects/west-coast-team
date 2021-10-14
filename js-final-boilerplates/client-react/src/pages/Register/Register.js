import React from 'react' 
import './Register.css';

function Register() {
    return (
        <div className="Register"> 
        <h2>Regristration</h2>
            <div className="RegisterForm">
                <input type="text" placeholder="Username"></input>
                <input type="text"  placeholder="Password"></input>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Register