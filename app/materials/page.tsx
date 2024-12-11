// // app/materials/page.tsx
// "use client";

// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import './materials.css'; // Import your CSS file

// export default function Materials() {
//     const [cart, setCart] = useState<any[]>([]);
//     const [dropdownVisible, setDropdownVisible] = useState(false);
//     const [modalVisible, setModalVisible] = useState(false);
//     const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

//     useEffect(() => {
//         // Load cart from localStorage
//         const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
//         setCart(savedCart);
//     }, []);

//     const saveCart = (cart: any[]) => {
//         localStorage.setItem('cart', JSON.stringify(cart));
//         setCart(cart);
//     };

//     const addItemToCart = (productId: string, productName: string, productPrice: number) => {
//         const existingItemIndex = cart.findIndex(item => item.id === productId);
//         if (existingItemIndex > -1) {
//             cart[existingItemIndex].quantity += 1;
//         } else {
//             cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
//         }
//         saveCart(cart);
//     };

//     const toggleCartDropdown = () => {
//         setDropdownVisible(prev => !prev);
//     };

//     const openModal = (materialId: string) => {
//         setSelectedMaterial(materialId);
//         setModalVisible(true);
//     };

//     const closeModal = () => {
//         setModalVisible(false);
//         setSelectedMaterial(null);
//     };

//     const handleSignOut = () => {
//         // Redirect to sign-in page
//         window.location.href = '/signin'; // Adjust the path as needed
//     };

//     return (
//         <div>
//             {/* Navigation Header */}
//             <nav className="main-nav">
//                 <div className="nav-container">
//                     <div className="nav-left">
//                         <a href="/" className="logo">
//                             <Image src="/img/logo.png" alt="Logo" width={85} height={65} />
//                         </a>
//                         <div className="nav-links">
//                             <a href="/materials" className="products-link">Products</a>
//                             <a href="/projects">Projects</a>
//                             <a href="/contact">Contact</a>
//                         </div>
//                     </div>

//                     <div className="nav-right">
//                         <div className="nav-right2" id="cart-icon" onClick={toggleCartDropdown}>
//                             <Image src="/img/cart.png" alt="cart" width={40} height={40} />
//                             {/* Cart Dropdown */}
//                             {dropdownVisible && (
//                                 <div id="cart-dropdown" className="cart-dropdown">
//                                     <h3>Your Cart</h3>
//                                     <ul id="cart-items">
//                                         {cart.length === 0 ? (
//                                             <li>Your cart is empty.</li>
//                                         ) : (
//                                             cart.map((item, index) => (
//                                                 <li key={index}>
//                                                     {item.name} - Php {item.price.toFixed(2)} ({item.quantity})
//                                                     <button onClick={() => {
//                                                         const updatedCart = cart.filter((_, i) => i !== index);
//                                                         saveCart(updatedCart);
//                                                     }}>Remove</button>
//                                                 </li>
//                                             ))
//                                         )}
//                                     </ul>
//                                 </div>
//                             )}
//                         </div>

//                         <div className="user-profile" id="user-profile">
//                             <Image src="/img/user.png" alt="user" id="user-icon" width={40} height={40} onClick={toggleCartDropdown} />
//                             {/* User Dropdown */}
//                             <div id="user-dropdown" className="user-dropdown">
//                                 <div className="user-info">
//                                     <p><strong>Ariana Guial</strong></p>
//                                     <p>guialmariearianalexi@gmail.com</p>
//                                 </div>
//                                 <button id="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* Existing content starts here */}
//             <header className="content-header">
//                 <h1>Construction Materials</h1>
//                 <p className="subtitle">Browse our selection of quality materials</p>
//             </header>

//             {/* List View Section */}
//             <section className="list-view">
//                 <div className="material-list-item">
//                     <div className="material-image">
//                         <Image src="/img/portlandcement.png" alt="Cement" width={200} height={200} />
//                     </div>
//                     <div className="material-content">
//                         <h2>Portland Cement</h2>
//                         <p>High-quality Portland cement suitable for all construction needs. Available in bulk quantities.</p>
//                         <button className="view-details-btn" onClick={() => openModal('cement')}>View Details</button>
//                     </div>
//                 </div>

//                 <div className="material-list-item">
//                     <div className="material-image">
//                         <Image src="/img/steelrebar.png" alt="Steel" width={200} height={200} />
//                     </div>
//                     <div className="material-content">
//                         <h2>Steel Rebar</h2>
//                         <p>Construction grade steel reinforcement bars available in various sizes and specifications.</p>
//                         <button className="view-details-btn" onClick={() => openModal('steel-rebar')}>View Details</button>
//                     </div>
//                 </div>

//                 <div className="material-list-item">
//                     <div className="material-image">
//                         <Image src="/img/claybricks.png" alt="Bricks" width={200} height={200} />
//                     </div>
//                     <div className="material-content">
//                         <h2>Clay Bricks</h2>
//                         <p>Premium quality clay bricks perfect for both structural and aesthetic applications.</p>
//                         <button className="view-details-btn" onClick={() => openModal('clay-bricks')}>View Details</button>
//                     </div>
//                 </div>
//             </section>

//             {/* Grid View Section */}
//             <section className="grid-section">
//                 <h2>Featured Materials</h2>
//                 <div className="materials-grid">
//                     <div className="grid-item">
//                         <Image src="/img/constructionsand.png" alt="Sand" width={200} height={200} />
//                         <h3>Construction Sand</h3>
//                         <p>Fine quality sand for construction use</p>
//                         <button className="view-details-btn" onClick={() => openModal('sand')}>View Details</button>
//                     </div>

//                     <div className="grid-item">
//                         <Image src="/img/gravel.png" alt="Gravel" width={200} height={200} />
//                         <h3>Gravel</h3>
//                         <p>Mixed size gravel for various uses</p>
//                         <button className="view-details-btn" onClick={() => openModal('gravel')}>View Details</button>
//                     </div>

//                     <div className="grid-item">
//                         <Image src="/img/constructiontimber.png" alt="Timber" width={200} height={200} />
//                         <h3>Timber</h3>
//                         <p>Treated timber for construction</p>
//                         <button className="view-details-btn" onClick={() => openModal('timber')}>View Details</button>
//                     </div>
//                 </div>
//             </section>

//             {/* Modal for Material Details */}
//             {modalVisible && (
//                 <div id="material-modal" className="modal">
//                     <div className="modal-content">
//                         <span className="close-modal" onClick={closeModal}>&times;</span>
//                         {selectedMaterial === 'cement' && (
//                             <div className="product-details">
//                                 <div className="product-image">
//                                     <Image src="/img/portlandcement.png" alt="Portland Cement" width={200} height={200} />
//                                 </div>
//                                 <div className="product-info">
//                                     <div className="product-tag">Top Seller</div>
//                                     <h1 className="product-name">Portland Cement</h1>
//                                     <div className="product-price">
//                                         <span className="currency">Php</span>
//                                         <span className="amount">50</span>
//                                         <span className="unit">/bag</span>
//                                     </div>
//                                     <div className="product-options">
//                                         <div className="option-group">
//                                             <label>Package Size</label>
//                                             <select>
//                                                 <option>50 kg</option>
//                                                 <option>25 kg</option>
//                                             </select>
//                                         </div>
//                                         <div className="option-group">
//                                             <label>Grade</label>
//                                             <select>
//                                                 <option>Grade 43</option>
//                                                 <option>Grade 53</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <button className="add-to-cart-btn" onClick={() => addItemToCart('cement', 'Portland Cement', 50)}>Add to Cart</button>
//                                     <div className="product-description">
//                                         <h3>Description</h3>
//                                         <p>High-quality Portland cement suitable for all construction needs.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                         {selectedMaterial === 'steel-rebar' && (
//                             <div className="product-details">
//                                 <div className="product-image">
//                                     <Image src="/img/steelrebar.png" alt="Steel Rebar" width={200} height={200} />
//                                 </div>
//                                 <div className="product-info">
//                                     <div className="product-tag">Best Seller</div>
//                                     <h1 className="product-name">Steel Rebar</h1>
//                                     <div className="product-price">
//                                         <span className="currency">Php</span>
//                                         <span className="amount">8</span>
//                                         <span className="unit">/meter</span>
//                                     </div>
//                                     <div className="product-options">
//                                         <div className="option-group">
//                                             <label>Diameter</label>
//                                             <select>
//                                                 <option>8mm</option>
//                                                 <option>10mm</option>
//                                                 <option>12mm</option>
//                                                 <option>16mm</option>
//                                             </select>
//                                         </div>
//                                         <div className="option-group">
//                                             <label>Length</label>
//                                             <select>
//                                                 <option>6 meters</option>
//                                                 <option>9 meters</option>
//                                                 <option>12 meters</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <button className="add-to-cart-btn" onClick={() => addItemToCart('steel-rebar', 'Steel Rebar', 8)}>Add to Cart</button>
//                                     <div className="product-description">
//                                         <h3>Description</h3>
//                                         <p>High-strength steel reinforcement bars for concrete structures.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                         {selectedMaterial === 'clay-bricks' && (
//                             <div className="product-details">
//                                 <div className="product-image">
//                                     <Image src="/img/claybricks.png" alt="Clay Bricks" width={200} height={200} />
//                                 </div>
//                                 <div className="product-info">
//                                     <div className="product-tag">Premium Quality</div>
//                                     <h1 className="product-name">Clay Bricks</h1>
//                                     <div className="product-price">
//                                         <span className="currency">Php</span>
//                                         <span className="amount">0.75</span>
//                                         <span className="unit">/piece</span>
//                                     </div>
//                                     <div className="product-options">
//                                         <div className="option-group">
//                                             <label>Type</label>
//                                             <select>
//                                                 <option>Common Brick</option>
//                                                 <option>Face Brick</option>
//                                                 <option>Engineering Brick</option>
//                                             </select>
//                                         </div>
//                                         <div className="option-group">
//                                             <label>Quantity</label>
//                                             <select>
//                                                 <option>100 pieces</option>
//                                                 <option>500 pieces</option>
//                                                 <option>1000 pieces</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <button className="add-to-cart-btn" onClick={() => addItemToCart('clay-bricks', 'Clay Bricks', 0.75)}>Add to Cart</button>
//                                     <div className="product-description">
//                                         <h3>Description</h3>
//                                         <p>High-quality clay bricks perfect for both structural and decorative applications.</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                         {/* Add other material details similarly... */}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import './materials.css'; // Import your CSS file

export default function Materials() {
    const [cart, setCart] = useState<any[]>([]);
    const [cartDropdownVisible, setCartDropdownVisible] = useState(false);
    const [userDropdownVisible, setUserDropdownVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);

    useEffect(() => {
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
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            saveCart(updatedCart);
        } else {
            const newCart = [...cart, { id: productId, name: productName, price: productPrice, quantity: 1 }];
            saveCart(newCart);
        }
    };

    const removeItemFromCart = (index: number) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        saveCart(updatedCart);
    };

    const toggleCartDropdown = () => {
        setCartDropdownVisible(prev => !prev);
    };

    const toggleUserDropdown = () => {
        setUserDropdownVisible(prev => !prev);
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
        window.location.href = '/signin';
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
                            {cartDropdownVisible && (
                                <div id="cart-dropdown" className="cart-dropdown">
                                    <h3>Your Cart</h3>
                                    <ul id="cart-items">
                                        {cart.length === 0 ? (
                                            <li>Your cart is empty.</li>
                                        ) : (
                                            cart.map((item, index) => (
                                                <li key={index}>
                                                    {item.name} - Php {item.price.toFixed(2)} ({item.quantity})
                                                    <button onClick={() => removeItemFromCart(index)}>Remove</button>
                                                </li>
                                            ))
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="user-profile" id="user-profile" onClick={toggleUserDropdown}>
                            <Image src="/img/user.png" alt="user" id="user-icon" width={40} height={40} />
                            {userDropdownVisible && (
                                <div id="user-dropdown" className="user-dropdown">
                                    <div className="user-info">
                                        <p><strong>Ariana Guial</strong></p>
                                        <p>guialmariearianalexi@gmail.com</p>
                                    </div>
                                    <button id="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <header className="content-header">
                <h1>Construction Materials</h1>
                <p className="subtitle">Browse our selection of quality materials</p>
            </header>

            <section className="list-view">
                {/* Material List */}
                <div className="material-list-item">
                    <div className="material-image">
                        <Image src="/img/portlandcement.png" alt="Cement" width={200} height={200} />
                    </div>
                    <div className="material-content">
                        <h2>Portland Cement</h2>
                        <p>High-quality Portland cement suitable for all construction needs.</p>
                        <button className="view-details-btn" onClick={() => openModal('cement')}>View Details</button>
                    </div>
                </div>

                <div className="material-list-item">
                    <div className="material-image">
                        <Image src="/img/wood.png" alt="Wood" width={200} height={200} />
                    </div>
                    <div className="material-content">
                        <h2>Premium Wood</h2>
                        <p>Durable and versatile wood for building and furniture.</p>
                        <button className="view-details-btn" onClick={() => openModal('wood')}>View Details</button>
                    </div>
                </div>

                <div className="material-list-item">
                    <div className="material-image">
                        <Image src="/img/steel.png" alt="Steel" width={200} height={200} />
                    </div>
                    <div className="material-content">
                        <h2>Reinforced Steel</h2>
                        <p>High-strength steel rods for structural support.</p>
                        <button className="view-details-btn" onClick={() => openModal('steel')}>View Details</button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {modalVisible && (
                <div id="material-modal" className="modal">
                    <div className="modal-content">
                        <span className="close-modal" onClick={closeModal}>&times;</span>
                        {selectedMaterial === 'cement' && (
                            <div>
                                <h1>Details about Portland Cement</h1>
                                <p>High-quality cement perfect for foundations and masonry.</p>
                                <button onClick={() => addItemToCart('cement', 'Portland Cement', 50)}>Add to Cart</button>
                            </div>
                        )}
                        {selectedMaterial === 'wood' && (
                            <div>
                                <h1>Details about Premium Wood</h1>
                                <p>Ideal for furniture and framework construction.</p>
                                <button onClick={() => addItemToCart('wood', 'Premium Wood', 75)}>Add to Cart</button>
                            </div>
                        )}
                        {selectedMaterial === 'steel' && (
                            <div>
                                <h1>Details about Reinforced Steel</h1>
                                <p>Perfect for beams and load-bearing structures.</p>
                                <button onClick={() => addItemToCart('steel', 'Reinforced Steel', 120)}>Add to Cart</button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
