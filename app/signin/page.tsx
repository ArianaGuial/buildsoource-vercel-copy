// app/signin/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import './styles.css'; // Import your CSS file

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formFields = [email, password];
        let allFieldsFilled = true;

        formFields.forEach((field, index) => {
            if (!field.trim()) {
                allFieldsFilled = false;
                // You can add logic to highlight the empty fields if needed
            }
        });

        if (!allFieldsFilled) {
            setErrorMessage('Please fill out all required fields');
        } else {
            setErrorMessage('');
            // Redirect or handle sign-in logic here
            setTimeout(() => {
                window.location.href = '/materials'; // Adjust the path as needed
            }, 1000);
        }
    };

    return (
        <div className="container">
            {/* Logo at the top left corner */}
            <div className="logo-container">
                <Link href="/" className="logo">
                    <Image src="/img/logo.png" alt="Logo" width={100} height={100} />
                </Link>
            </div>

            <div className="signin-card">
                <h1>Sign In</h1>
                <p className="subtitle">Welcome back! Please enter your details</p>

                <form className="signin-form" id="signin-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <Link href="#" className="forgot-password">Forgot password?</Link>
                    </div>

                    <button type="submit" id="sign-in-btn" className="signin-button" style={{ color: '#ffffff' }}>
                        Sign In
                    </button>

                    {errorMessage && (
                        <p id="error-message" style={{ color: 'red' }}>
                            {errorMessage}
                        </p>
                    )}

                    <p className="signup-prompt">
                        Don't have an account? <Link href="/register">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}