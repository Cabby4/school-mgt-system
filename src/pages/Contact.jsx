
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaArrowRight,
  FaGraduationCap,
  FaCheckCircle,
} from 'react-icons/fa'

const contactDetails = [
  {
    icon: FaEnvelope,
    title: 'Email Us',
    detail: 'School email to be confirmed',
    note: 'For enquiries and information',
  },
  {
    icon: FaPhoneAlt,
    title: 'Call Us',
    detail: 'School phone number to be confirmed',
    note: 'Speak with the school team',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Visit Us',
    detail: 'School address to be confirmed',
    note: 'Confirm the location before visiting',
  },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main className="inner-page contact-page">
      <section className="contact-hero">
        <div className="contact-hero-image" />

        <div className="container contact-hero-content">
          <div className="contact-hero-copy">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-line" />
              WE'D LOVE TO HEAR FROM YOU
            </span>

            <h1>
              Let's Start a
              <br />
              <span>Conversation.</span>
            </h1>

            <p>
              Whether you have questions about admissions, academic
              programmes, or our school, we're here to help you take the
              next step.
            </p>

            <a href="#contact-details" className="contact-hero-button">
              Get in Touch <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="contact-hero-footer">
          RUBIES &amp; GOLD SCHOOL
          <span />
          HERE FOR YOUR FAMILY
        </div>
      </section>

      <section className="section-padding contact-main-section">
        <div className="container">
          <div className="contact-section-heading">
            <span className="contact-section-label">GET IN TOUCH</span>
            <h2>
              We're Here to <span>Help.</span>
            </h2>
            <p>
              Have a question or need more information? Send us an enquiry
              and explore the best way to get in touch with our school.
            </p>
          </div>

          <div className="row g-4 g-xl-5" id="contact-details">
            <div className="col-lg-5">
              <div className="contact-details-panel">
                <span className="contact-panel-label">
                  CONTACT INFORMATION
                </span>

                <h3>Let's Connect.</h3>

                <p className="contact-panel-description">
                  We're happy to help you understand our school and the
                  opportunities available for your child.
                </p>

                <div className="contact-details-list">
                  {contactDetails.map((item) => {
                    const Icon = item.icon

                    return (
                      <article className="contact-detail-item" key={item.title}>
                        <div className="contact-detail-icon">
                          <Icon />
                        </div>

                        <div className="contact-detail-copy">
                          <h4>{item.title}</h4>
                          <p>{item.detail}</p>
                          <span>{item.note}</span>
                        </div>
                      </article>
                    )
                  })}
                </div>

                <div className="contact-panel-bottom">
                  <div className="contact-panel-bottom-icon">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <strong>Your child's future matters.</strong>
                    <span>Let's take the next step together.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-form-card">
                <div className="contact-form-heading">
                  <span className="contact-section-label">
                    SEND AN ENQUIRY
                  </span>
                  <h3>Send Us a Message</h3>
                  <p>
                    Fill in the details below so we can understand your
                    enquiry.
                  </p>
                </div>

                {submitted && (
                  <div className="contact-demo-notice" role="status">
                    <FaCheckCircle />
                    <div>
                      <strong>Form submitted successfully.</strong>
                      <p>
                        This is a demo form. Your message has not been sent
                        or stored. A backend connection is needed to deliver
                        enquiries to the school.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label htmlFor="contactName" className="contact-label">
                        Full Name <span>*</span>
                      </label>
                      <input
                        id="contactName"
                        name="name"
                        type="text"
                        className="form-control contact-input"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="contactEmail" className="contact-label">
                        Email Address <span>*</span>
                      </label>
                      <input
                        id="contactEmail"
                        name="email"
                        type="email"
                        className="form-control contact-input"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div className="col-12">
                      <label htmlFor="contactSubject" className="contact-label">
                        What can we help you with? <span>*</span>
                      </label>
                      <select
                        id="contactSubject"
                        name="subject"
                        className="form-select contact-input"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select an enquiry type
                        </option>
                        <option value="admissions">Admissions</option>
                        <option value="academics">Academic Programmes</option>
                        <option value="fees">School Fees</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label htmlFor="contactMessage" className="contact-label">
                        Your Message <span>*</span>
                      </label>
                      <textarea
                        id="contactMessage"
                        name="message"
                        className="form-control contact-input contact-textarea"
                        rows="5"
                        placeholder="Write your message here..."
                        required
                      />
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="contact-submit-button"
                      >
                        Submit Enquiry <FaPaperPlane />
                      </button>
                      <p className="contact-form-footnote">
                        Fields marked with * are required.
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-bottom-cta">
        <div className="container">
          <div className="contact-bottom-cta-inner">
            <div>
              <span className="contact-section-label">
                RUBIES &amp; GOLD SCHOOL
              </span>
              <h2>Every great journey starts with a conversation.</h2>
              <p>
                Interested in joining our school community? Visit our
                admissions page to learn how to get started.
              </p>
            </div>

            <Link to="/admissions" className="contact-admissions-button">
              Explore Admissions <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
