import "./Settings.css";

import {
  FiMoon,
  FiSun,
  FiChevronRight,
  FiBell,
  FiShield,
  FiInfo,
  FiX,
  FiSettings,
} from "react-icons/fi";

type SettingsProps = {
  onBack: () => void;
  darkMode: boolean;
  onThemeChange: (value: boolean) => void;
  onNotifications: () => void;
  onPrivacy: () => void;
  onAboutMealMitra: () => void;
};

function Settings({
  onBack,
  darkMode,
  onThemeChange,
  onNotifications,
  onPrivacy,
  onAboutMealMitra,
}: SettingsProps) {
  return (
    <div className={`settings-page ${darkMode ? "dark-mode" : ""}`}>

      {/* =====================================================
          CLOSE BUTTON
          STAYS AT TOP OF PAGE AND SCROLLS WITH PAGE
      ===================================================== */}

      <button
        type="button"
        className="settings-close-button"
        onClick={onBack}
        aria-label="Close Settings"
      >
        <FiX />
      </button>


      {/* =====================================================
          SETTINGS HERO CARD
      ===================================================== */}

      <section className="settings-hero-card">

        {/* Decorative circles */}

        <div className="settings-hero-circle settings-circle-one"></div>

        <div className="settings-hero-circle settings-circle-two"></div>


        {/* Hero icon */}

        <div className="settings-hero-icon">
          <FiSettings />
        </div>


        {/* Hero content */}

        <div className="settings-hero-content">

          <span className="settings-hero-label">
            MEALMITRA SETTINGS
          </span>

          <h1>
            Settings
          </h1>

          <p>
            Manage your MealMitra preferences and account settings.
          </p>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="settings-main">


        {/* ===================================================
            APPEARANCE
        =================================================== */}

        <section className="settings-section">

          <div className="settings-section-heading">

            <span>
              APPEARANCE
            </span>

            <h2>
              Appearance
            </h2>

            <p>
              Customize how MealMitra looks on your device.
            </p>

          </div>


          <div className="settings-card">

            <div className="settings-card-left">

              <div className="settings-icon appearance-icon">

                {darkMode ? (
                  <FiMoon />
                ) : (
                  <FiSun />
                )}

              </div>


              <div className="settings-card-content">

                <h3>
                  {darkMode ? "Dark Mode" : "Light Mode"}
                </h3>

                <p>
                  {darkMode
                    ? "Use a darker appearance"
                    : "Use a lighter appearance"}
                </p>

              </div>

            </div>


            {/* THEME TOGGLE */}

            <button
              type="button"
              className={`theme-toggle ${
                darkMode ? "active" : ""
              }`}
              onClick={() => onThemeChange(!darkMode)}
              aria-label="Toggle dark mode"
            >
              <span className="toggle-circle"></span>
            </button>

          </div>

        </section>


        {/* ===================================================
            PREFERENCES
        =================================================== */}

        <section className="settings-section">

          <div className="settings-section-heading">

            <span>
              PREFERENCES
            </span>

            <h2>
              Preferences
            </h2>

            <p>
              Manage your MealMitra account preferences.
            </p>

          </div>


          <div className="settings-list">


            {/* =================================================
                NOTIFICATIONS
            ================================================= */}

            <button
              type="button"
              className="settings-list-item"
              onClick={onNotifications}
            >

              <div className="settings-list-left">

                <div className="settings-icon">
                  <FiBell />
                </div>

                <div>

                  <h3>
                    Notifications
                  </h3>

                  <p>
                    Manage your notification preferences
                  </p>

                </div>

              </div>


              <FiChevronRight />

            </button>


            {/* =================================================
                PRIVACY
            ================================================= */}

            <button
              type="button"
              className="settings-list-item"
              onClick={onPrivacy}
            >

              <div className="settings-list-left">

                <div className="settings-icon">
                  <FiShield />
                </div>

                <div>

                  <h3>
                    Privacy
                  </h3>

                  <p>
                    Manage your privacy settings
                  </p>

                </div>

              </div>


              <FiChevronRight />

            </button>


            {/* =================================================
                ABOUT MEALMITRA
            ================================================= */}

            <button
              type="button"
              className="settings-list-item"
              onClick={onAboutMealMitra}
            >

              <div className="settings-list-left">

                <div className="settings-icon">
                  <FiInfo />
                </div>

                <div>

                  <h3>
                    About MealMitra
                  </h3>

                  <p>
                    Version and app information
                  </p>

                </div>

              </div>


              <FiChevronRight />

            </button>


          </div>

        </section>


        {/* ===================================================
            THEME INFORMATION
        =================================================== */}

        <section className="theme-info">

          <div className="theme-info-icon">

            {darkMode ? (
              <FiMoon />
            ) : (
              <FiSun />
            )}

          </div>


          <div>

            <h3>
              {darkMode
                ? "Dark mode is enabled"
                : "Light mode is enabled"}
            </h3>

            <p>
              You can switch between light and dark mode anytime.
            </p>

          </div>

        </section>


      </main>

    </div>
  );
}

export default Settings;