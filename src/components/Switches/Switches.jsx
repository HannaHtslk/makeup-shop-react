import React from 'react';
import { Switch } from 'antd';
import s from './Switches.module.css';

const Switches = ({ setGroupBy }) => {
  return (
    <div className={s.switches}>
      <Switch
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
  );
};

export default Switches;
