import { useState } from "react"; 
 
import { 
  FiArrowLeft, 
  FiUser, 
  FiPhone, 
  FiMail, 
  FiCalendar, 
  FiEdit2, 
  FiChevronRight, 
  FiCheck, 
  FiShield, 
  FiX, 
} from "react-icons/fi"; 
 
import "./PersonalInformation.css"; 
 
 
type PersonalInformationProps = { 
  onBack: () => void; 
  darkMode: boolean; 
  onPrivacy: () => void; 
}; 
 
 
function PersonalInformation({ 
  onBack, 
  darkMode, 
  onPrivacy, 
}: PersonalInformationProps) { 
 
  const [isEditing, setIsEditing] = useState(false); 
 
 
  const [fullName, setFullName] = useState( 
    localStorage.getItem("mealmitraFullName") || "" 
  ); 
 
 
  const [phoneNumber, setPhoneNumber] = useState( 
    localStorage.getItem("mealmitraPhoneNumber") || "" 
  ); 
 
 
  const [emailAddress, setEmailAddress] = useState( 
    localStorage.getItem("mealmitraEmailAddress") || "" 
  ); 
 
 
  const [dateOfBirth, setDateOfBirth] = useState( 
    localStorage.getItem("mealmitraDateOfBirth") || "" 
  ); 
 
 
  /* ================================================= 
     SAVE INFORMATION 
  ================================================= */ 
 
  const handleSave = () => { 
 
    localStorage.setItem( 
      "mealmitraFullName", 
      fullName 
    ); 
 
 
    localStorage.setItem( 
      "mealmitraPhoneNumber", 
      phoneNumber 
    ); 
 
 
    localStorage.setItem( 
      "mealmitraEmailAddress", 
      emailAddress 
    ); 
 
 
    localStorage.setItem( 
      "mealmitraDateOfBirth", 
      dateOfBirth 
    ); 
 
 
    setIsEditing(false); 
 
  }; 
 
 
  /* ================================================= 
     CANCEL EDITING 
  ================================================= */ 
 
  const handleCancel = () => { 
 
    setFullName( 
      localStorage.getItem("mealmitraFullName") || "" 
    ); 
 
 
    setPhoneNumber( 
      localStorage.getItem("mealmitraPhoneNumber") || "" 
    ); 
 
 
    setEmailAddress( 
      localStorage.getItem("mealmitraEmailAddress") || "" 
    ); 
 
 
    setDateOfBirth( 
      localStorage.getItem("mealmitraDateOfBirth") || "" 
    ); 
 
 
    setIsEditing(false); 
 
  }; 
 
 
  return ( 
 
    <div 
      className={`personal-information-page ${ 
        darkMode ? "dark-mode" : "" 
      }`} 
    > 
 
 
      {/* ===================================================== 
          HEADER 
      ===================================================== */} 
 
      <header className="personal-information-header"> 
 
        <button 
          type="button" 
          className="personal-information-back-button" 
          onClick={onBack} 
          aria-label="Go back" 
        > 
 
          <FiArrowLeft /> 
 
        </button> 
 
 
        <div> 
 
          <h1> 
            Personal Information 
          </h1> 
 
          <p> 
            Manage your personal details 
          </p> 
 
        </div> 
 
      </header> 
 
 
      {/* ===================================================== 
          MAIN 
      ===================================================== */} 
 
      <main className="personal-information-main"> 
 
 
        {/* =================================================== 
            INFORMATION NOTICE 
        =================================================== */} 
 
        <section className="personal-information-notice"> 
 
          <div className="personal-information-notice-icon"> 
 
            <FiShield /> 
 
          </div> 
 
 
          <div> 
 
            <h3> 
              Keep your information updated 
            </h3> 
 
            <p> 
              This helps us provide a smooth delivery 
              experience and keep your account secure. 
            </p> 
 
          </div> 
 
        </section> 
 
 
        {/* =================================================== 
            PERSONAL DETAILS HEADER 
        =================================================== */} 
 
        <section className="personal-details-section"> 
 
          <div className="personal-details-heading"> 
 
            <div> 
 
              <span> 
                PERSONAL DETAILS 
              </span> 
 
              <h2> 
                Account information 
              </h2> 
 
              <p> 
                Update your personal information and account details. 
              </p> 
 
            </div> 
 
 
            {!isEditing && ( 
 
              <button 
                type="button" 
                className="personal-edit-button" 
                onClick={() => setIsEditing(true)} 
              > 
 
                <FiEdit2 /> 
 
                Edit 
 
              </button> 
 
            )} 
 
          </div> 
 
 
          {/* ================================================= 
              EDIT FORM 
          ================================================= */} 
 
          {isEditing ? ( 
 
            <div className="personal-edit-card"> 
 
 
              {/* FULL NAME */} 
 
              <div className="personal-form-group"> 
 
                <label> 
                  Full Name 
                </label> 
 
                <div className="personal-input-wrapper"> 
 
                  <FiUser /> 
 
                  <input 
                    type="text" 
                    value={fullName} 
                    placeholder="Enter your full name" 
                    onChange={(e) => 
                      setFullName(e.target.value) 
                    } 
                  /> 
 
                </div> 
 
              </div> 
 
 
              {/* PHONE */} 
 
              <div className="personal-form-group"> 
 
                <label> 
                  Phone Number 
                </label> 
 
                <div className="personal-input-wrapper"> 
 
                  <FiPhone /> 
 
                  <input 
                    type="tel" 
                    value={phoneNumber} 
                    placeholder="Enter your phone number" 
                    onChange={(e) => 
                      setPhoneNumber(e.target.value) 
                    } 
                  /> 
 
                </div> 
 
              </div> 
 
 
              {/* EMAIL */} 
 
              <div className="personal-form-group"> 
 
                <label> 
                  Email Address 
                </label> 
 
                <div className="personal-input-wrapper"> 
 
                  <FiMail /> 
 
                  <input 
                    type="email" 
                    value={emailAddress} 
                    placeholder="Enter your email address" 
                    onChange={(e) => 
                      setEmailAddress(e.target.value) 
                    } 
                  /> 
 
                </div> 
 
              </div> 
 
 
              {/* DATE OF BIRTH */} 
 
              <div className="personal-form-group"> 
 
                <label> 
                  Date of Birth 
                </label> 
 
                <div className="personal-input-wrapper"> 
 
                  <FiCalendar /> 
 
                  <input 
                    type="date" 
                    value={dateOfBirth} 
                    onChange={(e) => 
                      setDateOfBirth(e.target.value) 
                    } 
                  /> 
 
                </div> 
 
              </div> 
 
 
              {/* ACTIONS */} 
 
              <div className="personal-form-actions"> 
 
                <button 
                  type="button" 
                  className="personal-cancel-button" 
                  onClick={handleCancel} 
                > 
 
                  <FiX /> 
 
                  Cancel 
 
                </button> 
 
 
                <button 
                  type="button" 
                  className="personal-save-button" 
                  onClick={handleSave} 
                > 
 
                  <FiCheck /> 
 
                  Save Changes 
 
                </button> 
 
              </div> 
 
 
            </div> 
 
          ) : ( 
 
            /* ================================================= 
               INFORMATION LIST 
            ================================================= */ 
 
            <div className="personal-information-card"> 
 
 
              {/* FULL NAME */} 
 
              <div className="personal-information-row"> 
 
                <div className="personal-information-row-icon orange"> 
 
                  <FiUser /> 
 
                </div> 
 
 
                <div className="personal-information-row-content"> 
 
                  <span> 
                    Full Name 
                  </span> 
 
                  <strong> 
                    {fullName || "Not added yet"} 
                  </strong> 
 
                </div> 
 
 
                <FiChevronRight className="personal-row-arrow" /> 
 
              </div> 
 
 
              {/* PHONE NUMBER */} 
 
              <div className="personal-information-row"> 
 
                <div className="personal-information-row-icon red"> 
 
                  <FiPhone /> 
 
                </div> 
 
 
                <div className="personal-information-row-content"> 
 
                  <span> 
                    Phone Number 
                  </span> 
 
                  <strong> 
                    {phoneNumber || "Not added yet"} 
                  </strong> 
 
                </div> 
 
 
                <FiChevronRight className="personal-row-arrow" /> 
 
              </div> 
 
 
              {/* EMAIL */} 
 
              <div className="personal-information-row"> 
 
                <div className="personal-information-row-icon yellow"> 
 
                  <FiMail /> 
 
                </div> 
 
 
                <div className="personal-information-row-content"> 
 
                  <span> 
                    Email Address 
                  </span> 
 
                  <strong> 
                    {emailAddress || "Not added yet"} 
                  </strong> 
 
                </div> 
 
 
                <FiChevronRight className="personal-row-arrow" /> 
 
              </div> 
 
 
              {/* DATE OF BIRTH */} 
 
              <div className="personal-information-row"> 
 
                <div className="personal-information-row-icon orange-light"> 
 
                  <FiCalendar /> 
 
                </div> 
 
 
                <div className="personal-information-row-content"> 
 
                  <span> 
                    Date of Birth 
                  </span> 
 
                  <strong> 
                    {dateOfBirth || "Not added yet"} 
                  </strong> 
 
                </div> 
 
 
                <FiChevronRight className="personal-row-arrow" /> 
 
              </div> 
 
 
            </div> 
 
          )} 
 
        </section> 
 
 
        {/* =================================================== 
            WHY WE NEED THIS INFORMATION 
        =================================================== */} 
 
        <section className="why-information-section"> 
 
          <div className="why-information-heading"> 
 
            <span> 
              ACCOUNT INFORMATION 
            </span> 
 
            <h2> 
              Why we need this information 
            </h2> 
 
          </div> 
 
 
          <div className="why-information-list"> 
 
 
            <div className="why-information-item"> 
 
              <div className="why-information-check"> 
 
                <FiCheck /> 
 
              </div> 
 
              <p> 
                To provide a better and personalised MealMitra experience 
              </p> 
 
            </div> 
 
 
            <div className="why-information-item"> 
 
              <div className="why-information-check"> 
 
                <FiCheck /> 
 
              </div> 
 
              <p> 
                To keep your account secure and prevent unauthorized access 
              </p> 
 
            </div> 
 
 
            <div className="why-information-item"> 
 
              <div className="why-information-check"> 
 
                <FiCheck /> 
 
              </div> 
 
              <p> 
                To ensure smooth order updates and delivery communication 
              </p> 
 
            </div> 
 
 
          </div> 
 
        </section> 
 
 
        {/* =================================================== 
            PRIVACY & SECURITY 
        =================================================== */} 
 
        <button 
          type="button" 
          className="personal-privacy-card" 
          onClick={onPrivacy} 
        > 
 
          <div className="personal-privacy-icon"> 
 
            <FiShield /> 
 
          </div> 
 
 
          <div className="personal-privacy-content"> 
 
            <h3> 
              Privacy & Security 
            </h3> 
 
            <p> 
              Your personal information is protected 
              and used only to provide MealMitra services. 
            </p> 
 
          </div> 
 
 
          <FiChevronRight className="personal-privacy-arrow" /> 
 
        </button> 
 
 
      </main> 
 
    </div> 
 
  ); 
 
} 
 
 
export default PersonalInformation;