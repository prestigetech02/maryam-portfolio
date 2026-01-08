import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import './Education.css'

const Education = () => {
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
    <section ref={sectionRef} className="education" id="education">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="education-content"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Education
          </motion.h2>
          <motion.div className="education-card" variants={itemVariants}>
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-details">
              <h3 className="education-degree">OND (Mass Communication)</h3>
              <p className="education-institution">
                Moshhod Abiola Polytechnic
              </p>
              <p className="education-year">Graduated: 2019</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education

