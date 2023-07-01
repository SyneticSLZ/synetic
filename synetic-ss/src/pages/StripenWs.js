// import { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import io from "socket.io-client";
// import CardIcon from "../images/credit-card.svg";
// // import ProductImage from "../images/product-image.jpg";

// import "../styles.css";

// let stripePromise;
// const socket = io.connect("http://localhost:3001");

// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise =  loadStripe("pk_test_51MNx4UKJeZAyw8f4z0YJFRQozQsqzwCBKOuzaSScWRXgDDG8GW9YH3qyrI9UZlUW1V8RXkieoHgqoaMOtIbxlLSm00QDD02K7W");
//   }

//   return stripePromise;
// };

// const StripeCheckout = () => {


//   // Messages States
//   const [message, setMessage] = useState("");
//   const [messageReceived, setMessageReceived] = useState("");

//   const sendMessage = () => {
//     socket.emit("send_message", { message});
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageReceived(data.message);
//     });
//   }, [socket]);


//   const [stripeError, setStripeError] = useState(null);
//   const [isLoading, setLoading] = useState(false);
//   const item = {
//     price: "price_1NOjFSKJeZAyw8f4LgHP4tyT",
//     quantity: 1
//   };

//   const checkoutOptions = {
//     lineItems: [item],
//     mode: "payment",
//     successUrl: `${window.location.origin}/success`,
//     cancelUrl: `${window.location.origin}/cancel`
//   };

//   const redirectToCheckout = async () => {
//     setLoading(true);
//     console.log("redirectToCheckout");

//     const stripe = await getStripe();
//     const { error } = await stripe.redirectToCheckout(checkoutOptions);
//     console.log("Stripe checkout error", error);

//     if (error) setStripeError(error.message);
//     setLoading(false);
//   };

//   if (stripeError) alert(stripeError);



//   return (
//     <div className="checkout">
//       <h1>Stripe Checkout</h1>
//       <p className="checkout-title">Design+Code React Hooks Course</p>
//       <p className="checkout-description">
//         Learn how to build a website with React Hooks
//       </p>
//       <h1 className="checkout-price">$19</h1>
//       <button
//         className="checkout-button"
//         onClick={redirectToCheckout}
//         disabled={isLoading}
//       >
//         <div className="grey-circle">
//           <div className="purple-circle">
//             <img className="icon" src={CardIcon} alt="credit-card-icon" />
//           </div>
//         </div>
//         <div className="text-container">
//           <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
//         </div>
//       </button>
//     </div>
//   );
// };

// export default StripeCheckout;
