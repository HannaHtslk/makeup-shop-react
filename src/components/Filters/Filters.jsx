import React, { useEffect, useState } from 'react';
import { Switch, Select } from 'antd';
import s from './Filters.module.css';
import { fetchData } from '../../services/api';

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
      <div className={s.switches}>
        <Switch
          className={s.switch}
          checkedChildren="Group by Type"
          unCheckedChildren="Group by Type"
          onChange={checked => setGroupBy(checked ? 'product_type' : null)}
        />
        <Switch
          checkedChildren="Group by Brand"
          unCheckedChildren="Group by Brand"
          onChange={checked => setGroupBy(checked ? 'brand' : null)}
        />
        <Switch
          checkedChildren="Group by Category"
          unCheckedChildren="Group by Category"
          onChange={checked => setGroupBy(checked ? 'category' : null)}
        />
      </div>
      <div className={s.dropdowns}>
        <Select
          className={s.selectDropdown}
          mode="multiple"
          placeholder="Select Brands"
          style={{ width: 200 }}
          value={brands || []}
          onChange={value => setBrands(value)}
        >
          {allBrands.map(brand => (
            <Select.Option key={brand} value={brand}>
              {brand}
            </Select.Option>
          ))}
        </Select>
        <Select
          className={s.selectDropdown}
          mode="multiple"
          placeholder="Select Tags"
          value={tags || []}
          style={{ width: 200, marginLeft: 16 }}
          onChange={value => setTags(value)}
        >
          {allTags.map(tag => (
            <Select.Option key={tag} value={tag}>
              {tag}
            </Select.Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Filters;
