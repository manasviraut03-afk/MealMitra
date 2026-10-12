import { useState } from "react";

import "./Notifications.css";

import {
  FiArrowLeft,
  FiBell,
  FiShoppingBag,
  FiTag,
  FiTruck,
  FiMessageCircle,
  FiCheck,
} from "react-icons/fi";


type NotificationsProps = {
  onBack: () => void;
  darkMode: boolean;
};


function Notifications({
  onBack,
  darkMode,
}: NotificationsProps) {


  /* =====================================================
     NOTIFICATION STATES
  ===================================================== */

  const [orderUpdates, setOrderUpdates] =
    useState(
      localStorage.getItem("mealmitraOrderUpdates") !== "false"
    );

  const [deliveryUpdates, setDeliveryUpdates] =
    useState(
      localStorage.getItem("mealmitraDeliveryUpdates") !== "false"
    );

  const [offers, setOffers] =
    useState(
      localStorage.getItem("mealmitraOffersNotifications") !== "false"
    );

  const [supportMessages, setSupportMessages] =
    useState(
      localStorage.getItem("mealmitraSupportMessages") !== "false"
    );


  const notificationsEnabled =
    orderUpdates ||
    deliveryUpdates ||
    offers ||
    supportMessages;


  /* =====================================================
     TOGGLE ORDER UPDATES
  ===================================================== */

  const handleOrderUpdates = () => {

    const newValue = !orderUpdates;

    setOrderUpdates(newValue);

    localStorage.setItem(
      "mealmitraOrderUpdates",
      String(newValue)
    );

  };


  /* =====================================================
     TOGGLE DELIVERY UPDATES
  ===================================================== */

  const handleDeliveryUpdates = () => {

    const newValue = !deliveryUpdates;

    setDeliveryUpdates(newValue);

    localStorage.setItem(
      "mealmitraDeliveryUpdates",
      String(newValue)
    );

  };


  /* =====================================================
     TOGGLE OFFERS
  ===================================================== */

  const handleOffers = () => {

    const newValue = !offers;

    setOffers(newValue);

    localStorage.setItem(
      "mealmitraOffersNotifications",
      String(newValue)
    );

  };


  /* =====================================================
     TOGGLE SUPPORT MESSAGES
  ===================================================== */

  const handleSupportMessages = () => {

    const newValue = !supportMessages;

    setSupportMessages(newValue);

    localStorage.setItem(
      "mealmitraSupportMessages",
      String(newValue)
    );

  };


  return (

    <div
      className={`notifications-page ${
        darkMode ? "dark-mode" : ""
      }`}
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="notifications-header">

        <button
          type="button"
          className="notifications-back-button"
          onClick={onBack}
          aria-label="Go back"
        >

          <FiArrowLeft />

        </button>


        <div className="notifications-header-title">

          <div className="notifications-header-icon">

            <FiBell />

          </div>


          <div>

            <h1>
              Notifications
            </h1>

            <p>
              Manage your notification preferences
            </p>

          </div>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="notifications-main">


        {/* ===================================================
            NOTIFICATION SETTINGS
        =================================================== */}

        <section className="notifications-section">

          <div className="notifications-section-heading">

            <span>
              NOTIFICATION SETTINGS
            </span>

            <h2>
              Stay updated
            </h2>

            <p>
              Choose which notifications you want to receive.
            </p>

          </div>


          <div className="notifications-list">


            {/* ORDER UPDATES */}

            <div className="notification-item">

              <div className="notification-left">

                <div className="notification-icon orange">

                  <FiShoppingBag />

                </div>


                <div className="notification-content">

                  <h3>
                    Order Updates
                  </h3>

                  <p>
                    Get updates about your order status.
                  </p>

                </div>

              </div>


              <button
                type="button"
                className={`notification-toggle ${
                  orderUpdates ? "active" : ""
                }`}
                onClick={handleOrderUpdates}
                aria-label="Toggle order updates"
              >

                <span className="notification-toggle-circle">
                </span>

              </button>

            </div>


            {/* DELIVERY UPDATES */}

            <div className="notification-item">

              <div className="notification-left">

                <div className="notification-icon yellow">

                  <FiTruck />

                </div>


                <div className="notification-content">

                  <h3>
                    Delivery Updates
                  </h3>

                  <p>
                    Receive updates about your delivery.
                  </p>

                </div>

              </div>


              <button
                type="button"
                className={`notification-toggle ${
                  deliveryUpdates ? "active" : ""
                }`}
                onClick={handleDeliveryUpdates}
                aria-label="Toggle delivery updates"
              >

                <span className="notification-toggle-circle">
                </span>

              </button>

            </div>


            {/* OFFERS */}

            <div className="notification-item">

              <div className="notification-left">

                <div className="notification-icon red">

                  <FiTag />

                </div>


                <div className="notification-content">

                  <h3>
                    Offers & Coupons
                  </h3>

                  <p>
                    Get notified about new offers and coupons.
                  </p>

                </div>

              </div>


              <button
                type="button"
                className={`notification-toggle ${
                  offers ? "active" : ""
                }`}
                onClick={handleOffers}
                aria-label="Toggle offers and coupons"
              >

                <span className="notification-toggle-circle">
                </span>

              </button>

            </div>


            {/* SUPPORT */}

            <div className="notification-item">

              <div className="notification-left">

                <div className="notification-icon purple">

                  <FiMessageCircle />

                </div>


                <div className="notification-content">

                  <h3>
                    Support Messages
                  </h3>

                  <p>
                    Receive important messages from MealMitra.
                  </p>

                </div>

              </div>


              <button
                type="button"
                className={`notification-toggle ${
                  supportMessages ? "active" : ""
                }`}
                onClick={handleSupportMessages}
                aria-label="Toggle support messages"
              >

                <span className="notification-toggle-circle">
                </span>

              </button>

            </div>


          </div>

        </section>


        {/* ===================================================
            INFORMATION
        =================================================== */}

        <section className="notification-info">

          <div className="notification-info-icon">

            <FiCheck />

          </div>


          <div>

            <h3>

              {notificationsEnabled
                ? "Notifications are enabled"
                : "Notifications are disabled"}

            </h3>

            <p>

              You can turn individual notification types
              on or off anytime.

            </p>

          </div>

        </section>


      </main>

    </div>

  );

}


export default Notifications;