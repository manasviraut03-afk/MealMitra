import "./OrderDetails.css";

import {
  FiX,
  FiCalendar,
  FiCheckCircle,
  FiShoppingBag,
  FiChevronRight,
} from "react-icons/fi";

type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type Order = {
  id: string;
  date: string;
  status: string;
  items: OrderItem[];
  subtotal: number;
  delivery: number;
  total: number;
};

type OrderDetailsProps = {
  order: Order;
  onBack: () => void;
};

function OrderDetails({
  order,
  onBack,
}: OrderDetailsProps) {
  return (
    <div className="order-details-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="order-details-header">

        <div className="details-header-content">

          <span className="details-small-label">
            MEALMITRA
          </span>

          <h1>
            Order Details
          </h1>

          <p>
            Review your order information and bill
          </p>

        </div>

        {/* CLOSE / X BUTTON */}

        <button
          type="button"
          className="details-close-btn"
          onClick={onBack}
          aria-label="Close order details"
        >
          <FiX />
        </button>

      </div>


      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div className="order-details-container">


        {/* =========================================
            ORDER SUMMARY
        ========================================= */}

        <div className="details-summary">

          <div className="details-summary-left">

            <div className="details-order-icon">
              <FiShoppingBag />
            </div>

            <div>

              <span className="details-label">
                ORDER ID
              </span>

              <h2>
                {order.id}
              </h2>

            </div>

          </div>


          <div className="details-status">

            <FiCheckCircle />

            <span>
              {order.status}
            </span>

          </div>

        </div>


        {/* =========================================
            ORDER DATE
        ========================================= */}

        <div className="details-date">

          <FiCalendar />

          <div>
            <span>
              ORDER DATE
            </span>

            <strong>
              {order.date}
            </strong>
          </div>

        </div>


        {/* =========================================
            ORDERED ITEMS
        ========================================= */}

        <div className="details-items">

          <div className="details-section-heading">

            <div>
              <span>
                YOUR ORDER
              </span>

              <h2>
                Ordered Items
              </h2>
            </div>

            <strong>
              {order.items.length}{" "}
              {order.items.length === 1
                ? "Item"
                : "Items"}
            </strong>

          </div>


          <div className="details-items-list">

            {order.items.map((item) => (

              <div
                className="details-item"
                key={item.id}
              >

                {/* FOOD IMAGE */}

                <div className="details-item-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>


                {/* FOOD INFORMATION */}

                <div className="details-item-info">

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    ₹{item.price} × {item.quantity}
                  </p>

                </div>


                {/* ITEM TOTAL */}

                <div className="details-item-price">

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                  <span>
                    Item Total
                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =========================================
            BILL DETAILS
        ========================================= */}

        <div className="details-bill">

          <div className="details-section-heading">

            <div>
              <span>
                PAYMENT SUMMARY
              </span>

              <h2>
                Bill Details
              </h2>
            </div>

          </div>


          <div className="bill-content">

            <div className="bill-row">

              <span>
                Item Total
              </span>

              <strong>
                ₹{order.subtotal}
              </strong>

            </div>


            <div className="bill-row">

              <span>
                Delivery Fee
              </span>

              <strong className={order.delivery === 0 ? "free" : ""}>
                {order.delivery === 0
                  ? "FREE"
                  : `₹${order.delivery}`}
              </strong>

            </div>


            <div className="bill-divider"></div>


            <div className="bill-row bill-total">

              <span>
                Total Amount
              </span>

              <strong>
                ₹{order.total}
              </strong>

            </div>

          </div>

        </div>


        {/* =========================================
            ORDER COMPLETED MESSAGE
        ========================================= */}

        <div className="details-success">

          <div className="success-icon">
            <FiCheckCircle />
          </div>

          <div>

            <h3>
              Order {order.status}
            </h3>

            <p>
              Thank you for ordering with MealMitra.
              We hope you enjoyed your meal!
            </p>

          </div>

          <FiChevronRight className="success-arrow" />

        </div>

      </div>

    </div>
  );
}

export default OrderDetails;