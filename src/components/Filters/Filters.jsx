import React from 'react';
import { Switch, Select } from 'antd';
import s from './Filters.module.css';

const Filters = ({ setGroupBy, setBrands, setTags }) => {
  return (
    <div className={s.filtersContainer}>
      <div className={s.switches}>
        <Switch
          className={s.switch}
          checkedChildren="Group by Type"
          unCheckedChildren="Group by Type"
          onChange={checked => setGroupBy(checked ? 'type' : null)}
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
          onChange={value => setBrands(value)}
        ></Select>
        <Select
          className={s.selectDropdown}
          mode="multiple"
          placeholder="Select Tags"
          style={{ width: 200, marginLeft: 16 }}
          onChange={value => setTags(value)}
        ></Select>
      </div>
    </div>
  );
};

export default Filters;
