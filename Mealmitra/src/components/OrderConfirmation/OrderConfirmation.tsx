import React from "react";
import {
  FiCheckCircle,
  FiHome,
  FiPackage,
  FiMapPin,
} from "react-icons/fi";
import type { CartItem } from "../../types";
import "./OrderConfirmation.css";

interface OrderConfirmationProps {
  cartItems: CartItem[];
  totalAmount: number;
  orderId: string;
  onContinueShopping: () => void;
  onViewOrders: () => void;
  onTrackOrder: () => void;
}

const OrderConfirmation: React.FC<
  OrderConfirmationProps
> = ({
  cartItems,
  totalAmount,
  orderId,
  onContinueShopping,
  onViewOrders,
  onTrackOrder,
}) => {
  return (
    <div className="order-confirmation-page">

      {/* =====================================================
          SUCCESS HEADER
      ===================================================== */}

      <div className="confirmation-card">

        <div className="confirmation-icon">
          <FiCheckCircle />
        </div>

        <h1>
          Order Placed Successfully!
        </h1>

        <p className="confirmation-message">
          Thank you for ordering with MealMitra.
        </p>

        <div className="order-id-box">
          <span>
            Order ID
          </span>

          <strong>
            #{orderId}
          </strong>
        </div>

        {/* =====================================================
            DELIVERY INFORMATION
        ===================================================== */}

        <div className="delivery-info">

          <div className="delivery-info-item">
            <div className="delivery-icon">
              <FiPackage />
            </div>

            <div>
              <h3>
                Estimated Delivery
              </h3>

              <p>
                30 - 40 minutes
              </p>
            </div>
          </div>

          <div className="delivery-info-item">
            <div className="delivery-icon">
              <FiHome />
            </div>

            <div>
              <h3>
                Delivery Address
              </h3>

              <p>
                Nagpur, Maharashtra
              </p>
            </div>
          </div>

        </div>

        {/* =====================================================
            ORDER ITEMS
        ===================================================== */}

        <div className="confirmation-items">

          <h2>
            Your Order
          </h2>

          {cartItems.map((item) => (
            <div
              className="confirmation-item"
              key={item.id}
            >

              <div className="confirmation-item-image">
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="confirmation-item-info">

                <h3>
                  {item.name}
                </h3>

                <p>
                  ₹{item.price} ×{" "}
                  {item.quantity}
                </p>

              </div>

              <strong>
                ₹
                {item.price *
                  item.quantity}
              </strong>

            </div>
          ))}

        </div>

        {/* =====================================================
            TOTAL
        ===================================================== */}

        <div className="confirmation-total">

          <span>
            Total Amount
          </span>

          <strong>
            ₹{totalAmount}
          </strong>

        </div>

        {/* =====================================================
            BUTTONS
        ===================================================== */}

        <div className="confirmation-buttons">

          <button
            type="button"
            className="track-order-button"
            onClick={onTrackOrder}
          >
            <FiMapPin />
            Track Order
          </button>

          <button
            type="button"
            className="view-orders-button"
            onClick={onViewOrders}
          >
            View My Orders
          </button>

          <button
            type="button"
            className="continue-shopping-button"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>
  );
};

export default OrderConfirmation;