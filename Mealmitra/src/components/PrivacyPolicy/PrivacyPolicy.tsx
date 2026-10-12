import {
  FiArrowLeft,
  FiShield,
  FiUser,
  FiMapPin,
  FiDatabase,
  FiLock,
  FiShare2,
  FiSettings,
  FiClock,
  FiMail,
  FiCheck,
} from "react-icons/fi";

import "./PrivacyPolicy.css";


/* =================================================
   PROPS
================================================= */

type PrivacyPolicyProps = {
  onBack: () => void;
  darkMode: boolean;
};


/* =================================================
   PRIVACY POLICY COMPONENT
================================================= */

function PrivacyPolicy({
  onBack,
  darkMode,
}: PrivacyPolicyProps) {

  return (

    <div
      className={
        darkMode
          ? "privacy-policy-page dark-mode"
          : "privacy-policy-page"
      }
    >


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="privacy-policy-header">

        <button
          type="button"
          className="privacy-policy-back-button"
          onClick={onBack}
          aria-label="Go back"
        >

          <FiArrowLeft />

        </button>


        <div className="privacy-policy-header-title">

          <div className="privacy-policy-header-icon">
            <FiShield />
          </div>


          <div>

            <h1>
              Privacy Policy
            </h1>

            <p>
              Learn how MealMitra protects and uses your information
            </p>

          </div>

        </div>

      </header>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="privacy-policy-main">


        {/* =================================================
            INTRO
        ================================================= */}

        <section className="privacy-policy-intro">

          <div className="privacy-policy-intro-icon">
            <FiShield />
          </div>


          <div>

            <span>
              YOUR PRIVACY MATTERS
            </span>

            <h2>
              We respect your privacy.
            </h2>

            <p>
              This Privacy Policy explains how MealMitra
              collects, uses and protects your information
              when you use our food delivery service.
            </p>

          </div>

        </section>


        {/* =================================================
            INFORMATION WE COLLECT
        ================================================= */}

        <section className="privacy-policy-section">

          <div className="privacy-policy-section-heading">

            <span>
              01
            </span>

            <h2>
              Information we collect
            </h2>

            <p>
              We collect information that helps us provide
              you with a smooth and reliable experience.
            </p>

          </div>


          <div className="privacy-policy-card">


            <div className="privacy-policy-item">

              <div className="privacy-policy-icon orange">
                <FiUser />
              </div>

              <div>

                <h3>
                  Personal Information
                </h3>

                <p>
                  This may include your name, phone number,
                  email address and account information.
                </p>

              </div>

            </div>


            <div className="privacy-policy-item">

              <div className="privacy-policy-icon yellow">
                <FiMapPin />
              </div>

              <div>

                <h3>
                  Location Information
                </h3>

                <p>
                  We may use your location to show nearby
                  restaurants and help deliver your orders.
                </p>

              </div>

            </div>


            <div className="privacy-policy-item">

              <div className="privacy-policy-icon purple">
                <FiDatabase />
              </div>

              <div>

                <h3>
                  Usage Information
                </h3>

                <p>
                  We may collect information about how you
                  interact with MealMitra, such as orders,
                  preferences and app activity.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            HOW WE USE INFORMATION
        ================================================= */}

        <section className="privacy-policy-section">

          <div className="privacy-policy-section-heading">

            <span>
              02
            </span>

            <h2>
              How we use your information
            </h2>

            <p>
              Your information helps us provide and improve
              MealMitra services.
            </p>

          </div>


          <div className="privacy-policy-card">


            <div className="privacy-policy-bullet">

              <div className="privacy-policy-check">
                <FiCheck />
              </div>

              <p>
                Process and deliver your food orders.
              </p>

            </div>


            <div className="privacy-policy-bullet">

              <div className="privacy-policy-check">
                <FiCheck />
              </div>

              <p>
                Help you find restaurants and food near you.
              </p>

            </div>


            <div className="privacy-policy-bullet">

              <div className="privacy-policy-check">
                <FiCheck />
              </div>

              <p>
                Provide customer support and respond to your requests.
              </p>

            </div>


            <div className="privacy-policy-bullet">

              <div className="privacy-policy-check">
                <FiCheck />
              </div>

              <p>
                Improve our services, features and user experience.
              </p>

            </div>


            <div className="privacy-policy-bullet">

              <div className="privacy-policy-check">
                <FiCheck />
              </div>

              <p>
                Send important service and order-related notifications.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            LOCATION
        ================================================= */}

        <section className="privacy-policy-section">

          <div className="privacy-policy-section-heading">

            <span>
              03
            </span>

            <h2>
              Location information
            </h2>

          </div>


          <div className="privacy-policy-info-card">

            <div className="privacy-policy-large-icon yellow">
              <FiMapPin />
            </div>


            <div>

              <h3>
                Your location is used only when needed.
              </h3>

              <p>
                Location information can help us show
                nearby restaurants, calculate delivery
                information and provide accurate delivery
                services.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            DATA SECURITY
        ================================================= */}

        <section className="privacy-policy-section">

          <div className="privacy-policy-section-heading">

            <span>
              04
            </span>

            <h2>
              Data security
            </h2>

            <p>
              We take reasonable steps to protect your information.
            </p>

          </div>


          <div className="privacy-policy-info-card">

            <div className="privacy-policy-large-icon red">
              <FiLock />
            </div>


            <div>

              <h3>
                Keeping your information secure
              </h3>

              <p>
                MealMitra is designed to protect your
                personal information from unauthorized
                access, misuse or disclosure.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            DATA SHARING
        ================================================= */}

        <section className="privacy-policy-section">

          <div className="privacy-policy-section-heading">

            <span>
              05
            </span>

            <h2>
              Data sharing
            </h2>

            <p>
              We only share information when it is necessary
              to provide our services.
            </p>

          </div>


          <div className="privacy-policy-card">


            <div className="privacy-policy-item">

              <div className="privacy-policy-icon orange">
                <FiShare2 />
              </div>

              <div>

                <h3>
                  Service Providers
                </h3>

                <p>
                  Information may be shared with service
                  providers involved in processing and
                  delivering your orders.
                </p>

              </div>

            </div>


            <div className="privacy-policy-item">

              <div className="privacy-policy-icon purple">
                <FiSettings />
              </div>

              <div>

                <h3>
                  Service Improvement
                </h3>

                <p>
                  Information may be used to understand
                  usage and improve MealMitra features.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            YOUR CHOICES
        ================================================= */}

        <section className="privacy-policy-section">

          <div className="privacy-policy-section-heading">

            <span>
              06
            </span>

            <h2>
              Your privacy choices
            </h2>

            <p>
              You have control over several privacy settings.
            </p>

          </div>


          <div className="privacy-policy-card">


            <div className="privacy-policy-bullet">

              <div className="privacy-policy-check">
                <FiCheck />
              </div>

              <p>
                Manage location access from Privacy & Security.
              </p>

            </div>


            <div className="privacy-policy-bullet">

              <div className="privacy-policy-check">
                <FiCheck />
              </div>

              <p>
                Control personalized experience settings.
              </p>

            </div>


            <div className="privacy-policy-bullet">

              <div className="privacy-policy-check">
                <FiCheck />
              </div>

              <p>
                Clear locally stored MealMitra app data.
              </p>

            </div>


            <div className="privacy-policy-bullet">

              <div className="privacy-policy-check">
                <FiCheck />
              </div>

              <p>
                Manage your account information and security settings.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            DATA RETENTION
        ================================================= */}

        <section className="privacy-policy-section">

          <div className="privacy-policy-section-heading">

            <span>
              07
            </span>

            <h2>
              Data retention
            </h2>

          </div>


          <div className="privacy-policy-info-card">

            <div className="privacy-policy-large-icon orange">
              <FiClock />
            </div>


            <div>

              <h3>
                We keep information only as needed.
              </h3>

              <p>
                Information may be retained for as long
                as necessary to provide services, maintain
                records and meet applicable requirements.
              </p>

            </div>

          </div>

        </section>


        {/* =================================================
            CONTACT
        ================================================= */}

        <section className="privacy-policy-contact">

          <div className="privacy-policy-contact-icon">
            <FiMail />
          </div>


          <div>

            <span>
              HAVE QUESTIONS?
            </span>

            <h2>
              Contact us about privacy
            </h2>

            <p>
              If you have questions about this Privacy Policy
              or how your information is handled, please contact
              the MealMitra support team.
            </p>

          </div>

        </section>


        {/* =================================================
            FOOTER NOTE
        ================================================= */}

        <div className="privacy-policy-footer">

          <FiShield />

          <p>
            Your privacy matters to MealMitra.
          </p>

        </div>


      </main>


    </div>

  );

}


export default PrivacyPolicy;