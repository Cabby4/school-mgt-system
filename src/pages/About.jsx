
import { Link } from 'react-router-dom'
import {
  FaBullseye,
  FaEye,
  FaHeart,
  FaArrowRight,
  FaGraduationCap,
  FaCheckCircle,
} from 'react-icons/fa'

function About() {
  return (
    <main className="inner-page about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 about-hero-content">
              <span className="about-eyebrow">
                ABOUT RUBIES & GOLD
              </span>

              <h1>
                Building Bright Minds.
                <span> Shaping Great Futures.</span>
              </h1>

              <p>
                We are committed to providing quality education in a
                supportive environment where every child can learn,
                grow, discover their potential, and thrive.
              </p>

              <div className="about-hero-line" />
            </div>

            <div className="col-lg-6">
              <div className="about-hero-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
                  alt="Pupils learning together in a classroom"
                  className="about-hero-image"
                />
                <div className="about-image-caption">
                  <FaGraduationCap />
                  <div>
                    <strong>Learning With Purpose</strong>
                    <span>Growing today's learners into tomorrow's leaders</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-story-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1100&q=85"
                  alt="Young learners enjoying their learning experience"
                  className="about-story-image"
                  loading="lazy"
                />

                <div className="about-image-decoration" />
              </div>
            </div>

            <div className="col-lg-6 about-story-content">
              <span className="about-section-label">
                WHO WE ARE
              </span>

              <h2>
                Education That Goes Beyond the Classroom
              </h2>

              <p>
                At Rubies & Gold School, we believe every child has
                unique potential. Our aim is to create an engaging
                learning environment that encourages curiosity,
                confidence, creativity, and a lifelong love of learning.
              </p>

              <p>
                Through academic learning, character development, and
                supportive guidance, we prepare our pupils and students
                to approach the opportunities and challenges of tomorrow
                with confidence.
              </p>

              <ul className="about-benefit-list">
                <li>
                  <FaCheckCircle />
                  A supportive and encouraging learning environment
                </li>
                <li>
                  <FaCheckCircle />
                  A focus on knowledge, character, and creativity
                </li>
                <li>
                  <FaCheckCircle />
                  Encouragement to discover every child's potential
                </li>
              </ul>

              <Link to="/academics" className="about-text-link">
                Explore our academics <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION, VISION AND VALUES */}
      <section className="about-foundation section-padding">
        <div className="container">
          <div className="about-section-heading text-center">
            <span className="about-section-label">
              OUR FOUNDATION
            </span>

            <h2>What Guides Us</h2>

            <p>
              The principles that shape our learning community and
              guide the way we help every learner grow.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <article className="about-pillar-card">
                <div className="about-pillar-icon">
                  <FaBullseye />
                </div>

                <span className="about-pillar-number">01</span>

                <h3>Our Mission</h3>

                <p>
                  To provide a supportive and stimulating education
                  that develops knowledge, character, confidence,
                  and practical skills in every learner.
                </p>
              </article>
            </div>

            <div className="col-md-6 col-lg-4">
              <article className="about-pillar-card">
                <div className="about-pillar-icon">
                  <FaEye />
                </div>

                <span className="about-pillar-number">02</span>

                <h3>Our Vision</h3>

                <p>
                  To nurture capable, responsible, and creative
                  individuals who are prepared to contribute
                  positively to their communities and the wider world.
                </p>
              </article>
            </div>

            <div className="col-md-6 col-lg-4">
              <article className="about-pillar-card">
                <div className="about-pillar-icon">
                  <FaHeart />
                </div>

                <span className="about-pillar-number">03</span>

                <h3>Our Values</h3>

                <p>
                  We encourage respect, integrity, excellence,
                  responsibility, kindness, and a commitment to
                  continuous learning.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CALL TO ACTION */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta">
            <div className="about-cta-icon">
              <FaGraduationCap />
            </div>

            <div className="about-cta-content">
              <span>YOUR CHILD'S FUTURE STARTS HERE</span>

              <h2>
                Every Child Deserves the Opportunity to Shine
              </h2>

              <p>
                We strive to help every learner discover their strengths,
                develop their abilities, and build a strong foundation
                for the future.
              </p>
            </div>

            <div className="about-cta-action">
              <Link to="/admissions" className="about-cta-button">
                Join Our School <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default About
