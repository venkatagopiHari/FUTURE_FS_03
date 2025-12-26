"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      createdAt: new Date(),
    });
    setName("");
    setEmail("");
    setMessage("");
    setSuccess(true);
  };

  return (
    <section id="contact" className="px-8 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="p-3 rounded bg-gray-900 border border-gray-700"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          className="p-3 rounded bg-gray-900 border border-gray-700"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          rows={4}
          className="p-3 rounded bg-gray-900 border border-gray-700"
          required
        />

        <button className="mt-4 py-3 rounded bg-white text-black font-semibold">
          Send Message
        </button>

        {success && (
          <p className="text-green-400 text-center">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}
