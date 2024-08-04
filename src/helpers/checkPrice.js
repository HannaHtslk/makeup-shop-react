const checkPrice = price =>
  price === null || +price < 0.1
    ? 'not available'
    : `$${(+price).toFixed(+price % 1 === 0 ? 0 : 2)}`;

export default checkPrice;
