import httpClient from "../helpers/httpClient";

const END_POINT = '/api/products';

const products = {
  getProducts: () => httpClient.get(END_POINT),
  getById: (sku) => httpClient.get(END_POINT + '/' + sku),
  createProduct: (product) => httpClient.post(END_POINT , product),
  updateProduct: (product, sku) => httpClient.put(END_POINT + '/' + sku, product),
  deleteUser: (sku) => httpClient.delete(END_POINT + '/' + sku),
}
export {
  products
}