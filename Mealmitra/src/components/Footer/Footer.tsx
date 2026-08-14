import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>MealMitra</h2>
          <p>
            Your favourite food, delivered fresh and fast.
            Discover delicious meals and restaurants around you.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Offers</a>
          <a href="#">About Us</a>
          <a href="#">Restaurants</a>
          <a href="#">Contact Us</a>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#">Veg Mode</a>
          <a href="#">Popular Food</a>
          <a href="#">Best Restaurants</a>
          <a href="#">Desserts</a>
          <a href="#">Breakfast</a>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3>Support</h3>
          <a href="#">Help & Support</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 MealMitra. All rights reserved.</p>

        <div className="social-links">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;