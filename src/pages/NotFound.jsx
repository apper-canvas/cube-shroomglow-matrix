import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ApperIcon from '../components/ApperIcon'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-organic-pattern flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md mx-auto"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="w-32 h-32 bg-organic-gradient rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <ApperIcon name="Search" className="w-16 h-16 text-white" />
        </motion.div>
        
        <h1 className="text-6xl font-bold text-gradient mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-surface-900 mb-4">Page Not Found</h2>
        <p className="text-surface-600 mb-8">
          The page you're looking for seems to have wandered off into the mushroom forest.
        </p>
        
        <Link to="/" className="btn-primary inline-flex items-center space-x-2">
          <ApperIcon name="ArrowLeft" className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  )
}

export default NotFound