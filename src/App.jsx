
import { FaGraduationCap, FaBars } from 'react-icons/fa'
import './App.css'

function App() {
  return (
    <div>
      
       {/* Navigation  */}
       
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#home">
            <FaGraduationCap className="me-2" />
            Rubies and Gold Schools
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#schoolNavbar"
            aria-controls="schoolNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars />
          </button>

          <div className="collapse navbar-collapse" id="schoolNavbar">
            <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#academics">Academics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#admissions">Admissions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-primary px-4" href="#contact">
                  Enquire Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



{/* Homepage Hero */}
<main>
  <section id="home" className="school-hero text-white">
    <div className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <span className="badge mb-4">
            Welcome to Rubies and Gold School
          </span>

          <h1 className="display-3 fw-bold mb-4">
            Shaping Bright Minds,
            <br />
            Building <span className="hero-highlight">Great Futures</span>
          </h1>

          <p className="lead mb-4">
            We provide quality education in a supportive environment
            where students develop knowledge, confidence, discipline,
            and the skills to succeed.
          </p>

          <div className="d-flex flex-wrap gap-3">
            <a
              href="#admissions"
              className="btn btn-warning btn-lg"
            >
              Apply for Admission →
            </a>

            <a
              href="#about"
              className="btn btn-outline-light btn-lg"
            >
              Discover Our School
            </a>
          </div>

          <div className="hero-note mt-4">
            <FaGraduationCap />
            <span>Building a strong foundation for lifelong learning.</span>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="hero-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
              alt="Students learning together in a classroom"
              className="hero-school-image"
            />

            <div className="hero-floating-card">
              <div className="hero-card-icon">
                <FaGraduationCap />
              </div>

              <div>
                <h3>Learning Today, Leading Tomorrow</h3>
                <p>
                  Inspiring curiosity, confidence, and academic excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


{/* About Us */}
<section id="about" className="school-about py-5">
  <div className="container py-lg-4">
    <div className="row align-items-center g-4 g-lg-5">
      <div className="col-lg-6">
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
            alt="Students learning in a classroom"
            className="about-school-image"
            loading="lazy"
          />

          <div className="about-image-label">
            <FaGraduationCap />
            <div>
              <strong>Learning with Purpose</strong>
              <span>Growing minds, shaping futures</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <span className="section-eyebrow">ABOUT OUR SCHOOL</span>

        <h2 className="mt-3 mb-4">
          Growing Through Knowledge and Excellence
        </h2>

        <p>
          At Rubies and Gold School, we believe every child has the
          potential to achieve greatness. We provide a supportive
          learning environment that encourages curiosity, creativity,
          discipline, and academic excellence.
        </p>

        <p>
          Our goal is to prepare students with the knowledge, values,
          and confidence they need to succeed in school and beyond.
        </p>

        <div className="about-commitment mt-4">
          <h3>Our Commitment</h3>

          <ul className="commitment-list">
            <li>Quality teaching and learning</li>
            <li>Character development and discipline</li>
            <li>Creativity and critical thinking</li>
            <li>A safe and supportive learning environment</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Academics */}
<section id="academics" className="school-academics py-5">
  <div className="container py-lg-4">
    <div className="section-heading text-center mb-5">
      <span className="section-eyebrow">OUR ACADEMICS</span>

      <h2 className="mt-3">Learning for Every Stage</h2>

      <p>
        Helping every learner discover their strengths and build
        the foundation for a successful future.
      </p>
    </div>

    <div className="row g-4">
      <div className="col-md-6 col-lg-4">
        <article className="academic-card h-100">
          <img
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=85"
            alt="Young children learning and playing"
            loading="lazy"
          />

          <div className="academic-card-body">
            <span className="academic-number">01</span>
            <h3>Early Years</h3>
            <p>
              Building foundational language, numeracy, social,
              and creative skills through engaging activities.
            </p>
            <a href="#admissions" className="academic-link">
              Enquire about admission <span>→</span>
            </a>
          </div>
        </article>
      </div>

      <div className="col-md-6 col-lg-4">
        <article className="academic-card h-100">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=85"
            alt="Primary school pupils learning together"
            loading="lazy"
          />

          <div className="academic-card-body">
            <span className="academic-number">02</span>
            <h3>Primary Education</h3>
            <p>
              Developing strong foundations in literacy, mathematics,
              science, and essential life skills.
            </p>
            <a href="#admissions" className="academic-link">
              Enquire about admission <span>→</span>
            </a>
          </div>
        </article>
      </div>

      <div className="col-md-6 col-lg-4">
        <article className="academic-card h-100">
          <img
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=85"
            alt="Students participating in a classroom lesson"
            loading="lazy"
          />

          <div className="academic-card-body">
            <span className="academic-number">03</span>
            <h3>Secondary Education</h3>
            <p>
              Preparing learners for further education through
              academic growth, independent thinking, and responsibility.
            </p>
            <a href="#admissions" className="academic-link">
              Enquire about admission <span>→</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>



{/* Admissions */}
<section id="admissions" className="py-5">
  <div className="container py-4">
    <div className="bg-primary text-white rounded-4 p-4 p-md-5 text-center">
      <h2 className="fw-bold">Give Your Child a Bright Future</h2>
      <p className="lead mt-3">
        Take the first step towards a rewarding learning journey
        at Rubies and Gold School.
      </p>
      <a href="#contact" className="btn btn-warning btn-lg mt-2">
        Enquire About Admission
      </a>
    </div>
  </div>
</section>

{/* Contact */}
<section id="contact" className="bg-light py-5">
  <div className="container py-4">
    <div className="text-center mb-4">
      <span className="text-primary fw-bold">GET IN TOUCH</span>
      <h2 className="fw-bold mt-2">Contact Our School</h2>
      <p className="text-secondary">
        Have questions about admissions or our academic programmes?
        We'd be happy to hear from you.
      </p>
    </div>

    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4 p-md-5">
            <form onSubmit={(event) => {
              event.preventDefault()
              alert('Thank you for contacting Rubies and Gold School. The contact form will be connected soon.')
            }}>
              <div className="mb-3">
                <label htmlFor="contactName" className="form-label">
                  Your Name
                </label>
                <input
                  id="contactName"
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="contactEmail" className="form-label">
                  Email Address
                </label>
                <input
                  id="contactEmail"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="contactMessage" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="contactMessage"
                  className="form-control"
                  rows="4"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</main>


{/* Footer */}
<footer className="school-footer">
  <div className="container">
    <div className="row g-4">
      <div className="col-lg-5 col-md-6">
        <a href="#home" className="footer-brand">
          <FaGraduationCap />
          <span>Rubies and Gold School</span>
        </a>

        <p>
          Inspiring young minds through quality education,
          character development, creativity, and a commitment
          to lifelong learning.
        </p>
      </div>

      <div className="col-lg-3 col-md-6">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#academics">Academics</a></li>
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <div className="col-lg-4 col-md-6">
        <h3>Our Commitment</h3>
        <ul className="footer-links">
          <li><a href="#about">Academic Excellence</a></li>
          <li><a href="#about">Character Development</a></li>
          <li><a href="#academics">Learning Programmes</a></li>
          <li><a href="#admissions">Admission Enquiries</a></li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom text-center">
      © {new Date().getFullYear()} Rubies and Gold School.
      All rights reserved.
    </div>
  </div>
</footer>

    </div>
  )
}

export default App
