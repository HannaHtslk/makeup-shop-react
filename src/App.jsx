import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import Filters from './components/Filters/Filters';
import DataTable from './components/DataTable/DataTable';
import './App.css';
import Loader from './components/Loader/Loader';
import fetchData from './services/api';

const App = () => {
  const [groupBy, setGroupBy] = useState(null);
  const [brands, setBrands] = useState([]);
  const [tags, setTags] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const fetchedData = await fetchData();

        setData(fetchedData);
      } catch (error) {
        throw new Error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <Layout className="layout">
      <Filters
        setGroupBy={setGroupBy}
        setBrands={setBrands}
        setTags={setTags}
        brands={brands}
        tags={tags}
      />
      {loading ? (
        <Loader />
      ) : (
        <DataTable data={data} groupBy={groupBy} brands={brands} tags={tags} />
      )}
    </Layout>
  );
};

export default App;
