import { useState } from "react";   
   
import {   
  FiArrowLeft,   
  FiShield,   
  FiUser,   
  FiLock,   
  FiMapPin,   
  FiBell,   
  FiSliders,   
  FiDatabase,   
  FiTrash2,   
  FiFileText,   
  FiChevronRight,   
  FiCheck,   
} from "react-icons/fi";   
   
import "./Privacy.css";   
   
   
/* =================================================   
   PROPS   
================================================= */   
   
type PrivacyProps = {   
  onBack: () => void;   
  darkMode: boolean;   
  onPersonalInformation: () => void;   
  onLoginSecurity: () => void;   
  onNotifications: () => void;   
  onPrivacyPreferences: () => void;   
  onPrivacyPolicy: () => void;   
  onTermsConditions: () => void;   
};   
   
   
/* =================================================   
   PRIVACY COMPONENT   
================================================= */   
   
function Privacy({   
  onBack,   
  darkMode,   
  onPersonalInformation,   
  onLoginSecurity,   
  onNotifications,   
  onPrivacyPreferences,   
  onPrivacyPolicy,   
  onTermsConditions,   
}: PrivacyProps) {   
   
  /* =================================================   
     LOCATION ACCESS   
  ================================================= */   
   
  const [locationAccess, setLocationAccess] = useState(true);   
   
   
  /* =================================================   
     PERSONALIZED EXPERIENCE   
  ================================================= */   
   
  const [personalizedExperience, setPersonalizedExperience] =   
    useState(true);   
   
   
  /* =================================================   
     CLEAR APP DATA   
  ================================================= */   
   
  const [showClearDataMessage, setShowClearDataMessage] =   
    useState(false);   
   
   
  const handleClearAppData = () => {   
   
    const confirmClear = window.confirm(   
      "Are you sure you want to clear all locally stored MealMitra app data?"   
    );   
   
    if (!confirmClear) {   
      return;   
    }   
   
   
    localStorage.removeItem("mealmitraSavedAddresses");   
    localStorage.removeItem("mealmitraLoggedInUser");   
    localStorage.removeItem("mealmitraCurrentUser");   
   
   
    localStorage.removeItem("mealmitraOrders");   
    localStorage.removeItem("mealmitraCart");   
    localStorage.removeItem("mealmitraOffers");   
    localStorage.removeItem("mealmitraNotifications");   
   
   
    setLocationAccess(true);   
    setPersonalizedExperience(true);   
   
   
    setShowClearDataMessage(true);   
   
   
    setTimeout(() => {   
      setShowClearDataMessage(false);   
    }, 3000);   
   
  };   
   
   
  return (   
   
    <div   
      className={   
        darkMode   
          ? "privacy-page dark-mode"   
          : "privacy-page"   
      }   
    >   
   
   
      {/* =================================================   
          HEADER   
      ================================================= */}   
   
      <header className="privacy-header">   
   
        <button   
          type="button"   
          className="privacy-back-button"   
          onClick={onBack}   
          aria-label="Go back"   
        >   
   
          <FiArrowLeft />   
   
        </button>   
   
   
        <div className="privacy-header-title">   
   
          <div className="privacy-header-icon">   
            <FiShield />   
          </div>   
   
   
          <div>   
   
            <h1>   
              Privacy & Security   
            </h1>   
   
            <p>   
              Manage your privacy and security preferences   
            </p>   
   
          </div>   
   
        </div>   
   
      </header>   
   
   
      {/* =================================================   
          MAIN   
      ================================================= */}   
   
      <main className="privacy-main">   
   
   
        {/* =================================================   
            PRIVACY INTRO   
        ================================================= */}   
   
        <section className="privacy-intro">   
   
          <div className="privacy-intro-icon">   
            <FiShield />   
          </div>   
   
   
          <div>   
   
            <span>   
              YOUR PRIVACY MATTERS   
            </span>   
   
            <h2>   
              Your privacy is important to us.   
            </h2>   
   
            <p>   
              Manage how MealMitra uses your information   
              to provide a better food delivery experience.   
            </p>   
   
          </div>   
   
        </section>   
   
   
        {/* =================================================   
            ACCOUNT & PERSONAL INFORMATION   
        ================================================= */}   
   
        <section className="privacy-section">   
   
          <div className="privacy-section-heading">   
   
            <span>   
              ACCOUNT & PERSONAL INFORMATION   
            </span>   
   
            <h2>   
              Your information   
            </h2>   
   
            <p>   
              Manage your personal information and account security.   
            </p>   
   
          </div>   
   
   
          <div className="privacy-list">   
   
   
            {/* =================================================   
                PERSONAL INFORMATION   
            ================================================= */}   
   
            <button   
              type="button"   
              className="privacy-list-item"   
              onClick={onPersonalInformation}   
            >   
   
              <div className="privacy-list-left">   
   
                <div className="privacy-icon orange">   
                  <FiUser />   
                </div>   
   
   
                <div>   
   
                  <h3>   
                    Personal Information   
                  </h3>   
   
                  <p>   
                    Manage your name, phone number and account details.   
                  </p>   
   
                </div>   
   
              </div>   
   
   
              <FiChevronRight />   
   
            </button>   
   
   
            {/* =================================================   
                LOGIN & SECURITY   
            ================================================= */}   
   
            <button   
              type="button"   
              className="privacy-list-item"   
              onClick={onLoginSecurity}   
            >   
   
              <div className="privacy-list-left">   
   
                <div className="privacy-icon red">   
                  <FiLock />   
                </div>   
   
   
                <div>   
   
                  <h3>   
                    Login & Security   
                  </h3>   
   
                  <p>   
                    Manage your account security and login information.   
                  </p>   
   
                </div>   
   
              </div>   
   
   
              <FiChevronRight />   
   
            </button>   
   
   
          </div>   
   
        </section>   
   
   
        {/* =================================================   
            LOCATION & PERMISSIONS   
        ================================================= */}   
   
        <section className="privacy-section">   
   
          <div className="privacy-section-heading">   
   
            <span>   
              LOCATION & PERMISSIONS   
            </span>   
   
            <h2>   
              Permissions   
            </h2>   
   
            <p>   
              Control the permissions used by MealMitra.   
            </p>   
   
          </div>   
   
   
          <div className="privacy-list">   
   
   
            {/* =================================================   
                LOCATION ACCESS   
            ================================================= */}   
   
            <div className="privacy-list-item">   
   
              <div className="privacy-list-left">   
   
                <div className="privacy-icon yellow">   
                  <FiMapPin />   
                </div>   
   
   
                <div>   
   
                  <h3>   
                    Location Access   
                  </h3>   
   
                  <p>   
                    Used to find restaurants and deliver your orders.   
                  </p>   
   
                </div>   
   
              </div>   
   
   
              <button   
                type="button"   
                className={   
                  `privacy-toggle ${   
                    locationAccess ? "active" : ""   
                  }`   
                }   
                onClick={() =>   
                  setLocationAccess(!locationAccess)   
                }   
                aria-label="Toggle location access"   
              >   
   
                <span className="privacy-toggle-circle"></span>   
   
              </button>   
   
            </div>   
   
   
            {/* =================================================   
                NOTIFICATIONS   
            ================================================= */}   
   
            <button   
              type="button"   
              className="privacy-list-item"   
              onClick={onNotifications}   
            >   
   
              <div className="privacy-list-left">   
   
                <div className="privacy-icon orange">   
                  <FiBell />   
                </div>   
   
   
                <div>   
   
                  <h3>   
                    Notifications   
                  </h3>   
   
                  <p>   
                    Manage your order and promotional notifications.   
                  </p>   
   
                </div>   
   
              </div>   
   
   
              <FiChevronRight />   
   
            </button>   
   
   
          </div>   
   
        </section>   
   
   
        {/* =================================================   
            DATA & PRIVACY   
        ================================================= */}   
   
        <section className="privacy-section">   
   
          <div className="privacy-section-heading">   
   
            <span>   
              DATA & PRIVACY   
            </span>   
   
            <h2>   
              Privacy preferences   
            </h2>   
   
            <p>   
              Choose how your information is used.   
            </p>   
   
          </div>   
   
   
          <div className="privacy-list">   
   
   
            {/* =================================================   
                PRIVACY PREFERENCES   
            ================================================= */}   
   
            <button   
              type="button"   
              className="privacy-list-item"   
              onClick={onPrivacyPreferences}   
            >   
   
              <div className="privacy-list-left">   
   
                <div className="privacy-icon purple">   
                  <FiSliders />   
                </div>   
   
   
                <div>   
   
                  <h3>   
                    Privacy Preferences   
                  </h3>   
   
                  <p>   
                    Control your privacy and data preferences.   
                  </p>   
   
                </div>   
   
              </div>   
   
   
              <FiChevronRight />   
   
            </button>   
   
   
            {/* =================================================   
                PERSONALIZED EXPERIENCE   
            ================================================= */}   
   
            <div className="privacy-list-item">   
   
              <div className="privacy-list-left">   
   
                <div className="privacy-icon orange">   
                  <FiDatabase />   
                </div>   
   
   
                <div>   
   
                  <h3>   
                    Personalized Experience   
                  </h3>   
   
                  <p>   
                    Get recommendations based on your activity.   
                  </p>   
   
                </div>   
   
              </div>   
   
   
              <button   
                type="button"   
                className={   
                  `privacy-toggle ${   
                    personalizedExperience ? "active" : ""   
                  }`   
                }   
                onClick={() =>   
                  setPersonalizedExperience(   
                    !personalizedExperience   
                  )   
                }   
                aria-label="Toggle personalized experience"   
              >   
   
                <span className="privacy-toggle-circle"></span>   
   
              </button>   
   
            </div>   
   
   
            {/* =================================================   
                CLEAR APP DATA   
            ================================================= */}   
   
            <button   
              type="button"   
              className="privacy-list-item danger"   
              onClick={handleClearAppData}   
            >   
   
              <div className="privacy-list-left">   
   
                <div className="privacy-icon danger-icon">   
                  <FiTrash2 />   
                </div>   
   
   
                <div>   
   
                  <h3>   
                    Clear App Data   
                  </h3>   
   
                  <p>   
                    Remove locally stored MealMitra data from this device.   
                  </p>   
   
                </div>   
   
              </div>   
   
   
              <FiChevronRight />   
   
            </button>   
   
   
          </div>   
   
        </section>   
   
   
        {/* =================================================   
            CLEAR DATA SUCCESS MESSAGE   
        ================================================= */}   
   
        {showClearDataMessage && (   
   
          <section className="privacy-info">   
   
            <div className="privacy-info-icon">   
              <FiCheck />   
            </div>   
   
   
            <div>   
   
              <h3>   
                App data cleared   
              </h3>   
   
              <p>   
                Locally stored MealMitra data has been removed from this device.   
              </p>   
   
            </div>   
   
          </section>   
   
        )}   
   
   
        {/* =================================================   
            LEGAL   
        ================================================= */}   
   
        <section className="privacy-section">   
   
          <div className="privacy-section-heading">   
   
            <span>   
              LEGAL   
            </span>   
   
            <h2>   
              Legal information   
            </h2>   
   
          </div>   
   
   
          <div className="privacy-list">   
   
   
            {/* =================================================   
                PRIVACY POLICY   
            ================================================= */}   
   
            <button   
              type="button"   
              className="privacy-list-item"   
              onClick={onPrivacyPolicy}   
            >   
   
              <div className="privacy-list-left">   
   
                <div className="privacy-icon red">   
                  <FiFileText />   
                </div>   
   
   
                <div>   
   
                  <h3>   
                    Privacy Policy   
                  </h3>   
   
                  <p>   
                    Learn how MealMitra handles your information.   
                  </p>   
   
                </div>   
   
              </div>   
   
   
              <FiChevronRight />   
   
            </button>   
   
   
            {/* =================================================   
                TERMS & CONDITIONS   
            ================================================= */}   
   
            <button   
              type="button"   
              className="privacy-list-item"   
              onClick={onTermsConditions}   
            >   
   
              <div className="privacy-list-left">   
   
                <div className="privacy-icon yellow">   
                  <FiFileText />   
                </div>   
   
   
                <div>   
   
                  <h3>   
                    Terms & Conditions   
                  </h3>   
   
                  <p>   
                    Read the terms for using MealMitra.   
                  </p>   
   
                </div>   
   
              </div>   
   
   
              <FiChevronRight />   
   
            </button>   
   
   
          </div>   
   
        </section>   
   
   
        {/* =================================================   
            PRIVACY INFORMATION   
        ================================================= */}   
   
        {!showClearDataMessage && (   
   
          <section className="privacy-info">   
   
            <div className="privacy-info-icon">   
              <FiCheck />   
            </div>   
   
   
            <div>   
   
              <h3>   
                Your privacy is protected   
              </h3>   
   
              <p>   
                You can change your privacy preferences   
                anytime from this section.   
              </p>   
   
            </div>   
   
          </section>   
   
        )}   
   
   
      </main>   
   
   
    </div>   
   
  );   
   
}   
   
   
export default Privacy;