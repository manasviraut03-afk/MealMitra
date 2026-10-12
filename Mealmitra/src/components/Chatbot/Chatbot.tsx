import { useState } from "react";

import {
  FiMessageCircle,
  FiX,
  FiSend,
  FiShoppingBag,
  FiHelpCircle,
  FiHeart,
} from "react-icons/fi";

import "./Chatbot.css";


/* =================================================
   CHATBOT PROPS
================================================= */

interface ChatbotProps {
  onClose?: () => void;
  darkMode?: boolean;
}


/* =================================================
   MESSAGE TYPE
================================================= */

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
};


/* =================================================
   CHATBOT
================================================= */

function Chatbot({
  onClose,
  darkMode = false,
}: ChatbotProps) {

  const [isOpen, setIsOpen] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm your MealMitra Assistant. How can I help you today?",
      sender: "bot",
    },
  ]);


  /* =================================================
     BOT RESPONSE
  ================================================= */

  const getBotResponse = (message: string): string => {

    const text = message.toLowerCase();


    if (
      text.includes("recommend") ||
      text.includes("food") ||
      text.includes("eat") ||
      text.includes("hungry")
    ) {
      return "🍕 I'd recommend trying a delicious pizza, burger, or pasta today! Tell me what type of food you like and I'll help you choose.";
    }


    if (
      text.includes("veg") ||
      text.includes("vegetarian")
    ) {
      return "🥗 Looking for vegetarian food? Try a veg pizza, paneer dish, dosa, pasta, or a fresh salad.";
    }


    if (
      text.includes("spicy") ||
      text.includes("hot")
    ) {
      return "🌶️ If you love spicy food, try spicy paneer, biryani, spicy noodles, or a hot pizza!";
    }


    if (
      text.includes("sweet") ||
      text.includes("dessert")
    ) {
      return "🍰 Craving something sweet? You can try cake, ice cream, brownies, or a delicious dessert.";
    }


    if (
      text.includes("cart") ||
      text.includes("order") ||
      text.includes("checkout")
    ) {
      return "🛒 Having trouble with your order or cart? Try refreshing the page first. If the problem continues, check your cart and make sure all required details are filled in.";
    }


    if (
      text.includes("offer") ||
      text.includes("coupon") ||
      text.includes("discount")
    ) {
      return "🎟️ You can check the Offers & Coupons section to see the latest available deals and discounts.";
    }


    if (
      text.includes("address") ||
      text.includes("location")
    ) {
      return "📍 You can manage your saved delivery addresses from your Profile → Saved Addresses.";
    }


    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return "Hello! 👋 Welcome to MealMitra. What are you craving today? 🍕";
    }


    if (
      text.includes("thank")
    ) {
      return "You're welcome! ❤️ Happy eating with MealMitra!";
    }


    return "😊 I'm here to help! You can ask me to recommend food, find vegetarian dishes, suggest spicy food, check offers, or help with an order.";
  };


  /* =================================================
     SEND MESSAGE
  ================================================= */

  const sendMessage = () => {

    const trimmedMessage = input.trim();

    if (!trimmedMessage) {
      return;
    }


    const userMessage: Message = {
      id: Date.now(),
      text: trimmedMessage,
      sender: "user",
    };


    setMessages((previousMessages) => [
      ...previousMessages,
      userMessage,
    ]);


    setInput("");


    setTimeout(() => {

      const botMessage: Message = {
        id: Date.now() + 1,
        text: getBotResponse(trimmedMessage),
        sender: "bot",
      };


      setMessages((previousMessages) => [
        ...previousMessages,
        botMessage,
      ]);

    }, 500);

  };


  /* =================================================
     QUICK ACTION
  ================================================= */

  const handleQuickAction = (text: string) => {

    setInput(text);

  };


  /* =================================================
     ENTER KEY
  ================================================= */

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {

    if (event.key === "Enter") {
      sendMessage();
    }

  };


  /* =================================================
     OPEN CHATBOT
  ================================================= */

  const handleOpen = () => {

    setIsOpen(true);

  };


  /* =================================================
     CLOSE CHATBOT
  ================================================= */

  const handleClose = () => {

    setIsOpen(false);

    if (onClose) {
      onClose();
    }

  };


  return (

    <>

      {/* =================================================
          FLOATING CHAT BUTTON
      ================================================= */}

      {!isOpen && (

        <button
          type="button"
          className="chatbot-floating-button"
          onClick={handleOpen}
          aria-label="Open MealMitra Assistant"
        >

          <FiMessageCircle />

          <span className="chatbot-notification-dot"></span>

        </button>

      )}


      {/* =================================================
          CHAT WINDOW
      ================================================= */}

      {isOpen && (

        <div
          className={
            darkMode
              ? "chatbot-window dark-mode"
              : "chatbot-window"
          }
        >


          {/* =================================================
              HEADER
          ================================================= */}

          <div className="chatbot-header">

            <div className="chatbot-header-left">

              <div className="chatbot-avatar">
                🤖
              </div>


              <div>

                <h3>
                  MealMitra Assistant
                </h3>

                <p>
                  Online • Ready to help
                </p>

              </div>

            </div>


            <button
              type="button"
              className="chatbot-close"
              onClick={handleClose}
              aria-label="Close chatbot"
            >

              <FiX />

            </button>

          </div>


          {/* =================================================
              MESSAGES
          ================================================= */}

          <div className="chatbot-messages">

            {messages.map((message) => (

              <div
                key={message.id}
                className={`chatbot-message-row ${
                  message.sender === "user"
                    ? "user-message-row"
                    : "bot-message-row"
                }`}
              >

                <div
                  className={`chatbot-message ${
                    message.sender === "user"
                      ? "user-message"
                      : "bot-message"
                  }`}
                >

                  {message.text}

                </div>

              </div>

            ))}


            {/* =================================================
                QUICK ACTIONS
            ================================================= */}

            {messages.length === 1 && (

              <div className="chatbot-quick-actions">

                <button
                  type="button"
                  onClick={() =>
                    handleQuickAction("Recommend some food")
                  }
                >

                  <FiHeart />

                  Recommend food

                </button>


                <button
                  type="button"
                  onClick={() =>
                    handleQuickAction("I need help with my order")
                  }
                >

                  <FiShoppingBag />

                  Order help

                </button>


                <button
                  type="button"
                  onClick={() =>
                    handleQuickAction("Show me vegetarian food")
                  }
                >

                  🥗

                  Veg food

                </button>


                <button
                  type="button"
                  onClick={() =>
                    handleQuickAction("Something is not working")
                  }
                >

                  <FiHelpCircle />

                  Need help

                </button>

              </div>

            )}

          </div>


          {/* =================================================
              INPUT
          ================================================= */}

          <div className="chatbot-input-area">

            <input
              type="text"
              placeholder="Ask MealMitra..."
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              onKeyDown={handleKeyDown}
            />


            <button
              type="button"
              className="chatbot-send-button"
              onClick={sendMessage}
              aria-label="Send message"
            >

              <FiSend />

            </button>

          </div>


        </div>

      )}

    </>

  );

}


export default Chatbot;