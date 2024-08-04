import React, { useEffect, useState } from 'react';
import s from './Filters.module.css';

import Switches from '../Switches/Switches';
import Selects from '../Selects/Selects';
import fetchData from '../../services/api';

const Filters = ({ setGroupBy, setBrands, setTags, brands, tags }) => {
  const [allBrands, setAllBrands] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const products = await fetchData();
        const brands = [...new Set(products.map(p => p.brand))];
        const tags = [...new Set(products.flatMap(p => p.tag_list))];

        setAllBrands(brands);
        setAllTags(tags);
      } catch (error) {
        throw new Error('Error fetching filter options:', error);
      }
    };

    fetchFilters();
  }, []);

  return (
    <div className={s.filtersContainer}>
      <Switches setGroupBy={setGroupBy} />
      <Selects
        allBrands={allBrands}
        allTags={allTags}
        brands={brands}
        tags={tags}
        setBrands={setBrands}
        setTags={setTags}
      />
    </div>
  );
};

export default Filters;
