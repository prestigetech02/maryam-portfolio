import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import './Experience.css'

const Experience = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const experiences = [
    {
      title: 'Social Media Coordinator',
      company: 'Techyx360 Technologies Ltd',
      period: 'Jan – Oct 2025',
      responsibilities: [
        'Managed and grew the brand\'s social media presence across Instagram, LinkedIn and Facebook',
        'Created visually appealing graphics, promotional posts, and short-form videos using Canva',
        'Improved post engagement (likes, comments, shares) through optimized captions and hashtags',
        'Collaborated with the internal team to ensure brand consistency across all posts',
        'Increased overall content consistency by 90% through structured content planning',
      ],
    },
    {
      title: 'Social Media Manager',
      company: 'Jaymore_Foundation',
      period: 'June – Sept 2025',
      responsibilities: [
        'Managed the foundation\'s social media presence on Instagram and Facebook',
        'Created impactful graphics, videos, and captions to promote youth empowerment, family support, and community programs',
        'Developed content ideas focused on storytelling and awareness campaigns',
        'Improved brand visibility and audience engagement through consistent posting',
        'Contributed to increased awareness of foundation programs and initiatives',
        'Engaged with followers by monitoring comments and messages',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={sectionRef} className="experience" id="experience">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Experience
          </motion.h2>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <h4 className="experience-company">{exp.company}</h4>
                  <ul className="experience-list">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

