/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [t] = useTranslation();
  const [term, setTerm] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(term);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [term, onSearch]);

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="relative flex-1 max-w-2xl mx-auto z-0">
      <input
        type="text"
        placeholder={t('searchButton')}
        value={term}
        onChange={handleChange}
        className="w-full p-3 pl-20 pr-10 rounded-full bg-form-bg-light shadow-md focus:outline-none focus:ring-1 focus:ring-focus-ring focus:ring-[#4d5ac0]  focus:border-focus-border"
      />
      <div className="absolute left-7 top-1/2 transform -translate-y-1/2 text-[#e10717]">
        <FaSearch className="text-lg" />
      </div>
    </div>
  );
}

export default SearchBar;