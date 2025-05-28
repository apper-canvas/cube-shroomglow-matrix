import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from './ApperIcon'

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [cart, setCart] = useState([])

  // Featured products data - these would typically come from an API or shared state
  const featuredProducts = [
    {
      id: 1,
      name: 'Reishi Renewal Serum',
      price: 89,
      originalPrice: 120,
      category: 'serums',
      skinType: ['all-skin', 'sensitive'],
      mushroomType: 'reishi',
      image: 'https://images.unsplash.com/photo-1556229174-f764a274ad58?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Powerful anti-aging serum with concentrated reishi extract for cellular renewal and hydration.',
      benefits: ['Reduces fine lines', 'Boosts hydration', 'Calms inflammation'],
      ingredients: ['Reishi Extract', 'Hyaluronic Acid', 'Vitamin E'],
      rating: 4.8,
      reviews: 156,
      stock: 24,
      featured: true
    },
    {
      id: 3,
      name: 'Lion\'s Mane Recovery Mask',
      price: 45,
      originalPrice: 60,
      category: 'masks',
      skinType: ['all-skin', 'acne-prone'],
      mushroomType: 'lions-mane',
      image: 'https://images.unsplash.com/photo-1598662779094-110c2bad80d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Weekly treatment mask infused with lion\'s mane for skin repair and regeneration.',
      benefits: ['Accelerates healing', 'Reduces acne scars', 'Improves texture'],
      ingredients: ['Lion\'s Mane Extract', 'Zinc Oxide', 'Kaolin Clay'],
      rating: 4.9,
      reviews: 203,
      stock: 31,
      featured: true
    },
    {
      id: 4,
      name: 'Cordyceps Energy Cleanser',
      price: 38,
      originalPrice: 48,
      category: 'cleansers',
      skinType: ['oily', 'combination'],
      mushroomType: 'cordyceps',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Energizing gel cleanser with cordyceps to purify and revitalize tired skin.',
      benefits: ['Deep cleansing', 'Energizes skin', 'Controls oil'],
      ingredients: ['Cordyceps Extract', 'Salicylic Acid', 'Green Tea'],
      rating: 4.7,
      reviews: 124,
      stock: 42,
      featured: true
    },
    {
      id: 6,
      name: 'Turkey Tail Defense Essence',
      price: 75,
      originalPrice: 95,
      category: 'essences',
      skinType: ['sensitive', 'normal'],
      mushroomType: 'turkey-tail',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Protective essence with turkey tail mushroom to strengthen skin barrier and immunity.',
      benefits: ['Strengthens barrier', 'Boosts immunity', 'Soothes irritation'],
      ingredients: ['Turkey Tail Extract', 'Ceramides', 'Panthenol'],
      rating: 4.8,
      reviews: 91,
      stock: 15,
      featured: true
    }
  ]

  const addToCart = (product, qty = 1) => {
    const existingItem = cart.find(item => item.id === product.id)
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + qty }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: qty }])
    }
    toast.success(`${product.name} added to cart!`)
  }

  const openProductDetail = (product) => {
    setSelectedProduct(product)
    setQuantity(1)
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-mushroom-50 via-white to-mushroom-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-organic-pattern opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-surface-900 mb-4 md:mb-6">
            Our <span className="text-gradient">Bestsellers</span>
          </h2>
          <p className="text-lg md:text-xl text-surface-600 max-w-2xl mx-auto">
            Discover our most loved mushroom skincare products, carefully selected for their exceptional results
          </p>
        </motion.div>

        {/* Featured Products Grid/Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            grid grid-cols-1 gap-6 
            sm:grid-cols-2 
            lg:grid-cols-4 
            md:gap-8
            
            /* Mobile horizontal scroll fallback */
            sm:block sm:overflow-x-auto sm:whitespace-nowrap sm:pb-4
            lg:block lg:overflow-visible lg:whitespace-normal
          "
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                card-organic group cursor-pointer 
                sm:inline-block sm:w-80 sm:mr-6 sm:whitespace-normal sm:align-top
                lg:block lg:w-auto lg:mr-0
              "
              whileHover={{ y: -5 }}
              onClick={() => openProductDetail(product)}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-1">
                    <ApperIcon name="Star" className="w-4 h-4 text-accent fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-surface-900 mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-surface-600 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <span className="text-lg text-surface-400 line-through">${product.originalPrice}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-surface-500">
                    <ApperIcon name="MessageCircle" className="w-4 h-4" />
                    <span className="text-sm">{product.reviews}</span>
                  </div>
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    openProductDetail(product)
                  }}
                  className="w-full btn-primary py-3 text-center"
                >
                  View Product
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline text-lg px-8 py-4"
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 lg:h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ApperIcon name="X" className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-sm font-medium capitalize">
                    {selectedProduct.mushroomType.replace('-', ' ')}
                  </span>
                  <div className="flex items-center space-x-1">
                    <ApperIcon name="Star" className="w-4 h-4 text-accent fill-current" />
                    <span className="text-sm font-medium">{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-surface-900 mb-4">
                  {selectedProduct.name}
                </h2>

                <p className="text-surface-600 mb-6 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-surface-900 mb-3">Key Benefits</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {selectedProduct.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <ApperIcon name="Check" className="w-4 h-4 text-primary" />
                        <span className="text-surface-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-surface-900 mb-3">Key Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.ingredients.map((ingredient, index) => (
                      <span key={index} className="bg-mushroom-100 text-surface-700 px-3 py-1 rounded-lg text-sm">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-primary">${selectedProduct.price}</span>
                    <span className="text-xl text-surface-400 line-through">${selectedProduct.originalPrice}</span>
                  </div>
                  <span className="bg-secondary text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {Math.round(((selectedProduct.originalPrice - selectedProduct.price) / selectedProduct.originalPrice) * 100)}% OFF
                  </span>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 bg-mushroom-100 rounded-lg flex items-center justify-center hover:bg-mushroom-200 transition-colors"
                    >
                      <ApperIcon name="Minus" className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 bg-mushroom-100 rounded-lg flex items-center justify-center hover:bg-mushroom-200 transition-colors"
                    >
                      <ApperIcon name="Plus" className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2 text-surface-600">
                    <ApperIcon name="Package" className="w-4 h-4" />
                    <span className="text-sm">{selectedProduct.stock} in stock</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    addToCart(selectedProduct, quantity)
                    setSelectedProduct(null)
                    setQuantity(1)
                  }}
                  className="w-full btn-primary text-lg py-4"
                >
                  Add to Cart - ${(selectedProduct.price * quantity).toFixed(2)}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default FeaturedProducts