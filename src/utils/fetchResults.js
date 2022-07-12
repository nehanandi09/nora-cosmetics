import axios from "axios";

const options = {
  method: "GET",
  url: "https://sephora.p.rapidapi.com/products/list",
  params: { categoryId: "cat150006", pageSize: "60", currentPage: "1" },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "sephora.p.rapidapi.com",
  },
};

export const fetchData = async () => {
  const data = await axios
    .request(options)
    .then(function (response) {
      return response.data.products;
    })
    .catch(function (error) {
      console.error(error);
    });
  const newProduct = data.map((item) => {
    const { brandName, displayName, heroImage, rating, reviews } = item;
    return { brandName, displayName, heroImage, rating, reviews };
  });
  return newProduct;
};
