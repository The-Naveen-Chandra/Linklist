"use client";

import { useEffect } from "react";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

export default function HeroForm() {
  useEffect(() => {
    if (
      "localStorage" in window &&
      window.localStorage.getItem("desiredUsername")
    ) {
      const username = window.localStorage.getItem("desiredUsername");
      window.localStorage.removeItem("desiredUsername");
      redirect("/account?username=" + username);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const input = form.querySelector("input");

    const username = input.value;

    if (username.length > 0) {
      // Save username to localStorage
      window.localStorage.setItem("desiredUsername", username);

      // Sign in with Google
      await signIn("google");
    }
  }

  return (
    <form
      className="inline-flex items-center shadow-lg shadow-gray-500/20 rounded-full"
      onSubmit={handleSubmit}
    >
      <span className="py-4 pl-6 rounded-tl-full rounded-bl-full">
        linklist.to/
      </span>
      <input type="text" className="py-4" placeholder="username" />
      <button
        type="submit"
        className="bg-blue-500 text-foreground py-4 px-6 rounded-tr-full rounded-br-full"
      >
        Join for free
      </button>
    </form>
  );
}
