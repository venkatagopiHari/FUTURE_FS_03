"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: new Date(),
      });

      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-8 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

      {sent ? (
        <div className="text-center text-green-400 text-xl">
          ✅ Thank you for contacting us! <br />
          We’ll get back to you shortly.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-900 border border-gray-700"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-900 border border-gray-700"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            rows={4}
            className="p-3 rounded bg-gray-900 border border-gray-700"
          />

          <button
            disabled={loading}
            className="mt-4 py-3 rounded bg-white text-black font-semibold disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </section>
  );
}
