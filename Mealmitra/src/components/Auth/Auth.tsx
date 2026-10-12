import { useState } from "react";
import "./Auth.css";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

type AuthProps = {
  onClose: () => void;
  onLogin?: (name: string) => void;
};

type User = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

function Auth({ onClose, onLogin }: AuthProps) {

  /* =================================================
     LOGIN STEP
  ================================================= */

  const [step, setStep] = useState<"phone" | "otp" | "name">(
    "phone"
  );

  const [phone, setPhone] = useState("");

  const [otp, setOtp] = useState("");

  const [generatedOtp, setGeneratedOtp] = useState("");

  const [name, setName] = useState("");

  const [error, setError] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);


  /* =================================================
     SEND OTP
  ================================================= */

  const handleSendOtp = (e: React.FormEvent) => {

    e.preventDefault();

    setError("");

    const cleanPhone = phone.replace(/\D/g, "");

    if (cleanPhone.length !== 10) {

      setError(
        "Please enter a valid 10-digit mobile number."
      );

      return;
    }


    /*
      Demo OTP

      In a real application this OTP would be
      sent through an SMS service/backend.
    */

    const demoOtp = "1234";

    setGeneratedOtp(demoOtp);

    setStep("otp");

  };


  /* =================================================
     VERIFY OTP
  ================================================= */

  const handleVerifyOtp = (e: React.FormEvent) => {

    e.preventDefault();

    setError("");

    if (otp.length !== 4) {

      setError("Please enter the 4-digit OTP.");

      return;
    }


    if (otp !== generatedOtp) {

      setError("Invalid OTP. Please try again.");

      return;
    }


    const savedUsers: User[] = JSON.parse(
      localStorage.getItem("mealmitraUsers") || "[]"
    );


    const existingUser = savedUsers.find(
      (user) => user.phone === phone
    );


    /* =================================================
       EXISTING USER
    ================================================= */

    if (existingUser) {

      localStorage.setItem(
        "mealmitraCurrentUser",
        JSON.stringify(existingUser)
      );

      onLogin?.(existingUser.name);

      setShowSuccess(true);

      return;
    }


    /* =================================================
       NEW USER
    ================================================= */

    setStep("name");

  };


  /* =================================================
     CREATE NEW ACCOUNT
  ================================================= */

  const handleCreateAccount = (e: React.FormEvent) => {

    e.preventDefault();

    setError("");

    if (!name.trim()) {

      setError("Please enter your name.");

      return;
    }


    const savedUsers: User[] = JSON.parse(
      localStorage.getItem("mealmitraUsers") || "[]"
    );


    const newUser: User = {

      name: name.trim(),

      email: "",

      phone: phone,

      password: "",

    };


    localStorage.setItem(
      "mealmitraUsers",
      JSON.stringify([
        ...savedUsers,
        newUser,
      ])
    );


    localStorage.setItem(
      "mealmitraCurrentUser",
      JSON.stringify(newUser)
    );


    localStorage.setItem(
      "mealmitraPhoneNumber",
      phone
    );


    onLogin?.(newUser.name);

    setShowSuccess(true);

  };


  /* =================================================
     BACK
  ================================================= */

  const handleBack = () => {

    setError("");

    if (step === "otp") {

      setOtp("");

      setStep("phone");

      return;
    }


    if (step === "name") {

      setName("");

      setOtp("");

      setStep("otp");

      return;
    }


    onClose();

  };


  /* =================================================
     RESEND OTP
  ================================================= */

  const handleResendOtp = () => {

    setError("");

    const demoOtp = "1234";

    setGeneratedOtp(demoOtp);

    setOtp("");

  };


  /* =================================================
     SUCCESS CLOSE
  ================================================= */

  const handleSuccessClose = () => {

    setShowSuccess(false);

    onClose();

  };


  return (
    <>
      {/* =================================================
          AUTH OVERLAY
      ================================================= */}

      <div className="auth-overlay">

        <div className="auth-box">

          {/* =================================================
              CLOSE BUTTON
          ================================================= */}

          <button
            className="auth-close"
            onClick={onClose}
            type="button"
          >
            ✕
          </button>


          {/* =================================================
              LOGO
          ================================================= */}

          <div className="auth-logo">
            🍽️
          </div>


          <h1>
            MealMitra
          </h1>


          {/* =================================================
              PHONE STEP
          ================================================= */}

          {step === "phone" && (

            <>
              <p className="auth-subtitle">
                Login or sign up using your mobile number
              </p>


              {error && (
                <div className="auth-error">
                  {error}
                </div>
              )}


              <form onSubmit={handleSendOtp}>

                <div className="auth-input-group">

                  <label>
                    Mobile Number
                  </label>


                  <div className="phone-input-wrapper">

                    <span className="country-code">
                      +91
                    </span>


                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      value={phone}
                      maxLength={10}
                      onChange={(e) => {

                        const value =
                          e.target.value.replace(
                            /\D/g,
                            ""
                          );

                        setPhone(value);

                      }}
                      required
                    />

                  </div>

                </div>


                <button
                  type="submit"
                  className="auth-submit"
                >
                  Continue
                </button>

              </form>


              <p className="auth-terms">
                By continuing, you agree to our
                Terms of Service and Privacy Policy.
              </p>

            </>

          )}


          {/* =================================================
              OTP STEP
          ================================================= */}

          {step === "otp" && (

            <>
              <button
                type="button"
                className="auth-back-button"
                onClick={handleBack}
              >
                ← Change number
              </button>


              <p className="auth-subtitle">
                Enter the OTP sent to
              </p>


              <p className="auth-phone-display">
                +91 {phone}
              </p>


              {error && (
                <div className="auth-error">
                  {error}
                </div>
              )}


              <form onSubmit={handleVerifyOtp}>

                <div className="auth-input-group">

                  <label>
                    Enter OTP
                  </label>


                  <input
                    className="otp-input"
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter 4-digit OTP"
                    value={otp}
                    maxLength={4}
                    onChange={(e) => {

                      const value =
                        e.target.value.replace(
                          /\D/g,
                          ""
                        );

                      setOtp(value);

                    }}
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="auth-submit"
                >
                  Verify & Continue
                </button>

              </form>


              <div className="auth-resend">

                Didn't receive the OTP?

                <button
                  type="button"
                  onClick={handleResendOtp}
                >
                  Resend OTP
                </button>

              </div>


              <div className="demo-otp">
                Demo OTP: <strong>1234</strong>
              </div>

            </>

          )}


          {/* =================================================
              NAME STEP
          ================================================= */}

          {step === "name" && (

            <>
              <p className="auth-subtitle">
                Welcome to MealMitra!
              </p>


              <p className="auth-phone-display">
                +91 {phone}
              </p>


              <p className="auth-name-description">
                What should we call you?
              </p>


              {error && (
                <div className="auth-error">
                  {error}
                </div>
              )}


              <form onSubmit={handleCreateAccount}>

                <div className="auth-input-group">

                  <label>
                    Your Name
                  </label>


                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="auth-submit"
                >
                  Continue to MealMitra
                </button>

              </form>


              <button
                type="button"
                className="auth-back-button"
                onClick={handleBack}
              >
                ← Back
              </button>

            </>

          )}

        </div>

      </div>


      {/* =================================================
          SUCCESS MESSAGE
      ================================================= */}

      {showSuccess && (

        <SuccessMessage
          isSignUp={step === "name"}
          onClose={handleSuccessClose}
        />

      )}

    </>
  );
}


export default Auth;