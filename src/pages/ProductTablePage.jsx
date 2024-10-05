/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import NotFoundImage from '../assets/notFoundImage.jpg'
import { GiMeal } from 'react-icons/gi';
import { IoMdArrowRoundBack } from 'react-icons/io';

const ProductTablePage = ({ products }) => {
  const { t } = useTranslation();

  const getProductColor = (index) => {
    const colors = ['bg-blue-50', 'bg-yellow-50', 'bg-pink-50'];
    return colors[index % colors.length];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <GiMeal className="text-3xl text-[#384293]" />
          {t('productTable')}
        </h1>
        <Link
          to="/"
          className="flex justify-center items-end gap-2 bg-gradient-to-r from-[#4d5ac0] to-[#1d2983] hover:from-[#1d2983] hover:to-[#1d2983] text-white font-bold pt-1 pb-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          {t('backToHome')}
          <IoMdArrowRoundBack className='text-xl'/>
        </Link>
      </div>
      <p className="text-[#384293] mb-2 text-sm">{t('note')}: <q>{t('productNote')}</q></p>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border-b-2 border-gray-200 p-3 text-start font-semibold text-gray-600">{t('product')}</th>
              <th className="border-b-2 border-gray-200 p-3 text-start font-semibold text-gray-600">{t('price')}</th>
              <th className="border-b-2 border-gray-200 p-3 text-start font-semibold text-gray-600">{t('units')}</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, productIndex) => (
              <React.Fragment key={product.id}>
                {product.prices_units.data.map((unit, index) => (
                  <motion.tr
                    key={`${product.id}-${index}`}
                    className={`${getProductColor(productIndex)} hover:brightness-95 transition-all duration-150`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <td className="border-b border-gray-200 p-3">
                      {index === 0 && (
                        <div className="flex items-center gap-2">
                          <img src={product.image?.thumb || NotFoundImage} alt={product.name} className="w-10 h-10 rounded-full object-cover" />
                          <span className="font-medium text-gray-800">{product.name}</span>
                        </div>
                      )}
                    </td>
                    <td className="border-b border-gray-200 p-3 text-blue-600 font-semibold">
                      {unit.price} {t('riyel')}
                    </td>
                    <td className="border-b border-gray-200 p-3 text-gray-700">
                      {unit.units_name}
                    </td>
                  </motion.tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTablePage;