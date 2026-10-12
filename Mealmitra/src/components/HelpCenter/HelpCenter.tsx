import { useState } from "react";

import {
  FiSearch,
  FiMessageCircle,
  FiMail,
  FiPhone,
  FiChevronDown,
  FiX,
  FiShoppingBag,
  FiCreditCard,
  FiUser,
} from "react-icons/fi";

import "./HelpCenter.css";

type HelpCenterProps = {
  onBack: () => void;
  onMyOrders: () => void;
  onPayments: () => void;
};

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "How can I track my order?",
    answer:
      "You can track your order from the My Orders section. Open your active order to view the latest order and delivery status.",
  },
  {
    question: "Can I cancel my order?",
    answer:
      "Yes, you can cancel an order if it has not already been prepared or dispatched by the restaurant.",
  },
  {
    question: "How can I apply a coupon?",
    answer:
      "Go to the Offers & Coupons section, select an available coupon, copy the coupon code and apply it during checkout.",
  },
  {
    question: "What should I do if my payment failed?",
    answer:
      "If your payment failed, please check your internet connection and try again. If money was deducted, wait for the payment status to update or contact our support team.",
  },
  {
    question: "How can I change my delivery address?",
    answer:
      "You can change your delivery address from Saved Addresses. Select an existing address or add a new delivery address.",
  },
  {
    question: "How can I update my profile information?",
    answer:
      "Open your Profile section to update your personal information, phone number and other account details.",
  },
];

function HelpCenter({
  onBack,
  onMyOrders,
  onPayments,
}: HelpCenterProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const filteredFAQs = faqs.filter((faq) =>
    `${faq.question} ${faq.answer}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  return (
    <div className="help-center-page">

      {/* =====================================================
          FIXED CLOSE BUTTON
      ===================================================== */}

      <button
        type="button"
        className="help-center-close"
        onClick={onBack}
        aria-label="Close Help Center"
      >
        <FiX />
      </button>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="help-center-main">


        {/* ===================================================
            HELP HERO CARD
        =================================================== */}

        <section className="help-hero">

          <div className="help-hero-decoration help-circle-one"></div>
          <div className="help-hero-decoration help-circle-two"></div>


          <div className="help-hero-content">

            <span className="help-hero-label">
              MEALMITRA SUPPORT
            </span>

            <h1>
              How can we help you?
            </h1>

            <p>
              Find answers to your questions or get help with your
              MealMitra order.
            </p>


            {/* SEARCH */}

            <div className="help-search-box">

              <FiSearch className="help-search-icon" />

              <input
                type="text"
                placeholder="Search for a question or topic"
                value={searchText}
                onChange={(e) =>
                  setSearchText(e.target.value)
                }
              />

            </div>

          </div>

        </section>


        {/* ===================================================
            QUICK HELP
        =================================================== */}

        <section className="quick-help-section">

          <div className="quick-help-heading">

            <span>
              QUICK HELP
            </span>

            <h2>
              What do you need help with?
            </h2>

          </div>


          <div className="quick-help-grid">


            {/* ORDERS */}

            <button
              type="button"
              className="quick-help-card"
              onClick={onMyOrders}
            >

              <div className="quick-help-icon">
                <FiShoppingBag />
              </div>

              <div className="quick-help-content">

                <h3>
                  Orders & Delivery
                </h3>

                <p>
                  Track orders and manage delivery issues.
                </p>

              </div>

              <FiChevronDown className="quick-help-arrow" />

            </button>


            {/* PAYMENTS */}

            <button
              type="button"
              className="quick-help-card"
              onClick={onPayments}
            >

              <div className="quick-help-icon">
                <FiCreditCard />
              </div>

              <div className="quick-help-content">

                <h3>
                  Payments & Refunds
                </h3>

                <p>
                  Get help with payments and refunds.
                </p>

              </div>

              <FiChevronDown className="quick-help-arrow" />

            </button>


            {/* ACCOUNT */}

            <button
              type="button"
              className="quick-help-card"
            >

              <div className="quick-help-icon">
                <FiUser />
              </div>

              <div className="quick-help-content">

                <h3>
                  Account & Profile
                </h3>

                <p>
                  Manage your account and profile details.
                </p>

              </div>

              <FiChevronDown className="quick-help-arrow" />

            </button>

          </div>

        </section>


        {/* ===================================================
            FAQ SECTION
        =================================================== */}

        <section className="faq-section">

          <div className="faq-heading">

            <span>
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              Common questions
            </h2>

            <p>
              Find quick answers to common MealMitra questions.
            </p>

          </div>


          <div className="faq-list">

            {filteredFAQs.length > 0 ? (

              filteredFAQs.map((faq, index) => {

                const isOpen = openFAQ === index;

                return (
                  <div
                    className={`faq-item ${
                      isOpen ? "faq-item-open" : ""
                    }`}
                    key={faq.question}
                  >

                    <button
                      type="button"
                      className="faq-question"
                      onClick={() =>
                        toggleFAQ(index)
                      }
                      aria-expanded={isOpen}
                    >

                      <div className="faq-question-left">

                        <span className="faq-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="faq-question-text">
                          {faq.question}
                        </span>

                      </div>


                      <span className="faq-arrow">
                        <FiChevronDown />
                      </span>

                    </button>


                    {isOpen && (
                      <div className="faq-answer">

                        <p>
                          {faq.answer}
                        </p>

                      </div>
                    )}

                  </div>
                );
              })

            ) : (

              <div className="no-results">
                <FiSearch />

                <h3>
                  No results found
                </h3>

                <p>
                  Try searching with a different question or topic.
                </p>
              </div>

            )}

          </div>

        </section>


        {/* ===================================================
            SUPPORT BANNER
        =================================================== */}

        <section className="support-banner">

          <div className="support-decoration"></div>


          <div className="support-banner-icon">
            <FiMessageCircle />
          </div>


          <div className="support-banner-content">

            <span>
              STILL NEED HELP?
            </span>

            <h2>
              We're always here for you.
            </h2>

            <p>
              Can't find what you're looking for?
              Get in touch with our support team.
            </p>

          </div>


          <div className="support-banner-actions">

            <button
              type="button"
              className="chat-support-btn"
            >
              <FiMessageCircle />
              Chat with us
            </button>


            <button
              type="button"
              className="email-support-btn"
            >
              <FiMail />
              Email support
            </button>

          </div>

        </section>


        {/* ===================================================
            CONTACT CARDS
        =================================================== */}

        <section className="support-contact-grid">


          <div className="support-contact-card">

            <div className="support-contact-icon">
              <FiPhone />
            </div>

            <div>

              <span>
                CALL US
              </span>

              <h3>
                Customer Support
              </h3>

              <p>
                Available during support hours
              </p>

            </div>

          </div>


          <div className="support-contact-card">

            <div className="support-contact-icon">
              <FiMail />
            </div>

            <div>

              <span>
                EMAIL US
              </span>

              <h3>
                support@mealmitra.com
              </h3>

              <p>
                We'll get back to you shortly
              </p>

            </div>

          </div>


        </section>

      </main>

    </div>
  );
}

export default HelpCenter;