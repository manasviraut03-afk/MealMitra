import { useState } from "react";

import {
  FiX,
  FiTag,
  FiCheck,
  FiCopy,
} from "react-icons/fi";

import "./OffersCoupons.css";


type OffersCouponsProps = {
  onBack: () => void;
};


type Coupon = {
  code: string;
  title: string;
  description: string;
  discount: string;
  minOrder: string;
};


const coupons: Coupon[] = [
  {
    code: "WELCOME50",
    title: "Flat ₹50 OFF",
    description: "Get ₹50 off on your first order",
    discount: "₹50 OFF",
    minOrder: "On orders above ₹299",
  },
  {
    code: "MEAL100",
    title: "Flat ₹100 OFF",
    description: "Enjoy ₹100 off on your delicious meal",
    discount: "₹100 OFF",
    minOrder: "On orders above ₹499",
  },
  {
    code: "FOOD20",
    title: "20% OFF",
    description: "Save more on your favourite food",
    discount: "20% OFF",
    minOrder: "On orders above ₹399",
  },
];


function OffersCoupons({
  onBack,
}: OffersCouponsProps) {

  const [appliedCoupon, setAppliedCoupon] =
    useState<string | null>(null);

  const [animatingCoupon, setAnimatingCoupon] =
    useState<string | null>(null);

  const [copiedCoupon, setCopiedCoupon] =
    useState<string | null>(null);


  /* =================================================
     APPLY COUPON
  ================================================= */

  const handleApply = (code: string) => {

    if (appliedCoupon === code) {

      setAppliedCoupon(null);

      return;
    }


    setAnimatingCoupon(code);


    setTimeout(() => {

      setAppliedCoupon(code);

    }, 650);


    setTimeout(() => {

      setAnimatingCoupon(null);

    }, 1500);

  };


  /* =================================================
     COPY COUPON
  ================================================= */

  const handleCopy = async (code: string) => {

    try {

      await navigator.clipboard.writeText(code);

      setCopiedCoupon(code);

      setTimeout(() => {

        setCopiedCoupon(null);

      }, 1800);

    } catch {

      console.error(
        "Unable to copy coupon code."
      );

    }

  };


  return (

    <div className="offers-page">


      {/* =================================================
          CLOSE BUTTON AREA

          This is NOT a navbar.
          It appears below the main MealMitra navbar.
      ================================================= */}

      <div className="offers-close-area">

        <button
          type="button"
          className="offers-close-button"
          onClick={onBack}
          aria-label="Close offers and coupons"
        >

          <FiX />

        </button>

      </div>


      {/* =================================================
          MAIN
      ================================================= */}

      <main className="offers-main">


        {/* =================================================
            TOP BANNER
        ================================================= */}

        <section className="offers-banner">

          <div className="offers-banner-icon">

            <FiTag />

          </div>


          <div>

            <span>
              MEALMITRA OFFERS
            </span>


            <h2>

              Delicious food.
              <br />
              Better prices.

            </h2>


            <p>
              Apply a coupon and enjoy extra savings
              on your order.
            </p>

          </div>

        </section>


        {/* =================================================
            COUPONS SECTION
        ================================================= */}

        <section className="coupons-section">


          <div className="coupons-heading">

            <span>
              AVAILABLE OFFERS
            </span>


            <h2>
              Coupons for you
            </h2>


            <p>
              Pick an offer and apply it to your order.
            </p>

          </div>


          {/* =================================================
              COUPON GRID
          ================================================= */}

          <div className="coupons-grid">


            {coupons.map((coupon) => {

              const isAnimating =
                animatingCoupon === coupon.code;


              const isApplied =
                appliedCoupon === coupon.code;


              const isCopied =
                copiedCoupon === coupon.code;


              return (

                <div
                  key={coupon.code}
                  className={`
                    coupon-card
                    ${isAnimating
                      ? "coupon-animating"
                      : ""
                    }
                    ${isApplied
                      ? "coupon-applied"
                      : ""
                    }
                  `}
                >


                  {/* =================================================
                      FLYING PARTICLES
                  ================================================= */}

                  {isAnimating && (

                    <div className="coupon-particles">

                      <span className="particle p1">
                        %
                      </span>

                      <span className="particle p2">
                        ₹
                      </span>

                      <span className="particle p3">
                        %
                      </span>

                      <span className="particle p4">
                        ₹
                      </span>

                      <span className="particle p5">
                        %
                      </span>

                      <span className="particle p6">
                        ₹
                      </span>

                    </div>

                  )}


                  {/* =================================================
                      GLOW
                  ================================================= */}

                  {isAnimating && (

                    <div className="coupon-glow"></div>

                  )}


                  {/* =================================================
                      LEFT SIDE
                  ================================================= */}

                  <div className="coupon-left">

                    <div className="coupon-discount">

                      {coupon.discount}

                    </div>


                    <div className="coupon-small-text">

                      MEALMITRA

                    </div>

                  </div>


                  {/* =================================================
                      DOTTED DIVIDER
                  ================================================= */}

                  <div className="coupon-divider">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                  </div>


                  {/* =================================================
                      RIGHT SIDE
                  ================================================= */}

                  <div className="coupon-content">


                    <div className="coupon-title-row">


                      <div>

                        <h3>
                          {coupon.title}
                        </h3>


                        <p>
                          {coupon.description}
                        </p>

                      </div>


                      <div className="coupon-tag-icon">

                        <FiTag />

                      </div>

                    </div>


                    {/* MINIMUM ORDER */}

                    <p className="coupon-minimum">

                      {coupon.minOrder}

                    </p>


                    {/* =================================================
                        COUPON CODE
                    ================================================= */}

                    <div className="coupon-code-row">


                      <div className="coupon-code">

                        {coupon.code}

                      </div>


                      <button
                        type="button"
                        className="coupon-copy"
                        onClick={() =>
                          handleCopy(coupon.code)
                        }
                      >

                        {isCopied ? (

                          <>
                            <FiCheck />
                            Copied
                          </>

                        ) : (

                          <>
                            <FiCopy />
                            Copy
                          </>

                        )}

                      </button>

                    </div>


                    {/* =================================================
                        APPLY BUTTON
                    ================================================= */}

                    <button
                      type="button"
                      className={`
                        coupon-apply-button
                        ${isApplied
                          ? "applied"
                          : ""
                        }
                      `}
                      onClick={() =>
                        handleApply(coupon.code)
                      }
                    >

                      {isApplied ? (

                        <>
                          <FiCheck />
                          Applied
                        </>

                      ) : (

                        "Apply Coupon"

                      )}

                    </button>


                  </div>

                </div>

              );

            })}

          </div>

        </section>


        {/* =================================================
            BOTTOM INFO
        ================================================= */}

        <section className="offers-info">


          <div className="offers-info-icon">

            <FiCheck />

          </div>


          <div>

            <h3>
              More savings with MealMitra
            </h3>


            <p>
              Apply eligible coupons before placing
              your order to get the best available price.
            </p>

          </div>

        </section>


      </main>

    </div>

  );

}


export default OffersCoupons;