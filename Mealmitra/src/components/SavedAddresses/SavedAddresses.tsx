import { useState } from "react";

import {
  FiMapPin,
  FiHome,
  FiBriefcase,
  FiEdit3,
  FiTrash2,
  FiPlus,
  FiCheck,
  FiX,
} from "react-icons/fi";

import "./SavedAddresses.css";

type Address = {
  id: number;
  type: "Home" | "Work" | "Other";
  name: string;
  phone: string;
  house: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
};

type SavedAddressesProps = {
  onBack: () => void;
};

function SavedAddresses({
  onBack,
}: SavedAddressesProps) {

  /* =================================================
     ADDRESSES
  ================================================= */

  const [addresses, setAddresses] = useState<Address[]>(() => {

    const savedAddresses =
      localStorage.getItem("mealmitraSavedAddresses");

    if (!savedAddresses) {
      return [];
    }

    try {
      return JSON.parse(savedAddresses);
    } catch {
      return [];
    }

  });


  /* =================================================
     FORM
  ================================================= */

  const [showForm, setShowForm] =
    useState(false);

  const [editingId, setEditingId] =
    useState<number | null>(null);

  const [type, setType] =
    useState<"Home" | "Work" | "Other">("Home");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [house, setHouse] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");


  /* =================================================
     SAVE ADDRESSES
  ================================================= */

  const saveAddresses = (
    updatedAddresses: Address[]
  ) => {

    setAddresses(updatedAddresses);

    localStorage.setItem(
      "mealmitraSavedAddresses",
      JSON.stringify(updatedAddresses)
    );

  };


  /* =================================================
     RESET FORM
  ================================================= */

  const resetForm = () => {

    setType("Home");
    setName("");
    setPhone("");
    setHouse("");
    setStreet("");
    setCity("");
    setState("");
    setPincode("");

    setEditingId(null);
    setShowForm(false);

  };


  /* =================================================
     ADD ADDRESS
  ================================================= */

  const handleAddAddress = () => {

    if (
      !name.trim() ||
      !phone.trim() ||
      !house.trim() ||
      !street.trim() ||
      !city.trim() ||
      !state.trim() ||
      !pincode.trim()
    ) {

      alert("Please fill all address details.");

      return;
    }

    const newAddress: Address = {

      id: Date.now(),

      type,

      name: name.trim(),

      phone: phone.trim(),

      house: house.trim(),

      street: street.trim(),

      city: city.trim(),

      state: state.trim(),

      pincode: pincode.trim(),

      isDefault: addresses.length === 0,

    };

    saveAddresses([
      ...addresses,
      newAddress,
    ]);

    resetForm();

  };


  /* =================================================
     EDIT ADDRESS
  ================================================= */

  const handleEdit = (
    address: Address
  ) => {

    setEditingId(address.id);

    setType(address.type);

    setName(address.name);

    setPhone(address.phone);

    setHouse(address.house);

    setStreet(address.street);

    setCity(address.city);

    setState(address.state);

    setPincode(address.pincode);

    setShowForm(true);

  };


  /* =================================================
     UPDATE ADDRESS
  ================================================= */

  const handleUpdateAddress = () => {

    if (
      !name.trim() ||
      !phone.trim() ||
      !house.trim() ||
      !street.trim() ||
      !city.trim() ||
      !state.trim() ||
      !pincode.trim()
    ) {

      alert("Please fill all address details.");

      return;
    }

    const updatedAddresses =
      addresses.map((address) =>

        address.id === editingId

          ? {
              ...address,

              type,

              name: name.trim(),

              phone: phone.trim(),

              house: house.trim(),

              street: street.trim(),

              city: city.trim(),

              state: state.trim(),

              pincode: pincode.trim(),
            }

          : address

      );

    saveAddresses(updatedAddresses);

    resetForm();

  };


  /* =================================================
     DELETE ADDRESS
  ================================================= */

  const handleDelete = (
    id: number
  ) => {

    const confirmed =
      window.confirm(
        "Are you sure you want to delete this address?"
      );

    if (!confirmed) {
      return;
    }

    const addressToDelete =
      addresses.find(
        (address) => address.id === id
      );

    const remainingAddresses =
      addresses.filter(
        (address) => address.id !== id
      );

    if (
      addressToDelete?.isDefault &&
      remainingAddresses.length > 0
    ) {

      remainingAddresses[0] = {
        ...remainingAddresses[0],
        isDefault: true,
      };

    }

    saveAddresses(remainingAddresses);

  };


  /* =================================================
     SET DEFAULT
  ================================================= */

  const handleSetDefault = (
    id: number
  ) => {

    const updatedAddresses =
      addresses.map((address) => ({

        ...address,

        isDefault:
          address.id === id,

      }));

    saveAddresses(updatedAddresses);

  };


  /* =================================================
     ADDRESS ICON
  ================================================= */

  const getAddressIcon = (
    addressType: Address["type"]
  ) => {

    if (addressType === "Home") {
      return <FiHome />;
    }

    if (addressType === "Work") {
      return <FiBriefcase />;
    }

    return <FiMapPin />;

  };


  /* =================================================
     FORM
  ================================================= */

  const renderForm = () => (

    <div className="address-form-card">

      <div className="address-form-header">

        <div>

          <h2>
            {editingId !== null
              ? "Edit Address"
              : "Add New Address"}
          </h2>

          <p>
            Enter your delivery details below.
          </p>

        </div>

        <button
          type="button"
          className="address-form-close"
          onClick={resetForm}
          aria-label="Close address form"
        >
          <FiX />
        </button>

      </div>


      {/* ADDRESS TYPE */}

      <div className="address-type-section">

        <span>
          Address Type
        </span>

        <div className="address-type-buttons">

          {(
            [
              "Home",
              "Work",
              "Other",
            ] as Address["type"][]
          ).map((addressType) => (

            <button
              key={addressType}
              type="button"
              className={
                type === addressType
                  ? "address-type active"
                  : "address-type"
              }
              onClick={() =>
                setType(addressType)
              }
            >

              {getAddressIcon(addressType)}

              {addressType}

            </button>

          ))}

        </div>

      </div>


      {/* FORM GRID */}

      <div className="address-form-grid">

        <div className="address-field">

          <label>
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Enter full name"
          />

        </div>


        <div className="address-field">

          <label>
            Phone Number
          </label>

          <input
            type="tel"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
            placeholder="Enter phone number"
          />

        </div>


        <div className="address-field">

          <label>
            House / Flat / Building
          </label>

          <input
            type="text"
            value={house}
            onChange={(e) =>
              setHouse(e.target.value)
            }
            placeholder="House / Flat / Building"
          />

        </div>


        <div className="address-field">

          <label>
            Area / Street
          </label>

          <input
            type="text"
            value={street}
            onChange={(e) =>
              setStreet(e.target.value)
            }
            placeholder="Area / Street"
          />

        </div>


        <div className="address-field">

          <label>
            City
          </label>

          <input
            type="text"
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
            placeholder="City"
          />

        </div>


        <div className="address-field">

          <label>
            State
          </label>

          <input
            type="text"
            value={state}
            onChange={(e) =>
              setState(e.target.value)
            }
            placeholder="State"
          />

        </div>


        <div className="address-field">

          <label>
            PIN Code
          </label>

          <input
            type="text"
            value={pincode}
            onChange={(e) =>
              setPincode(e.target.value)
            }
            placeholder="PIN Code"
            maxLength={6}
          />

        </div>

      </div>


      {/* FORM ACTIONS */}

      <div className="address-form-actions">

        <button
          type="button"
          className="address-cancel-btn"
          onClick={resetForm}
        >
          Cancel
        </button>


        <button
          type="button"
          className="address-save-btn"
          onClick={
            editingId !== null
              ? handleUpdateAddress
              : handleAddAddress
          }
        >

          <FiCheck />

          {editingId !== null
            ? "Update Address"
            : "Save Address"}

        </button>

      </div>

    </div>

  );


  /* =================================================
     PAGE
  ================================================= */

  return (

    <div className="saved-addresses-page">


      {/* =================================================
          ONLY X BUTTON
          IMPORTANT:
          This is NOT a navbar.
          It sits below your existing navbar.
      ================================================= */}

      <button
        type="button"
        className="saved-addresses-close"
        onClick={onBack}
        aria-label="Close saved addresses"
      >
        <FiX />
      </button>


      {/* =================================================
          CONTENT
      ================================================= */}

      <main className="saved-addresses-content">


        {/* PAGE HEADING */}

        <div className="saved-addresses-heading">

          <span className="saved-addresses-label">
            ACCOUNT
          </span>

          <h1>
            Saved Addresses
          </h1>

          <p>
            Manage your delivery locations for faster checkout.
          </p>

        </div>


        {/* FORM */}

        {showForm && renderForm()}


        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {!showForm &&
          addresses.length === 0 && (

            <div className="saved-addresses-empty">

              <div className="empty-address-icon">

                <FiMapPin />

              </div>

              <h2>
                No saved addresses
              </h2>

              <p>
                Add your home, work, or other delivery
                address to make ordering easier.
              </p>

              <button
                type="button"
                onClick={() =>
                  setShowForm(true)
                }
                className="empty-add-address-btn"
              >

                <FiPlus />

                Add Your First Address

              </button>

            </div>

          )}


        {/* =================================================
            ADDRESS LIST
        ================================================= */}

        {!showForm &&
          addresses.length > 0 && (

            <div className="addresses-list">

              {addresses.map((address) => (

                <article
                  className={
                    address.isDefault
                      ? "address-card default"
                      : "address-card"
                  }
                  key={address.id}
                >

                  <div className="address-card-top">

                    <div className="address-card-title">

                      <div className="address-icon">

                        {getAddressIcon(
                          address.type
                        )}

                      </div>

                      <div>

                        <div className="address-title-row">

                          <h2>
                            {address.type}
                          </h2>

                          {address.isDefault && (

                            <span className="default-badge">

                              <FiCheck />

                              Default

                            </span>

                          )}

                        </div>

                        <span className="address-subtitle">
                          Delivery Address
                        </span>

                      </div>

                    </div>


                    <div className="address-card-actions">

                      <button
                        type="button"
                        onClick={() =>
                          handleEdit(address)
                        }
                        aria-label="Edit address"
                      >
                        <FiEdit3 />
                      </button>


                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(address.id)
                        }
                        aria-label="Delete address"
                      >
                        <FiTrash2 />
                      </button>

                    </div>

                  </div>


                  <div className="address-card-details">

                    <strong>
                      {address.name}
                    </strong>

                    <p>
                      {address.house},{" "}
                      {address.street}
                    </p>

                    <p>
                      {address.city},{" "}
                      {address.state} -{" "}
                      {address.pincode}
                    </p>

                    <span className="address-phone">
                      {address.phone}
                    </span>

                  </div>


                  {!address.isDefault && (

                    <button
                      type="button"
                      className="set-default-btn"
                      onClick={() =>
                        handleSetDefault(address.id)
                      }
                    >
                      Set as Default
                    </button>

                  )}

                </article>

              ))}

            </div>

          )}

      </main>

    </div>

  );

}

export default SavedAddresses;