import React from 'react';
import { Select } from 'antd';
import s from './Selects.module.css';

const Selects = ({ allBrands, allTags, brands, tags, setBrands, setTags }) => {
  return (
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
  );
};

export default Selects;
