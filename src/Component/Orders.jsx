import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Orders = () => {
  // Updated product data for multiple orders
  const orders = [
    {
      id: 1,
      productImage: 'https://dsafashionwear.com/images/DSA_01/DSA_01.jpg',
      productName: 'Men Round Neck Pure Cotton T-shirt, XL',
      customerName: 'Nguyễn Quang Huymy dinh',
      deliveryAddress: '01, HÀ NỘI / VIỆT NAM, Vietnam, 000000',
      items: 1,
      method: 'COD',
      payment: 'Pending',
      date: '10/25/2024',
      price: 74,
      status: 'Order Placed',
    },

    {
      id: 2,
      productImage: 'https://dsafashionwear.com/images/DSA_03/DSA_03.jpg',
      productName: 'Designer Suit, Full Embroidered',
      customerName: 'Jane Smith',
      deliveryAddress: '45 King Road, London, UK',
      items: 1,
      method: 'Credit Card',
      payment: 'Completed',
      date: '10/20/2024',
      price: 2500,
      status: 'Shipped',
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Orders</h2>
      <div className="row">
        {orders.map((order) => (
          <div className="col-md-12 mb-4" key={order.id}>
            <div className="card order-card shadow-sm p-3">
              <div className="row align-items-center">
                
                {/* Row 1: Product Image */}
                <div className="col-md-2 text-center">
                  <img
                    src={order.productImage}
                    className="img-fluid rounded"
                    alt={order.productName}
                    style={{ maxWidth: '100px' }}
                  />
                </div>

                {/* Row 2: Product Name & Description */}
                <div className="col-md-3">
                  <h5>{order.productName}</h5>
                  <p><strong>Customer:</strong> {order.customerName}</p>
                </div>

                {/* Row 3: Address */}
                <div className="col-md-3">
                  <p><strong>Delivery Address:</strong><br /> {order.deliveryAddress}</p>
                </div>

                {/* Row 4: Order Details */}
                <div className="col-md-2">
                  <p><strong>Items:</strong> {order.items}</p>
                  <p><strong>Method:</strong> {order.method}</p>
                  <p><strong>Payment:</strong> {order.payment}</p>
                  <p><strong>Date:</strong> {order.date}</p>
                </div>

                {/* Row 5: Price & Status */}
                <div className="col-md-2">
                  <p><strong>Price:</strong> ${order.price}</p>
                  <label><strong>Status:</strong></label>
                  <select className="form-select mt-2" defaultValue={order.status}>
                    <option>Order Placed</option>
                    <option>Packing</option>
                    <option>Shipped</option>
                    <option>Out For Delivery</option>
                    <option>Delivered</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional CSS for styling */}
      <style jsx>{`
        .order-card {
          border: .5px solid black;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease-in-out;
          background: #f9f9f9;
        }

        .order-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .order-card h5 {
          font-size: 1.1rem;
          font-weight: 600;
        }

        .order-card p {
          margin: 0;
          font-size: 0.95rem;
        }

        .order-card select {
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Orders;
