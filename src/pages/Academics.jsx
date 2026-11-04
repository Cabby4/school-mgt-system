
import { Link } from 'react-router-dom'
import {
  FaBaby,
  FaBookOpen,
  FaGraduationCap,
  FaFlask,
  FaPalette,
  FaLaptop,
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaUsers,
  FaStar,
} from 'react-icons/fa'

const programs = [
  {
    number: '01',
    icon: FaBaby,
    title: 'Early Years',
    age: 'EARLY CHILDHOOD',
    description:
      'A warm, engaging environment where young children develop language, creativity, confidence, and essential social skills.',
    subjects: ['Early literacy', 'Numeracy', 'Creative play'],
  },
  {
    number: '02',
    icon: FaBookOpen,
    title: 'Primary Education',
    age: 'STRONG FOUNDATIONS',
    description:
      'A balanced learning experience that develops core academic skills, curiosity, good habits, and independent thinking.',
    subjects: ['English & Mathematics', 'Science', 'Social studies'],
  },
  {
    number: '03',
    icon: FaGraduationCap,
    title: 'Secondary Education',
    age: 'FUTURE READINESS',
    description:
      'A learning pathway focused on deeper subject knowledge, critical thinking, personal responsibility, and future opportunities.',
    subjects: ['Core subjects', 'Practical learning', 'Exam preparation'],
  },
]

const learningFeatures = [
  {
    icon: FaFlask,
    title: 'Practical Learning',
    description:
      'Encouraging learners to explore ideas, ask questions, experiment, and apply what they learn.',
  },
  {
    icon: FaLaptop,
    title: 'Digital Skills',
    description:
      'Introducing technology and digital literacy to help learners navigate an increasingly digital world.',
  },
  {
    icon: FaPalette,
    title: 'Creative Development',
    description:
      'Making room for imagination, artistic expression, collaboration, and thoughtful problem-solving.',
  },
]

function Academics() {
  return (
    <main className="inner-page academics-page">
      {/* HERO */}
      <section className="academics-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 academics-hero-content">
              <span className="academics-eyebrow">
                OUR ACADEMIC PROGRAMMES
              </span>

              <h1>
                Learning Today.
                <span> Leading Tomorrow.</span>
              </h1>

              <p>
                Discover learning pathways designed to nurture curiosity,
                build confidence, and help every learner reach their
                potential.
              </p>

              <div className="academics-hero-actions">
                <Link
                  to="/admissions"
                  className="academics-primary-button"
                >
                  Explore Admissions <FaArrowRight />
                </Link>

                <a
                  href="#programs"
                  className="academics-secondary-link"
                >
                  Explore programmes
                </a>
              </div>

              <div className="academics-hero-points">
                <span>
                  <FaCheckCircle /> Learning at every stage
                </span>
                <span>
                  <FaCheckCircle /> Growth beyond textbooks
                </span>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="academics-hero-visual">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
                  alt="Pupils learning together in a bright classroom"
                  className="academics-hero-image"
                />

                <div className="academics-image-badge">
                  <span className="academics-badge-icon">
                    <FaGraduationCap />
                  </span>
                  <div>
                    <strong>A Journey of Discovery</strong>
                    <span>Inspiring every learner to grow</span>
                  </div>
                </div>

                <div className="academics-visual-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section id="programs" className="academics-programs section-padding">
        <div className="container">
          <div className="academics-section-heading">
            <span className="academics-section-label">
              OUR PROGRAMMES
            </span>

            <h2>A Learning Journey for Every Stage</h2>

            <p>
              Every stage of education brings new opportunities.
              Our programmes support learners as they build knowledge,
              develop confidence, and discover their strengths.
            </p>
          </div>

          <div className="row g-4">
            {programs.map((program) => {
              const Icon = program.icon

              return (
                <div className="col-lg-4 col-md-6" key={program.title}>
                  <article className="academics-program-card">
                    <div className="academics-program-top">
                      <div className="academics-program-icon">
                        <Icon />
                      </div>

                      <span className="academics-program-number">
                        {program.number}
                      </span>
                    </div>

                    <span className="academics-program-age">
                      {program.age}
                    </span>

                    <h3>{program.title}</h3>

                    <p className="academics-program-description">
                      {program.description}
                    </p>

                    <div className="academics-program-divider" />

                    <h4>Learning focus</h4>

                    <ul className="academics-subject-list">
                      {program.subjects.map((subject) => (
                        <li key={subject}>
                          <FaCheckCircle />
                          <span>{subject}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* LEARNING APPROACH */}
      <section className="academics-approach section-padding">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="academics-approach-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=85"
                  alt="Students collaborating during a classroom lesson"
                  className="academics-approach-image"
                  loading="lazy"
                />

                <div className="academics-image-note">
                  <FaLightbulb />
                  <span>Curiosity leads to discovery.</span>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <span className="academics-section-label">
                BEYOND THE CLASSROOM
              </span>

              <h2 className="academics-approach-title">
                Developing the Whole Learner
              </h2>

              <p className="academics-approach-intro">
                Education is about more than remembering facts.
                It is about building the knowledge, confidence,
                creativity, and character that learners need to thrive.
              </p>

              <div className="academics-feature-list">
                {learningFeatures.map((feature) => {
                  const Icon = feature.icon

                  return (
                    <article
                      className="academics-feature-item"
                      key={feature.title}
                    >
                      <div className="academics-feature-icon">
                        <Icon />
                      </div>

                      <div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="academics-commitment">
        <div className="container">
          <div className="academics-commitment-inner">
            <div className="academics-commitment-icon">
              <FaUsers />
            </div>

            <div className="academics-commitment-copy">
              <span>OUR COMMITMENT</span>

              <h2>Helping Every Learner Find Their Strengths</h2>

              <p>
                We believe every child deserves the encouragement and
                opportunity to learn, grow, and build a meaningful future.
              </p>

              <div className="academics-commitment-points">
                <span><FaStar /> Encourage curiosity</span>
                <span><FaStar /> Build confidence</span>
                <span><FaStar /> Inspire growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADMISSIONS CTA */}
      <section className="academics-cta-section">
        <div className="container">
          <div className="academics-cta">
            <div>
              <span className="academics-section-label">
                TAKE THE NEXT STEP
              </span>

              <h2>Every Great Future Starts with Learning</h2>

              <p>
                Discover the right learning journey for your child.
                Visit our admissions page to learn about the next steps.
              </p>
            </div>

            <Link
              to="/admissions"
              className="academics-primary-button"
            >
              Explore Admissions <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Academics
