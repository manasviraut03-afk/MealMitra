import { useState } from "react";
import "./Checkout.css";

export type CheckoutItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CheckoutProps = {
  cartItems: CheckoutItem[];
  onBack: () => void;
  onPlaceOrder: () => void;
};

function Checkout({
  cartItems,
  onBack,
  onPlaceOrder,
}: CheckoutProps) {
  // =========================
  // FORM STATE
  // =========================

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  const [error, setError] = useState("");

  // =========================
  // PRICE CALCULATION
  // =========================

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 499 ? 0 : 40;

  const total = subtotal + deliveryFee;

  // =========================
  // PLACE ORDER
  // =========================

  const handlePlaceOrder = () => {
    // Check empty fields
    if (
      !name.trim() ||
      !phone.trim() ||
      !address.trim() ||
      !city.trim() ||
      !pincode.trim()
    ) {
      setError("Please fill in all delivery details.");
      return;
    }

    // Check phone number
    if (!/^[0-9]{10}$/.test(phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    // Check pincode
    if (!/^[0-9]{6}$/.test(pincode)) {
      setError("Please enter a valid 6-digit pincode.");
      return;
    }

    // Remove error
    setError("");

    // Place order
    onPlaceOrder();
  };

  return (
    <div className="checkout-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="checkout-header">

        <button
          className="back-btn"
          onClick={onBack}
        >
          ← Back to Cart
        </button>

        <h1>Checkout</h1>

        <div className="checkout-logo">
          🍽️ MealMitra
        </div>

      </div>


      {/* =========================
          MAIN CONTENT
      ========================= */}

      <div className="checkout-container">

        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="checkout-left">

          {/* =========================
              DELIVERY ADDRESS
          ========================= */}

          <div className="checkout-card">

            <h2>📍 Delivery Address</h2>

            <div className="address-form">

              {/* Name */}

              <div className="form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />

              </div>


              {/* Phone */}

              <div className="form-group">

                <label>
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  maxLength={10}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(
                        /\D/g,
                        ""
                      )
                    )
                  }
                />

              </div>


              {/* Address */}

              <div className="form-group">

                <label>
                  Address
                </label>

                <textarea
                  placeholder="House No, Street, Area"
                  rows={3}
                  value={address}
                  onChange={(e) =>
                    setAddress(e.target.value)
                  }
                ></textarea>

              </div>


              {/* City + Pincode */}

              <div className="address-row">

                <div className="form-group">

                  <label>
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value)
                    }
                  />

                </div>


                <div className="form-group">

                  <label>
                    Pincode
                  </label>

                  <input
                    type="text"
                    placeholder="Pincode"
                    value={pincode}
                    maxLength={6}
                    onChange={(e) =>
                      setPincode(
                        e.target.value.replace(
                          /\D/g,
                          ""
                        )
                      )
                    }
                  />

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              PAYMENT
          ========================= */}

          <div className="checkout-card">

            <h2>💳 Payment Method</h2>

            <div className="payment-options">

              {/* Cash */}

              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={
                    paymentMethod ===
                    "Cash on Delivery"
                  }
                  onChange={(e) =>
                    setPaymentMethod(
                      e.target.value
                    )
                  }
                />

                <span>
                  💵 Cash on Delivery
                </span>

              </label>


              {/* UPI */}

              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={
                    paymentMethod === "UPI"
                  }
                  onChange={(e) =>
                    setPaymentMethod(
                      e.target.value
                    )
                  }
                />

                <span>
                  📱 UPI
                </span>

              </label>


              {/* Card */}

              <label className="payment-option">

                <input
                  type="radio"
                  name="payment"
                  value="Card"
                  checked={
                    paymentMethod === "Card"
                  }
                  onChange={(e) =>
                    setPaymentMethod(
                      e.target.value
                    )
                  }
                />

                <span>
                  💳 Card
                </span>

              </label>

            </div>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="checkout-right">

          <div className="order-summary">

            <h2>
              Your Order
            </h2>


            {/* =========================
                FOOD ITEMS
            ========================= */}

            <div className="checkout-items">

              {cartItems.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  <div className="checkout-item-details">

                    <h3>
                      {item.name}
                    </h3>

                    <p>
                      ₹{item.price} × {item.quantity}
                    </p>

                  </div>


                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                </div>

              ))}

            </div>


            {/* =========================
                PRICE DETAILS
            ========================= */}

            <div className="price-details">

              <div>
                <span>
                  Subtotal
                </span>

                <span>
                  ₹{subtotal}
                </span>
              </div>


              <div>
                <span>
                  Delivery Fee
                </span>

                <span>
                  {deliveryFee === 0
                    ? "FREE"
                    : `₹${deliveryFee}`}
                </span>
              </div>


              <div className="total-row">

                <strong>
                  Total
                </strong>

                <strong>
                  ₹{total}
                </strong>

              </div>

            </div>


            {/* =========================
                ERROR MESSAGE
            ========================= */}

            {error && (
              <p className="checkout-error">
                ⚠️ {error}
              </p>
            )}


            {/* =========================
                PLACE ORDER
            ========================= */}

            <button
              className="place-order-btn"
              onClick={handlePlaceOrder}
            >
              Place Order • ₹{total}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Checkout;