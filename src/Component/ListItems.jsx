import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ListItems = () => {
  const { id } = useParams();
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const fetchSaree = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
      const data = response.data?.data;
      if (response.status === 200) {
        setProductList(data);
      } else {
        setError(response.data.message || 'Error fetching products');
      }
    } catch (error) {
      setError(error.message || 'Error fetching products');
    }
  };
 
// Delete product
const deleteProduct = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return;
    }
    console.log('Product ID before delete request:', productId);  // Add logging to verify the ID passed

    try {
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/products/${productId}`);
      if (response.status === 200) {
        // Update the product list by removing the deleted product
        setProductList(prevList => prevList.filter(product => product.item_id !== productId));  // Use item_id instead of id
        setSuccessMessage('Product deleted successfully.');
        setError(null);
      } else {
        setError(response.data.message || 'Error deleting product');
      }
    } catch (error) {
      setError(error.message || 'Error deleting product');
    }
};

  

  useEffect(() => {
    fetchSaree();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">List of Products</h2>

      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {productList.map((product, index) => {
            console.log('Product ID:', product.item_id);  // Check if ID is defined
            return (
            <tr key={product.id}>
                <th scope="row">{index + 1}</th>
                <td>{product.title}</td>
                <td>{product.category_id}</td>
                <td>₹{product.price}</td>
                <td>{product.stock_quantity}</td>
                <td>
                <button className="btn btn-sm btn-primary me-2">
                    <i className="fas fa-edit"></i> Edit
                </button>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteProduct(product.item_id)}  // Ensure product.id is passed
                >
                    <i className="fas fa-trash"></i> Delete
                </button>
                </td>
            </tr>
            );
        })}
        </tbody>


      </table>
    </div>
  );
};

export default ListItems;
