import React from 'react';
import s from './ExpandableRow.module.css';

const ExpandableRow = ({ record }) => (
  <div className={s.container}>
    <h4>Available Colors:</h4>
    <ul className={s.colorsList}>
      {record.product_colors.map((color, index) => (
        <li className={s.colorItem} key={index}>
          {color.colour_name}
        </li>
      ))}
    </ul>
  </div>
);

export default ExpandableRow;
