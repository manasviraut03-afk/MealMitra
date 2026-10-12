import {
  FiArrowLeft,
  FiCreditCard,
  FiSmartphone,
  FiRefreshCw,
  FiAlertCircle,
  FiShield,
  FiFileText,
  FiHelpCircle,
  FiPhone,
  FiChevronRight,
} from "react-icons/fi";

import { useState } from "react";

import "./Payments.css";

interface PaymentsProps {
  onBack: () => void;
}

function Payments({
  onBack,
}: PaymentsProps) {

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const closeOption = () => {
    setSelectedOption("");
  };

  return (
    <div className="payments-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="payments-header">

        <button
          className="payments-back-button"
          onClick={selectedOption ? closeOption : onBack}
        >
          <FiArrowLeft />
        </button>

        <div>
          <span className="payments-small-title">
            HELP CENTER
          </span>

          <h1>
            Payments
          </h1>

          <p>
            Manage payments, refunds and payment issues
          </p>
        </div>

      </div>


      {/* =====================================================
          PAYMENT DETAILS
      ===================================================== */}

      {selectedOption && (

        <div className="payment-detail-container">

          {selectedOption === "Payment Methods" && (

            <section className="payment-detail-card">

              <div className="payment-detail-icon payment-blue">
                <FiCreditCard />
              </div>

              <h2>
                Payment Methods
              </h2>

              <p>
                MealMitra supports multiple payment methods to
                make your food ordering experience easy and convenient.
              </p>

              <div className="payment-help-list">

                <div>
                  <strong>💳 Credit / Debit Card</strong>
                  <p>
                    You can use your Visa, Mastercard or other
                    supported cards to complete your payment.
                  </p>
                </div>

                <div>
                  <strong>📱 UPI</strong>
                  <p>
                    You can pay using supported UPI applications
                    and your UPI ID.
                  </p>
                </div>

                <div>
                  <strong>💵 Cash on Delivery</strong>
                  <p>
                    If available for your location and order,
                    you can choose Cash on Delivery.
                  </p>
                </div>

              </div>

            </section>

          )}


          {selectedOption === "UPI Payments" && (

            <section className="payment-detail-card">

              <div className="payment-detail-icon payment-purple">
                <FiSmartphone />
              </div>

              <h2>
                UPI Payments
              </h2>

              <p>
                UPI allows you to make quick and secure payments
                directly from your bank account.
              </p>

              <div className="payment-help-list">

                <div>
                  <strong>How to pay using UPI?</strong>
                  <p>
                    Select UPI as your payment method, enter your
                    UPI details and approve the payment through
                    your UPI application.
                  </p>
                </div>

                <div>
                  <strong>UPI Payment Pending</strong>
                  <p>
                    If your payment is pending, wait for a few
                    minutes before trying another payment.
                  </p>
                </div>

                <div>
                  <strong>UPI Payment Failed</strong>
                  <p>
                    Check your UPI balance, internet connection
                    and UPI details before trying again.
                  </p>
                </div>

              </div>

            </section>

          )}


          {selectedOption === "Payment Failed" && (

            <section className="payment-detail-card">

              <div className="payment-detail-icon payment-red">
                <FiAlertCircle />
              </div>

              <h2>
                Payment Failed
              </h2>

              <p>
                If your payment failed while placing an order,
                don't worry. Follow these steps to resolve the issue.
              </p>

              <div className="payment-help-list">

                <div>
                  <strong>1. Check your internet connection</strong>
                  <p>
                    Make sure your internet connection is stable
                    and try the payment again.
                  </p>
                </div>

                <div>
                  <strong>2. Check payment details</strong>
                  <p>
                    Make sure your card, UPI ID or other payment
                    information is correct.
                  </p>
                </div>

                <div>
                  <strong>3. Check your bank balance</strong>
                  <p>
                    Make sure sufficient balance is available
                    in your bank account.
                  </p>
                </div>

                <div>
                  <strong>4. Try another payment method</strong>
                  <p>
                    You can try another available payment option
                    if the problem continues.
                  </p>
                </div>

              </div>

            </section>

          )}


          {selectedOption === "Refund & Cancellation" && (

            <section className="payment-detail-card">

              <div className="payment-detail-icon payment-green">
                <FiRefreshCw />
              </div>

              <h2>
                Refund & Cancellation
              </h2>

              <p>
                Learn about order cancellation and payment refunds.
              </p>

              <div className="payment-help-list">

                <div>
                  <strong>Order Cancellation</strong>
                  <p>
                    You can cancel your order according to the
                    cancellation policy applicable to your order.
                  </p>
                </div>

                <div>
                  <strong>Refund Processing</strong>
                  <p>
                    If a refund is approved, the amount is generally
                    returned to the original payment method.
                  </p>
                </div>

                <div>
                  <strong>Refund Not Received</strong>
                  <p>
                    If you have not received your refund after the
                    expected processing period, contact MealMitra support.
                  </p>
                </div>

              </div>

            </section>

          )}


          {selectedOption === "Payment History" && (

            <section className="payment-detail-card">

              <div className="payment-detail-icon payment-orange">
                <FiFileText />
              </div>

              <h2>
                Payment History
              </h2>

              <p>
                Payment history helps you keep track of your
                previous transactions and receipts.
              </p>

              <div className="payment-help-list">

                <div>
                  <strong>View Previous Payments</strong>
                  <p>
                    You can check your completed orders and their
                    payment information from your order details.
                  </p>
                </div>

                <div>
                  <strong>Payment Receipt</strong>
                  <p>
                    Payment and order information can be used to
                    verify your transaction.
                  </p>
                </div>

                <div>
                  <strong>Payment Dispute</strong>
                  <p>
                    If you notice an incorrect payment or transaction,
                    contact MealMitra support for assistance.
                  </p>
                </div>

              </div>

            </section>

          )}

        </div>

      )}


      {/* =====================================================
          PAYMENT OPTIONS
      ===================================================== */}

      {!selectedOption && (

        <div className="payments-container">

          <section className="payment-section">

            <div className="payment-section-title">

              <h2>
                Payment & Billing
              </h2>

              <p>
                Choose an option to get help with your payment.
              </p>

            </div>


            {/* PAYMENT METHODS */}

            <div
              className="payment-card"
              onClick={() => handleOptionClick("Payment Methods")}
            >

              <div className="payment-card-icon payment-blue">
                <FiCreditCard />
              </div>

              <div className="payment-card-content">

                <h3>
                  Payment Methods
                </h3>

                <p>
                  Manage your UPI, cards and other payment methods.
                </p>

              </div>

              <FiChevronRight className="payment-arrow" />

            </div>


            {/* UPI */}

            <div
              className="payment-card"
              onClick={() => handleOptionClick("UPI Payments")}
            >

              <div className="payment-card-icon payment-purple">
                <FiSmartphone />
              </div>

              <div className="payment-card-content">

                <h3>
                  UPI Payments
                </h3>

                <p>
                  Get help with UPI payments, verification and transactions.
                </p>

              </div>

              <FiChevronRight className="payment-arrow" />

            </div>


            {/* PAYMENT FAILED */}

            <div
              className="payment-card"
              onClick={() => handleOptionClick("Payment Failed")}
            >

              <div className="payment-card-icon payment-red">
                <FiAlertCircle />
              </div>

              <div className="payment-card-content">

                <h3>
                  Payment Failed
                </h3>

                <p>
                  Payment failed or money was deducted from your account?
                </p>

              </div>

              <FiChevronRight className="payment-arrow" />

            </div>


            {/* REFUND */}

            <div
              className="payment-card"
              onClick={() => handleOptionClick("Refund & Cancellation")}
            >

              <div className="payment-card-icon payment-green">
                <FiRefreshCw />
              </div>

              <div className="payment-card-content">

                <h3>
                  Refund & Cancellation
                </h3>

                <p>
                  Check refund status and understand cancellation refunds.
                </p>

              </div>

              <FiChevronRight className="payment-arrow" />

            </div>


            {/* PAYMENT HISTORY */}

            <div
              className="payment-card"
              onClick={() => handleOptionClick("Payment History")}
            >

              <div className="payment-card-icon payment-orange">
                <FiFileText />
              </div>

              <div className="payment-card-content">

                <h3>
                  Payment History
                </h3>

                <p>
                  View your previous payment transactions and receipts.
                </p>

              </div>

              <FiChevronRight className="payment-arrow" />

            </div>

          </section>


          {/* =====================================================
              SECURITY
          ===================================================== */}

          <section className="payment-info-card">

            <div className="payment-info-icon">
              <FiShield />
            </div>

            <div>

              <h3>
                Your payments are secure
              </h3>

              <p>
                MealMitra uses secure payment processing to protect
                your payment information.
              </p>

            </div>

          </section>


          {/* =====================================================
              COMMON QUESTIONS
          ===================================================== */}

          <section className="payment-faq-section">

            <div className="payment-section-title">

              <h2>
                Common Payment Questions
              </h2>

              <p>
                Quick answers to common payment problems.
              </p>

            </div>


            <div className="payment-faq-card">

              <div className="faq-icon">
                <FiHelpCircle />
              </div>

              <div className="faq-content">

                <h3>
                  Why did my payment fail?
                </h3>

                <p>
                  Check your internet connection, payment details
                  and bank or UPI balance before trying again.
                </p>

              </div>

            </div>


            <div className="payment-faq-card">

              <div className="faq-icon">
                <FiHelpCircle />
              </div>

              <div className="faq-content">

                <h3>
                  Money was deducted but order was not placed?
                </h3>

                <p>
                  Don't worry. If the order was not created,
                  the amount will generally be returned to your
                  original payment method.
                </p>

              </div>

            </div>


            <div className="payment-faq-card">

              <div className="faq-icon">
                <FiHelpCircle />
              </div>

              <div className="faq-content">

                <h3>
                  How can I check my refund?
                </h3>

                <p>
                  You can check the refund status from your
                  payment or order details.
                </p>

              </div>

            </div>

          </section>


          {/* =====================================================
              CONTACT SUPPORT
          ===================================================== */}

          <section className="payment-support-card">

            <div className="payment-support-icon">
              <FiPhone />
            </div>

            <div className="payment-support-content">

              <h2>
                Still need help?
              </h2>

              <p>
                Our support team is here to help you with
                payment related issues.
              </p>

            </div>

            <button
              className="payment-support-button"
              onClick={() => {
                alert(
                  "MealMitra Support\n\n" +
                  "Our support team will help you with your payment issue."
                );
              }}
            >
              Contact Support
            </button>

          </section>

        </div>

      )}

    </div>
  );
}

export default Payments;