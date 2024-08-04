const filterData = (data, brands, tags, groupBy) => {
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

export default filterData;
