import "./MyOrders.css";

import chinese from "../../assets/chinese.png";
import momo from "../../assets/momo.png";
import burger from "../../assets/burger.png";

type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type Order = {
  id: string;
  date: string;
  status: string;
  items: OrderItem[];
  subtotal: number;
  delivery: number;
  total: number;
};

type MyOrdersProps = {
  onBack: () => void;
  onViewDetails: (order: Order) => void;
  onTrackOrders: (order: Order) => void;
};

function MyOrders({
  onBack,
  onViewDetails,
  onTrackOrders,
}: MyOrdersProps) {
  const orders: Order[] = [
    {
      id: "#MM475790",
      date: "18/8/2026",
      status: "Order Placed",
      items: [
        {
          id: 1,
          name: "Chinese Noodles",
          price: 199,
          quantity: 1,
          image: chinese,
        },
        {
          id: 2,
          name: "Momos",
          price: 129,
          quantity: 1,
          image: momo,
        },
      ],
      subtotal: 328,
      delivery: 40,
      total: 368,
    },

    {
      id: "#MM119520",
      date: "18/8/2026",
      status: "Delivered",
      items: [
        {
          id: 3,
          name: "Veg Burger",
          price: 149,
          quantity: 1,
          image: burger,
        },
        {
          id: 4,
          name: "Chinese Noodles",
          price: 199,
          quantity: 1,
          image: chinese,
        },
      ],
      subtotal: 348,
      delivery: 40,
      total: 388,
    },
  ];

  const activeOrder = orders[0];
  const previousOrders = orders.slice(1);

  return (
    <div className="my-orders-page">

      {/* =========================================
          TOP ACTION
      ========================================= */}

      <div className="my-orders-top">

        <button
          type="button"
          className="close-orders-btn"
          onClick={onBack}
          aria-label="Close My Orders"
        >
          ×
        </button>

      </div>

      {/* =========================================
          PAGE HEADING
      ========================================= */}

      <div className="orders-heading">

        <div className="orders-heading-content">

          <span className="orders-small-label">
            MEALMITRA ORDERS
          </span>

          <h1>
            My Orders
          </h1>

          <p>
            Track your orders and enjoy every meal.
          </p>

        </div>

      </div>

      {/* =========================================
          ORDERS CONTAINER
      ========================================= */}

      <div className="orders-container">

        {orders.length === 0 ? (

          /* =========================================
             EMPTY ORDERS
          ========================================= */

          <div className="empty-orders">

            <div className="empty-orders-icon">
              🛍️
            </div>

            <h2>
              No Orders Yet
            </h2>

            <p>
              You haven't placed any orders yet.
              Start exploring delicious meals on MealMitra!
            </p>

            <button
              type="button"
              className="start-order-btn"
              onClick={onBack}
            >
              Start Ordering
            </button>

          </div>

        ) : (

          <>
            {/* =========================================
                ACTIVE ORDER
            ========================================= */}

            {activeOrder && (
              <>
                <div className="orders-section-title">

                  <div>
                    <span>
                      CURRENT ORDER
                    </span>

                    <h2>
                      Your recent order
                    </h2>
                  </div>

                </div>

                <div className="order-card active-order-card">

                  {/* ORDER HEADER */}

                  <div className="order-card-header">

                    <div className="order-header-left">

                      <span className="order-label">
                        ORDER ID
                      </span>

                      <h2>
                        {activeOrder.id}
                      </h2>

                      <p>
                        Placed on {activeOrder.date}
                      </p>

                    </div>

                    <span className="order-status">
                      {activeOrder.status}
                    </span>

                  </div>

                  {/* ORDER PROGRESS */}

                  <div className="order-progress">

                    <div className="progress-step active">

                      <div className="progress-circle">
                        ✓
                      </div>

                      <span>
                        Placed
                      </span>

                    </div>

                    <div className="progress-line active-line"></div>

                    <div className="progress-step">

                      <div className="progress-circle">
                        2
                      </div>

                      <span>
                        Preparing
                      </span>

                    </div>

                    <div className="progress-line"></div>

                    <div className="progress-step">

                      <div className="progress-circle">
                        3
                      </div>

                      <span>
                        On the way
                      </span>

                    </div>

                    <div className="progress-line"></div>

                    <div className="progress-step">

                      <div className="progress-circle">
                        4
                      </div>

                      <span>
                        Delivered
                      </span>

                    </div>

                  </div>

                  {/* ITEMS HEADING */}

                  <div className="items-heading">

                    <h3>
                      Ordered Items
                    </h3>

                    <span>
                      {activeOrder.items.length} items
                    </span>

                  </div>

                  {/* ITEMS */}

                  <div className="order-items">

                    {activeOrder.items.map((item) => (

                      <div
                        className="order-item"
                        key={item.id}
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                        />

                        <div className="order-item-info">

                          <h3>
                            {item.name}
                          </h3>

                          <p>
                            ₹{item.price} × {item.quantity}
                          </p>

                        </div>

                        <div className="item-total">
                          ₹{item.price * item.quantity}
                        </div>

                      </div>

                    ))}

                  </div>

                  {/* BILL */}

                  <div className="bill-section">

                    <div className="bill-row">

                      <span>
                        Item Total
                      </span>

                      <strong>
                        ₹{activeOrder.subtotal}
                      </strong>

                    </div>

                    <div className="bill-row">

                      <span>
                        Delivery Fee
                      </span>

                      <strong>
                        ₹{activeOrder.delivery}
                      </strong>

                    </div>

                    <div className="bill-divider"></div>

                    <div className="bill-row grand-total">

                      <span>
                        Grand Total
                      </span>

                      <strong>
                        ₹{activeOrder.total}
                      </strong>

                    </div>

                  </div>

                  {/* ACTIONS */}

                  <div className="order-actions">

                    <button
                      type="button"
                      className="view-order-btn"
                      onClick={() => onViewDetails(activeOrder)}
                    >
                      View Details
                    </button>

                    <button
                      type="button"
                      className="track-order-btn"
                      onClick={() => onTrackOrders(activeOrder)}
                    >
                      🚴 Track Order
                    </button>

                  </div>

                </div>
              </>
            )}

            {/* =========================================
                PREVIOUS ORDERS
            ========================================= */}

            {previousOrders.length > 0 && (

              <div className="previous-orders-section">

                <div className="orders-section-title">

                  <div>
                    <span>
                      ORDER HISTORY
                    </span>

                    <h2>
                      Previous Orders
                    </h2>
                  </div>

                </div>

                {previousOrders.map((order) => (

                  <div
                    className="order-card previous-order-card"
                    key={order.id}
                  >

                    {/* HEADER */}

                    <div className="previous-order-header">

                      <div>

                        <span className="order-label">
                          ORDER ID
                        </span>

                        <h2>
                          {order.id}
                        </h2>

                        <p>
                          {order.date}
                        </p>

                      </div>

                      <span className="delivered-status">
                        ✓ Delivered
                      </span>

                    </div>

                    {/* ITEMS */}

                    <div className="previous-items">

                      {order.items.map((item) => (

                        <div
                          className="previous-item"
                          key={item.id}
                        >

                          <img
                            src={item.image}
                            alt={item.name}
                          />

                          <div>

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

                    {/* FOOTER */}

                    <div className="previous-order-footer">

                      <div>

                        <span>
                          Total Paid
                        </span>

                        <strong>
                          ₹{order.total}
                        </strong>

                      </div>

                      <button
                        type="button"
                        className="previous-details-btn"
                        onClick={() => onViewDetails(order)}
                      >
                        View Details
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </>

        )}

      </div>

    </div>
  );
}

export default MyOrders;