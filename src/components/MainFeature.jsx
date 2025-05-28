import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from './ApperIcon'

const MainFeature = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [filters, setFilters] = useState({
    skinType: 'all',
    priceRange: 'all',
    mushroomType: 'all'
  })

  // Sample product data
  const [products] = useState([
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
      stock: 24
    },
    {
      id: 2,
      name: 'Shiitake Brightening Cream',
      price: 65,
      originalPrice: 85,
      category: 'moisturizers',
      skinType: ['dry', 'normal'],
      mushroomType: 'shiitake',
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Rich moisturizing cream with shiitake extract to brighten and even skin tone.',
      benefits: ['Brightens complexion', 'Deep moisturization', 'Evens skin tone'],
      ingredients: ['Shiitake Extract', 'Niacinamide', 'Shea Butter'],
      rating: 4.6,
      reviews: 89,
      stock: 18
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
      stock: 31
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
      stock: 42
    },
    {
      id: 5,
      name: 'Chaga Antioxidant Toner',
      price: 52,
      originalPrice: 68,
      category: 'toners',
      skinType: ['all-skin', 'mature'],
      mushroomType: 'chaga',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Antioxidant-rich toner with chaga extract to protect and prepare skin for treatment.',
      benefits: ['Antioxidant protection', 'Balances pH', 'Preps for skincare'],
      ingredients: ['Chaga Extract', 'Rose Water', 'Vitamin C'],
      rating: 4.5,
      reviews: 67,
      stock: 28
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
      stock: 15
    }
  ])

  const categories = [
    { id: 'all', name: 'All Products', icon: 'Grid3X3' },
    { id: 'serums', name: 'Serums', icon: 'Droplets' },
    { id: 'moisturizers', name: 'Moisturizers', icon: 'Heart' },
    { id: 'masks', name: 'Masks', icon: 'Sparkles' },
    { id: 'cleansers', name: 'Cleansers', icon: 'Waves' },
    { id: 'toners', name: 'Toners', icon: 'Zap' },
    { id: 'essences', name: 'Essences', icon: 'Star' }
  ]

  const mushroomTypes = [
    { id: 'all', name: 'All Mushrooms' },
    { id: 'reishi', name: 'Reishi' },
    { id: 'shiitake', name: 'Shiitake' },
    { id: 'lions-mane', name: 'Lion\'s Mane' },
    { id: 'cordyceps', name: 'Cordyceps' },
    { id: 'chaga', name: 'Chaga' },
    { id: 'turkey-tail', name: 'Turkey Tail' }
  ]

  const skinTypes = [
    { id: 'all', name: 'All Skin Types' },
    { id: 'dry', name: 'Dry' },
    { id: 'oily', name: 'Oily' },
    { id: 'combination', name: 'Combination' },
    { id: 'sensitive', name: 'Sensitive' },
    { id: 'normal', name: 'Normal' },
    { id: 'acne-prone', name: 'Acne-Prone' },
    { id: 'mature', name: 'Mature' }
  ]

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory
    const skinTypeMatch = filters.skinType === 'all' || product.skinType.includes(filters.skinType) || product.skinType.includes('all-skin')
    const mushroomMatch = filters.mushroomType === 'all' || product.mushroomType === filters.mushroomType
    
    let priceMatch = true
    if (filters.priceRange === 'under-50') priceMatch = product.price < 50
    else if (filters.priceRange === '50-80') priceMatch = product.price >= 50 && product.price <= 80
    else if (filters.priceRange === 'over-80') priceMatch = product.price > 80

    return categoryMatch && skinTypeMatch && mushroomMatch && priceMatch
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price
      case 'price-high': return b.price - a.price
      case 'rating': return b.rating - a.rating
      case 'newest': return b.id - a.id
      default: return 0
    }
  })

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

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setCart(cart.filter(item => item.id !== productId))
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ))
    }
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-organic-pattern opacity-30"></div>
      
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
            Discover Our <span className="text-gradient">Mushroom Collection</span>
          </h2>
          <p className="text-lg md:text-xl text-surface-600 max-w-3xl mx-auto">
            Experience the transformative power of fungi with our scientifically-formulated skincare products
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-3 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white shadow-glow'
                  : 'bg-mushroom-100 text-surface-700 hover:bg-mushroom-200'
              }`}
            >
              <ApperIcon name={category.icon} className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Filters and Sort */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6 mb-8 md:mb-12 p-4 md:p-6 bg-mushroom-50 rounded-2xl"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-surface-700 mb-2">Skin Type</label>
              <select
                value={filters.skinType}
                onChange={(e) => setFilters(prev => ({ ...prev, skinType: e.target.value }))}
                className="input-organic text-sm md:text-base min-w-[120px]"
              >
                {skinTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-surface-700 mb-2">Mushroom Type</label>
              <select
                value={filters.mushroomType}
                onChange={(e) => setFilters(prev => ({ ...prev, mushroomType: e.target.value }))}
                className="input-organic text-sm md:text-base min-w-[120px]"
              >
                {mushroomTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-surface-700 mb-2">Price Range</label>
              <select
                value={filters.priceRange}
                onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
                className="input-organic text-sm md:text-base min-w-[120px]"
              >
                <option value="all">All Prices</option>
                <option value="under-50">Under $50</option>
                <option value="50-80">$50 - $80</option>
                <option value="over-80">Over $80</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between w-full lg:w-auto gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-surface-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-organic text-sm md:text-base min-w-[120px]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="relative btn-primary flex items-center space-x-2 mt-6"
            >
              <ApperIcon name="ShoppingBag" className="w-5 h-5" />
              <span className="text-sm md:text-base">Cart ({getCartItemCount()})</span>
              {getCartItemCount() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-secondary text-white text-xs rounded-full flex items-center justify-center"
                >
                  {getCartItemCount()}
                </motion.span>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-organic group cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary text-white px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2 flex items-center space-x-1">
                      <ApperIcon name="Star" className="w-3 h-3 md:w-4 md:h-4 text-accent fill-current" />
                      <span className="text-xs md:text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-surface-900 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-surface-600 text-sm md:text-base mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center space-x-2 mb-4">
                    {product.benefits.slice(0, 2).map((benefit, idx) => (
                      <span key={idx} className="bg-mushroom-100 text-surface-700 px-2 py-1 rounded-lg text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>

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

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ApperIcon name="Package" className="w-4 h-4 text-surface-500" />
                      <span className="text-sm text-surface-600">{product.stock} in stock</span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        addToCart(product)
                      }}
                      className="btn-primary py-2 px-4 text-sm"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 md:py-16"
          >
            <ApperIcon name="Search" className="w-16 h-16 text-surface-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-surface-900 mb-2">No products found</h3>
            <p className="text-surface-600">Try adjusting your filters to see more products.</p>
          </motion.div>
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
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
      </AnimatePresence>

      {/* Shopping Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setIsCartOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-surface-200">
                  <h2 className="text-xl font-bold text-surface-900">Shopping Cart</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="w-8 h-8 bg-surface-100 rounded-lg flex items-center justify-center hover:bg-surface-200 transition-colors"
                  >
                    <ApperIcon name="X" className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-12">
                      <ApperIcon name="ShoppingBag" className="w-16 h-16 text-surface-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-surface-900 mb-2">Your cart is empty</h3>
                      <p className="text-surface-600">Start shopping to add items to your cart.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex items-center space-x-4 p-4 bg-mushroom-50 rounded-xl">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-surface-900">{item.name}</h3>
                            <p className="text-sm text-surface-600">${item.price}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <button
                                onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 bg-white rounded flex items-center justify-center hover:bg-surface-100 transition-colors"
                              >
                                <ApperIcon name="Minus" className="w-3 h-3" />
                              </button>
                              <span className="w-8 text-center text-sm">{item.quantity}</span>
                              <button
                                onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 bg-white rounded flex items-center justify-center hover:bg-surface-100 transition-colors"
                              >
                                <ApperIcon name="Plus" className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-surface-900">${(item.price * item.quantity).toFixed(2)}</p>
                            <button
                              onClick={() => updateCartQuantity(item.id, 0)}
                              className="text-red-500 hover:text-red-700 text-sm mt-1"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {cart.length > 0 && (
                  <div className="border-t border-surface-200 p-6 space-y-4">
                    <div className="flex items-center justify-between text-lg font-semibold">
                      <span>Total:</span>
                      <span>${getCartTotal().toFixed(2)}</span>
                    </div>
                    <button
                      onClick={() => {
                        toast.success('Proceeding to checkout...')
                        setIsCartOpen(false)
                      }}
                      className="w-full btn-primary py-3"
                    >
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default MainFeature