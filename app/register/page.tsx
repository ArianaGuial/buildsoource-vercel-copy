// app/register/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import './styles.css'; // Import your CSS file

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formFields = [username, email, password, confirmPassword];
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
            // Redirect or handle registration logic here
            setTimeout(() => {
                window.location.href = '/signin'; // Adjust the path as needed
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
                <h1>Create Account</h1>
                <p className="subtitle">Get started with your free account</p>

                <form id="create-account-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            required
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" id="create-account-btn" className="signin-button" style={{ color: '#ffffff' }}>
                        Create Account
                    </button>

                    {errorMessage && (
                        <p id="error-message" style={{ color: 'red' }}>
                            {errorMessage}
                        </p>
                    )}

                    <p className="signup-prompt">
                        Already have an account? <Link href="/signin">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}