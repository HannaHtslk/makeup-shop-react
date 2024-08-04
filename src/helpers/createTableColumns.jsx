import checkPrice from './checkPrice';

const createDataColumns = () => [
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
    render: checkPrice,
  },
  {
    title: 'Product Type',
    dataIndex: 'product_type',
  },
];

export default createDataColumns;
