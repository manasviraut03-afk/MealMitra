import {
  FiArrowLeft,
  FiCreditCard,
  FiSmartphone,
  FiAlertCircle,
  FiRefreshCw,
  FiFileText,
  FiChevronRight,
} from "react-icons/fi";

import "./PaymentBilling.css";


type PaymentBillingProps = {
  onBack: () => void;

  onPaymentMethods: () => void;

  onUPIPayments: () => void;

  onPaymentFailed: () => void;

  onRefundCancellation: () => void;

  onPaymentHistory: () => void;
};


function PaymentBilling({
  onBack,
  onPaymentMethods,
  onUPIPayments,
  onPaymentFailed,
  onRefundCancellation,
  onPaymentHistory,
}: PaymentBillingProps) {


  const paymentOptions = [

    {
      icon: <FiCreditCard />,

      title: "Payment Methods",

      description:
        "Manage your UPI, cards and other payment methods.",

      className: "payment-blue",

      onClick: onPaymentMethods,
    },

    {
      icon: <FiSmartphone />,

      title: "UPI Payments",

      description:
        "Get help with UPI payments, verification and transactions.",

      className: "payment-purple",

      onClick: onUPIPayments,
    },

    {
      icon: <FiAlertCircle />,

      title: "Payment Failed",

      description:
        "Payment failed or money was deducted from your account?",

      className: "payment-red",

      onClick: onPaymentFailed,
    },

    {
      icon: <FiRefreshCw />,

      title: "Refund & Cancellation",

      description:
        "Check refund status and understand cancellation refunds.",

      className: "payment-green",

      onClick: onRefundCancellation,
    },

    {
      icon: <FiFileText />,

      title: "Payment History",

      description:
        "View your previous payment transactions and receipts.",

      className: "payment-orange",

      onClick: onPaymentHistory,
    },

  ];


  return (

    <div className="payment-billing-page">


      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="payment-billing-header">


        <button
          type="button"
          className="payment-billing-back"
          onClick={onBack}
          aria-label="Go back"
        >

          <FiArrowLeft />

        </button>


        <div className="payment-billing-title">

          <h1>
            Payment & Billing
          </h1>

          <p>
            Choose an option to get help with your payment.
          </p>

        </div>


        <div className="payment-billing-header-space"></div>


      </header>



      {/* =====================================================
          PAYMENT OPTIONS
      ===================================================== */}

      <main className="payment-billing-main">


        <div className="payment-options-container">


          {paymentOptions.map(
            (option, index) => (

              <button
                type="button"
                className="payment-option-card"
                key={index}
                onClick={option.onClick}
              >


                <div
                  className={`payment-option-icon ${option.className}`}
                >

                  {option.icon}

                </div>


                <div className="payment-option-content">

                  <h2>
                    {option.title}
                  </h2>

                  <p>
                    {option.description}
                  </p>

                </div>


                <div className="payment-option-arrow">

                  <FiChevronRight />

                </div>


              </button>

            )
          )}


        </div>


      </main>


    </div>

  );

}


export default PaymentBilling;