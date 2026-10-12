import "./TrackOrder.css";

import {
  FiPackage,
  FiClock,
  FiMapPin,
  FiPhone,
  FiUser,
  FiCheck,
  FiX,
} from "react-icons/fi";

import type { Order } from "../MyOrders/MyOrders";

type TrackOrderProps = {
  order: Order;
  onBack: () => void;
};

function TrackOrder({ order, onBack }: TrackOrderProps) {
  const deliveryFee = order.total - order.subtotal;

  return (
    <div className="track-page">

      {/* =========================================
          TOP HEADER
      ========================================= */}
      <div className="track-header">

        <div className="track-header-content">

          <div className="track-heading">
            <span className="track-small-label">
              ORDER TRACKING
            </span>

            <h1>
              Track Your Order
            </h1>

            <p>
              Order {order.id}
            </p>
          </div>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            className="track-close-button"
            onClick={onBack}
            aria-label="Close Track Order"
          >
            <FiX />
          </button>

        </div>

      </div>


      {/* =========================================
          MAIN CONTAINER
      ========================================= */}
      <div className="track-container">


        {/* =========================================
            STATUS CARD
        ========================================= */}
        <div className="status-card">

          {/* STATUS HEADER */}
          <div className="status-top">

            <div className="status-heading">

              <span className="status-label">
                CURRENT STATUS
              </span>

              <h2>
                {order.status || "Order Placed"}
              </h2>

              <p>
                Your order is on its way to you
              </p>

            </div>

            <div className="status-icon">
              <FiPackage />
            </div>

          </div>


          {/* =========================================
              ESTIMATED DELIVERY
          ========================================= */}
          <div className="delivery-time">

            <div className="delivery-time-icon">
              <FiClock />
            </div>

            <div className="delivery-time-content">

              <span>
                Estimated Delivery
              </span>

              <strong>
                30 - 40 minutes
              </strong>

            </div>

            <span className="delivery-time-badge">
              On time
            </span>

          </div>


          {/* =========================================
              ORDER TIMELINE
          ========================================= */}
          <div className="timeline">

            {/* ORDER PLACED */}
            <div className="timeline-item completed">

              <div className="timeline-left">

                <div className="timeline-circle">
                  <FiCheck />
                </div>

                <div className="timeline-line completed-line"></div>

              </div>

              <div className="timeline-content">

                <h3>
                  Order Placed
                </h3>

                <p>
                  Your order has been successfully placed.
                </p>

              </div>

            </div>


            {/* RESTAURANT PREPARING */}
            <div className="timeline-item active">

              <div className="timeline-left">

                <div className="timeline-circle">
                  <FiPackage />
                </div>

                <div className="timeline-line active-line"></div>

              </div>

              <div className="timeline-content">

                <div className="timeline-title-row">

                  <h3>
                    Restaurant is Preparing
                  </h3>

                  <span className="current-badge">
                    CURRENT
                  </span>

                </div>

                <p>
                  Your food is being freshly prepared.
                </p>

              </div>

            </div>


            {/* OUT FOR DELIVERY */}
            <div className="timeline-item">

              <div className="timeline-left">

                <div className="timeline-circle">
                  <FiMapPin />
                </div>

                <div className="timeline-line"></div>

              </div>

              <div className="timeline-content">

                <h3>
                  Out for Delivery
                </h3>

                <p>
                  Your delivery partner will pick up your order.
                </p>

              </div>

            </div>


            {/* DELIVERED */}
            <div className="timeline-item last-item">

              <div className="timeline-left">

                <div className="timeline-circle">
                  <FiCheck />
                </div>

              </div>

              <div className="timeline-content">

                <h3>
                  Delivered
                </h3>

                <p>
                  Enjoy your delicious MealMitra order!
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* =========================================
            RESTAURANT CARD
        ========================================= */}
        <div className="info-card">

          <div className="restaurant-card-content">

            <div className="heading-icon">
              <FiMapPin />
            </div>

            <div className="restaurant-details">

              <span className="card-label">
                RESTAURANT
              </span>

              <h3>
                MealMitra Restaurant
              </h3>

              <p>
                Your restaurant is preparing your order
              </p>

            </div>

          </div>

          <div className="restaurant-status">
            <span></span>
            Preparing
          </div>

        </div>


        {/* =========================================
            DELIVERY PARTNER
        ========================================= */}
        <div className="info-card">

          <div className="partner-header">

            <div className="partner-info">

              <div className="partner-avatar">
                <FiUser />
              </div>

              <div className="partner-details">

                <span className="card-label">
                  DELIVERY PARTNER
                </span>

                <h3>
                  Rahul
                </h3>

                <p>
                  Your delivery partner
                </p>

              </div>

            </div>


            <button
              type="button"
              className="call-button"
            >
              <FiPhone />
              <span>Call</span>
            </button>

          </div>

        </div>


        {/* =========================================
            ORDER ITEMS
        ========================================= */}
        <div className="items-card">

          <div className="section-title">

            <div>
              <span className="section-small-label">
                ORDER SUMMARY
              </span>

              <h2>
                Your Order
              </h2>
            </div>

            <span className="items-count">
              {order.items.length}{" "}
              {order.items.length === 1
                ? "Item"
                : "Items"}
            </span>

          </div>


          {/* ITEMS */}
          <div className="items-list">

            {order.items.map((item) => (

              <div
                className="track-order-item"
                key={item.id}
              >

                {/* FOOD IMAGE */}
                <div className="track-food-image-container">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="track-food-image"
                  />

                </div>


                {/* FOOD INFORMATION */}
                <div className="track-food-info">

                  <h4>
                    {item.name}
                  </h4>

                  <span>
                    ₹{item.price} × {item.quantity}
                  </span>

                </div>


                {/* TOTAL */}
                <strong className="track-item-price">
                  ₹{item.price * item.quantity}
                </strong>

              </div>

            ))}

          </div>


          {/* =========================================
              BILL
          ========================================= */}
          <div className="bill">

            <div className="bill-row">

              <span>
                Subtotal
              </span>

              <strong>
                ₹{order.subtotal}
              </strong>

            </div>


            <div className="bill-row">

              <span>
                Delivery Fee
              </span>

              <strong
                className={
                  deliveryFee === 0
                    ? "free-delivery"
                    : ""
                }
              >
                {deliveryFee === 0
                  ? "FREE"
                  : `₹${deliveryFee}`}
              </strong>

            </div>


            <div className="bill-divider"></div>


            <div className="bill-total">

              <span>
                Total Amount
              </span>

              <strong>
                ₹{order.total}
              </strong>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TrackOrder;