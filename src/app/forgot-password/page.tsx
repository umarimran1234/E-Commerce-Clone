"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Call your backend API to send a password reset email
    const response = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      Swal.fire({
        icon: "success",
        title: "Password reset link sent!",
        text: "Check your email for further instructions.",
        timer: 3000,
        showConfirmButton: false,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Could not send password reset link. Please try again.",
        timer: 3000,
        showConfirmButton: false,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <h2 className="mb-4 text-lg font-medium">Reset Your Password</h2>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-md border px-3 py-2 text-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 py-2 text-sm text-white hover:bg-blue-700"
      >
        Send Reset Link
      </button>
    </form>
  );
};

export default ForgotPassword;
