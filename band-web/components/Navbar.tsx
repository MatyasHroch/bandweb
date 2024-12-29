"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: "Koncerty", path: "/concerts" },
        { name: "Galerie", path: "/gallery" },
        { name: "Videa", path: "/videos" },
        { name: "Nahrávky", path: "/records" },
        { name: "Kontakt", path: "/contact" },
    ];

    return (
        <nav className="flex items-center justify-between bg-header-bg">
            {/* Logo vlevo */}
            <div className="flex items-center space-x-4">
                <Link href="/" onClick={closeMenu}>
                    <img src="/img/logo.png" alt="Logo Kapely" className="h-10" />
                </Link>
            </div>

            {/* Tlačítko hamburger menu */}
            <button
                onClick={toggleMenu}
                className="block md:hidden text-4xl focus:outline-none text-accent"
            >
                &#9776; {/* Unicode pro hamburger ikonu */}
            </button>

            {/* Navigační odkazy */}
            <div
                className={`${isMenuOpen ? "block shadow-md" : "hidden"
                    } md:flex md:items-center md:space-x-8 text-xl absolute md:relative top-20 md:top-0 left-0 w-full md:w-auto bg-background md:bg-transparent`}
            >
                {navLinks.map((link) => (
                    <Link key={link.path} href={link.path} onClick={closeMenu}>
                        <span
                            className={`block text-center py-2 md:py-0 ${pathname === link.path
                                ? "text-accent border-b-2 border-none"
                                : "text-acent hover:text-accent"
                                }`}
                        >
                            {link.name}
                        </span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;