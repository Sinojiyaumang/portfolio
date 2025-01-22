import React, { useState, useEffect } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            const sidebar = document.querySelector('.sidebar');
            const menuIcon = document.querySelector('.menu-icon');
            if (sidebarOpen && !sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
                closeSidebar();
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [sidebarOpen]);

    return (
        <header className="header">
            <div className="header-left">
                <h1><Link to="/" style={{ textDecoration: 'none', color: 'black' }}> <span style={{ color: 'red' }}>Umang </span>Sinojiya</Link></h1>
            </div>
            <div className="header-right">
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact-us">Contact Me</Link>
                </nav>
                <button className="menu-icon" onClick={toggleSidebar}>
                    ☰
                </button>
            </div>
            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <p>Umang Sinojiya</p>
                <nav className="sidebar-links">
                    <Link to="/" onClick={closeSidebar}>Home</Link>
                    <Link to="/resume" onClick={closeSidebar}>Resume</Link>
                    <Link to="/projects" onClick={closeSidebar}>Projects</Link>
                    <Link to="/contact-us" onClick={closeSidebar}>Contact Me</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
