import { useState } from "react";
import "./Auth.css";
import SuccessMessage from "../SuccessMessage/SuccessMessage";
import { FaEye, FaEyeSlash } from "react-icons/fa";

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
  const [isSignUp, setIsSignUp] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Show / hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    const savedUsers: User[] = JSON.parse(
      localStorage.getItem("mealmitraUsers") || "[]"
    );

    /* =========================
       SIGN UP
    ========================= */

    if (isSignUp) {
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return;
      }

      const existingUser = savedUsers.find(
        (user) => user.email === email
      );

      if (existingUser) {
        setError(
          "An account with this email already exists."
        );
        return;
      }

      const newUser: User = {
        name,
        email,
        phone,
        password,
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

      onLogin?.(name);

      setShowSuccess(true);

      return;
    }

    /* =========================
       SIGN IN
    ========================= */

    const existingUser = savedUsers.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!existingUser) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem(
      "mealmitraCurrentUser",
      JSON.stringify(existingUser)
    );

    onLogin?.(existingUser.name);

    setShowSuccess(true);
  };

  /* =========================
     SUCCESS CLOSE
  ========================= */

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  /* =========================
     SWITCH SIGN IN / SIGN UP
  ========================= */

  const switchAuth = () => {
    setIsSignUp(!isSignUp);

    setError("");

    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");

    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <>
      {/* =========================
          AUTH OVERLAY
      ========================= */}

      <div className="auth-overlay">

        <div className="auth-box">

          {/* =========================
              CLOSE BUTTON
          ========================= */}

          <button
            className="auth-close"
            onClick={onClose}
            type="button"
          >
            ✕
          </button>

          {/* =========================
              LOGO
          ========================= */}

          <div className="auth-logo">
            🍽️
          </div>

          <h1>MealMitra</h1>

          <p className="auth-subtitle">
            {isSignUp
              ? "Create your MealMitra account"
              : "Welcome back! Sign in to continue"}
          </p>

          {/* =========================
              ERROR
          ========================= */}

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          {/* =========================
              FORM
          ========================= */}

          <form onSubmit={handleSubmit}>

            {/* =========================
                NAME
            ========================= */}

            {isSignUp && (
              <div className="auth-input-group">

                <label>Full Name</label>

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
            )}

            {/* =========================
                EMAIL
            ========================= */}

            <div className="auth-input-group">

              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

            {/* =========================
                PHONE
            ========================= */}

            {isSignUp && (
              <div className="auth-input-group">

                <label>Phone Number</label>

                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                  required
                />

              </div>
            )}

            {/* =========================
                PASSWORD
            ========================= */}

            <div className="auth-input-group">

              <label>Password</label>

              <div className="password-wrapper">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* =========================
                CONFIRM PASSWORD
            ========================= */}

            {isSignUp && (
              <div className="auth-input-group">

                <label>Confirm Password</label>

                <div className="password-wrapper">

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}
                  </button>

                </div>

              </div>
            )}

            {/* =========================
                SUBMIT
            ========================= */}

            <button
              type="submit"
              className="auth-submit"
            >
              {isSignUp
                ? "Create Account"
                : "Sign In"}
            </button>

          </form>

          {/* =========================
              SWITCH
          ========================= */}

          <div className="auth-switch">

            {isSignUp
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              type="button"
              onClick={switchAuth}
            >
              {isSignUp
                ? "Sign In"
                : "Create Account"}
            </button>

          </div>

        </div>

      </div>

      {/* =========================
          SUCCESS MESSAGE
      ========================= */}

      {showSuccess && (
        <SuccessMessage
          isSignUp={isSignUp}
          onClose={handleSuccessClose}
        />
      )}
    </>
  );
}

export default Auth;