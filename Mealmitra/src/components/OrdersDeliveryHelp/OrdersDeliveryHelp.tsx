import { useState } from "react";

import {
  FiArrowLeft,
  FiPackage,
  FiTruck,
  FiClock,
  FiMapPin,
  FiXCircle,
  FiCheckCircle,
  FiChevronDown,
  FiChevronUp,
  FiMessageCircle,
} from "react-icons/fi";

import "./OrdersDeliveryHelp.css";


type OrdersDeliveryHelpProps = {
  onBack: () => void;
};


type HelpQuestion = {
  question: string;
  answer: string;
};


function OrdersDeliveryHelp({
  onBack,
}: OrdersDeliveryHelpProps) {

  const [openQuestion, setOpenQuestion] =
    useState<number | null>(null);


  const questions: HelpQuestion[] = [

    {
      question: "How can I track my order?",
      answer:
        "Open My Orders from your MealMitra profile. Select the order you want to track and choose the Track Order option to view its current delivery status.",
    },

    {
      question: "Where is my order?",
      answer:
        "You can check the latest delivery status from the Track Order section. The page shows the progress of your order from confirmation to delivery.",
    },

    {
      question: "Can I cancel my order?",
      answer:
        "Order cancellation depends on the current status of your order. Open My Orders, select the order and check whether the cancellation option is available.",
    },

    {
      question: "My order is taking too long. What should I do?",
      answer:
        "First check the current order status from Track Order. If the delivery has been delayed significantly, you can contact MealMitra support for assistance.",
    },

    {
      question: "My order was delivered but I didn't receive it.",
      answer:
        "Please check the delivery location and contact the delivery partner if their contact option is available. If you still cannot locate the order, contact MealMitra support.",
    },

    {
      question: "I received the wrong item.",
      answer:
        "Please contact MealMitra support and provide your order details. Our support team can help you with the issue.",
    },

  ];


  const toggleQuestion = (index: number) => {

    setOpenQuestion(
      openQuestion === index
        ? null
        : index
    );

  };


  return (

    <div className="orders-help-page">


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="orders-help-header">

        <button
          type="button"
          className="orders-help-back"
          onClick={onBack}
          aria-label="Go back"
        >
          <FiArrowLeft />
        </button>


        <div className="orders-help-title">

          <div className="orders-help-title-icon">
            <FiPackage />
          </div>


          <div>

            <h1>
              Orders & Delivery
            </h1>

            <p>
              Get help with your orders and deliveries
            </p>

          </div>

        </div>


        <div className="orders-help-header-space"></div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="orders-help-main">


        {/* ===================================================
            HERO
        =================================================== */}

        <section className="orders-help-hero">

          <div className="orders-help-circle circle-one"></div>

          <div className="orders-help-circle circle-two"></div>


          <div className="orders-help-hero-content">

            <span className="orders-help-badge">

              <FiPackage />

              ORDER SUPPORT

            </span>


            <h2>

              Need help with your

              <span>
                {" "}order?
              </span>

            </h2>


            <p>

              Find answers about tracking, cancellation,
              delivery and other order-related issues.

            </p>

          </div>


          <div className="orders-help-hero-icon">

            <FiPackage />

          </div>

        </section>


        {/* ===================================================
            QUICK OPTIONS
        =================================================== */}

        <section className="orders-help-section">


          <div className="orders-help-section-heading">

            <span>
              QUICK HELP
            </span>

            <h2>
              What can we help you with?
            </h2>

            <p>
              Choose an option to find the information you need.
            </p>

          </div>


          <div className="orders-help-options">


            <button
              type="button"
              className="orders-help-option"
            >

              <div className="orders-help-option-icon orange">
                <FiTruck />
              </div>

              <div>

                <strong>
                  Track my order
                </strong>

                <span>
                  Check your delivery status
                </span>

              </div>

            </button>


            <button
              type="button"
              className="orders-help-option"
            >

              <div className="orders-help-option-icon blue">
                <FiClock />
              </div>

              <div>

                <strong>
                  Delayed order
                </strong>

                <span>
                  Order is taking longer than expected
                </span>

              </div>

            </button>


            <button
              type="button"
              className="orders-help-option"
            >

              <div className="orders-help-option-icon red">
                <FiXCircle />
              </div>

              <div>

                <strong>
                  Cancel my order
                </strong>

                <span>
                  Learn about order cancellation
                </span>

              </div>

            </button>


            <button
              type="button"
              className="orders-help-option"
            >

              <div className="orders-help-option-icon green">
                <FiCheckCircle />
              </div>

              <div>

                <strong>
                  Order issue
                </strong>

                <span>
                  Wrong or missing items
                </span>

              </div>

            </button>


          </div>

        </section>


        {/* ===================================================
            ORDER PROCESS
        =================================================== */}

        <section className="orders-help-section">


          <div className="orders-help-section-heading">

            <span>
              ORDER PROCESS
            </span>

            <h2>
              How your order works
            </h2>

            <p>
              Follow your order from restaurant confirmation to delivery.
            </p>

          </div>


          <div className="order-process">


            <div className="order-process-step">

              <div className="process-number">
                01
              </div>

              <div className="process-icon">
                <FiCheckCircle />
              </div>

              <div>

                <strong>
                  Order Confirmed
                </strong>

                <p>
                  Your order has been successfully placed.
                </p>

              </div>

            </div>


            <div className="order-process-line"></div>


            <div className="order-process-step">

              <div className="process-number">
                02
              </div>

              <div className="process-icon">
                <FiPackage />
              </div>

              <div>

                <strong>
                  Preparing
                </strong>

                <p>
                  The restaurant is preparing your food.
                </p>

              </div>

            </div>


            <div className="order-process-line"></div>


            <div className="order-process-step">

              <div className="process-number">
                03
              </div>

              <div className="process-icon">
                <FiTruck />
              </div>

              <div>

                <strong>
                  Out for Delivery
                </strong>

                <p>
                  Your order is on its way to you.
                </p>

              </div>

            </div>


            <div className="order-process-line"></div>


            <div className="order-process-step">

              <div className="process-number">
                04
              </div>

              <div className="process-icon">
                <FiMapPin />
              </div>

              <div>

                <strong>
                  Delivered
                </strong>

                <p>
                  Your delicious meal has arrived.
                </p>

              </div>

            </div>


          </div>

        </section>


        {/* ===================================================
            FAQ
        =================================================== */}

        <section className="orders-help-section">


          <div className="orders-help-section-heading">

            <span>
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              Orders & Delivery FAQs
            </h2>

            <p>
              Find answers to common order-related questions.
            </p>

          </div>


          <div className="orders-help-faq">


            {questions.map(
              (question, index) => (

                <div
                  className={`orders-help-faq-item ${
                    openQuestion === index
                      ? "faq-open"
                      : ""
                  }`}
                  key={index}
                >


                  <button
                    type="button"
                    className="orders-help-faq-question"
                    onClick={() =>
                      toggleQuestion(index)
                    }
                  >

                    <div>

                      <span className="faq-question-number">

                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}

                      </span>

                      <span>
                        {question.question}
                      </span>

                    </div>


                    {openQuestion === index ? (

                      <FiChevronUp />

                    ) : (

                      <FiChevronDown />

                    )}

                  </button>


                  {openQuestion === index && (

                    <div className="orders-help-faq-answer">

                      <p>
                        {question.answer}
                      </p>

                    </div>

                  )}

                </div>

              )
            )}

          </div>

        </section>


        {/* ===================================================
            SUPPORT
        =================================================== */}

        <section className="orders-help-support">

          <div className="orders-help-support-icon">

            <FiMessageCircle />

          </div>


          <div>

            <span>
              STILL NEED HELP?
            </span>

            <h2>
              We're here to help.
            </h2>

            <p>
              Can't find the answer you're looking for?
              Contact our support team.
            </p>

          </div>


          <button
            type="button"
            className="orders-help-support-button"
          >

            <FiMessageCircle />

            Contact Support

          </button>

        </section>


      </main>

    </div>

  );

}


export default OrdersDeliveryHelp;