
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaGraduationCap,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
  FaBookOpen,
  FaUsers,
  FaAward,
} from 'react-icons/fa'
import '../App.css'

const academicPrograms = [
  {
    number: '01',
    name: 'Early Years',
    description:
      'A joyful introduction to learning through play, discovery, creativity, and exploration.',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=85',
    tag: 'AGES 2–5',
  },
  {
    number: '02',
    name: 'Primary Education',
    description:
      'Building strong foundations in literacy, mathematics, science, and independent thinking.',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85',
    tag: 'BUILDING FOUNDATIONS',
  },
  {
    number: '03',
    name: 'Secondary Education',
    description:
      'Preparing students for examinations, further education, leadership, and future opportunities.',
    image:
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=85',
    tag: 'PREPARING FOR TOMORROW',
  },
]

function Home() {

 const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="school-site">

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
                  WELCOME TO School &amp; Web
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
                  <Link
                    to="/admissions"
                    className="school-button school-button-gold"
                  >
                    Explore Admissions <FaArrowRight />
                  </Link>

                  <Link
                    to="/about"
                    className="school-button school-button-outline"
                  >
                    Discover Our School
                  </Link>
                </div>

                <div className="hero-trust">
                  <span className="trust-icon"><FaCheckCircle /></span>
                  <span>
                    A learning environment built around every child.
                  </span>
                </div>
              </div>

              <div className="col-lg-6 hero-visual">
                <div className="hero-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=90"
                    alt="Students learning together in a classroom"
                    className="hero-image"
                    fetchPriority="high"
                  />

                  <div className="hero-image-overlay" />

                  <div className="hero-image-caption">
                    <span className="caption-icon"><FaBookOpen /></span>
                    <div>
                      <strong>Inspiring a love of learning</strong>
                      <span>
                        Knowledge today. Possibilities tomorrow.
                      </span>
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

          <a href="#school-values" className="hero-scroll">
            <span />
            SCROLL TO DISCOVER
          </a>
        </section>

        {/* Values */}
        <section
          id="school-values"
          className="values-strip"
          aria-label="Our educational values"
        >
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

        {/* About preview */}
        <section className="school-about">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 about-visual">
                <div className="about-image-frame">
                  <img
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85"
                    alt="Students learning in a classroom"
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
                  At School Web, education is about more than
                  lessons and examinations. It is about discovering
                  potential, developing confidence, and preparing children
                  to make a positive difference.
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

                <Link to="/about" className="text-link">
                  Learn more about our school <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Academic previews */}
        <section className="school-academics">
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
                Explore our learning stages and discover how we support
                students as they grow academically and personally.
              </p>
            </div>

            <div className="row g-4">
              {academicPrograms.map((program) => (
                <div
                  className="col-md-6 col-lg-4"
                  key={program.number}
                >
                  <article className="academic-card">
                    <div className="academic-image-wrap">
                      <img
                        src={program.image}
                        alt={program.name}
                        loading="lazy"
                      />
                      <span className="academic-number">
                        {program.number}
                      </span>
                    </div>

                    <div className="academic-card-body">
                      <span className="academic-tag">{program.tag}</span>
                      <h3>{program.name}</h3>
                      <p>{program.description}</p>

                      <Link to="/academics" className="academic-link">
                        Explore programme <FaArrowRight />
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>

            <div className="text-center mt-5">
              <Link
                to="/academics"
                className="school-button school-button-navy"
              >
                View All Academic Programmes <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Admissions preview */}
        <section className="school-admissions">
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
                  child's learning journey. Contact us to learn about
                  our admission process.
                </p>

                <Link
                  to="/admissions"
                  className="school-button school-button-gold"
                >
                  Discover Admissions <FaArrowRight />
                </Link>
              </div>

              <div className="admissions-side">
                <FaGraduationCap />
                <span>THE JOURNEY STARTS HERE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact preview */}
        <section className="school-contact">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-8 contact-copy">
                <div className="section-eyebrow">
                  <span className="eyebrow-line" />
                  LET'S TALK
                </div>

                <h2>
                  Your child's future
                  <br />
                  starts with a conversation.
                </h2>

                <p className="section-lead">
                  Have questions about our school or admissions?
                  Our contact page is the place to start your enquiry.
                </p>
              </div>

              <div className="col-lg-4">
                <Link
                  to="/contact"
                  className="school-button school-button-navy"
                >
                  Contact Our School <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </div>
  )
}

export default Home
