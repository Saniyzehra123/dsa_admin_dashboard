import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const ListItems = () => {
  // Dummy data for products (this would be fetched from the backend)
 const [productList,setProductList] = useState([]);
 const [error, setError] = useState(null);

 const fetchsaree = async()=>{
   try {
     let response = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`)
     let data = response.data?.data;
     if (response.status === 200) {
      console.log("data", data)
      setProductList(data);  // Use `data` field if the result is wrapped in an object
     } else {
       setError(response.data.message || 'Error fetching categories');
     }
   } catch (error) {
     setError(error.message || 'Error fetching categories');
   }
   
 }
  
  // const productList = [
  //   {
  //     id: 1,
  //     name: 'Red Saree',
  //     category: 'Sarees',
  //     price: 1200,
  //     stock: 10,
  //   },
  //   {
  //     id: 2,
  //     name: 'Designer Suit',
  //     category: 'Suits',
  //     price: 2500,
  //     stock: 5,
  //   },
  //   {
  //     id: 3,
  //     name: 'Gold Necklace',
  //     category: 'Jewelry',
  //     price: 15000,
  //     stock: 2,
  //   },
  //   {
  //     id: 4,
  //     name: 'Leather Handbag',
  //     category: 'Bags',
  //     price: 3000,
  //     stock: 8,
  //   },
  // ];
 useEffect( ()=>{
  fetchsaree()
 },[])
  return (
    <div className="container mt-4">
      <h2 className="mb-4">List of Products</h2>

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
          {productList.map((product, index) => (
            <tr key={product.id}>
              <th scope="row">{index + 1}</th>
              <td>{product.title}</td>
              <td>{product.category_id}</td>
              <td>₹{product.price}</td>
              <td>{product.stock_quantity}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2">
              <i className='fas fa-edit'></i>Edit
                </button>
                <button className="btn btn-sm btn-danger">
                <i className='fas fa-trash'></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListItems;
