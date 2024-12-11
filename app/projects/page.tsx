// app/projects/page.tsx
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react'; // Import useEffect
import './projects.css'; // Import your CSS file

export default function Projects() {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const userProfile = document.getElementById('user-profile');
        if (userProfile && !userProfile.contains(event.target as Node)) {
            setDropdownVisible(false);
        }
    };

    const handleSignOut = () => {
        // Redirect to sign-in page
        window.location.href = '/signin'; // Adjust the path as needed
    };

    // Add event listener for clicks outside the dropdown
    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

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
                            <a href="/materials">Products</a>
                            <a href="/projects" className="projects-link">Projects</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>

                    <div className="nav-right">
                        <div className="user-profile" id="user-profile">
                            <Image src="/img/user.png" alt="user" id="user-icon" width={40} height={40} onClick={toggleDropdown} />
                            {/* User Dropdown */}
                            {dropdownVisible && (
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
            <main>
                <header className="content-header">
                    <h1>Project Updates</h1>
                    <p className="subtitle">See the active projects that are using our materials</p>
                </header>

                <div className="material-list-item">
                    <div className="material-image">
                        <Image src="/img/foundation.jpg" alt="foundation" width={300} height={180} />
                    </div>
                    <div className="material-content">
                        <h2>Foundation Completed</h2>
                        <p>The foundation for Building A has been completed as of November 15. The site inspection report is scheduled for November 18.</p>
                    </div>
                </div>

                <div className="material-list-item">
                    <div className="material-image">
                        <Image src="/img/scaffolding.jpg" alt="scaffolding" width={300} height={180} />
                    </div>
                    <div className="material-content">
                        <h2>Pending Tasks</h2>
                        <p>
                            - Install scaffolding for the next phase<br />
                            - Review material inventory for plumbing and electrical works<br />
                            - Finalize contractor assignments for interior design
                        </p>
                    </div>
                </div>

                <div className="material-list-item">
                    <div className="material-image">
                        <Image src="/img/completed.jpg" alt="completed" width={300} height={180} />
                    </div>
                    <div className="material-content">
                        <h2>Completed Milestones</h2>
                        <p>
                            - Excavation completed on October 25<br />
                            - Permit approvals secured on November 1<br />
                            - Initial concrete pouring finalized on November 10.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}