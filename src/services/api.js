import axios from 'axios';

export const fetchData = async filters => {
  try {
    const response = await axios.get(
      'http://makeup-api.herokuapp.com/api/v1/products.json',
      {
        params: filters,
      }
    );

    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from the API');
  }
};
