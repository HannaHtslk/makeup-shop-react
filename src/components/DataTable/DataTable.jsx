import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import s from './DataTable.module.css';

const DataTable = ({ data, groupBy, brands, tags }) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const filterData = () => {
    let result = [...data];

    if (brands.length > 0) {
      result = result.filter(item => brands.includes(item.brand));
    }

    if (tags.length > 0) {
      result = result.filter(item =>
        tags.every(tag => item.tag_list.includes(tag))
      );
    }

    if (groupBy) {
      result = result.reduce((acc, item) => {
        const key = item[groupBy];
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
      }, {});
    }

    return Array.isArray(result) ? result : Object.values(result).flat();
  };

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image_link',
      render: (text, record) => (
        <img
          src={record.api_featured_image}
          alt={record.name}
          style={{ width: 100, height: 100 }}
        />
      ),
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
      dataIndex: 'product_type',
    },
  ];

  const expandedRowRender = record => (
    <div className={s.expandableContent}>
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

  const handleExpand = (expanded, record) => {
    setExpandedRowKeys(expanded ? [record.id] : []);
  };

  return (
    <div className={s.tableContainer}>
      <Table
        columns={columns}
        rowKey="id"
        expandable={{
          expandedRowRender,
          expandedRowKeys,
          onExpand: handleExpand,
          rowExpandable: record =>
            record.product_colors && record.product_colors.length > 0,
        }}
        dataSource={filterData()}
        pagination={{
          pageSize: 10,
          className: 'pagination',
        }}
      />
    </div>
  );
};

export default DataTable;
