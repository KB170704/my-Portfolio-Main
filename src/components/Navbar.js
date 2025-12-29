import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Mail, ArrowDownToLine } from "lucide-react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container">
                {/* Brand */}
                <a href="#home" className="brand">
                    Kaushik<span>Borad</span>
                </a>

                {/* Hamburger Icon */}
                <div
                    className={`menu-toggle ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Slide-out Menu (Links + Profile + CV Button) */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

                    <li>
                        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                    </li>
                    <li>
                        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                    </li>
                    <li>
                        <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                    </li>
                    <li>
                        <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                    </li>

                    {/* Profile Picture (Visible only on desktop sidebar) */}
                    <div className="profile-pic">
                        <img
                            src="https://i.postimg.cc/v8699vc3/IMG-3379.jpg"
                            alt="Profile"
                        />
                    </div>

                    {/* Resume Button */}
                    <div className="resume-btn-container">
                        <a
                            href="D:\Portfolio\my-Portfolio-Main\public\Kaushik-Borad.pdf"
                            download="Kaushik_Borad_Resume.pdf"
                            className="resume-btn"
                            onClick={() => setMenuOpen(false)}
                        >
                            <ArrowDownToLine size={19} style={{ marginRight: '8px' }} />
                            CV
                        </a>
                    </div>
ADD
                    {/* Mail Button (CV) */}
                    <div className="CV-btn-container">
                        <a
                            href="mailto:kaushikborad238@gmail.com"
                            className="CV-btn"
                            onClick={() => setMenuOpen(false)}
                        >
                            <Mail size={18} style={{ marginRight: '8px' }} />
                            Mail
                        </a>
                    </div>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;