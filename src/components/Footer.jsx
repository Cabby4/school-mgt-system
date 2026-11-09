
import { Link } from 'react-router-dom'
import {
  FaGraduationCap,
  FaArrowRight,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="school-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-about">
            <Link to="/" className="footer-brand">
              <span className="footer-brand-mark">
                <FaGraduationCap />
              </span>

              <span className="footer-brand-copy">
                <strong>
                  School <span>&amp; Web</span>
                </strong>
                <small>LEARNING • CHARACTER • EXCELLENCE</small>
              </span>
            </Link>

            <p>
              At School &amp; web, we nurture curious minds,
              build strong character, and inspire every learner to
              achieve their full potential.
            </p>

            <Link to="/about" className="footer-about-link">
              Discover Our School <FaArrowRight />
            </Link>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/about">Our School</Link>
            <Link to="/academics">Academics</Link>
            <Link to="/admissions">Admissions</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="footer-column">
            <h3>Get in Touch</h3>

            <p className="footer-contact-item">
              <FaEnvelope />
              <span>School email</span>
            </p>

            <p className="footer-contact-item">
              <FaPhoneAlt />
              <span>School phone</span>
            </p>

            <p className="footer-contact-item">
              <FaMapMarkerAlt />
              <span>School address to be confirmed</span>
            </p>
          </div>

          <div className="footer-admissions">
            <span className="footer-eyebrow">YOUR CHILD'S FUTURE</span>
            <h3>Every Great Journey Starts Here.</h3>

            <p>
              Take the first step towards a brighter educational future.
            </p>

            <Link to="/admissions" className="footer-cta">
              Explore Admissions <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} School &amp; Web. All rights reserved.
          </p>

          <p className="footer-motto">
            Learning with Purpose. Growing with Excellence.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
