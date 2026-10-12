import { useState } from "react";
import {
  FiArrowLeft,
  FiMapPin,
  FiHome,
  FiCreditCard,
  FiSmartphone,
  FiCheckCircle,
  FiPlus,
} from "react-icons/fi";

import type { CartItem } from "../../types";

import "./Checkout.css";

interface CheckoutProps {
  cartItems: CartItem[];
  onBack: () => void;
  onPlaceOrder: () => void;
}

function Checkout({
  cartItems,
  onBack,
  onPlaceOrder,
}: CheckoutProps) {
  /* =========================================================
     ADDRESS
  ========================================================= */

  const [selectedAddress, setSelectedAddress] =
    useState("home");

  /* =========================================================
     PAYMENT
  ========================================================= */

  const [paymentMethod, setPaymentMethod] =
    useState("upi");

  /* =========================================================
     COUPON
  ========================================================= */

  const [coupon, setCoupon] = useState("");

  const [couponApplied, setCouponApplied] =
    useState(false);

  /* =========================================================
     CALCULATIONS
  ========================================================= */

  const itemTotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const deliveryFee = itemTotal >= 299 ? 0 : 40;

  const platformFee = 5;

  const discount = couponApplied ? 50 : 0;

  const taxes = Math.round(
    itemTotal * 0.05
  );

  const totalAmount =
    itemTotal +
    deliveryFee +
    platformFee +
    taxes -
    discount;

  /* =========================================================
     COUPON
  ========================================================= */

  const applyCoupon = () => {
    if (
      coupon.trim().toUpperCase() ===
      "MEAL50"
    ) {
      setCouponApplied(true);
    } else {
      alert(
        "Invalid coupon. Try MEAL50"
      );
    }
  };

  /* =========================================================
     PLACE ORDER
  ========================================================= */

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    onPlaceOrder();
  };

  return (
    <div className="checkout-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="checkout-header">

        <button
          className="checkout-back-button"
          onClick={onBack}
        >
          <FiArrowLeft />
        </button>

        <div>
          <h1>Checkout</h1>

          <p>
            Complete your order
          </p>
        </div>

      </div>


      {/* =====================================================
          MAIN CHECKOUT
      ===================================================== */}

      <div className="checkout-container">

        {/* ===================================================
            LEFT SECTION
        =================================================== */}

        <div className="checkout-left">

          {/* =================================================
              DELIVERY ADDRESS
          ================================================= */}

          <section className="checkout-section">

            <div className="section-title">

              <FiMapPin />

              <div>
                <h2>
                  Delivery Address
                </h2>

                <p>
                  Where should we deliver your food?
                </p>
              </div>

            </div>


            {/* HOME ADDRESS */}

            <div
              className={`address-card ${
                selectedAddress === "home"
                  ? "selected-address"
                  : ""
              }`}
              onClick={() =>
                setSelectedAddress("home")
              }
            >

              <div className="address-radio">

                {selectedAddress === "home" && (
                  <FiCheckCircle />
                )}

              </div>


              <div className="address-icon">
                <FiHome />
              </div>


              <div className="address-content">

                <h3>
                  Home
                </h3>

                <p>
                  Your saved home address
                </p>

                <span>
                  Nagpur, Maharashtra
                </span>

              </div>

            </div>


            {/* WORK ADDRESS */}

            <div
              className={`address-card ${
                selectedAddress === "work"
                  ? "selected-address"
                  : ""
              }`}
              onClick={() =>
                setSelectedAddress("work")
              }
            >

              <div className="address-radio">

                {selectedAddress === "work" && (
                  <FiCheckCircle />
                )}

              </div>


              <div className="address-icon">
                <FiMapPin />
              </div>


              <div className="address-content">

                <h3>
                  Work
                </h3>

                <p>
                  Office / workplace address
                </p>

                <span>
                  Nagpur, Maharashtra
                </span>

              </div>

            </div>


            {/* ADD NEW ADDRESS */}

            <button
              className="add-address-button"
              onClick={() =>
                alert(
                  "Add new address feature coming soon!"
                )
              }
            >

              <FiPlus />

              Add New Address

            </button>

          </section>


          {/* =================================================
              PAYMENT METHOD
          ================================================= */}

          <section className="checkout-section">

            <div className="section-title">

              <FiCreditCard />

              <div>

                <h2>
                  Payment Method
                </h2>

                <p>
                  Choose how you want to pay
                </p>

              </div>

            </div>


            {/* UPI */}

            <div
              className={`payment-card ${
                paymentMethod === "upi"
                  ? "selected-payment"
                  : ""
              }`}
              onClick={() =>
                setPaymentMethod("upi")
              }
            >

              <div className="payment-icon">
                <FiSmartphone />
              </div>

              <div className="payment-content">

                <h3>
                  UPI
                </h3>

                <p>
                  Google Pay, PhonePe, Paytm
                </p>

              </div>

              <div className="payment-radio">

                {paymentMethod === "upi" && (
                  <FiCheckCircle />
                )}

              </div>

            </div>


            {/* CARD */}

            <div
              className={`payment-card ${
                paymentMethod === "card"
                  ? "selected-payment"
                  : ""
              }`}
              onClick={() =>
                setPaymentMethod("card")
              }
            >

              <div className="payment-icon">
                <FiCreditCard />
              </div>

              <div className="payment-content">

                <h3>
                  Credit / Debit Card
                </h3>

                <p>
                  Visa, Mastercard, RuPay
                </p>

              </div>

              <div className="payment-radio">

                {paymentMethod === "card" && (
                  <FiCheckCircle />
                )}

              </div>

            </div>


            {/* CASH */}

            <div
              className={`payment-card ${
                paymentMethod === "cash"
                  ? "selected-payment"
                  : ""
              }`}
              onClick={() =>
                setPaymentMethod("cash")
              }
            >

              <div className="payment-icon">
                💵
              </div>

              <div className="payment-content">

                <h3>
                  Cash on Delivery
                </h3>

                <p>
                  Pay when your order arrives
                </p>

              </div>

              <div className="payment-radio">

                {paymentMethod === "cash" && (
                  <FiCheckCircle />
                )}

              </div>

            </div>

          </section>


          {/* =================================================
              COUPON
          ================================================= */}

          <section className="checkout-section">

            <div className="section-title">

              <span className="coupon-icon">
                %
              </span>

              <div>

                <h2>
                  Apply Coupon
                </h2>

                <p>
                  Save more on your order
                </p>

              </div>

            </div>


            <div className="coupon-box">

              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(event) =>
                  setCoupon(event.target.value)
                }
              />

              <button
                onClick={applyCoupon}
              >
                Apply
              </button>

            </div>


            {couponApplied && (
              <div className="coupon-success">

                <FiCheckCircle />

                MEAL50 applied! ₹50 saved.

              </div>
            )}

          </section>

        </div>


        {/* ===================================================
            RIGHT SECTION
        =================================================== */}

        <div className="checkout-right">

          {/* =================================================
              ORDER SUMMARY
          ================================================= */}

          <section className="order-summary">

            <h2>
              Your Order
            </h2>


            {/* RESTAURANT */}

            <div className="checkout-restaurant">

              <div className="restaurant-small-icon">
                🍴
              </div>

              <div>

                <h3>
                  MealMitra Restaurant
                </h3>

                <p>
                  Delivering to your selected address
                </p>

              </div>

            </div>


            {/* ITEMS */}

            <div className="checkout-items">

              {cartItems.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <div className="checkout-item-image">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                  </div>


                  <div className="checkout-item-info">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      ₹{item.price} × {item.quantity}
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


            {/* BILL DETAILS */}

            <div className="bill-details">

              <h3>
                Bill Details
              </h3>


              <div className="bill-row">

                <span>
                  Item Total
                </span>

                <span>
                  ₹{itemTotal}
                </span>

              </div>


              <div className="bill-row">

                <span>
                  Delivery Fee
                </span>

                <span
                  className={
                    deliveryFee === 0
                      ? "free-text"
                      : ""
                  }
                >
                  {deliveryFee === 0
                    ? "FREE"
                    : `₹${deliveryFee}`}
                </span>

              </div>


              <div className="bill-row">

                <span>
                  Platform Fee
                </span>

                <span>
                  ₹{platformFee}
                </span>

              </div>


              <div className="bill-row">

                <span>
                  Taxes & Charges
                </span>

                <span>
                  ₹{taxes}
                </span>

              </div>


              {couponApplied && (
                <div className="bill-row discount-row">

                  <span>
                    Coupon Discount
                  </span>

                  <span>
                    -₹{discount}
                  </span>

                </div>
              )}


              <div className="bill-divider"></div>


              <div className="bill-total">

                <span>
                  Total
                </span>

                <strong>
                  ₹{totalAmount}
                </strong>

              </div>

            </div>


            {/* PLACE ORDER */}

            <button
              className="place-order-button"
              onClick={handlePlaceOrder}
            >

              Place Order

              <span>
                ₹{totalAmount}
              </span>

            </button>


            <p className="secure-payment">

              🔒 Safe and secure payments

            </p>

          </section>

        </div>

      </div>

    </div>
  );
}

export default Checkout;