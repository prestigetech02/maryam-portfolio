import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    <section ref={sectionRef} className="hero" id="home">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1
            className="hero-title"
            variants={itemVariants}
          >
            <span className="gradient-text">Hi, I'm Maryam</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Social Media Manager & Graphic Designer
          </motion.p>
          <motion.p className="hero-description" variants={itemVariants}>
            Results-driven Social Media Manager with over one year of hands-on
            experience in managing and growing online presence for brands across
            various platforms.
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-visual"
          variants={itemVariants}
        >
          <div className="hero-image-container">
            <img 
              src="/0.png" 
              alt="Oladunjoye Maryam" 
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none'
                const placeholder = e.target.parentElement.querySelector('.hero-image-placeholder')
                if (placeholder) placeholder.style.display = 'flex'
              }}
            />
            <div className="hero-image-placeholder">
              <span>OM</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

