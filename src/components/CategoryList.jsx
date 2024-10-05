/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import foodImage from '../assets/food.png'

function CategoryList({ categories, activeCategory, onSelectCategory }) {
  const [t] = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="mb-7">
    {/* <div className="mb-12 px-4 py-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-lg"> */}
      <motion.div 
        className="flex flex-wrap gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          key="all"
          onClick={() => onSelectCategory(null)}
          className={`px-5 py-2 text-sm rounded-full flex justify-center items-center gap-2 transition-colors duration-300 ${
            activeCategory === null
              ? 'bg-gradient-to-r from-[#4d5ac0] to-[#1d2983] text-white'
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
          </svg>
          {t('allProducts')}
        </motion.button>
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-5 py-2 text-sm  rounded-full flex justify-center items-center gap-2 transition-colors duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-[#4d5ac0] to-[#1d2983] text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img 
              src={category.image ? category.image.thumb : foodImage} 
              alt={category.name} 
              className='w-6 h-6 object-cover rounded-full'
            />
            {category.name}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default CategoryList;