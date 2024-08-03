import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'antd';
import s from './DataTable.module.css';
//example
const sampleData = [
  {
    key: '1',
    image: 'random',
    name: 'Product 1',
    category: 'Category 1',
    brand: 'Brand 1',
    price: '$10',
    productType: 'Type 1',
    colors: ['Red', 'Blue', 'Green'],
  },
];

const DataTable = () => {
  const [data, setData] = useState(sampleData);
  const [expandable, setExpandable] = useState(false);
  const [groupBy, setGroupBy] = useState(null);
  const [brands, setBrands] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    //data
  }, [brands, tags, groupBy]);

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      render: text => <img src={text} alt="product" />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Product Type',
      dataIndex: 'productType',
    },
  ];

  const expandableColumns = [
    {
      title: 'Colors',
      dataIndex: 'colors',
      render: colors => (
        <ul className={s.colorsList}>
          {colors.map((color, index) => (
            <li className={s.colorItem} key={index}>
              {color}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <div className={s.tableContainer}>
      <Table
        columns={columns.concat(expandable ? expandableColumns : [])}
        expandable={{
          expandedRowRender: record => <p>{record.colors.join(', ')}</p>,
        }}
        dataSource={data}
        pagination={{
          pageSize: 10,
          className: 'pagination',

          onChange: page => {
            // pag.
          },
        }}
      />
    </div>
  );
};

export default DataTable;
