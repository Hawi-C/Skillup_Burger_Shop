// Write all the code here
import React from "react";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { orderId } = useParams();
  const orderIdNum = isNaN(parseInt(orderId, 10)) ? null : parseInt(orderId, 10);
  console.log(orderIdNum)


  // Static dataset for demonstration
  const ordersData = {
    1: { status: "Delivered", placedAt: "2023-03-01", deliveredAt: "2023-03-03", amount: "₹2132", paymentMethod: "COD" },
    2: { status: "Processing", placedAt: "2023-03-02", deliveredAt: null, amount: "₹1150", paymentMethod: "Online" },
    3: { status: "Shipped", placedAt: "2023-03-04", deliveredAt: null, amount: "₹1780", paymentMethod: "COD" },
    4: { status: "Cancelled", placedAt: "2023-03-05", deliveredAt: null, amount: "₹940", paymentMethod: "Online" },
    // Add more orders if needed
  };

  const order = ordersData[orderIdNum];

  if (!order) {
    return <div>Order not found</div>;
  }

  return (
    <section className="order-details">
      <main>
        <h1>Order Details</h1>
        <div className="status-section">
          <h2>Status</h2>
          <p><strong>Order Status:</strong> {order.status}</p>
          <p><strong>Placed At:</strong> {order.placedAt}</p>
          {order.deliveredAt && <p><strong>Delivered At:</strong> {order.deliveredAt}</p>}
        </div>

        <div className="payment-section">
          <h2>Payment</h2>
          <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
          <p><strong>Amount:</strong> {order.amount}</p>
        </div>
      </main>
    </section>
  );
};

export default OrderDetails;
