/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import ProductSkeleton from './LoadingProducts';
import { useTranslation } from 'react-i18next';

function ProductList({ products, loading, noProduct }) {
  const [t] = useTranslation();

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (noProduct) {
    return (
      <div className="flex justify-center items-center">
        <h3 className="text-lg font-semibold mb-2">{t('emptyProduct')}</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          whileHover={{ y: -5 }}
        >
          <img src={product.image ? product.image.original : '../../src/assets/notFoundImage.jpg'} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.short_description}</p>
            <h3 className="text-lg font-bold mb-2 text-center text-[#e10717] ">{product.price} {t('riyel')}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProductList;