import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Menu from "./components/Menu/Menu";
import Restaurant from "./components/Restaurant/Restaurant";
import WhyMealmitra from "./components/WhyMealmitra/WhyMealmitra";
import Footer from "./components/Footer/Footer";

import Cart from "./components/Cart/Cart";
import type { CartItem } from "./components/Menu/Menu";

import Checkout from "./components/Checkout/Checkout";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation";
import Auth from "./components/Auth/Auth";

import "./index.css";

function App() {
  /* =========================
     CART
  ========================= */

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);

  /* =========================
     CHECKOUT
  ========================= */

  const [showCheckout, setShowCheckout] = useState(false);

  /* =========================
     ORDER CONFIRMATION
  ========================= */

  const [showConfirmation, setShowConfirmation] = useState(false);

  /* =========================
     AUTH
  ========================= */

  const [showAuth, setShowAuth] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState<string | null>(
    localStorage.getItem("mealmitraLoggedInUser")
  );

  /* =========================
     LOGIN
  ========================= */

  const handleLogin = (name: string) => {
    setLoggedInUser(name);

    localStorage.setItem(
      "mealmitraLoggedInUser",
      name
    );
  };

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = () => {
    setLoggedInUser(null);

    localStorage.removeItem(
      "mealmitraLoggedInUser"
    );

    localStorage.removeItem(
      "mealmitraCurrentUser"
    );
  };

  /* =========================
     CART FUNCTIONS
  ========================= */

  const addToCart = (item: CartItem) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        return currentItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...currentItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  /* =========================
     CART TOTAL
  ========================= */

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 499 ? 0 : 40;

  const total = subtotal + deliveryFee;

  /* =========================
     ORDER
  ========================= */

  const placeOrder = () => {
    setShowCheckout(false);
    setShowConfirmation(true);
  };

  /* =========================
     HOME
  ========================= */

  const goToHome = () => {
    setCartItems([]);
    setShowConfirmation(false);
    setShowCheckout(false);
    setShowCart(false);
    setShowAuth(false);
  };

  return (
    <>
      {!showCheckout && !showConfirmation && (
        <>
          <Navbar
            onSignIn={() => setShowAuth(true)}
            loggedInUser={loggedInUser}
            onLogout={handleLogout}
          />

          <Header />

          <Services />

          <Menu
            onAddToCart={addToCart}
          />

          <Restaurant />

          <WhyMealmitra />

          <Footer />

          {/* CART BUTTON */}

          {cartCount > 0 && (
            <button
              className="floating-cart"
              onClick={() => setShowCart(true)}
              aria-label="Open cart"
            >
              🛒

              <span className="cart-count">
                {cartCount}
              </span>
            </button>
          )}

          {/* CART */}

          {showCart && (
            <Cart
              cartItems={cartItems}
              onIncrease={increaseQuantity}
              onDecrease={decreaseQuantity}
              onRemove={removeItem}
              onClose={() => setShowCart(false)}
              onCheckout={() => {
                setShowCart(false);
                setShowCheckout(true);
              }}
            />
          )}

          {/* AUTH */}

          {showAuth && (
            <Auth
              onClose={() => setShowAuth(false)}
              onLogin={handleLogin}
            />
          )}
        </>
      )}

      {/* CHECKOUT */}

      {showCheckout && !showConfirmation && (
        <Checkout
          cartItems={cartItems}
          onBack={() => {
            setShowCheckout(false);
            setShowCart(true);
          }}
          onPlaceOrder={placeOrder}
        />
      )}

      {/* ORDER CONFIRMATION */}

      {showConfirmation && (
        <OrderConfirmation
          total={total}
          onHome={goToHome}
        />
      )}
    </>
  );
}

export default App;