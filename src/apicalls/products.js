import { axiosInstance } from "./axiosInstance";

// add a new product
export const AddProduct = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${process.env.REACT_APP_API}/api/products/add-product`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
// get all products
export const GetProducts = async (filters) => {
  try {
    const response = await axiosInstance.post(
      `${process.env.REACT_APP_API}/api/products/get-products`,
      filters
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// edit a product
export const EditProduct = async (id, payload) => {
  try {
    const response = await axiosInstance.put(
      `${process.env.REACT_APP_API}/api/products/edit-product/${id}`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get a product by id
export const GetProductById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `${process.env.REACT_APP_API}/api/products/get-product-by-id/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// delete a product
export const DeleteProduct = async (id) => {
  try {
    const response = await axiosInstance.delete(
      `${process.env.REACT_APP_API}/api/products/delete-product/${id}`
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
// upload product image
export const UploadProductImage = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${process.env.REACT_APP_API}/api/products/upload-image-to-product`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
// update product status
export const UpdateProductStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(
      `${process.env.REACT_APP_API}/api/products/update-product-status/${id}`,
      { status }
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// place a new bid
export const PlaceNewBid = async (payload) => {
  try {
    const response = await axiosInstance.post(
      `${process.env.REACT_APP_API}/api/bids/place-new-bid`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// get all bids
export const GetAllBids = async (filters) => {
  try {
    const response = await axiosInstance.post(
      `${process.env.REACT_APP_API}/api/bids/get-all-bids`,
      filters
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};
