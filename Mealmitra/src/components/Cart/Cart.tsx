import {
  FiX,
  FiPlus,
  FiMinus,
  FiTrash2,
  FiShoppingBag,
  FiArrowRight,
} from "react-icons/fi";

import "./Cart.css";

import type { CartItem } from "../../types";


// =========================================================
// PROPS
// =========================================================

type CartProps = {
  cartItems: CartItem[];

  onClose: () => void;

  onIncrease: (id: number) => void;

  onDecrease: (id: number) => void;

  onRemove: (id: number) => void;

  onCheckout: () => void;
};


// =========================================================
// COMPONENT
// =========================================================

function Cart({
  cartItems,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onCheckout,
}: CartProps) {

  // =======================================================
  // TOTAL ITEMS
  // =======================================================

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );


  // =======================================================
  // SUBTOTAL
  // =======================================================

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  // =======================================================
  // DELIVERY FEE
  // =======================================================

  const deliveryFee =
    cartItems.length > 0 ? 40 : 0;


  // =======================================================
  // DISCOUNT
  // =======================================================

  const discount =
    subtotal >= 500 ? 50 : 0;


  // =======================================================
  // TOTAL
  // =======================================================

  const total =
    subtotal + deliveryFee - discount;


  // =======================================================
  // EMPTY CART
  // =======================================================

  if (cartItems.length === 0) {

    return (
      <div className="cart-overlay">

        <div className="cart-panel">

          {/* HEADER */}

          <div className="cart-header">

            <div className="cart-title">

              <FiShoppingBag />

              <div>
                <h2>Your Cart</h2>

                <p>
                  Your cart is empty
                </p>
              </div>

            </div>


            <button
              type="button"
              className="cart-close-button"
              onClick={onClose}
              aria-label="Close cart"
            >
              <FiX />
            </button>

          </div>


          {/* EMPTY CART */}

          <div className="cart-empty">

            <div className="cart-empty-icon">
              <FiShoppingBag />
            </div>

            <h3>
              Your cart is empty
            </h3>

            <p>
              Add some delicious food to
              your cart and order your
              favourites.
            </p>

            <button
              type="button"
              className="cart-continue-button"
              onClick={onClose}
            >
              Continue Shopping
            </button>

          </div>

        </div>

      </div>
    );
  }


  // =======================================================
  // CART
  // =======================================================

  return (

    <div
      className="cart-overlay"
      onClick={onClose}
    >

      <div
        className="cart-panel"
        onClick={(event) =>
          event.stopPropagation()
        }
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="cart-header">

          <div className="cart-title">

            <div className="cart-title-icon">
              <FiShoppingBag />
            </div>

            <div>

              <h2>
                Your Cart
              </h2>

              <p>
                {totalItems}{" "}
                {totalItems === 1
                  ? "item"
                  : "items"}
              </p>

            </div>

          </div>


          <button
            type="button"
            className="cart-close-button"
            onClick={onClose}
            aria-label="Close cart"
          >
            <FiX />
          </button>

        </div>


        {/* =================================================
            CART ITEMS
        ================================================= */}

        <div className="cart-items">

          {cartItems.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              {/* IMAGE */}

              <div className="cart-item-image">

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>


              {/* CONTENT */}

              <div className="cart-item-content">

                <h3>
                  {item.name}
                </h3>

                <p className="cart-item-price">
                  ₹{item.price}
                </p>


                {/* QUANTITY */}

                <div className="cart-item-bottom">

                  <div className="quantity-control">

                    <button
                      type="button"
                      onClick={() =>
                        onDecrease(item.id)
                      }
                      aria-label={`Decrease ${item.name}`}
                    >
                      <FiMinus />
                    </button>


                    <span>
                      {item.quantity}
                    </span>


                    <button
                      type="button"
                      onClick={() =>
                        onIncrease(item.id)
                      }
                      aria-label={`Increase ${item.name}`}
                    >
                      <FiPlus />
                    </button>

                  </div>


                  {/* REMOVE */}

                  <button
                    type="button"
                    className="remove-item-button"
                    onClick={() =>
                      onRemove(item.id)
                    }
                  >
                    <FiTrash2 />

                    <span>
                      Remove
                    </span>
                  </button>

                </div>

              </div>


              {/* ITEM TOTAL */}

              <div className="cart-item-total">

                ₹
                {item.price * item.quantity}

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            BILL DETAILS
        ================================================= */}

        <div className="cart-bill">

          <h3>
            Bill Details
          </h3>


          <div className="bill-row">

            <span>
              Item Total
            </span>

            <span>
              ₹{subtotal}
            </span>

          </div>


          <div className="bill-row">

            <span>
              Delivery Fee
            </span>

            <span>
              ₹{deliveryFee}
            </span>

          </div>


          {discount > 0 && (

            <div className="bill-row discount-row">

              <span>
                MealMitra Discount
              </span>

              <span>
                -₹{discount}
              </span>

            </div>

          )}


          <div className="bill-divider"></div>


          <div className="bill-total">

            <strong>
              To Pay
            </strong>

            <strong>
              ₹{total}
            </strong>

          </div>

        </div>


        {/* =================================================
            OFFER
        ================================================= */}

        <div className="cart-offer">

          <span>
            🎉
          </span>

          <div>

            <strong>
              Extra ₹50 OFF
            </strong>

            <p>
              Get ₹50 off on orders above
              ₹500.
            </p>

          </div>

        </div>


        {/* =================================================
            CHECKOUT
        ================================================= */}

        <div className="cart-footer">

          <button
            type="button"
            className="checkout-button"
            onClick={onCheckout}
          >

            <div>

              <span>
                Total
              </span>

              <strong>
                ₹{total}
              </strong>

            </div>


            <span className="checkout-text">
              Proceed to Checkout
            </span>


            <FiArrowRight />

          </button>

        </div>

      </div>

    </div>
  );
}


export default Cart;