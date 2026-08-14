import "./OrderConfirmation.css";

type OrderConfirmationProps = {
  total: number;
  onHome: () => void;
};

function OrderConfirmation({
  total,
  onHome,
}: OrderConfirmationProps) {
  return (
    <div className="confirmation-page">

      <div className="confirmation-card">

        {/* Success Icon */}
        <div className="success-icon">
          ✓
        </div>

        {/* Heading */}
        <h1>
          Order Confirmed! 🎉
        </h1>

        <p className="success-message">
          Thank you for ordering with MealMitra!
        </p>

        {/* Order ID */}
        <div className="order-id">
          <span>Order ID</span>
          <strong>
            #MM{Math.floor(100000 + Math.random() * 900000)}
          </strong>
        </div>

        {/* Delivery Information */}
        <div className="delivery-info">

          <div className="info-box">
            <span>🍽️</span>
            <div>
              <strong>Order Received</strong>
              <p>Your order has been confirmed.</p>
            </div>
          </div>

          <div className="info-box">
            <span>👨‍🍳</span>
            <div>
              <strong>Preparing Your Food</strong>
              <p>Our restaurant is preparing your order.</p>
            </div>
          </div>

          <div className="info-box">
            <span>🛵</span>
            <div>
              <strong>On the Way</strong>
              <p>Your food will be delivered soon.</p>
            </div>
          </div>

        </div>

        {/* Total */}
        <div className="confirmation-total">

          <span>Total Paid</span>

          <strong>
            ₹{total}
          </strong>

        </div>

        {/* Home Button */}
        <button
          className="home-btn"
          onClick={onHome}
        >
          🏠 Back to Home
        </button>

      </div>

    </div>
  );
}

export default OrderConfirmation;