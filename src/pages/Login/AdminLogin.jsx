
import { toast, ToastContainer } from 'react-toastify';
import './Login.css'; // Include any custom styling
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../../auth/AuthContext';
const AdminLogin = () => {
    const { login } = useAuth();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();

        if (phoneNumber == 1234567890 && password == "abcd@123") {
            toast.success("Login Successfully")
            login()
            navigate("/admin/Orders")

        }
        else {
            toast.error("Your Credientails its in correct!")
        }
    };

    return (
        <>
            <ToastContainer />

            <div className="login-container">
                <div className="login-card">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;

