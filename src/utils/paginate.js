export const paginate = (products) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(products.length / itemsPerPage);

  const newProducts = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return products.slice(start, start + itemsPerPage);
  });

  return newProducts;
};
