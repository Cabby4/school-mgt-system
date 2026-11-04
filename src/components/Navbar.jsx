
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaArrowRight,
} from 'react-icons/fa'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="school-navbar">
      <div className="container school-nav-inner">
        <Link
          className="school-brand"
          to="/"
          onClick={closeMenu}
          aria-label="Rubies and Gold School home"
        >
          <span className="brand-mark">
            <FaGraduationCap />
          </span>

          <span className="brand-copy">
            <strong>
              RUBIES <span>&amp; GOLD</span>
            </strong>
            <small>LEARNING • CHARACTER • EXCELLENCE</small>
          </span>
        </Link>

        <button
          className="school-menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="school-nav-links"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          id="school-nav-links"
          className={`school-nav-links ${menuOpen ? 'is-open' : ''}`}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/about" onClick={closeMenu}>
            Our School
          </Link>

          <Link to="/academics" onClick={closeMenu}>
            Academics
          </Link>

          <Link to="/admissions" onClick={closeMenu}>
            Admissions
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            to="/admissions"
            className="school-nav-cta"
            onClick={closeMenu}
          >
            Enquire Now <FaArrowRight />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
