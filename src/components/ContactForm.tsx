'use client';

import React from 'react';

export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xpwdkgqz"
      method="POST"
      className="space-y-6 max-w-xl mx-auto"
    >
      {/* Disable Formspree’s captcha */}
      <input type="hidden" name="_captcha" value="false" />
      {/* Redirect after submission (optional) */}
      <input
        type="hidden"
        name="_next"
        value="https://yourdomain.com/thank-you"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}
