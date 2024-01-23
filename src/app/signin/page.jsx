
import LoginForm from "@/components/layout/LoginForm";
import Image from "next/image";
import React from "react";
import logo from "/public/favicon.ico"

export default function page() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex flex-col gap-3 items-center mb-4">
         <Image src={logo} height={100} width={100} alt="logo panda" className="rounded-full"/>
         <p className="text-2xl"> Bimbingan Konseling Putra Anda </p>
        </div>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
