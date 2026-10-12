import {
  FiArrowLeft,
  FiFileText,
  FiUser,
  FiShoppingBag,
  FiCreditCard,
  FiMapPin,
  FiShield,
  FiAlertCircle,
  FiCheck,
  FiMail,
} from "react-icons/fi";

import "./TermsConditions.css";


/* =================================================
   PROPS
================================================= */

type TermsConditionsProps = {
  onBack: () => void;
  darkMode: boolean;
};


/* =================================================
   TERMS & CONDITIONS COMPONENT
================================================= */

function TermsConditions({
  onBack,
  darkMode,
}: TermsConditionsProps) {

  return (

    <div
      className={
        darkMode
          ? "terms-conditions-page dark-mode"
          : "terms-conditions-page"
      }
    >


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="terms-conditions-header">

        <button
          type="button"
          className="terms-conditions-back-button"
          onClick={onBack}
          aria-label="Go back"
        >

          <FiArrowLeft />

        </button>


        <div className="terms-conditions-header-title">

          <div className="terms-conditions-header-icon">

            <FiFileText />

          </div>


          <div>

            <h1>
              Terms & Conditions
            </h1>

            <p>
              Please read the terms for using MealMitra
            </p>

          </div>

        </div>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="terms-conditions-main">


        {/* =================================================
            INTRO
        ================================================= */}

        <section className="terms-conditions-intro">

          <div className="terms-conditions-intro-icon">

            <FiShield />

          </div>


          <div>

            <span>
              TERMS & CONDITIONS
            </span>

            <h2>
              Welcome to MealMitra
            </h2>

            <p>
              These terms explain the rules and conditions
              for using MealMitra and its services.
            </p>

          </div>

        </section>


        {/* =================================================
            01
        ================================================= */}

        <section className="terms-conditions-section">

          <div className="terms-conditions-section-heading">

            <span>
              01
            </span>

            <h2>
              Using MealMitra
            </h2>

            <p>
              Please use MealMitra responsibly and provide
              accurate information when using our services.
            </p>

          </div>


          <div className="terms-conditions-card">


            {/* =================================================
                ACCOUNT
            ================================================= */}

            <div className="terms-conditions-item">

              <div className="terms-conditions-icon orange">

                <FiUser />

              </div>


              <div>

                <h3>
                  Account Information
                </h3>

                <p>
                  You are responsible for providing accurate
                  information when creating and managing your
                  MealMitra account.
                </p>

              </div>

            </div>


            {/* =================================================
                RESPONSIBLE USE
            ================================================= */}

            <div className="terms-conditions-item">

              <div className="terms-conditions-icon yellow">

                <FiShield />

              </div>


              <div>

                <h3>
                  Responsible Use
                </h3>

                <p>
                  You agree to use MealMitra only for lawful
                  purposes and in a responsible manner.
                </p>

              </div>

            </div>


            {/* =================================================
                ACCOUNT SECURITY
            ================================================= */}

            <div className="terms-conditions-item">

              <div className="terms-conditions-icon red">

                <FiShield />

              </div>


              <div>

                <h3>
                  Account Security
                </h3>

                <p>
                  Keep your login information secure and do
                  not share your account credentials with others.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            02
        ================================================= */}

        <section className="terms-conditions-section">

          <div className="terms-conditions-section-heading">

            <span>
              02
            </span>

            <h2>
              Orders & Payments
            </h2>

            <p>
              Information about placing orders and making
              payments through MealMitra.
            </p>

          </div>


          <div className="terms-conditions-card">


            {/* =================================================
                ORDERS
            ================================================= */}

            <div className="terms-conditions-item">

              <div className="terms-conditions-icon orange">

                <FiShoppingBag />

              </div>


              <div>

                <h3>
                  Placing Orders
                </h3>

                <p>
                  Orders can be placed through the MealMitra
                  application by selecting available food items
                  and completing the checkout process.
                </p>

              </div>

            </div>


            {/* =================================================
                PAYMENT
            ================================================= */}

            <div className="terms-conditions-item">

              <div className="terms-conditions-icon yellow">

                <FiCreditCard />

              </div>


              <div>

                <h3>
                  Payments
                </h3>

                <p>
                  You are responsible for completing payment
                  for the items and services included in your order.
                </p>

              </div>

            </div>


            {/* =================================================
                ORDER CONFIRMATION
            ================================================= */}

            <div className="terms-conditions-item">

              <div className="terms-conditions-icon purple">

                <FiCheck />

              </div>


              <div>

                <h3>
                  Order Confirmation
                </h3>

                <p>
                  An order is considered placed after the
                  required order details and payment process
                  have been successfully completed.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            03
        ================================================= */}

        <section className="terms-conditions-section">

          <div className="terms-conditions-section-heading">

            <span>
              03
            </span>

            <h2>
              Delivery
            </h2>

            <p>
              Important information regarding food delivery.
            </p>

          </div>


          <div className="terms-conditions-card">


            {/* =================================================
                DELIVERY ADDRESS
            ================================================= */}

            <div className="terms-conditions-item">

              <div className="terms-conditions-icon orange">

                <FiMapPin />

              </div>


              <div>

                <h3>
                  Delivery Address
                </h3>

                <p>
                  Please provide a correct and complete delivery
                  address so your order can be delivered properly.
                </p>

              </div>

            </div>


            {/* =================================================
                DELIVERY TIME
            ================================================= */}

            <div className="terms-conditions-item">

              <div className="terms-conditions-icon yellow">

                <FiShoppingBag />

              </div>


              <div>

                <h3>
                  Delivery Time
                </h3>

                <p>
                  Delivery times may vary depending on restaurant
                  preparation, availability, traffic and other
                  circumstances.
                </p>

              </div>

            </div>


            {/* =================================================
                DELIVERY ISSUES
            ================================================= */}

            <div className="terms-conditions-item">

              <div className="terms-conditions-icon red">

                <FiAlertCircle />

              </div>


              <div>

                <h3>
                  Delivery Issues
                </h3>

                <p>
                  If you experience an issue with your delivery,
                  please contact MealMitra support for assistance.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            04
        ================================================= */}

        <section className="terms-conditions-section">

          <div className="terms-conditions-section-heading">

            <span>
              04
            </span>

            <h2>
              Cancellations & Refunds
            </h2>

            <p>
              Information about cancelling orders and refunds.
            </p>

          </div>


          <div className="terms-conditions-card">


            {/* =================================================
                CANCELLATION
            ================================================= */}

            <div className="terms-conditions-item">

              <div className="terms-conditions-icon orange">

                <FiAlertCircle />

              </div>


              <div>

                <h3>
                  Order Cancellation
                </h3>

                <p>
                  Order cancellation may depend on the current
                  status of the order and restaurant preparation.
                </p>

              </div>

            </div>


            {/* =================================================
                REFUNDS
            ================================================= */}

            <div className="terms-conditions-item">

              <div className="terms-conditions-icon yellow">

                <FiCreditCard />

              </div>


              <div>

                <h3>
                  Refunds
                </h3>

                <p>
                  Where applicable, refunds will be processed
                  according to the circumstances of the order
                  and the applicable refund process.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            05
        ================================================= */}

        <section className="terms-conditions-section">

          <div className="terms-conditions-section-heading">

            <span>
              05
            </span>

            <h2>
              User Responsibilities
            </h2>

            <p>
              Responsibilities that apply when using MealMitra.
            </p>

          </div>


          <div className="terms-conditions-card">


            <div className="terms-conditions-bullet">

              <div className="terms-conditions-check">

                <FiCheck />

              </div>

              <p>
                Provide accurate account and delivery information.
              </p>

            </div>


            <div className="terms-conditions-bullet">

              <div className="terms-conditions-check">

                <FiCheck />

              </div>

              <p>
                Use the MealMitra service in a lawful manner.
              </p>

            </div>


            <div className="terms-conditions-bullet">

              <div className="terms-conditions-check">

                <FiCheck />

              </div>

              <p>
                Keep your account information secure.
              </p>

            </div>


            <div className="terms-conditions-bullet">

              <div className="terms-conditions-check">

                <FiCheck />

              </div>

              <p>
                Do not misuse or interfere with the MealMitra service.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            06
        ================================================= */}

        <section className="terms-conditions-section">

          <div className="terms-conditions-section-heading">

            <span>
              06
            </span>

            <h2>
              Service Availability
            </h2>

            <p>
              MealMitra services may change or become temporarily
              unavailable in certain circumstances.
            </p>

          </div>


          <div className="terms-conditions-info-card">

            <div className="terms-conditions-large-icon orange">

              <FiAlertCircle />

            </div>


            <div>

              <h3>
                Service availability may vary
              </h3>

              <p>
                Restaurants, menu items, delivery areas and other
                features may change depending on availability.
                We may also temporarily limit or suspend certain
                services for maintenance or other operational reasons.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            07
        ================================================= */}

        <section className="terms-conditions-section">

          <div className="terms-conditions-section-heading">

            <span>
              07
            </span>

            <h2>
              Changes to These Terms
            </h2>

            <p>
              These terms may be updated when necessary.
            </p>

          </div>


          <div className="terms-conditions-info-card">

            <div className="terms-conditions-large-icon yellow">

              <FiFileText />

            </div>


            <div>

              <h3>
                Updated terms
              </h3>

              <p>
                MealMitra may update these Terms & Conditions
                from time to time. Any updated version will
                replace the previous version when published.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            CONTACT
        ================================================= */}

        <section className="terms-conditions-contact">

          <div className="terms-conditions-contact-icon">

            <FiMail />

          </div>


          <div>

            <span>
              NEED HELP?
            </span>

            <h2>
              Contact MealMitra
            </h2>

            <p>
              If you have questions about these Terms &
              Conditions, please contact the MealMitra support team.
            </p>

          </div>

        </section>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="terms-conditions-footer">

          <FiShield />

          <p>
            By using MealMitra, you agree to these Terms & Conditions.
          </p>

        </div>


      </main>


    </div>

  );

}


export default TermsConditions;