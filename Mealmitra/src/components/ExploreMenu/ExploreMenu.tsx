import "./ExploreMenu.css";

function ExploreMenu() {
  const menuList = [
    "Pizza",
    "Burger",
    "Pasta",
    "Biryani",
    "Sandwich",
    "Desserts",
    "Drinks",
    "Salads"
  ];

  return (
    <section className="explore-menu">
      <h2>Explore Our Menu</h2>

      <p>
        Choose from a variety of delicious dishes made with fresh ingredients.
      </p>

      <div className="menu-list">
        {menuList.map((item) => (
          <div className="menu-card" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExploreMenu;