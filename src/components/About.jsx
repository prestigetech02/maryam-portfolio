import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import './About.css'

const About = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section ref={sectionRef} className="about" id="about">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="about-content"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              Results-driven Social Media Manager with over one year of
              hands-on experience in managing and growing online presence for
              brands across various platforms. Expertise in content planning,
              community engagement, social media strategy, and copywriting.
            </p>
            <p>
              Proven track record of increasing brand awareness, driving website
              traffic, and boosting conversions through data-driven social media
              strategies.
            </p>
          </motion.div>
          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stat-item">
              <div className="stat-number">1+</div>
              <div className="stat-label">Year Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">90%</div>
              <div className="stat-label">Content Consistency</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Campaigns Managed</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

