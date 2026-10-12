import { useState } from "react";
import {
  FiArrowLeft,
  FiSearch,
  FiMapPin,
  FiClock,
  FiX,
} from "react-icons/fi";

import "./Search.css";


/* =========================================================
   SEARCH ITEM TYPE
========================================================= */

interface SearchItem {
  id: number;
  name: string;
  category: string;
  restaurant: string;
  image: string;
  price: number;
}


/* =========================================================
   SEARCH PROPS
========================================================= */

interface SearchProps {
  onBack: () => void;
  onRestaurantClick: (restaurant: any) => void;
}


/* =========================================================
   SEARCH DATA
========================================================= */

const searchData: SearchItem[] = [

  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    restaurant: "Pizza Palace",
    image: "/src/assets/pizza.jpg",
    price: 199,
  },

  {
    id: 2,
    name: "Cheese Pizza",
    category: "Pizza",
    restaurant: "Pizza Palace",
    image: "/src/assets/pizza.jpg",
    price: 249,
  },

  {
    id: 3,
    name: "Cheese Burger",
    category: "Burger",
    restaurant: "Burger House",
    image: "/src/assets/burger.jpg",
    price: 149,
  },

  {
    id: 4,
    name: "Veg Burger",
    category: "Burger",
    restaurant: "Burger House",
    image: "/src/assets/burger.jpg",
    price: 129,
  },

  {
    id: 5,
    name: "White Sauce Pasta",
    category: "Pasta",
    restaurant: "Pasta Corner",
    image: "/src/assets/pasta.jpg",
    price: 179,
  },

  {
    id: 6,
    name: "Red Sauce Pasta",
    category: "Pasta",
    restaurant: "Pasta Corner",
    image: "/src/assets/pasta.jpg",
    price: 169,
  },

  {
    id: 7,
    name: "Chicken Biryani",
    category: "Biryani",
    restaurant: "Biryani Hub",
    image: "/src/assets/biryani.jpg",
    price: 249,
  },

];


/* =========================================================
   POPULAR CUISINES
========================================================= */

const popularCuisines = [

  {
    name: "Pizza",
    icon: "🍕",
  },

  {
    name: "Burger",
    icon: "🍔",
  },

  {
    name: "Biryani",
    icon: "🍛",
  },

  {
    name: "Pasta",
    icon: "🍝",
  },

  {
    name: "Chinese",
    icon: "🥡",
  },

  {
    name: "Desserts",
    icon: "🍰",
  },

];


/* =========================================================
   SEARCH COMPONENT
========================================================= */

const Search = ({
  onBack,
  onRestaurantClick,
}: SearchProps) => {

  const [searchText, setSearchText] = useState("");

  const [recentSearches, setRecentSearches] =
    useState<string[]>([
      "Pizza",
      "Burger",
      "Biryani",
    ]);


  /* =========================================================
     FILTER RESULTS
  ========================================================= */

  const filteredResults = searchData.filter((item) => {

    const search = searchText
      .toLowerCase()
      .trim();

    if (!search) {
      return false;
    }

    return (
      item.name
        .toLowerCase()
        .includes(search) ||

      item.category
        .toLowerCase()
        .includes(search) ||

      item.restaurant
        .toLowerCase()
        .includes(search)
    );

  });


  /* =========================================================
     SEARCH FUNCTION
  ========================================================= */

  const handleSearch = (value: string) => {

    setSearchText(value);

  };


  /* =========================================================
     SELECT SEARCH
  ========================================================= */

  const selectSearch = (value: string) => {

    setSearchText(value);

    setRecentSearches((previous) => {

      const updated = [
        value,
        ...previous.filter(
          (item) =>
            item.toLowerCase() !==
            value.toLowerCase()
        ),
      ];

      return updated.slice(0, 5);

    });

  };


  /* =========================================================
     CLEAR SEARCH
  ========================================================= */

  const clearSearch = () => {

    setSearchText("");

  };


  /* =========================================================
     RESTAURANT CLICK
  ========================================================= */

  const handleRestaurantClick = (
    item: SearchItem
  ) => {

    onRestaurantClick({

      image: item.image,

      name: item.restaurant,

      category: item.category,

      price: `₹${item.price}`,

      location: "Your Location",

      rating: "4.5",

      offer: "Special Offer",

    });

  };


  return (

    <div className="search-page">


      {/* =====================================================
          SEARCH HEADER
      ===================================================== */}

      <div className="search-header">

        <button
          className="back-button"
          onClick={onBack}
        >

          <FiArrowLeft />

        </button>


        <div className="search-main-box">

          <FiSearch className="search-page-icon" />


          <input
            type="text"
            value={searchText}
            placeholder="Search for restaurants and food"
            onChange={(e) =>
              handleSearch(e.target.value)
            }
            autoFocus
          />


          {searchText && (

            <button
              className="clear-search"
              onClick={clearSearch}
            >

              <FiX />

            </button>

          )}

        </div>

      </div>



      {/* =====================================================
          LOCATION
      ===================================================== */}

      <div className="search-location">

        <FiMapPin />

        <span>
          Delivering to your location
        </span>

      </div>



      {/* =====================================================
          SEARCH CONTENT
      ===================================================== */}

      <div className="search-content">


        {/* ===================================================
            NO SEARCH
        =================================================== */}

        {searchText.trim() === "" ? (

          <>


            {/* =================================================
                RECENT SEARCHES
            ================================================= */}

            {recentSearches.length > 0 && (

              <section className="search-section">

                <div className="section-heading">

                  <h2>
                    Recent Searches
                  </h2>

                </div>


                <div className="recent-search-list">

                  {recentSearches.map(
                    (item, index) => (

                      <div
                        className="recent-search-item"
                        key={index}
                        onClick={() =>
                          selectSearch(item)
                        }
                      >

                        <FiClock />

                        <span>
                          {item}
                        </span>

                        <FiSearch className="recent-arrow" />

                      </div>

                    )
                  )}

                </div>

              </section>

            )}



            {/* =================================================
                POPULAR CUISINES
            ================================================= */}

            <section className="search-section">

              <div className="section-heading">

                <h2>
                  Popular Cuisines
                </h2>

                <p>
                  What are you craving today?
                </p>

              </div>


              <div className="cuisine-grid">

                {popularCuisines.map(
                  (cuisine) => (

                    <div
                      className="cuisine-card"
                      key={cuisine.name}
                      onClick={() =>
                        selectSearch(
                          cuisine.name
                        )
                      }
                    >

                      <div className="cuisine-icon">

                        {cuisine.icon}

                      </div>

                      <span>
                        {cuisine.name}
                      </span>

                    </div>

                  )
                )}

              </div>

            </section>


          </>

        ) : (


          /* ===================================================
             SEARCH RESULTS
          =================================================== */

          <section className="search-section">


            <div className="section-heading">

              <h2>
                Search results
              </h2>

              <p>
                Showing results for "{searchText}"
              </p>

            </div>



            {filteredResults.length === 0 ? (

              <div className="no-results">

                <div className="no-results-icon">
                  🔍
                </div>

                <h2>
                  No results found
                </h2>

                <p>
                  Try searching for another dish or restaurant
                </p>

              </div>

            ) : (


              <div className="search-result-list">

                {filteredResults.map(
                  (item) => (

                    <div
                      className="search-result-card"
                      key={item.id}
                      onClick={() =>
                        handleRestaurantClick(item)
                      }
                    >


                      {/* FOOD IMAGE */}

                      <img
                        src={item.image}
                        alt={item.name}
                      />


                      {/* INFORMATION */}

                      <div className="result-info">

                        <h3>
                          {item.name}
                        </h3>


                        <p className="result-restaurant">

                          {item.restaurant}

                        </p>


                        <p className="result-category">

                          {item.category}

                        </p>


                        <div className="result-bottom">

                          <span className="result-price">

                            ₹{item.price}

                          </span>


                          <button
                            className="add-button"
                            onClick={(e) => {

                              e.stopPropagation();

                            }}
                          >

                            ADD

                          </button>

                        </div>

                      </div>

                    </div>

                  )
                )}

              </div>

            )}

          </section>

        )}

      </div>

    </div>

  );

};


export default Search;