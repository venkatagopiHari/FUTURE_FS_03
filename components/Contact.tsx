"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="px-8 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

      {submitted ? (
        <div className="text-center text-green-400 text-xl">
          ✅ Thank you for contacting us! <br />
          We’ll get back to you shortly.
        </div>
      ) : (
        <form
          action="https://formspree.io/f/mlgedkvp"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-900 border border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-900 border border-gray-700"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="p-3 rounded bg-gray-900 border border-gray-700"
          />

          {/* Extra fields for Formspree */}
          <input type="hidden" name="_subject" value="New Nike Contact Message" />

          <button
            type="submit"
            className="mt-4 py-3 rounded bg-white text-black font-semibold"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
