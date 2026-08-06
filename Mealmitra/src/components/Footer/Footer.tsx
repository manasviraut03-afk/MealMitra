import "./Footer.tsx";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>🍽️ MealMitra</h2>
          <p>Your Favourite Food Delivery Partner.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: mealmitra@gmail.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Nagpur, Maharashtra</p>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 MealMitra. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;