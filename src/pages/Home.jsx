import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MainFeature from '../components/MainFeature'
import FeaturedProducts from '../components/FeaturedProducts'

import ApperIcon from '../components/ApperIcon'

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 bg-organic-gradient rounded-lg flex items-center justify-center">
                <ApperIcon name="Leaf" className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-xl md:text-2xl font-bold text-gradient">ShroomGlow</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-surface-700 hover:text-primary transition-colors font-medium">Shop</a>
              <a href="#" className="text-surface-700 hover:text-primary transition-colors font-medium">About</a>
              <a href="#" className="text-surface-700 hover:text-primary transition-colors font-medium">Blog</a>
              <a href="#" className="text-surface-700 hover:text-primary transition-colors font-medium">Contact</a>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-mushroom-100 rounded-lg transition-colors"
              >
                <ApperIcon name="Search" className="w-5 h-5 text-surface-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-mushroom-100 rounded-lg transition-colors"
              >
                <ApperIcon name="User" className="w-5 h-5 text-surface-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-mushroom-100 rounded-lg transition-colors relative"
              >
                <ApperIcon name="ShoppingBag" className="w-5 h-5 text-surface-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary text-white text-xs rounded-full flex items-center justify-center">2</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-24 bg-organic-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <div className="space-y-6 md:space-y-8">
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="text-gradient">Natural</span>{' '}
                <span className="text-surface-900">Mushroom</span>{' '}
                <span className="text-gradient">Skincare</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-surface-600 leading-relaxed max-w-lg"
              >
                Harness the power of nature's most potent fungi for radiant, healthy skin. Our scientifically-backed formulations deliver transformative results.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="btn-primary text-base md:text-lg px-8 py-4">
                  Shop Collection
                </button>
                <button className="btn-outline text-base md:text-lg px-8 py-4">
                  Learn More
                </button>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                className="flex items-center space-x-6 pt-4"
              >
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Star" className="w-5 h-5 text-accent fill-current" />
                  <span className="text-surface-700 font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ApperIcon name="Users" className="w-5 h-5 text-accent" />
                  <span className="text-surface-700 font-medium">10K+ Customers</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Natural skincare products"
                  className="w-full h-[400px] md:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-20 h-20 bg-white rounded-2xl shadow-soft flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <ApperIcon name="Sparkles" className="w-8 h-8 text-accent" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary rounded-2xl shadow-soft flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <ApperIcon name="Leaf" className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />


      {/* Main Feature Section */}
      <MainFeature />

      {/* Trust Indicators */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-surface-900 mb-4">
              Why Choose <span className="text-gradient">ShroomGlow</span>?
            </h2>
            <p className="text-lg text-surface-600 max-w-2xl mx-auto">
              Discover the science-backed benefits that make our mushroom skincare exceptional
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { icon: 'Shield', title: 'Clinically Tested', desc: 'All products undergo rigorous testing for safety and efficacy' },
              { icon: 'Leaf', title: '100% Natural', desc: 'Pure mushroom extracts with no harmful chemicals' },
              { icon: 'Award', title: 'Award Winning', desc: 'Recognized by leading beauty and wellness organizations' },
              { icon: 'Heart', title: 'Cruelty Free', desc: 'Never tested on animals, always ethically sourced' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card-organic p-6 md:p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-organic-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <ApperIcon name={item.icon} className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-surface-900 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-surface-600 text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-organic-gradient rounded-lg flex items-center justify-center">
                  <ApperIcon name="Leaf" className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">ShroomGlow</span>
              </div>
              <p className="text-surface-300 text-sm md:text-base">
                Transforming skincare with the power of mushrooms. Natural, effective, sustainable.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-surface-300">
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Shop All</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-surface-300">
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Shipping</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Returns</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-surface-300 mb-4 text-sm md:text-base">Get skincare tips and exclusive offers</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="flex-1 px-3 py-2 rounded-lg bg-surface-800 border border-surface-700 text-white placeholder-surface-400 focus:border-primary focus:outline-none text-sm md:text-base"
                />
                <button className="btn-primary py-2 px-4 text-sm md:text-base">Subscribe</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-surface-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-surface-400 text-sm md:text-base mb-4 md:mb-0">
              © 2024 ShroomGlow. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-surface-400 hover:text-white transition-colors">
                <ApperIcon name="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="text-surface-400 hover:text-white transition-colors">
                <ApperIcon name="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="text-surface-400 hover:text-white transition-colors">
                <ApperIcon name="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home