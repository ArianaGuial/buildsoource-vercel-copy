// app/materials/page.tsx
"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import './materials.css'; // Import your CSS file

export default function Materials() {
    const [cart, setCart] = useState<any[]>([]);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

    useEffect(() => {
        // Load cart only in the client-side
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        setCart(savedCart);
    }, []);

    const saveCart = (cart: any[]) => {
        localStorage.setItem('cart', JSON.stringify(cart));
        setCart(cart);
    };

    const addItemToCart = (productId: string, productName: string, productPrice: number) => {
        const existingItemIndex = cart.findIndex(item => item.id === productId);
        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity += 1;
        } else {
            cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
        }
        saveCart(cart);
    };

    const toggleCartDropdown = () => {
        setDropdownVisible(prev => !prev);
    };

    const openModal = (materialId: string) => {
        setSelectedMaterial(materialId);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedMaterial(null);
    };

    const handleSignOut = () => {
        // Redirect to sign-in page
        window.location.href = '/signin'; // Adjust the path as needed
    };

    return (
        <div>
            {/* Navigation Header */}
            <nav className="main-nav">
                <div className="nav-container">
                    <div className="nav-left">
                        <a href="/" className="logo">
                            <Image src="/img/logo.png" alt="Logo" width={85} height={65} />
                        </a>
                        <div className="nav-links">
                            <a href="/materials" className="products-link">Products</a>
                            <a href="/projects">Projects</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>

                    <div className="nav-right">
                        <div className="nav-right2" id="cart-icon" onClick={toggleCartDropdown}>
                            <Image src="/img/cart.png" alt="cart" width={40} height={40} />
                            {/* Cart Dropdown */}
                            {dropdownVisible && (
                                <div id="cart-dropdown" className="cart-dropdown">
                                    <h3>Your Cart</h3>
                                    <ul id="cart-items">
                                        {cart.length === 0 ? (
                                            <li>Your cart is empty.</li>
                                        ) : (
                                            cart.map((item, index) => (
                                                <li key={index}>
                                                    {item.name} - Php {item.price.toFixed(2)} ({item.quantity})
                                                    <button onClick={() => {
                                                        const updatedCart = cart.filter((_, i) => i !== index);
                                                        saveCart(updatedCart);
                                                    }}>Remove</button>
                                                </li>
                                            ))
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="user-profile" id="user-profile">
                            <Image src="/img/user.png" alt="user" id="user-icon" width={40} height={40} onClick={toggleCartDropdown} />
                            {/* User Dropdown */}
                            <div id="user-dropdown" className="user-dropdown">
                                <div className="user-info">
                                    <p><strong>Ariana Guial</strong></p>
                                    <p>guialmariearianalexi@gmail.com</p>
                                </div>
                                <button id="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Existing content starts here */}
            <header className="content-header">
                <h1>Construction Materials</h1>
                <p className="subtitle">Browse our selection of quality materials</p>
            </header>

            {/* List View Section */}
            <section className="list-view">
                <div className="material-list-item">
                    <div className="material-image">
                        <Image src="/img/portlandcement.png" alt="Cement" width={200} height={200} />
                    </div>
                    <div className="material-content">
                        <h2>Portland Cement</h2>
                        <p>High-quality Portland cement suitable for all construction needs. Available in bulk quantities.</p>
                        <button className="view-details-btn" onClick={() => openModal('cement')}>View Details</button>
                    </div>
                </div>

                <div className="material-list-item">
                    <div className="material-image">
                        <Image src="/img/steelrebar.png" alt="Steel Rebar" width={200} height={200} />
                    </div>
                    <div className="material-content">
                        <h2>Steel Rebar</h2>
                        <p>High-strength steel reinforcement bars for concrete structures.</p>
                        <button className="view-details-btn" onClick={() => openModal('steel-rebar')}>View Details</button>
                    </div>
                </div>

                <div className="material-list-item">
                    <div className="material-image">
                        <Image src="/img/claybricks.png" alt="Bricks" width={200} height={200} />
                    </div>
                    <div className="material-content">
                        <h2>Clay Bricks</h2>
                        <p>Premium quality clay bricks perfect for both structural and aesthetic applications.</p>
                        <button className="view-details-btn" onClick={() => openModal('clay-bricks')}>View Details</button>
                    </div>
                </div>

                {/* Add other materials similarly... */}
            </section>

            {/* Modal for Material Details */}
            {modalVisible && (
                <div id="material-modal" className="modal">
                    <div className="modal-content">
                        <span className="close-modal" onClick={closeModal}>&times;</span>
                        {selectedMaterial === 'cement' && (
                            <div className="product-details">
                                <div className="product-image">
                                    <Image src="/img/portlandcement.png" alt="Portland Cement" width={200} height={200} />
                                </div>
                                <div className="product-info">
                                    <h1 className="product-name">Portland Cement</h1>
                                    <div className="product-price">
                                        <span className="currency">Php</span>
                                        <span className="amount">50</span>
                                        <span className="unit">/bag</span>
                                    </div>
                                    <button className="add-to-cart-btn" onClick={() => addItemToCart('cement', 'Portland Cement', 50)}>Add to Cart</button>
                                    <div className="product-description">
                                        <h3>Description</h3>
                                        <p>High-quality Portland cement suitable for all construction needs.</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Add other material details similarly... */}
                    </div>
                </div>
            )}
        </div>
    );
}
