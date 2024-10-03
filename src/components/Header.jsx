/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png';
import { FaGlobe } from 'react-icons/fa';

function Header() {
  const [t, i18n] = useTranslation("translation");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <motion.header 
      className="bg-gradient-to-r from-[#4d5ac0] to-[#1d2983] shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <motion.img 
            src={Logo} 
            alt="Restaurant Logo" 
            className="h-16 w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
          <motion.h1 
            className="text-2xl font-bold text-white text-center flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            بوفية استراحة الواجهة
          </motion.h1>
          <div className="relative group z-50">
            <motion.button
              className="text-white hover:text-yellow-300 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGlobe className="text-2xl" />
            </motion.button>
            <div className={`absolute ${i18n.language == "ar" ? '-right-24' : 'right-0' } mt-2 w-32 z-50 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}>
              <motion.button 
                className="block w-full text-start px-4 py-2 text-sm text-gray-700"
                onClick={() => handleChangeLanguage("ar")}
                whileHover={{ backgroundColor: "#fef08a" }}
              >
                عربي
              </motion.button>
              <motion.button 
                className="block w-full text-start px-4 py-2 text-sm text-gray-700"
                onClick={() => handleChangeLanguage("en")}
                whileHover={{ backgroundColor: "#fef08a" }}
              >
                English
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;