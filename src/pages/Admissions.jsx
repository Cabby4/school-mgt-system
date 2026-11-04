
import { Link } from 'react-router-dom'
import {
  FaClipboardCheck,
  FaFileAlt,
  FaComments,
  FaCheckCircle,
  FaArrowRight,
  FaGraduationCap,
  FaStar,
  FaRegCalendarAlt,
  FaUserFriends,
} from 'react-icons/fa'

const admissionSteps = [
  {
    icon: FaComments,
    number: '01',
    title: 'Make an Enquiry',
    description:
      'Contact our school to learn about available classes, admission opportunities, and the application process.',
  },
  {
    icon: FaFileAlt,
    number: '02',
    title: 'Submit an Application',
    description:
      'Complete the application process and provide the information and documents requested by the school.',
  },
  {
    icon: FaClipboardCheck,
    number: '03',
    title: 'Assessment & Review',
    description:
      'Our team reviews the application and may arrange an assessment or meeting where appropriate.',
  },
  {
    icon: FaCheckCircle,
    number: '04',
    title: 'Receive a Decision',
    description:
      'The school communicates the admission decision and explains the next steps for successful applicants.',
  },
]

const admissionHighlights = [
  {
    icon: FaUserFriends,
    title: 'Family-focused guidance',
    text: 'Get help understanding the process and finding the right starting point for your child.',
  },
  {
    icon: FaRegCalendarAlt,
    title: 'Clear next steps',
    text: 'Ask the school about availability, important dates, and the documents you may need.',
  },
  {
    icon: FaGraduationCap,
    title: 'A fresh learning journey',
    text: 'Explore an educational environment designed to support learning and development.',
  },
]

function Admissions() {
  return (
    <main className="inner-page admissions-page">
      <section className="admissions-hero">
        <div className="admissions-hero-image" />

        <div className="container admissions-hero-content">
          <div className="admissions-hero-copy">
            <span className="admissions-eyebrow">
              <span className="admissions-eyebrow-line" />
              ADMISSIONS AT RUBIES &amp; GOLD
            </span>

            <h1>
              A Bright Future
              <br />
              Begins <span>Here.</span>
            </h1>

            <p>
              Every great journey starts with a first step. Discover how your
              family can begin its journey with Rubies &amp; Gold School.
            </p>

            <div className="admissions-hero-actions">
              <a
                href="#admission-process"
                className="btn admissions-primary-btn"
              >
                Explore Admissions <FaArrowRight />
              </a>

              <Link to="/contact" className="admissions-text-link">
                Speak to our school <span>↗</span>
              </Link>
            </div>

            <div className="admissions-hero-note">
              <FaStar />
              <span>Every child deserves the opportunity to thrive.</span>
            </div>
          </div>
        </div>

        <div className="admissions-hero-index">
          <span>R&amp;G</span>
          <span className="admissions-index-divider" />
          <span>YOUR NEXT CHAPTER</span>
        </div>
      </section>

      <section className="section-padding admissions-welcome">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="admissions-welcome-visual">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1100&q=85"
                  alt="Students learning and participating in a classroom activity"
                  className="admissions-welcome-image"
                  loading="lazy"
                />

                <div className="admissions-image-caption">
                  <span className="admissions-caption-icon">
                    <FaGraduationCap />
                  </span>
                  <div>
                    <strong>Learning starts with possibility.</strong>
                    <span>Discover the next step for your child.</span>
                  </div>
                </div>

                <div className="admissions-image-decoration" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="admissions-welcome-copy">
                <span className="admissions-section-label">
                  YOUR JOURNEY STARTS HERE
                </span>

                <h2>
                  Choosing the Right School Is a
                  <span> Big Decision.</span>
                </h2>

                <p>
                  Finding the right learning environment is an important
                  milestone for every family. At Rubies &amp; Gold School, we
                  want your first steps towards joining our school community
                  to feel clear, welcoming, and straightforward.
                </p>

                <p>
                  Our team can guide you through available classes, explain
                  the application process, and help you understand what is
                  required before you apply.
                </p>

                <a
                  href="#admission-process"
                  className="admissions-inline-link"
                >
                  See how to apply <FaArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="admissions-highlights">
        <div className="container">
          <div className="admissions-highlights-grid">
            {admissionHighlights.map((item, index) => {
              const Icon = item.icon

              return (
                <article className="admissions-highlight" key={item.title}>
                  <span className="admissions-highlight-number">
                    0{index + 1}
                  </span>

                  <div className="admissions-highlight-icon">
                    <Icon />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section
        id="admission-process"
        className="section-padding admissions-process"
      >
        <div className="container">
          <div className="admissions-section-heading text-center">
            <span className="admissions-section-label">
              FOUR SIMPLE STEPS
            </span>

            <h2>
              Your Path to <span>Admission.</span>
            </h2>

            <p>
              Here is a general guide to getting started. Contact the school
              to confirm current admission requirements, availability, and
              timelines.
            </p>
          </div>

          <div className="admissions-steps-grid">
            {admissionSteps.map((step) => {
              const Icon = step.icon

              return (
                <article
                  className="admissions-step-card"
                  key={step.number}
                >
                  <div className="admissions-step-top">
                    <span className="admissions-step-number">
                      {step.number}
                    </span>

                    <span className="admissions-step-icon">
                      <Icon />
                    </span>
                  </div>

                  <h3>{step.title}</h3>
                  <p>{step.description}</p>

                  <div className="admissions-step-bottom">
                    <span>STEP {step.number}</span>
                    <FaArrowRight />
                  </div>
                </article>
              )
            })}
          </div>

          <div className="admissions-process-note">
            <span className="admissions-note-icon">
              <FaClipboardCheck />
            </span>

            <p>
              <strong>Have questions before applying?</strong>
              <span>
                Contact the school first to confirm the appropriate next
                steps for your child.
              </span>
            </p>

            <Link to="/contact" aria-label="Contact the school">
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="admissions-final-cta">
        <div className="admissions-cta-decoration admissions-cta-decoration-one" />
        <div className="admissions-cta-decoration admissions-cta-decoration-two" />

        <div className="container">
          <div className="admissions-cta-content">
            <span className="admissions-cta-label">
              THE NEXT CHAPTER STARTS WITH YOU
            </span>

            <h2>
              Ready to Take the
              <br />
              <span>First Step?</span>
            </h2>

            <p>
              We would be delighted to hear from you. Reach out to Rubies
              &amp; Gold School to discuss your child's educational journey.
            </p>

            <Link to="/contact" className="admissions-cta-button">
              Contact the School <FaArrowRight />
            </Link>

            <div className="admissions-cta-footer">
              <span>RUBIES &amp; GOLD SCHOOL</span>
              <span className="admissions-cta-footer-dot" />
              <span>BUILDING BRIGHTER FUTURES</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Admissions
