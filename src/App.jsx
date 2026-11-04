
import { useState } from 'react'
import {
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
  FaBookOpen,
  FaUsers,
  FaAward,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import './App.css'

const academicPrograms = [
  {
    number: '01',
    name: 'Early Years',
    description:
      'A joyful introduction to learning through play, discovery, creativity, language, and early numeracy.',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Young children participating in early learning',
    tag: 'AGES 2–5',
  },
  {
    number: '02',
    name: 'Primary Education',
    description:
      'Building strong foundations in literacy, mathematics, science, communication, and independent thinking.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Pupils learning together in a classroom',
    tag: 'FOUNDATION FOR SUCCESS',
  },
  {
    number: '03',
    name: 'Secondary Education',
    description:
      'Preparing students for examinations, further education, leadership, and the opportunities ahead.',
    image:
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Students engaged in classroom learning',
    tag: 'PREPARING FOR TOMORROW',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleContactSubmit = (event) => {
    event.preventDefault()
    setFormSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <div className="school-site">
      {/* Navigation */}
      <nav className="school-navbar">
        <div className="container school-nav-inner">
          <a className="school-brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">
              <FaGraduationCap />
            </span>
            <span className="brand-copy">
              <strong>RUBIES <span>&amp; GOLD</span></strong>
              <small>LEARNING • CHARACTER • EXCELLENCE</small>
            </span>
          </a>

          <button
            className="school-menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`school-nav-links ${menuOpen ? 'is-open' : ''}`}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>Our School</a>
            <a href="#academics" onClick={closeMenu}>Academics</a>
            <a href="#admissions" onClick={closeMenu}>Admissions</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a
              href="#contact"
              className="school-nav-cta"
              onClick={closeMenu}
            >
              Enquire Now <FaArrowRight />
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id="home" className="school-hero">
          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />

          <div className="container hero-container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 hero-copy">
                <div className="hero-eyebrow">
                  <span className="eyebrow-line" />
                  WELCOME TO RUBIES &amp; GOLD
                </div>

                <h1>
                  Where Bright Minds
                  <br />
                  Become <span>Bright Futures.</span>
                </h1>

                <p className="hero-description">
                  Every child has the potential to do something extraordinary.
                  We nurture curiosity, build character, and create the
                  foundation for a lifetime of achievement.
                </p>

                <div className="hero-actions">
                  <a href="#admissions" className="school-button school-button-gold">
                    Explore Admissions <FaArrowRight />
                  </a>
                  <a href="#about" className="school-button school-button-outline">
                    Discover Our School
                  </a>
                </div>

                <div className="hero-trust">
                  <span className="trust-icon"><FaCheckCircle /></span>
                  <span>A learning environment built around every child.</span>
                </div>
              </div>

              <div className="col-lg-6 hero-visual">
                <div className="hero-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=90"
                    alt="Students learning together in a bright classroom"
                    className="hero-image"
                    fetchPriority="high"
                  />

                  <div className="hero-image-overlay" />

                  <div className="hero-image-caption">
                    <span className="caption-icon"><FaBookOpen /></span>
                    <div>
                      <strong>Inspiring a love of learning</strong>
                      <span>Knowledge today. Possibilities tomorrow.</span>
                    </div>
                  </div>
                </div>

                <div className="hero-floating-note">
                  <span className="floating-note-icon"><FaAward /></span>
                  <div>
                    <strong>Built on strong values</strong>
                    <span>Character. Confidence. Growth.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#about" className="hero-scroll" aria-label="Scroll to About Us">
            <span />
            SCROLL TO DISCOVER
          </a>
        </section>

        {/* School values strip */}
        <section className="values-strip" aria-label="Our educational values">
          <div className="container">
            <div className="row g-4">
              <div className="col-6 col-lg-3">
                <div className="value-item">
                  <FaBookOpen />
                  <div>
                    <strong>Quality Education</strong>
                    <span>Learning with purpose</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="value-item">
                  <FaUsers />
                  <div>
                    <strong>Every Child Matters</strong>
                    <span>Support to grow</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="value-item">
                  <FaAward />
                  <div>
                    <strong>Strong Character</strong>
                    <span>Values for life</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="value-item">
                  <FaGraduationCap />
                  <div>
                    <strong>Future Ready</strong>
                    <span>Preparing for tomorrow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="school-about">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 about-visual">
                <div className="about-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85"
                    alt="Children developing knowledge in a classroom"
                    className="about-image"
                    loading="lazy"
                  />
                  <div className="about-image-accent" />
                  <div className="about-image-stamp">
                    <FaGraduationCap />
                    <span>Growing<br />Together</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 about-copy">
                <div className="section-eyebrow">
                  <span className="eyebrow-line" />
                  WHO WE ARE
                </div>

                <h2>
                  More Than a School.
                  <br />
                  <span>A Place to Become.</span>
                </h2>

                <p className="section-lead">
                  At Rubies and Gold School, education is about more than
                  lessons and examinations. It is about discovering
                  potential, developing confidence, and preparing children
                  to make a positive difference.
                </p>

                <p>
                  We aim to create a supportive learning environment where
                  learners can ask questions, explore ideas, build meaningful
                  relationships, and grow academically and personally.
                </p>

                <div className="commitment-grid">
                  <div className="commitment-item">
                    <FaCheckCircle />
                    <span>Quality teaching</span>
                  </div>
                  <div className="commitment-item">
                    <FaCheckCircle />
                    <span>Character development</span>
                  </div>
                  <div className="commitment-item">
                    <FaCheckCircle />
                    <span>Creative thinking</span>
                  </div>
                  <div className="commitment-item">
                    <FaCheckCircle />
                    <span>A supportive environment</span>
                  </div>
                </div>

                <a href="#academics" className="text-link">
                  Discover our programmes <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Academics */}
        <section id="academics" className="school-academics">
          <div className="container">
            <div className="academics-heading">
              <div>
                <div className="section-eyebrow">
                  <span className="eyebrow-line" />
                  OUR ACADEMIC PROGRAMMES
                </div>
                <h2>
                  Every Stage.
                  <br />
                  <span>Every Possibility.</span>
                </h2>
              </div>

              <p>
                A strong educational journey starts with the right
                foundation. Explore the stages designed to support
                learners as they grow.
              </p>
            </div>

            <div className="row g-4">
              {academicPrograms.map((program) => (
                <div className="col-md-6 col-lg-4" key={program.number}>
                  <article className="academic-card">
                    <div className="academic-image-wrap">
                      <img
                        src={program.image}
                        alt={program.imageAlt}
                        loading="lazy"
                      />
                      <span className="academic-number">{program.number}</span>
                    </div>

                    <div className="academic-card-body">
                      <span className="academic-tag">{program.tag}</span>
                      <h3>{program.name}</h3>
                      <p>{program.description}</p>
                      <a href="#admissions" className="academic-link">
                        Enquire about admission <FaArrowRight />
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admissions */}
        <section id="admissions" className="school-admissions">
          <div className="container">
            <div className="admissions-panel">
              <div className="admissions-decoration" />
              <div className="admissions-content">
                <div className="section-eyebrow section-eyebrow-light">
                  YOUR CHILD'S NEXT CHAPTER
                </div>
                <h2>
                  Great futures
                  <br />
                  start with a first step.
                </h2>
                <p>
                  Discover how Rubies and Gold School can support your
                  child's learning journey. Get in touch with us to
                  enquire about admission.
                </p>
                <a href="#contact" className="school-button school-button-gold">
                  Start an Enquiry <FaArrowRight />
                </a>
              </div>
              <div className="admissions-side">
                <FaGraduationCap />
                <span>THE JOURNEY STARTS HERE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="school-contact">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5 contact-copy">
                <div className="section-eyebrow">
                  <span className="eyebrow-line" />
                  LET'S TALK
                </div>
                <h2>
                  We would love
                  <br />
                  to hear from you.
                </h2>
                <p className="section-lead">
                  Have questions about our school or admissions?
                  Send us a message and take the first step towards
                  joining the Rubies and Gold community.
                </p>

                <div className="contact-detail">
                  <span><FaEnvelope /></span>
                  <div>
                    <strong>Email</strong>
                    <p>Contact the school to make an enquiry.</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <span><FaPhoneAlt /></span>
                  <div>
                    <strong>Phone</strong>
                    <p>Speak with our admissions team.</p>
                  </div>
                </div>

                <div className="contact-detail">
                  <span><FaMapMarkerAlt /></span>
                  <div>
                    <strong>Visit Us</strong>
                    <p>Contact us for school location and directions.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="contact-form-card">
                  <div className="contact-form-heading">
                    <span>GET IN TOUCH</span>
                    <h3>Send us a message</h3>
                    <p>Fill in the details below to make an enquiry.</p>
                  </div>

                  {formSubmitted && (
                    <div className="form-success" role="status">
                      Thank you! Your message has been received in this
                      demo. Online message delivery will be enabled when
                      we connect the backend.
                    </div>
                  )}

                  <form onSubmit={handleContactSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="contactName">Your name</label>
                        <input
                          id="contactName"
                          name="name"
                          type="text"
                          placeholder="Enter your full name"
                          autoComplete="name"
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label htmlFor="contactEmail">Email address</label>
                        <input
                          id="contactEmail"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          required
                        />
                      </div>

                      <div className="col-12">
                        <label htmlFor="contactSubject">What is your enquiry about?</label>
                        <select id="contactSubject" name="subject" defaultValue="Admissions">
                          <option>Admissions</option>
                          <option>Academic programmes</option>
                          <option>General enquiry</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label htmlFor="contactMessage">Your message</label>
                        <textarea
                          id="contactMessage"
                          name="message"
                          rows="5"
                          placeholder="Tell us how we can help..."
                          required
                        />
                      </div>

                      <div className="col-12">
                        <button type="submit" className="school-button school-button-navy">
                          Send Enquiry <FaArrowRight />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="school-footer">
        <div className="container">
          <div className="row g-5 footer-main">
            <div className="col-lg-5 col-md-6">
              <a href="#home" className="school-brand footer-brand">
                <span className="brand-mark">
                  <FaGraduationCap />
                </span>
                <span className="brand-copy">
                  <strong>RUBIES <span>&amp; GOLD</span></strong>
                  <small>LEARNING • CHARACTER • EXCELLENCE</small>
                </span>
              </a>
              <p className="footer-description">
                Nurturing curious minds, building strong character,
                and preparing learners for a world of possibilities.
              </p>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
              <h3>Explore</h3>
              <a href="#about">Our School</a>
              <a href="#academics">Academics</a>
              <a href="#admissions">Admissions</a>
              <a href="#contact">Contact Us</a>
            </div>

            <div className="col-6 col-lg-4">
              <h3>Our Values</h3>
              <a href="#about">Academic Excellence</a>
              <a href="#about">Character Development</a>
              <a href="#about">Creativity &amp; Discovery</a>
              <a href="#about">Lifelong Learning</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Rubies and Gold School.
              All rights reserved.
            </span>
            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
