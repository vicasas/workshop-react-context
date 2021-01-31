const getProducts = async () =>
  window
    .fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .catch()

export default getProducts
