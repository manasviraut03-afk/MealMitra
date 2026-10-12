import { useState } from "react";
import {
  FiArrowLeft,
  FiSearch,
  FiMapPin,
  FiNavigation,
  FiX,
} from "react-icons/fi";

import "./LocationSearch.css";

interface LocationSearchProps {
  onBack: () => void;
  onLocationSelect: (location: string) => void;
}

const locations = [
  {
    name: "Pratap Nagar",
    address: "Pratap Nagar, Nagpur, Maharashtra",
  },
  {
    name: "Sadar",
    address: "Sadar, Nagpur, Maharashtra",
  },
  {
    name: "Dharampeth",
    address: "Dharampeth, Nagpur, Maharashtra",
  },
  {
    name: "Manish Nagar",
    address: "Manish Nagar, Nagpur, Maharashtra",
  },
  {
    name: "Sitabuldi",
    address: "Sitabuldi, Nagpur, Maharashtra",
  },
  {
    name: "Civil Lines",
    address: "Civil Lines, Nagpur, Maharashtra",
  },
];

function LocationSearch({
  onBack,
  onLocationSelect,
}: LocationSearchProps) {

  const [searchText, setSearchText] = useState("");

  const filteredLocations = locations.filter(
    (location) =>
      location.name
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      location.address
        .toLowerCase()
        .includes(searchText.toLowerCase())
  );

  const handleCurrentLocation = () => {

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        onLocationSelect("Current Location");
      },
      () => {
        alert(
          "Unable to access your location. Please search manually."
        );
      }
    );
  };

  return (
    <div className="location-search-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="location-header">

        <button
          className="location-back"
          onClick={onBack}
        >
          <FiArrowLeft />
        </button>

        <div className="location-input-box">

          <FiSearch className="location-search-icon" />

          <input
            type="text"
            placeholder="Search for area, street name..."
            value={searchText}
            onChange={(e) =>
              setSearchText(e.target.value)
            }
            autoFocus
          />

          {searchText && (
            <button
              className="location-clear"
              onClick={() => setSearchText("")}
            >
              <FiX />
            </button>
          )}

        </div>

      </div>


      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="location-container">

        {/* CURRENT LOCATION */}

        <div
          className="use-current-location"
          onClick={handleCurrentLocation}
        >

          <div className="current-location-icon">
            <FiNavigation />
          </div>

          <div className="current-location-text">

            <h3>
              Use current location
            </h3>

            <p>
              Using your device's location
            </p>

          </div>

        </div>


        {/* DIVIDER */}

        <div className="location-divider"></div>


        {/* LOCATION TITLE */}

        <h2 className="location-title">
          {searchText
            ? "Search results"
            : "Popular locations"}
        </h2>


        {/* LOCATIONS */}

        <div className="location-list">

          {filteredLocations.length === 0 ? (

            <div className="location-empty">

              <FiMapPin />

              <h3>
                No location found
              </h3>

              <p>
                Try searching another area
              </p>

            </div>

          ) : (

            filteredLocations.map((location) => (

              <div
                className="location-row"
                key={location.name}
                onClick={() =>
                  onLocationSelect(location.name)
                }
              >

                <div className="location-pin">
                  <FiMapPin />
                </div>

                <div className="location-details">

                  <h3>
                    {location.name}
                  </h3>

                  <p>
                    {location.address}
                  </p>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default LocationSearch;