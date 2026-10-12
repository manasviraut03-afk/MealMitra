import { useState } from "react"; 
import { 
  FiUser, 
  FiPackage, 
  FiHeart, 
  FiMapPin, 
  FiTag, 
  FiHelpCircle, 
  FiSettings, 
  FiLogOut, 
  FiX, 
  FiEdit3, 
  FiChevronRight, 
  FiMail, 
  FiPhone, 
  FiShield, 
} from "react-icons/fi"; 
 
import "./Profile.css"; 
 
type User = { 
  name: string; 
  email: string; 
  phone: string; 
  password: string; 
}; 
 
type ProfileProps = { 
  onClose: () => void; 
  onLogout: () => void; 
  onMyOrders: () => void; 
  onSavedAddresses: () => void; 
  onOffersCoupons: () => void; 
  onHelpCenter: () => void;
  onSettings: () => void;
}; 
 
function Profile({ 
  onClose, 
  onLogout, 
  onMyOrders, 
  onSavedAddresses, 
  onOffersCoupons, 
  onHelpCenter,
  onSettings,
}: ProfileProps) { 
  const [user, setUser] = useState<User | null>(() => { 
    const savedUser = localStorage.getItem( 
      "mealmitraCurrentUser" 
    ); 
 
    if (!savedUser) { 
      return null; 
    } 
 
    try { 
      return JSON.parse(savedUser); 
    } catch { 
      return null; 
    } 
  }); 
  const [isEditing, setIsEditing] = useState(false); 
 
  const [name, setName] = useState( 
    user?.name || "" 
  ); 
 
  const [phone, setPhone] = useState( 
    user?.phone || "" 
  ); 
 
  /* ========================= 
     SAVE PROFILE 
  ========================= */ 
 
  const handleSave = () => { 
    if (!user) return; 
 
    const updatedUser: User = { 
      ...user, 
      name: name.trim(), 
      phone: phone.trim(), 
    }; 
 
    setUser(updatedUser); 
 
    /* Current user */ 
 
    localStorage.setItem( 
      "mealmitraCurrentUser", 
      JSON.stringify(updatedUser) 
    ); 
 
    /* Users list */ 
 
    const savedUsers: User[] = JSON.parse( 
      localStorage.getItem("mealmitraUsers") || "[]" 
    ); 
 
    const updatedUsers = savedUsers.map( 
      (savedUser: User) => 
        savedUser.email === updatedUser.email 
          ? updatedUser 
          : savedUser 
    ); 
 
    localStorage.setItem( 
      "mealmitraUsers", 
      JSON.stringify(updatedUsers) 
    ); 
 
    /* Navbar username */ 
 
    localStorage.setItem( 
      "mealmitraLoggedInUser", 
      updatedUser.name 
    ); 
 
    setIsEditing(false); 
  }; 
 
  /* ========================= 
     CANCEL EDIT 
  ========================= */ 
 
  const handleCancelEdit = () => { 
    if (!user) return; 
 
    setName(user.name); 
    setPhone(user.phone); 
 
    setIsEditing(false); 
  }; 
 
  /* ========================= 
     NO USER 
  ========================= */ 
 
  if (!user) { 
    return ( 
      <div className="profile-overlay"> 
        <div className="profile-empty"> 
          <h2>No user found</h2> 
 
          <button 
            type="button" 
            onClick={onClose} 
          > 
            Go Back 
          </button> 
        </div> 
      </div> 
    ); 
  } 
 
  /* ========================= 
     PROFILE 
  ========================= */ 
 
  return ( 
    <div className="profile-overlay"> 
 
      <div className="profile-dashboard"> 
 
        {/* ========================= 
            TOP BAR 
        ========================= */} 
 
        <div className="profile-topbar"> 
 
          <div className="profile-brand"> 
            <span>Meal</span>Mitra 
          </div> 
 
          <button 
            type="button" 
            className="profile-close-btn" 
            onClick={onClose} 
            aria-label="Close profile" 
          > 
            <FiX /> 
          </button> 
 
        </div> 
 
 
        {/* ========================= 
            DASHBOARD 
        ========================= */} 
 
        <div className="profile-dashboard-body"> 
 
          {/* ========================= 
              SIDEBAR 
          ========================= */} 
 
          <aside className="profile-sidebar"> 
 
            {/* USER MINI CARD */} 
 
            <div className="sidebar-user"> 
 
              <div className="sidebar-avatar"> 
                <FiUser /> 
              </div> 
 
              <div className="sidebar-user-info"> 
 
                <strong> 
                  {user.name} 
                </strong> 
 
                <span> 
                  {user.email} 
                </span> 
 
              </div> 
 
            </div> 
 
 
            {/* NAVIGATION */} 
 
            <div className="sidebar-section"> 
 
              <p className="sidebar-heading"> 
                ACCOUNT 
              </p> 
 
 
              <button 
                type="button" 
                className="sidebar-item active" 
              > 
                <FiUser /> 
 
                <span> 
                  Profile 
                </span> 
 
              </button> 
 
 
              <button 
                type="button" 
                className="sidebar-item" 
                onClick={onMyOrders} 
              > 
                <FiPackage /> 
 
                <span> 
                  My Orders 
                </span> 
 
                <FiChevronRight className="sidebar-arrow" /> 
              </button> 
 
 
              <button 
                type="button" 
                className="sidebar-item" 
                onClick={onOffersCoupons} 
              > 
                <FiHeart /> 
 
                <span> 
                  Favorites 
                </span> 
 
                <FiChevronRight className="sidebar-arrow" /> 
              </button> 
 
 
              {/* SAVED ADDRESSES */} 
 
              <button 
                type="button" 
                className="sidebar-item" 
                onClick={onSavedAddresses} 
              > 
                <FiMapPin /> 
 
                <span> 
                  Saved Addresses 
                </span> 
 
                <FiChevronRight className="sidebar-arrow" /> 
              </button> 
 
 
              <button 
                type="button" 
                className="sidebar-item" 
                onClick={onOffersCoupons} 
              > 
                <FiTag /> 
 
                <span> 
                  Offers & Coupons 
                </span> 
 
                <FiChevronRight className="sidebar-arrow" /> 
              </button> 
 
            </div> 
 
 
            {/* SUPPORT */} 
 
            <div className="sidebar-section"> 
 
              <p className="sidebar-heading"> 
                SUPPORT 
              </p> 
 
 
              <button 
                type="button" 
                className="sidebar-item" 
                onClick={onHelpCenter}
              > 
                <FiHelpCircle /> 
 
                <span> 
                  Help Center 
                </span> 
 
                <FiChevronRight className="sidebar-arrow" /> 
              </button> 
 
 
              <button 
                type="button" 
                className="sidebar-item" 
                onClick={onSettings}
              > 
                <FiSettings /> 
 
                <span> 
                  Settings 
                </span> 
 
                <FiChevronRight className="sidebar-arrow" /> 
              </button> 
 
            </div> 
 
 
            {/* LOGOUT */} 
 
            <button 
              type="button" 
              className="sidebar-logout" 
              onClick={onLogout} 
            > 
              <FiLogOut /> 
 
              <span> 
                Logout 
              </span> 
            </button> 
 
          </aside> 
 
 
          {/* ========================= 
              MAIN CONTENT 
          ========================= */} 
 
          <main className="profile-main"> 
 
            {/* PAGE TITLE */} 
 
            <div className="profile-page-heading"> 
 
              <div> 
 
                <h1> 
                  My Profile 
                </h1> 
 
                <p> 
                  Manage your personal information and account preferences. 
                </p> 
 
              </div> 
 
            </div> 
 
 
            {/* ========================= 
                PROFILE OVERVIEW 
            ========================= */} 
 
            <section className="profile-overview-card"> 
 
              <div className="profile-overview-left"> 
 
                <div className="large-profile-avatar"> 
                  <FiUser /> 
                </div> 
 
                <div> 
 
                  <span className="profile-welcome"> 
                    Welcome back 
                  </span> 
 
                  <h2> 
                    {user.name} 
                  </h2> 
 
                  <p> 
                    {user.email} 
                  </p> 
 
                </div> 
 
              </div> 
 
 
              {!isEditing && ( 
 
                <button 
                  type="button" 
                  className="edit-profile-btn" 
                  onClick={() => 
                    setIsEditing(true) 
                  } 
                > 
                  <FiEdit3 /> 
 
                  Edit Profile 
                </button> 
 
              )} 
 
            </section> 
 
 
            {/* ========================= 
                PERSONAL INFORMATION 
            ========================= */} 
 
            <section className="profile-section-card"> 
 
              <div className="section-card-header"> 
 
                <div> 
 
                  <h2> 
                    Personal Information 
                  </h2> 
 
                  <p> 
                    Your account details and contact information. 
                  </p> 
 
                </div> 
 
                <FiShield /> 
 
              </div> 
 
 
              <div className="profile-details-grid"> 
 
                {/* NAME */} 
 
                <div className="profile-detail"> 
 
                  <div className="detail-icon"> 
                    <FiUser /> 
                  </div> 
 
                  <div className="detail-content"> 
 
                    <span> 
                      Full Name 
                    </span> 
 
                    {isEditing ? ( 
 
                      <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => 
                          setName(e.target.value) 
                        } 
                        className="profile-input" 
                      /> 
 
                    ) : ( 
 
                      <strong> 
                        {user.name} 
                      </strong> 
 
                    )} 
 
                  </div> 
 
                </div> 
 
 
                {/* EMAIL */} 
 
                <div className="profile-detail"> 
 
                  <div className="detail-icon"> 
                    <FiMail /> 
                  </div> 
 
                  <div className="detail-content"> 
 
                    <span> 
                      Email Address 
                    </span> 
 
                    <strong> 
                      {user.email} 
                    </strong> 
 
                  </div> 
 
                </div> 
 
 
                {/* PHONE */} 
 
                <div className="profile-detail"> 
 
                  <div className="detail-icon"> 
                    <FiPhone /> 
                  </div> 
 
                  <div className="detail-content"> 
 
                    <span> 
                      Phone Number 
                    </span> 
 
                    {isEditing ? ( 
 
                      <input 
                        type="tel" 
                        value={phone} 
                        onChange={(e) => 
                          setPhone(e.target.value) 
                        } 
                        className="profile-input" 
                      /> 
 
                    ) : ( 
 
                      <strong> 
                        {user.phone || "Not added"} 
                      </strong> 
 
                    )} 
 
                  </div> 
 
                </div> 
 
              </div> 
 
 
              {/* EDIT ACTIONS */} 
 
              {isEditing && ( 
 
                <div className="profile-edit-actions"> 
 
                  <button 
                    type="button" 
                    className="cancel-edit-btn" 
                    onClick={handleCancelEdit} 
                  > 
                    Cancel 
                  </button> 
 
                  <button 
                    type="button" 
                    className="save-profile-btn" 
                    onClick={handleSave} 
                  > 
                    Save Changes 
                  </button> 
 
                </div> 
 
              )} 
 
            </section> 
 
 
            {/* ========================= 
                QUICK ACCESS 
            ========================= */} 
 
            <section className="profile-section-card"> 
 
              <div className="section-card-header"> 
 
                <div> 
 
                  <h2> 
                    Quick Access 
                  </h2> 
 
                  <p> 
                    Easily manage your MealMitra account. 
                  </p> 
 
                </div> 
 
              </div> 
 
 
              <div className="quick-access-grid"> 
 
                {/* ORDERS */} 
 
                <button 
                  type="button" 
                  className="quick-access-card" 
                  onClick={onMyOrders} 
                > 
 
                  <div className="quick-icon orange"> 
                    <FiPackage /> 
                  </div> 
 
                  <div> 
 
                    <strong> 
                      My Orders 
                    </strong> 
 
                    <span> 
                      View your previous orders 
                    </span> 
 
                  </div> 
 
                  <FiChevronRight /> 
 
                </button> 
 
 
                {/* FAVORITES */} 
 
                <button 
                  type="button" 
                  className="quick-access-card" 
                > 
 
                  <div className="quick-icon pink"> 
                    <FiHeart /> 
                  </div> 
 
                  <div> 
 
                    <strong> 
                      Favorites 
                    </strong> 
 
                    <span> 
                      Your favorite food items 
                    </span> 
 
                  </div> 
 
                  <FiChevronRight /> 
 
                </button> 
 
 
                {/* ADDRESSES */} 
 
                <button 
                  type="button" 
                  className="quick-access-card" 
                  onClick={onSavedAddresses} 
                > 
 
                  <div className="quick-icon blue"> 
                    <FiMapPin /> 
                  </div> 
 
                  <div> 
 
                    <strong> 
                      Saved Addresses 
                    </strong> 
 
                    <span> 
                      Manage delivery addresses 
                    </span> 
 
                  </div> 
 
                  <FiChevronRight /> 
 
                </button> 
 
 
                {/* OFFERS */} 
 
                <button 
                  type="button" 
                  className="quick-access-card" 
                  onClick={onOffersCoupons} 
                > 
 
                  <div className="quick-icon purple"> 
                    <FiTag /> 
                  </div> 
 
                  <div> 
 
                    <strong> 
                      Offers & Coupons 
                    </strong> 
 
                    <span> 
                      Check available offers 
                    </span> 
 
                  </div> 
 
                  <FiChevronRight /> 
 
                </button> 
 
              </div> 
 
            </section> 
 
 
            {/* ========================= 
                MOBILE LOGOUT 
            ========================= */} 
 
            <button 
              type="button" 
              className="mobile-logout" 
              onClick={onLogout} 
            > 
              <FiLogOut /> 
 
              Logout 
            </button> 
 
          </main> 
 
        </div> 
 
      </div> 
 
    </div> 
  ); 
} 
 
export default Profile; 