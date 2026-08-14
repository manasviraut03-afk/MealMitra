import "./Cart.css";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartProps = {
  cartItems: CartItem[];
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
  onRemove: (id: number) => void;
  onClose: () => void;
  onCheckout: () => void;
};

function Cart({
  cartItems,
  onIncrease,
  onDecrease,
  onRemove,
  onClose,
  onCheckout,
}: CartProps) {

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-overlay">

      {/* Cart Box */}
      <div className="cart-container">

        {/* Header */}
        <div className="cart-header">

          <div>
            <h2>Your Cart 🛒</h2>

            <p>
              {cartItems.length === 0
                ? "Your cart is empty"
                : `${cartItems.length} item(s) in your cart`}
            </p>
          </div>

          <button
            className="cart-close"
            onClick={onClose}
          >
            ✕
          </button>

        </div>


        {/* Cart Items */}
        <div className="cart-items">

          {cartItems.length === 0 ? (

            <div className="empty-cart">

              <div className="empty-cart-icon">
                🛒
              </div>

              <h3>Your cart is empty</h3>

              <p>
                Add some delicious food to your cart!
              </p>

              <button
                className="continue-shopping"
                onClick={onClose}
              >
                Continue Shopping
              </button>

            </div>

          ) : (

            cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />


                {/* Details */}
                <div className="cart-item-details">

                  <h3>{item.name}</h3>

                  <p>
                    ₹{item.price}
                  </p>

                  {/* Quantity */}
                  <div className="quantity-control">

                    <button
                      onClick={() =>
                        onDecrease(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        onIncrease(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                </div>


                {/* Right Side */}
                <div className="cart-item-right">

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                  <button
                    className="remove-item"
                    onClick={() =>
                      onRemove(item.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))

          )}

        </div>


        {/* Bottom */}
        {cartItems.length > 0 && (

          <div className="cart-footer">

            <div className="cart-total">

              <span>Total</span>

              <strong>
                ₹{cartTotal}
              </strong>

            </div>

            <button className="checkout-btn" 
              onClick={onCheckout}
            >
              proceed to checkout
            </button>

          </div>

        )}

      </div>

    </div>
  );
}

export default Cart;