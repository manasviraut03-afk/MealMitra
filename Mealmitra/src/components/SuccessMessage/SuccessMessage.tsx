import "./SuccessMessage.css";

type SuccessMessageProps = {
  isSignUp: boolean;
  onClose: () => void;
};

function SuccessMessage({
  isSignUp,
  onClose,
}: SuccessMessageProps) {
  return (
    <div className="success-overlay">

      <div className="success-box">

        {/* Success Icon */}
        <div className="success-icon">
          🎉
        </div>

        {/* Title */}
        <h2>
          {isSignUp
            ? "Account Created!"
            : "Welcome Back!"}
        </h2>

        {/* Message */}
        <p>
          {isSignUp
            ? "Your MealMitra account has been created successfully."
            : "You have signed in successfully."}
        </p>

        {/* Continue Button */}
        <button
          className="success-btn"
          onClick={onClose}
        >
          Continue
        </button>

      </div>

    </div>
  );
}

export default SuccessMessage;