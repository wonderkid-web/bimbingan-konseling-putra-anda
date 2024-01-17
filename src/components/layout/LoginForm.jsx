"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { handleSubmit, register } = useForm();

  const router = useRouter()

    const onSubmit = async (formData) =>{
      const signin = await signIn("credentials", {
        ...formData,
        redirect: false,
      });
  

      if (!signin.ok) {
        alert('Gagal login mungkin password')
      } else {
        router.push("/guru");
      }
    }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 md:space-y-6"
      action="#"
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          {...register("username")}
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required=""
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
              Remember me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full bg-red-700 hover:bg-red-800 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Sign in
      </button>
      <Link
        href={"/siswa"}
        className="text-sm font-light my-4 text-gray-500 dark:text-gray-400"
      >
        Masuk Sebagai Siswa?
      </Link>
    </form>
  );
}
