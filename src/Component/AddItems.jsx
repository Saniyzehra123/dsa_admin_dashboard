import React, { useEffect, useState } from 'react';
import './AddItems.css'; // Assuming you have custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const AddItems = () => {
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [error, setError] = useState(null);
  const [occasions, setOccasions] = useState([]);
  const [sarees, setSarees] = useState([]);
  const [countries, setCountries] = useState([]);
  const [colors, setColors] = useState([]);
  const [weaves, setWeaves] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    images: [],
    categoryId:0,
    sizeId:0,
    sareeTypeId:0,
    weaveTypeId:0,
    colorId: 0,
    occasion: '',
    main_image_url: "",
    weight: '',
    price: '',
    stockQuantity: '',
    rating: '',
    discount:0,
    newArrival: 0,
    boluse_des: '',
    productCode:"",
    description: '',
    includedComponents:"",
    countryId:0
  });
 
  const fetchCategories = async () => {
   
    try {
      let response = await axios.get(`${process.env.REACT_APP_BASE_URL}/adminitem/category`);
      let data = await response.data?.data;
      if (response.status === 200) {
       console.log("data", data)
        setCategories(data);  // Use `data` field if the result is wrapped in an object
      } else {
        setError(response.data.message || 'Error fetching categories');
      }
    } catch (error) {
      setError(error.message || 'Error fetching categories');
    }
  };

  const fetchSizes = async () => {
    try {
      let response = await axios.get(`${process.env.REACT_APP_BASE_URL}/adminitem/size`);
      let data = await response.data?.data;
      if (response.status === 200) {
        setSizes(data);
      } else {
        setError(response.data.message || 'Error fetching sizes');
      }
    } catch (error) {
      setError(error.message || 'Error fetching sizes');
    }
  };
 
  const fetchColors = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/adminitem/color`);
      const data = response.data?.data;
      console.log("Colors:", data);
      setColors(data || []);
    } catch (error) {
      console.error("Error fetching colors:", error);
      setError(error.message || 'Error fetching colors');
    }
  };

  const fetchSarees = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/adminitem/saree`);
      const data = response.data?.data;
      console.log("Sarees:", data);
      setSarees(data || []);
    } catch (error) {
      console.error("Error fetching sarees:", error);
      setError(error.message || 'Error fetching sarees');
    }
  };

  const fetchWeaves = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/adminitem/weave`);
      const data = response.data?.data;
      console.log("Weaves:", data);
      setWeaves(data || []);
    } catch (error) {
      console.error("Error fetching weaves:", error);
      setError(error.message || 'Error fetching weaves');
    }
  };

  const fetchOccasions = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/adminitem/ocassion`);
      const data = response.data?.data;
      console.log("Occasions:", data);
      setOccasions(data || []);
    } catch (error) {
      console.error("Error fetching occasions:", error);
      setError(error.message || 'Error fetching occasions');
    }
  };

 

  const fetchCountries = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/adminitem/country`);
      const data = response.data?.data;
      console.log("Countries:", data);
      setCountries(data || []);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setError(error.message || 'Error fetching countries');
    }
  };
  useEffect(() => {
    fetchCategories();
    fetchColors();
    fetchSizes();
    fetchWeaves();
    fetchSarees();
    fetchOccasions();
    fetchCountries();
  }, []);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "newArrival") {
        setFormData((prevData) => ({
            ...prevData,
            [id]: value === "true" ? 1 : 0 // Convert to integer
        }));
    }
    
    // else if (id.startsWith('productImage')) {
    //     const files = e.target.files;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         images: [...prevData.images, ...Array.from(files)]
    //     }));
    // } 
    else {
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    }
};

const handleImageUpload = (e, index) => {
  const file = e.target.files[0];
  setFormData((prev) => {
    const updatedimages = [...prev.images];
    updatedimages[index] = file; // Update the specific index with the selected file
    return { ...prev, images: updatedimages };
  });
};

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formDataToSend = new FormData();
    
  //   Object.keys(formData).forEach(key => {
  //     if (key === 'images') {
  //       formData.images.forEach(image => formDataToSend.append('images', image));
  //     } else {
  //       formDataToSend.append(key, formData[key]);
  //     }
  //   });

    
  //   try {

  //     const response = await axios.post('http://localhost:8080/api/products', formData);
  //     if (response.status === 201) {
  //       // Reset form or redirect as needed
  //       setFormData({
  //         title: '',
  //         images: [],
  //         categoryId: '',
  //         sizeId: '',
  //         sareeTypeId: '',
  //         weaveTypeId: '',
  //         colorId: '',
  //         occasion: '',
  //         main_image_url:"",
  //         weight: '',
  //         price: '',
  //         stockQuantity: '',
  //         rating: '',
  //         discount: '',
  //         newArrival: '', 
  //         boluse_des: '',
  //         description: '',
  //         productCode: '', // Added product code state
  //         includedComponents:"",
  //         countryId:''

  //       });
  //       alert('Product added successfully!');
  //     }
  //   } catch (error) {
  //     console.error('Error adding product:', error);
  //     setError(error.response?.data?.message || 'Error adding product');
  //   }
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const formDataToSend = new FormData();
 
    formDataToSend.append("title", "df"); 

    // Ensure all fields, including 'title', are appended correctly
    Object.entries(formData).forEach(([key, value]) => {
        if (key === 'images') {
            formData.images.forEach(image => formDataToSend.append('images', image)); // Append each image
        } else {
            formDataToSend.append(key, value); // Append other fields
        }
    });

    // Debugging: Check each field in FormData, especially 'title'
    console.log('FormDataToSend (title):', formDataToSend.get('title')); // Should display the title value
    console.log('FormDataToSend (all fields):', Array.from(formDataToSend.entries())); // Log all entries for verification

    try {
        const response = await axios.post('http://localhost:8080/api/products', formDataToSend, {
            headers: { 'Content-Type': 'multipart/form-data' } // Ensure multipart format
        });
        
        if (response.status === 201) {
            // Reset form or redirect as needed
            setFormData({
                title: '',
                images: [],
                categoryId: '',
                sizeId: '',
                sareeTypeId: '',
                weaveTypeId: '',
                colorId: '',
                occasion: '',
                main_image_url:"",
                weight: '',
                price: '',
                stockQuantity: '',
                rating: '',
                discount: '',
                newArrival: '', 
                boluse_des: '',
                description: '',
                productCode: '', 
                includedComponents:"",
                countryId:''
            });
            alert('Product added successfully!');
        }
    } catch (error) {
        console.error('Error adding product:', error);
        setError(error.response?.data?.message || 'Error adding product');
    }
};


 
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add New Product</h2>

      <form  onSubmit={handleSubmit}>
        {/* Product Name */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="title" value={formData.title} onChange={handleChange} placeholder="Enter product name" />
        </div>

        {/* Image Upload Section */}
        <div className="mb-3">
          <label htmlFor="productimages" className="form-label">Upload images</label>
          <div className="row">
            {[...Array(6)].map((_, index) => (
              <div className="col-md-3" key={index}>
                <input type="file" className="form-control" id={`images${index + 1}`} onChange={(e) => handleImageUpload(e, index)} />
              </div>
            ))}
          </div>
        </div>
     {/* <div className="mb-3">
          <label htmlFor="productimages" className="form-label">Upload images</label>
          <div className="row">
            <div className="col-md-3">
              <input type="file" className="form-control" id="productImage1" />
            </div>
            <div className="col-md-3">
              <input type="file" className="form-control" id="productImage2" />
            </div>
            <div className="col-md-3">
              <input type="file" className="form-control" id="productImage3" />
            </div>
            <div className="col-md-3">
              <input type="file" className="form-control" id="productImage4" />
            </div>
          </div>
        </div>  */}

        {/* Product Category and Sizes */}
        <div className="row mb-3">
          <div className="col-md-6">
          <label htmlFor="productCategory" className="form-label">Product Category</label>
          <select className="form-control" id="categoryId" value={formData.categoryId} onChange={handleChange}>
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>{category.categories_name}</option>
            ))}
          </select>
          </div>

          <div className="col-md-6">
          <label htmlFor="productSize" className="form-label">Product Size</label>
          <select className="form-control" id="sizeId" value={formData.sizeId} onChange={handleChange}>
            <option value="">Select Size</option>
            {sizes.map((size) => (
              <option key={size.id} value={size.id}>{size.size}</option>
            ))}
          </select>
        </div>
        </div>

        {/* saree type and weave type */}
        <div className="row mb-3">
          <div className="col-md-6">
              <label htmlFor="productSareetype" className="form-label">Product Saree type</label>
              <select className="form-control" id="sareeTypeId" value={formData.sareeTypeId} onChange={handleChange}>
                <option value="">Select Saree</option>
                {sarees.map((saree) => (
              <option key={saree.id} value={saree.id}>{saree.saree_name}</option>
               ))}
              </select>
            </div>
          
            <div className="col-md-6">
            <label htmlFor="productWeavetype" className="form-label">Weave type</label>
            <select className="form-control" id="weaveTypeId" value={formData.weaveTypeId} onChange={handleChange}>
              <option value="">Select Weave</option>
              {weaves.map((weave) => (
              <option key={weave.id} value={weave.id}>{weave.weave_type_name}</option>
               ))}
            </select>
          </div>
        </div>
  
  
        {/* color and code */}
        <div className="row mb-3">
          <div className="col-md-6">
              <label htmlFor="productColor" className="form-label">Product Saree color</label>
              <select className="form-control" id="colorId" value={formData.colorId} onChange={handleChange}>
                <option value="0">Select Color</option>
                {colors.map((color) => (
                    <option key={color.id} value={color.id}>{color.color_name}</option>
                ))}
            </select>

            </div>
          
            <div className="mb-3">
              <label htmlFor="productCode" className="form-label">Product Code</label>
              <input type="text" className="form-control" id="productCode" value={formData.productCode} onChange={handleChange} placeholder="Enter product code" />
            </div>
        </div>



        {/* ocassion and fabrictype */}
        <div className="row mb-3">
          <div className="col-md-6">
              <label htmlFor="productOcassion" className="form-label"> Ocassion </label>
              <select className="form-control" id="occasion"  value={formData.occasion} onChange={handleChange}  >
              <option value="">Select  Ocassion</option>
              
              </select>
            </div>
          
            <div className="col-md-6">
            <label htmlFor="productWeight" className="form-label">Weight</label>
            <input className="form-control" id="weight"  value={formData.weight} onChange={handleChange} placeholder="Enter Weight"  />
            
          </div>
        </div>
        
        {/* Price and stockQuantity */}
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="productPrice" className="form-label">Product Price</label>
            <input type="number" className="form-control" value={formData.price} onChange={handleChange} id="price" placeholder="Enter price" />
          </div>
          <div className="col-md-6">
            <label htmlFor="productstockQuantity" className="form-label">Product stockQuantity</label>
            <input type="number" className="form-control" value={formData.stockQuantity} onChange={handleChange}  id="stockQuantity" placeholder="Enter stock" />
          </div>
        </div>

           {/*rating and discount*/}
           <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="productRating" className="form-label">rating</label>
            <input type="number" className="form-control" value={formData.rating} onChange={handleChange} id="rating" placeholder="Enter rating" />
          </div>
          <div className="col-md-6">
            <label htmlFor="productDiscount" className="form-label">discount</label>
            <input type="number" className="form-control"  value={formData.discount} onChange={handleChange}  id="discount" placeholder="Enter discount" />
          </div>
        </div>


            {/*newarrival and rating*/}
            <div className="row mb-3">
            <div className="col-md-4">
              <label htmlFor="newArrival" className="form-label">New Arrival</label>
              <select className="form-control" id="newArrival" value={formData.newArrival} onChange={handleChange}>
                  <option value={0}>No</option>
                  <option value={1}>Yes</option>
              </select>
          </div>

          <div className="col-md-6">
            <label htmlFor="productBlouse" className="form-label">blouse description</label>
            <textarea className="form-control" id="boluse_des" value={formData.boluse_des} onChange={handleChange} placeholder="Enter blouse description"></textarea>
          </div>
        </div>

         {/*country and  included component */}
         <div className="row mb-3">
          <div className="col-md-6">
              <label htmlFor="productCountry" className="form-label"> Country </label>
              <select className="form-control" id="countryId"  value={formData.countryId} onChange={handleChange}  >
              <option value="">Select  Country</option>
              
              </select>
            </div>
          
            <div className="col-md-6">
            <label htmlFor="productIncludedComponents" className="form-label">IncludedComponents</label>
            <input className="form-control" id="includedComponents"  value={formData.includedComponents} onChange={handleChange} placeholder="Enter includedComponents"  />
            
          </div>
        </div>

        {/* Description */}
        {/* <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">Product Description</label>
          <textarea className="form-control" id="productDescription" rows="3" placeholder="Enter product description"></textarea>
        </div> */}

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default AddItems;
