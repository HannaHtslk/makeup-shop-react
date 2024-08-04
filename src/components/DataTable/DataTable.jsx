import React, { useState } from 'react';
import { Table } from 'antd';
import s from './DataTable.module.css';
import createDataColumns from '../../helpers/createTableColumns';
import ExpandableRow from '../ExpandableRow/ExpandableRow';
import filterData from '../../helpers/filterData';

const DataTable = ({ data, groupBy, brands, tags }) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const handleExpand = (expanded, record) => {
    setExpandedRowKeys(expanded ? [record.id] : []);
  };

  return (
    <div className={s.tableContainer}>
      <Table
        columns={createDataColumns()}
        rowKey="id"
        expandable={{
          expandedRowRender: record => <ExpandableRow record={record} />,
          expandedRowKeys,
          onExpand: handleExpand,
          rowExpandable: record =>
            record.product_colors && record.product_colors.length > 0,
        }}
        dataSource={filterData(data, brands, tags, groupBy)}
        pagination={{
          pageSize: 10,
          className: 'pagination',
        }}
      />
    </div>
  );
};

export default DataTable;
