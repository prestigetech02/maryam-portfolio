import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { 
  FaEnvelope, 
  FaPhone, 
  FaInstagram, 
  FaFacebook, 
  FaLinkedin,
  FaTwitter 
} from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import './Contact.css'

const Contact = () => {
  const sectionRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState('')

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    // You can integrate with a service like EmailJS, Formspree, or your backend
    const mailtoLink = `mailto:maryamdva24@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
    setFormStatus('Form submitted! Redirecting to email client...')
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setFormStatus('')
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'maryamdva24@gmail.com',
      link: 'mailto:maryamdva24@gmail.com',
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+234 701 416 2213',
      link: 'tel:+2347014162213',
    },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      link: 'https://instagram.com',
      color: '#E4405F',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      link: 'https://facebook.com',
      color: '#1877F2',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      link: 'https://linkedin.com',
      color: '#0A66C2',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      link: 'https://twitter.com',
      color: '#1DA1F2',
    },
    {
      name: 'TikTok',
      icon: <SiTiktok />,
      link: 'https://tiktok.com',
      color: '#000000',
    },
  ]

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
    <section ref={sectionRef} className="contact" id="contact">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="contact-content"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>
          <motion.p className="contact-subtitle" variants={itemVariants}>
            Let's collaborate and bring your brand's social media presence to
            the next level!
          </motion.p>

          <div className="contact-wrapper">
            {/* Left Side - Contact Info */}
            <motion.div className="contact-left" variants={itemVariants}>
              <div className="contact-info-cards">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="contact-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-details">
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div className="social-media" variants={itemVariants}>
                <h3 className="social-title">Connect With Me</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ '--social-color': social.color }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div className="contact-right" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {formStatus && (
                  <div className="form-status">{formStatus}</div>
                )}

                <motion.button
                  type="submit"
                  className="btn btn-submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          <motion.div className="footer" variants={itemVariants}>
            <p>&copy; {new Date().getFullYear()} Oladunjoye Maryam. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

