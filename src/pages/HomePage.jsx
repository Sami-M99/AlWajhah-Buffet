/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GiMeal } from 'react-icons/gi';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

const HomePage = ({ 
  handleSearch, 
  categories, 
  activeCategory, 
  handleCategorySelect, 
  displayedProducts, 
  loading, 
  noProduct 
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <div className="flex flex-col sm:flex-row justify-center items-center mb-10">
        <SearchBar onSearch={handleSearch} />
        <div className="mt-4 sm:mt-0 ml-4">
          <Link
            to="/product-table"
            className="bg-gradient-to-r from-[#4d5ac0] to-[#1d2983] hover:from-[#1d2983] hover:to-[#1d2983] text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center gap-3"
          >
            <GiMeal size={25} />
            <span>{t('viewProductTable')}</span>
          </Link>
        </div>
      </div>
      <CategoryList 
        categories={categories} 
        activeCategory={activeCategory}
        onSelectCategory={handleCategorySelect}
      />
      <ProductList products={displayedProducts} loading={loading} noProduct={noProduct} />
    </>
  );
};

export default HomePage;