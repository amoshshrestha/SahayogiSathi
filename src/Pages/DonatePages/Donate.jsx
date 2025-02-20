// src/pages/DonatePage.jsx
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Your Stripe PUBLISHABLE key (test or live)
const stripePromise = loadStripe("pk_test_51QuScuCmchDaGpKEvi9n6EhjNRpgjOKGrXuHBwXWsneQrKAf4YMQwqdu3ARr43JEtqByLx6c1hVEmXOmac4CfWGF00KMyCqf8T");

function DonatePage() {
  const [donationAmount, setDonationAmount] = useState(10);
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    try {
      setLoading(true);
      const stripe = await stripePromise;
      // Replace with your actual PHP endpoint URL:
      const response = await fetch("https://YOUR-PHP-SERVER.com/create-checkout-session.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: donationAmount }),
      });

      if (!response.ok) {
        throw new Error("Failed to create Stripe Checkout session");
      }

      const session = await response.json();
      // Redirect to Stripe Checkout
      const result = await stripe.redirectToCheckout({ sessionId: session.id });
      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error("Error creating Checkout Session:", error);
      alert("There was an error processing your donation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded shadow ">
      <h1 className="text-2xl font-bold mb-4">Donate Now</h1>

      <label className="block mb-2 font-semibold">
        Donation Amount (USD)
      </label>
      <input
        type="number"
        min="1"
        value={donationAmount}
        onChange={(e) => setDonationAmount(parseInt(e.target.value, 10) || 1)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <button
        disabled={loading}
        onClick={handleDonate}
        className="bg-[#A6CDC6] text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Processing..." : `Donate $${donationAmount}`}
      </button>
    </div>
  );
}

export default DonatePage;
