/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import ProductSkeleton from './LoadingProducts';
import { useTranslation } from 'react-i18next';
import NotFoundImage from '../assets/notFoundImage.jpg'

function ProductList({ products, loading, noProduct }) {
  const [t] = useTranslation();

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {[...Array(20)].map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (noProduct) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <h3 className="text-xl font-semibold text-gray-600">{t('emptyProduct')}</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-4">
      {products.map((product) => (
        <motion.div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          whileHover={{ y: -5 }}
        >
          <div className="relative pb-[60%] overflow-hidden">
            <motion.img 
              src={product.image ? product.image.thumb : NotFoundImage} 
              alt={product.name} 
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="absolute top-3 right-3 bg-gradient-to-r from-[#e10717] to-[#c10410] text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
              {product.price} {t('riyel')}
            </div>
          </div>
          
          <div className="p-4">
            <h3 className="text-base font-bold mb-2 text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mb-2 line-clamp-2">{product.short_description}</p>
            <q className="text-[#384293] mb-2 text-xs">{t('productNote')}</q>
            <div className="space-y-2 mt-1">
              {product.prices_units.data.map((unit, index) => (
                <p key={index} className="text-sm text-gray-500 flex justify-between">
                  {unit.units_name} <span className="font-semibold text-[#e10717]">{unit.price} {t('riyel')}</span>
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProductList;