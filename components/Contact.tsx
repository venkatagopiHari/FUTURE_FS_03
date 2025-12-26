"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/mlgedkvp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-8 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>

      {status === "success" ? (
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

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-4 py-3 rounded bg-white text-black font-semibold disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </section>
  );
}
