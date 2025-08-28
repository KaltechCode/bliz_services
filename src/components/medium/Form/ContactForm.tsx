"use client";
import React, { useState } from "react";

function ContactForm() {
  const inputWrapperClass = "w-full md:w-[45%] rounded-md";
  const inputClass =
    "w-full h-[40px] px-3 bg-gray-100 focus:outline-pink rounded-sm";
  const labelClass = "block text-sm mb-1 text-gray-700";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const formData = new FormData();
      formData.append("Name_First", firstName);
      formData.append("Name_Last", lastName);
      formData.append("Email", email);
      formData.append("MultiLine", message);

      await fetch(
        "https://forms.zohopublic.com/blizservices1/form/ContactUs/formperma/bepPvzhFnBLUNifnuC39KSKsv0O1a7ojZEYZQBu5Gs0/htmlRecords/submit",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      // Optimistically assume success when using no-cors
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setStatus("success");
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white px-7 py-10 rounded-[20px] shadow-2xl shadow-slate-300">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-between gap-5"
      >
        <div className={inputWrapperClass}>
          <label className={labelClass}>First name</label>
          <input
            type="text"
            name="Name_First"
            maxLength={255}
            className={inputClass}
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className={inputWrapperClass}>
          <label className={labelClass}>Last name</label>
          <input
            type="text"
            name="Name_Last"
            maxLength={255}
            className={inputClass}
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className={inputWrapperClass}>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            name="Email"
            maxLength={255}
            className={inputClass}
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="w-full rounded-lg">
          <label className={labelClass}>Message</label>
          <textarea
            name="MultiLine"
            maxLength={65535}
            placeholder="How can we help?"
            className="px-3 bg-gray-100 w-full focus:outline-pink py-2 rounded-sm min-h-[120px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue rounded-full px-10 py-3 text-white disabled:opacity-60"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send a Message"}
        </button>

        {status === "success" && (
          <p className="w-full text-green-600 text-sm mt-2">
            Thanks! Your message has been sent.
          </p>
        )}
        {status === "error" && (
          <p className="w-full text-red-600 text-sm mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
