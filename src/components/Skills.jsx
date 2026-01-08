import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { 
  FaRocket, 
  FaPalette, 
  FaEdit, 
  FaUsers, 
  FaChartLine,
  FaBrush
} from 'react-icons/fa'
import { 
  SiCanva, 
  SiInstagram, 
  SiFacebook,
  SiMeta
} from 'react-icons/si'
import { MdVideoLibrary } from 'react-icons/md'
import './Skills.css'

const Skills = () => {
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

  const skills = [
    { name: 'Social Media Management', icon: <FaRocket /> },
    { name: 'Content Creation & Strategy', icon: <FaPalette /> },
    { name: 'Canva Design (Graphics & Videos)', icon: <FaBrush /> },
    { name: 'Caption Writing & Storytelling', icon: <FaEdit /> },
    { name: 'Community Engagement', icon: <FaUsers /> },
    { name: 'Brand Consistency', icon: <FaChartLine /> },
  ]

  const tools = [
    { name: 'Canva', icon: <SiCanva /> },
    { name: 'Instagram', icon: <SiInstagram /> },
    { name: 'Facebook', icon: <SiFacebook /> },
    { name: 'Meta Business Suites', icon: <SiMeta /> },
    { name: 'Capcut', icon: <MdVideoLibrary /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section ref={sectionRef} className="skills" id="skills">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Skills & Tools
          </motion.h2>

          <motion.div className="skills-content" variants={itemVariants}>
            <div className="skills-section">
              <h3 className="subsection-title">Core Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="tools-section">
              <h3 className="subsection-title">Tools & Platforms</h3>
              <div className="tools-grid">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    className="tool-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="tool-icon">{tool.icon}</span>
                    <span className="tool-name">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

