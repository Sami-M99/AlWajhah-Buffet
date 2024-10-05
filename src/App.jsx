import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { getAllProducts, getCategories, getProducts } from './ApiFunctions';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import ProductTablePage from './pages/ProductTablePage';
import HomePage from './pages/HomePage';

function App() {
  const { i18n } = useTranslation();
  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [noProduct, setNoProduct] = useState(false);

  useEffect(() => {
    fetchInitialData();
  }, [i18n.language]);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const categoriesResponse = await getCategories(i18n.language);
      setCategories(categoriesResponse.data.data);
      
      const productsResponse = await getAllProducts(i18n.language);
      setAllProducts(productsResponse.data.data);
      setDisplayedProducts(productsResponse.data.data);
      
      setLoading(false);
    } catch (error) {
      console.error('Error fetching initial data:', error);
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (categoryId) => {
    try {
      setLoading(true);
      const response = await getProducts(categoryId, i18n.language);
      setDisplayedProducts(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products by category:', error);
      setLoading(false);
    }
  };

  const handleSearch = useCallback((term) => {
    if (term.trim() === '') {
      setDisplayedProducts(allProducts);
      setNoProduct(false);
    } else {
      const searchedProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
      );
      setDisplayedProducts(searchedProducts);
      setNoProduct(searchedProducts.length === 0);
    }
    setActiveCategory(null);
  }, [allProducts]);

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === null) {
      setDisplayedProducts(allProducts);
    } else {
      fetchProductsByCategory(categoryId);
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 ${i18n.language == 'ar' ? "direction-rtl font-['Cairo']" : "direction-ltr font-['Alegreya']"}`}>
      <Header onChangeLanguage={changeLanguage} />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={
            <HomePage 
              handleSearch={handleSearch}
              categories={categories}
              activeCategory={activeCategory}
              handleCategorySelect={handleCategorySelect}
              displayedProducts={displayedProducts}
              loading={loading}
              noProduct={noProduct}
            />
          } />
          <Route path="/product-table" element={<ProductTablePage products={allProducts} />} />
        </Routes>
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
}

export default App;