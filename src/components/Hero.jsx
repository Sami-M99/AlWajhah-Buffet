import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaShoppingCart, FaUtensils } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import HeroImage from "../assets/hero.png"

const Hero = () => {
  const [t] = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row justify-between items-center gap-10 mb-8 py-7 md:py-14 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="max-w-xl" variants={itemVariants}>
        <motion.h2
          className="text-4xl text-center md:text-start font-bold mb-8 text-[#384293] leading-tight"
          variants={itemVariants}
        >
          {t("HeroTitle")}
        </motion.h2>
        <motion.p className="text-lg text-gray-700 mb-6" variants={itemVariants}>
          {t("HeroParagraph1")}
        </motion.p>
        <motion.p className="text-lg text-gray-700 mb-8" variants={itemVariants}>
          {t("HeroParagraph2")}
        </motion.p>
        
        <motion.ul className="space-y-6" variants={itemVariants}>
          <motion.li
            className="flex items-center gap-3 text-lg text-gray-700"
            variants={itemVariants}
          >
            <FaShoppingCart className="text-[#384293] mr-4 text-2xl" />
            {t("HeroSpan1")}
          </motion.li>
          <motion.li
            className="flex items-center gap-3 text-lg text-gray-700"
            variants={itemVariants}
          >
            <FaUtensils className="text-[#384293] mr-4 text-2xl" />
            {t("HeroSpan2")}
          </motion.li>
          <motion.li
            className="flex items-center gap-3 text-lg text-gray-700"
            variants={itemVariants}
          >
            <GiHotMeal className="text-[#384293] mr-4 text-2xl" />
            {t("HeroSpan3")}
          </motion.li>
        </motion.ul>
      </motion.div>
      
      <motion.div
        className="relative"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.img
          src={HeroImage}
          alt="image"
          className="w-80 md:w-[520px] rounded-3xl shadow-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        />
        {/* <motion.div
          className="absolute -top-4 -start-4 w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 300, damping: 10 }}
        >
          <span className="text-white text-xl font-bold">New!</span>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Hero;