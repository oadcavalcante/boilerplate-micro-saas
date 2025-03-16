"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <form action={() => signOut({ callbackUrl: "/" })}>
      <button
        type="submit"
        className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Sair
      </button>
    </form>
  );
}
