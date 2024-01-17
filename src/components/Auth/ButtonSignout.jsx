"use client";
import { IoLogInOutline } from "react-icons/io5";

import { signOut } from "next-auth/react";

export default function ButtonSignout() {
  return (
    <button
      onClick={() => signOut()}
      className="flex justify-center items-center gap-1 rounded-md bg-red-900 p-2 px-3"
    >
      Logout
      <IoLogInOutline />
    </button>
  );
}
