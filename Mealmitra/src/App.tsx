import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Menu from "./components/Menu/Menu";
import Restaurant from "./components/Restaurant/Restaurant";
import WhyMealmitra from "./components/WhyMealmitra/WhyMealmitra";
import Footer from "./components/Footer/Footer";

import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";

import MyOrders from "./components/MyOrders/MyOrders";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import TrackOrder from "./components/TrackOrder/TrackOrder";

import SavedAddresses from "./components/SavedAddresses/SavedAddresses";
import OffersCoupons from "./components/OffersCoupons/OffersCoupons";
import HelpCenter from "./components/HelpCenter/HelpCenter";
import Payments from "./components/Payments/Payments";
import Settings from "./components/Settings/Settings";
import Notifications from "./components/Notifications/Notifications";

import Privacy from "./components/Privacy/Privacy";
import PersonalInformation from "./components/PersonalInformation/PersonalInformation";
import LoginSecurity from "./components/LoginSecurity/LoginSecurity";

import AboutMealMitra from "./components/AboutMealMitra/AboutMealMitra";

import RestaurantDetails from "./components/RestaurantDetails/RestaurantDetails";

import Search from "./components/Search/Search";
import LocationSearch from "./components/LocationSearch/LocationSearch";

import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmation";

import type {
  CartItem,
  RestaurantData,
} from "./types";
import type { Order } from "./components/MyOrders/MyOrders";


function App() {

  /* =========================================
     AUTH
  ========================================= */

  const [showAuth, setShowAuth] = useState(false);

  const [loggedInUser, setLoggedInUser] =
    useState<string | null>(
      localStorage.getItem("mealmitraLoggedInUser")
    );


  /* =========================================
     PROFILE / SETTINGS
  ========================================= */

  const [showProfile, setShowProfile] = useState(false);

  const [showSavedAddresses, setShowSavedAddresses] =
    useState(false);

  const [showOffersCoupons, setShowOffersCoupons] =
    useState(false);

  const [showHelpCenter, setShowHelpCenter] =
    useState(false);

  const [showPayments, setShowPayments] =
    useState(false);

  const [showSettings, setShowSettings] =
    useState(false);

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showPrivacy, setShowPrivacy] =
    useState(false);

  const [showPersonalInformation, setShowPersonalInformation] =
    useState(false);

  const [showLoginSecurity, setShowLoginSecurity] =
    useState(false);

  const [showAboutMealMitra, setShowAboutMealMitra] =
    useState(false);


  /* =========================================
     THEME
  ========================================= */

  const [darkMode, setDarkMode] = useState(false);

  const [vegMode, setVegMode] = useState(false);


  /* =========================================
     ORDERS
  ========================================= */

  const [showMyOrders, setShowMyOrders] =
    useState(false);

  const [showOrderDetails, setShowOrderDetails] =
    useState(false);

  const [selectedOrder, setSelectedOrder] =
    useState<Order | null>(null);

  const [showTrackOrder, setShowTrackOrder] =
    useState(false);

  const [selectedTrackOrder, setSelectedTrackOrder] =
    useState<Order | null>(null);


  /* =========================================
     RESTAURANT
  ========================================= */

  const [showRestaurantDetails, setShowRestaurantDetails] =
    useState(false);

  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantData | null>(null);


  /* =========================================
     SEARCH
  ========================================= */

  const [showSearch, setShowSearch] =
    useState(false);

  const [showLocationSearch, setShowLocationSearch] =
    useState(false);

  const [selectedLocation, setSelectedLocation] =
    useState("");


  /* =========================================
     PREVIOUS PAGE
  ========================================= */

  const [previousPage, setPreviousPage] =
    useState<
      "home" | "profile" | "settings" | null
    >(null);


  /* =========================================
     CART
  ========================================= */

  const [cart, setCart] =
    useState<CartItem[]>([]);

  const [showCart, setShowCart] =
    useState(false);

  const [showCheckout, setShowCheckout] =
    useState(false);


  /* =========================================
     ORDER CONFIRMATION
  ========================================= */

  const [showOrderConfirmation, setShowOrderConfirmation] =
    useState(false);

  const [placedOrderItems, setPlacedOrderItems] =
    useState<CartItem[]>([]);

  const [placedOrderTotal, setPlacedOrderTotal] =
    useState(0);

  const [placedOrderId, setPlacedOrderId] =
    useState("");

  const [placedOrder, setPlacedOrder] =
    useState<Order | null>(null);


  /* =========================================
     PAGE WRAPPER
     
     Navbar = 80px fixed
     This prevents pages from going underneath it.
  ========================================= */

  const pageStyle = {
    paddingTop: "80px",
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box" as const,
  };


  /* =========================================
     LOGIN
  ========================================= */

  const handleLogin = (name: string) => {

    setLoggedInUser(name);

    localStorage.setItem(
      "mealmitraLoggedInUser",
      name
    );

  };


  /* =========================================
     AUTH
  ========================================= */

  const openAuth = () => {
    setShowAuth(true);
  };

  const closeAuth = () => {
    setShowAuth(false);
  };


  /* =========================================
     HOME
  ========================================= */

  const openHome = () => {

    setShowAuth(false);

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    setPreviousPage(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* =========================================
     SEARCH
  ========================================= */

  const openSearch = () => {

    setShowSearch(true);

    setShowLocationSearch(false);

    setShowProfile(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeSearch = () => {
    setShowSearch(false);
  };


  /* =========================================
     LOCATION SEARCH
  ========================================= */

  const openLocationSearch = () => {

    setShowLocationSearch(true);

    setShowSearch(false);

    setShowProfile(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeLocationSearch = () => {
    setShowLocationSearch(false);
  };


  const handleLocationSelect = (
    location: string
  ) => {

    setSelectedLocation(location);

    setShowLocationSearch(false);

  };


  /* =========================================
     PROFILE
  ========================================= */

  const openProfile = () => {

    setShowProfile(true);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeProfile = () => {
    setShowProfile(false);
  };


  /* =========================================
     RESTAURANT DETAILS
  ========================================= */

  const openRestaurantDetails = (
    restaurant: RestaurantData
  ) => {

    setSelectedRestaurant(restaurant);

    setShowRestaurantDetails(true);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowProfile(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeRestaurantDetails = () => {

    setShowRestaurantDetails(false);

    setSelectedRestaurant(null);

  };


  /* =========================================
     SAVED ADDRESSES
  ========================================= */

  const openSavedAddresses = () => {

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(true);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeSavedAddresses = () => {

    setShowSavedAddresses(false);

    setShowProfile(true);

  };


  /* =========================================
     OFFERS
  ========================================= */

  const openOffersCoupons = () => {

    if (showProfile) {
      setPreviousPage("profile");
    } else {
      setPreviousPage("home");
    }

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(true);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeOffersCoupons = () => {

    setShowOffersCoupons(false);

    if (previousPage === "profile") {

      setShowProfile(true);

    } else {

      openHome();

    }

    setPreviousPage(null);

  };


  /* =========================================
     HELP CENTER
  ========================================= */

  const openHelpCenter = () => {

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(true);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeHelpCenter = () => {

    setShowHelpCenter(false);

    setShowProfile(true);

  };


  /* =========================================
     PAYMENTS
  ========================================= */

  const openPayments = () => {

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(true);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closePayments = () => {

    setShowPayments(false);

    setShowHelpCenter(true);

  };


  /* =========================================
     SETTINGS
  ========================================= */

  const openSettings = () => {

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(true);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeSettings = () => {

    setShowSettings(false);

    setShowProfile(true);

  };


  /* =========================================
     THEME
  ========================================= */

  const changeTheme = (
    value: boolean
  ) => {

    setDarkMode(value);

  };


  const handleVegMode = () => {

    setVegMode(
      (previous) => !previous
    );

  };


  /* =========================================
     NOTIFICATIONS
  ========================================= */

  const openNotifications = () => {

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(true);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeNotifications = () => {

    setShowNotifications(false);

    setShowSettings(true);

  };


  /* =========================================
     PRIVACY
  ========================================= */

  const openPrivacy = () => {

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(true);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closePrivacy = () => {

    setShowPrivacy(false);

    setShowSettings(true);

  };


  /* =========================================
     PERSONAL INFORMATION
  ========================================= */

  const openPersonalInformation = () => {

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(true);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closePersonalInformation = () => {

    setShowPersonalInformation(false);

    setShowPrivacy(true);

  };


  /* =========================================
     LOGIN SECURITY
  ========================================= */

  const openLoginSecurity = () => {

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(true);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeLoginSecurity = () => {

    setShowLoginSecurity(false);

    setShowPrivacy(true);

  };


  /* =========================================
     EMAIL
  ========================================= */

  const openEmailAddress = () => {

    const currentEmail =
      localStorage.getItem(
        "mealmitraEmailAddress"
      ) || "";

    const newEmail =
      window.prompt(
        "Enter your email address:",
        currentEmail
      );

    if (
      newEmail !== null &&
      newEmail.trim() !== ""
    ) {

      localStorage.setItem(
        "mealmitraEmailAddress",
        newEmail.trim()
      );

      alert(
        "Email address updated successfully."
      );

    }

  };


  /* =========================================
     PHONE
  ========================================= */

  const openPhoneNumber = () => {

    const currentPhone =
      localStorage.getItem(
        "mealmitraPhoneNumber"
      ) || "";

    const newPhone =
      window.prompt(
        "Enter your phone number:",
        currentPhone
      );

    if (
      newPhone !== null &&
      newPhone.trim() !== ""
    ) {

      localStorage.setItem(
        "mealmitraPhoneNumber",
        newPhone.trim()
      );

      alert(
        "Phone number updated successfully."
      );

    }

  };


  /* =========================================
     ABOUT MEALMITRA
  ========================================= */

  const openAboutMealMitra = () => {

    if (showSettings) {

      setPreviousPage("settings");

    } else {

      setPreviousPage("home");

    }

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(true);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeAboutMealMitra = () => {

    setShowAboutMealMitra(false);

    if (
      previousPage === "settings"
    ) {

      setShowSettings(true);

    } else {

      openHome();

    }

    setPreviousPage(null);

  };


  /* =========================================
     TERMS
  ========================================= */

  const openTermsConditions = () => {

    alert(
      "MealMitra Terms & Conditions\n\n" +
      "Please use MealMitra responsibly and provide accurate account information."
    );

  };


  /* =========================================
     MY ORDERS
  ========================================= */

  const openMyOrders = () => {

    setShowAuth(false);

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(true);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeMyOrders = () => {

    setShowMyOrders(false);

    setShowProfile(true);

  };


  /* =========================================
     ORDER DETAILS
  ========================================= */

  const openOrderDetails = (
    order: Order
  ) => {

    setSelectedOrder(order);

    setShowAuth(false);

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setShowOrderDetails(true);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* =========================================
     CLOSE ORDER DETAILS
     
     X button goes back to My Orders.
  ========================================= */

  const closeOrderDetails = () => {

    setShowOrderDetails(false);

    setSelectedOrder(null);

    setShowMyOrders(true);

    setShowAuth(false);

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* =========================================
     TRACK ORDER
  ========================================= */

  const openTrackOrders = (
    order: Order
  ) => {

    setSelectedTrackOrder(order);

    setShowAuth(false);

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setShowTrackOrder(true);

    setSelectedOrder(null);

    setSelectedRestaurant(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  const closeTrackOrders = () => {

    openHome();

  };


  /* =========================================
     CART
  ========================================= */

  const handleAddToCart = (
    item: CartItem
  ) => {

    setCart((previousCart) => {

      const existingItem =
        previousCart.find(
          (cartItem) =>
            cartItem.id === item.id
        );

      if (existingItem) {

        return previousCart.map(
          (cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  quantity:
                    cartItem.quantity + 1,
                }
              : cartItem
        );

      }

      return [
        ...previousCart,
        item,
      ];

    });

    setShowCart(true);

  };


  const increaseQuantity = (
    id: number
  ) => {

    setCart((previousCart) =>
      previousCart.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
      )
    );

  };


  const decreaseQuantity = (
    id: number
  ) => {

    setCart((previousCart) =>
      previousCart
        .map(
          (item) =>
            item.id === id
              ? {
                  ...item,
                  quantity:
                    item.quantity - 1,
                }
              : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );

  };


  const removeFromCart = (
    id: number
  ) => {

    setCart((previousCart) =>
      previousCart.filter(
        (item) =>
          item.id !== id
      )
    );

  };


  const closeCart = () => {

    setShowCart(false);

  };


  /* =========================================
     CHECKOUT
  ========================================= */

  const handleCheckout = () => {

    if (cart.length === 0) {
      return;
    }

    setShowCart(false);

    setShowCheckout(true);

  };


  const closeCheckout = () => {

    setShowCheckout(false);

    setShowCart(true);

  };


  /* =========================================
     PLACE ORDER
  ========================================= */

  const handlePlaceOrder = () => {

    if (cart.length === 0) {
      return;
    }


    const subtotal =
      cart.reduce(
        (total, item) =>
          total +
          item.price *
            item.quantity,
        0
      );


    const deliveryFee =
      subtotal > 499
        ? 0
        : 40;


    const totalAmount =
      subtotal +
      deliveryFee;


    const newOrderId =
      "MM" +
      Math.floor(
        100000 +
        Math.random() *
          900000
      );


    const newOrder: Order = {

      id: newOrderId,

      items: cart.map(
        (item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity:
            item.quantity,
          image: item.image,
        })
      ),

      subtotal: subtotal,

      delivery:
        deliveryFee,

      total:
        totalAmount,

      date:
        new Date().toLocaleDateString(
          "en-IN"
        ),

      status:
        "Order Placed",

    };


    let existingOrders: Order[] = [];


    try {

      existingOrders =
        JSON.parse(
          localStorage.getItem(
            "mealmitraOrders"
          ) || "[]"
        );

    } catch (error) {

      console.error(
        "Error loading existing orders:",
        error
      );

      existingOrders = [];

    }


    localStorage.setItem(
      "mealmitraOrders",
      JSON.stringify([
        newOrder,
        ...existingOrders,
      ])
    );


    setPlacedOrder(
      newOrder
    );


    setPlacedOrderItems(
      cart.map(
        (item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity:
            item.quantity,
          image: item.image,
        })
      )
    );


    setPlacedOrderTotal(
      totalAmount
    );


    setPlacedOrderId(
      newOrderId
    );


    setCart([]);


    setShowCheckout(false);

    setShowAuth(false);

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    setShowOrderConfirmation(
      true
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* =========================================
     TRACK AFTER CONFIRMATION
  ========================================= */

  const handleTrackOrderAfterConfirmation =
    () => {

      if (
        placedOrder === null
      ) {
        return;
      }


      setSelectedTrackOrder(
        placedOrder
      );

      setShowOrderConfirmation(
        false
      );

      setShowAuth(false);

      setShowProfile(false);

      setShowSearch(false);

      setShowLocationSearch(false);

      setShowSavedAddresses(false);

      setShowOffersCoupons(false);

      setShowHelpCenter(false);

      setShowPayments(false);

      setShowSettings(false);

      setShowNotifications(false);

      setShowPrivacy(false);

      setShowPersonalInformation(false);

      setShowLoginSecurity(false);

      setShowAboutMealMitra(false);

      setShowMyOrders(false);

      setShowOrderDetails(false);

      setShowRestaurantDetails(false);

      setShowCart(false);

      setShowCheckout(false);

      setShowTrackOrder(true);

      setSelectedOrder(null);

      setSelectedRestaurant(null);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    };


  /* =========================================
     CONTINUE SHOPPING
  ========================================= */

  const handleContinueShopping = () => {

    setCart([]);

    setPlacedOrderItems([]);

    setPlacedOrderTotal(0);

    setPlacedOrderId("");

    setPlacedOrder(null);

    setShowOrderConfirmation(
      false
    );

    openHome();

  };


  /* =========================================
     VIEW ORDERS AFTER CONFIRMATION
  ========================================= */

  const handleViewOrdersAfterConfirmation =
    () => {

      setCart([]);

      setShowOrderConfirmation(
        false
      );

      openMyOrders();

    };


  /* =========================================
     LOGOUT
  ========================================= */

  const handleLogout = () => {

    setLoggedInUser(null);

    localStorage.removeItem(
      "mealmitraLoggedInUser"
    );

    localStorage.removeItem(
      "mealmitraCurrentUser"
    );

    setShowAuth(false);

    setShowProfile(false);

    setShowSearch(false);

    setShowLocationSearch(false);

    setShowSavedAddresses(false);

    setShowOffersCoupons(false);

    setShowHelpCenter(false);

    setShowPayments(false);

    setShowSettings(false);

    setShowNotifications(false);

    setShowPrivacy(false);

    setShowPersonalInformation(false);

    setShowLoginSecurity(false);

    setShowAboutMealMitra(false);

    setShowMyOrders(false);

    setShowOrderDetails(false);

    setShowTrackOrder(false);

    setShowRestaurantDetails(false);

    setShowCart(false);

    setShowCheckout(false);

    setShowOrderConfirmation(false);

    setSelectedOrder(null);

    setSelectedTrackOrder(null);

    setSelectedRestaurant(null);

    setPlacedOrder(null);

    setPlacedOrderItems([]);

    setPlacedOrderTotal(0);

    setPlacedOrderId("");

    setPreviousPage(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };


  /* =========================================
     NAVBAR
  ========================================= */

  const navbar = (
    <Navbar
      onSignIn={openAuth}
      loggedInUser={loggedInUser}
      onProfile={openProfile}
      onHome={openHome}
      onOffers={openOffersCoupons}
      onAbout={openAboutMealMitra}
      onVegMode={handleVegMode}
      vegMode={vegMode}
    />
  );


  /* =========================================
     CHECKOUT PAGE
  ========================================= */

  if (showCheckout) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <Checkout
            cartItems={cart}
            onBack={closeCheckout}
            onPlaceOrder={
              handlePlaceOrder
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     ORDER CONFIRMATION
  ========================================= */

  if (showOrderConfirmation) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <OrderConfirmation
            cartItems={
              placedOrderItems
            }
            totalAmount={
              placedOrderTotal
            }
            orderId={
              placedOrderId
            }
            onContinueShopping={
              handleContinueShopping
            }
            onViewOrders={
              handleViewOrdersAfterConfirmation
            }
            onTrackOrder={
              handleTrackOrderAfterConfirmation
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     LOCATION SEARCH
  ========================================= */

  if (showLocationSearch) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <LocationSearch
            onBack={
              closeLocationSearch
            }
            onLocationSelect={
              handleLocationSelect
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     SEARCH
  ========================================= */

  if (showSearch) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <Search
            onBack={closeSearch}
            onRestaurantClick={
              openRestaurantDetails
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     RESTAURANT DETAILS
  ========================================= */

  if (
    showRestaurantDetails &&
    selectedRestaurant !== null
  ) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <RestaurantDetails
            restaurant={
              selectedRestaurant
            }
            onBack={
              closeRestaurantDetails
            }
            onAddToCart={
              handleAddToCart
            }
          />


          {showCart && (

            <Cart
              cartItems={cart}
              onClose={closeCart}
              onIncrease={
                increaseQuantity
              }
              onDecrease={
                decreaseQuantity
              }
              onRemove={
                removeFromCart
              }
              onCheckout={
                handleCheckout
              }
            />

          )}

        </div>
      </>
    );

  }


  /* =========================================
     SAVED ADDRESSES
  ========================================= */

  if (showSavedAddresses) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <SavedAddresses
            onBack={
              closeSavedAddresses
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     OFFERS
  ========================================= */

  if (showOffersCoupons) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <OffersCoupons
            onBack={
              closeOffersCoupons
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     HELP CENTER
  ========================================= */

  if (showHelpCenter) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <HelpCenter
            onBack={
              closeHelpCenter
            }
            onMyOrders={
              openMyOrders
            }
            onPayments={
              openPayments
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     PAYMENTS
  ========================================= */

  if (showPayments) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <Payments
            onBack={
              closePayments
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     NOTIFICATIONS
  ========================================= */

  if (showNotifications) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <Notifications
            onBack={
              closeNotifications
            }
            darkMode={
              darkMode
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     PRIVACY
  ========================================= */

  if (showPrivacy) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <Privacy
            onBack={
              closePrivacy
            }
            darkMode={
              darkMode
            }
            onPersonalInformation={
              openPersonalInformation
            }
            onLoginSecurity={
              openLoginSecurity
            }
            onNotifications={
              openNotifications
            }
            onPrivacyPreferences={() => {
              console.log(
                "Privacy Preferences clicked"
              );
            }}
            onPrivacyPolicy={() => {
              console.log(
                "Privacy Policy clicked"
              );
            }}
            onTermsConditions={
              openTermsConditions
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     PERSONAL INFORMATION
  ========================================= */

  if (
    showPersonalInformation
  ) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <PersonalInformation
            onBack={
              closePersonalInformation
            }
            darkMode={
              darkMode
            }
            onPrivacy={
              openPrivacy
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     LOGIN SECURITY
  ========================================= */

  if (showLoginSecurity) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <LoginSecurity
            onBack={
              closeLoginSecurity
            }
            darkMode={
              darkMode
            }
            onEmailAddress={
              openEmailAddress
            }
            onPhoneNumber={
              openPhoneNumber
            }
            onLogout={
              handleLogout
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     ABOUT MEALMITRA
  ========================================= */

  if (showAboutMealMitra) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <AboutMealMitra
            onBack={
              closeAboutMealMitra
            }
            darkMode={
              darkMode
            }
            onPrivacyPolicy={
              openPrivacy
            }
            onTermsConditions={
              openTermsConditions
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     SETTINGS
  ========================================= */

  if (showSettings) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <Settings
            onBack={
              closeSettings
            }
            darkMode={
              darkMode
            }
            onThemeChange={
              changeTheme
            }
            onNotifications={
              openNotifications
            }
            onPrivacy={
              openPrivacy
            }
            onAboutMealMitra={
              openAboutMealMitra
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     TRACK ORDER
  ========================================= */

  if (
    showTrackOrder &&
    selectedTrackOrder !== null
  ) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <TrackOrder
            order={
              selectedTrackOrder
            }
            onBack={
              closeTrackOrders
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     ORDER DETAILS
     
     IMPORTANT:
     This is below the fixed navbar
     because of pageStyle.
  ========================================= */

  if (
    showOrderDetails &&
    selectedOrder !== null
  ) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <OrderDetails
            order={
              selectedOrder
            }
            onBack={
              closeOrderDetails
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     MY ORDERS
  ========================================= */

  if (showMyOrders) {

    return (
      <>
        {navbar}

        <div
          className="page-with-navbar"
          style={pageStyle}
        >

          <MyOrders
            onBack={
              closeMyOrders
            }
            onViewDetails={
              openOrderDetails
            }
            onTrackOrders={
              openTrackOrders
            }
          />

        </div>
      </>
    );

  }


  /* =========================================
     HOME PAGE
  ========================================= */

  return (
    <div
      className={
        darkMode
          ? "app dark-mode"
          : "app"
      }
    >

      {navbar}


      <div className="home-content">

        <Header
          onSearch={
            openSearch
          }
          onLocationClick={
            openLocationSearch
          }
          selectedLocation={
            selectedLocation
          }
        />


        <Services />


        <Menu />


        <Restaurant
          onRestaurantClick={
            openRestaurantDetails
          }
          vegMode={
            vegMode
          }
        />


        <WhyMealmitra />


        <Footer />

      </div>


      {/* AUTH */}

      {showAuth && (

        <Auth
          onClose={
            closeAuth
          }
          onLogin={
            handleLogin
          }
        />

      )}


      {/* PROFILE */}

      {showProfile &&
        loggedInUser && (

          <Profile
            onClose={
              closeProfile
            }
            onLogout={
              handleLogout
            }
            onMyOrders={
              openMyOrders
            }
            onSavedAddresses={
              openSavedAddresses
            }
            onOffersCoupons={
              openOffersCoupons
            }
            onHelpCenter={
              openHelpCenter
            }
            onSettings={
              openSettings
            }
          />

        )}


      {/* CART */}

      {showCart && (

        <Cart
          cartItems={
            cart
          }
          onClose={
            closeCart
          }
          onIncrease={
            increaseQuantity
          }
          onDecrease={
            decreaseQuantity
          }
          onRemove={
            removeFromCart
          }
          onCheckout={
            handleCheckout
          }
        />

      )}

    </div>
  );
}


export default App;