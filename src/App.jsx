import React from 'react';
import { Layout } from 'antd';
import Filters from './components/Filters/Filters';
import DataTable from './components/DataTable/DataTable';
import './App.css';

const App = () => {
  return (
    <Layout className="layout">
      <Filters />
      <DataTable />
    </Layout>
  );
};

export default App;
