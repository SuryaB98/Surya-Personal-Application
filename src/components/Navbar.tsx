import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Philosophy", href: "/philosophy" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{
      width: "100%",
      background: "#fff",
      borderBottom: "1px solid #eee",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 2rem",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Logo/Name */}
        <div style={{ fontWeight: 700, fontSize: "1.3rem", letterSpacing: "0.5px" }}>
            <span className="font-bold">Surya Balasubramaniyan</span>
        </div>
        {/* Desktop Nav */}
        <ul
          style={{
            display: menuOpen ? "none" : "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="navbar-links"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{ textDecoration: "none", color: "#333", fontWeight: 500 }}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              style={{
                textDecoration: "none",
                color: "#fff",
                background: "#0078d4",
                padding: "0.5rem 1.2rem",
                borderRadius: "999px",
                fontWeight: 600,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Hamburger Icon */}
        <button
          className="navbar-hamburger"
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginLeft: "1rem",
          }}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
            padding: "1rem 2rem",
            background: "#fff",
            borderTop: "1px solid #eee",
          }}
          className="navbar-mobile-menu"
        >
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                style={{ textDecoration: "none", color: "#333", fontWeight: 500 }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/contact"
              style={{
                textDecoration: "none",
                color: "#fff",
                background: "#0078d4",
                padding: "0.5rem 1.2rem",
                borderRadius: "999px",
                fontWeight: 600,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
      <style jsx>{`
        @media (max-width: 768px) {
          .navbar-links {
            display: none !important;
          }
          .navbar-hamburger {
            display: block !important;
          }
        }
        @media (min-width: 769px) {
          .navbar-mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
