"use client";

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 bg-white">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          {/* Cleomitra Logo */}
          <div className="mx-auto w-32 h-32 rounded-full flex items-center justify-center mb-6 bg-black-200">
            <Image
              src="/cleomitra11.png"
              alt="Cleomitra Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>

          <h1 className="text-6xl font-bold mb-4 text-black">404</h1>
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Page not found
          </h2>
          <p className="mb-8 text-gray-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. The
            page may have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block font-semibold py-4 px-6 rounded-xl bg-black  text-white transition-all duration-200 transform hover:scale-105  shadow-lg hover:shadow-xl"
          >
            Go to Homepage
          </Link>

          <button
            onClick={() => window.history.back()}
            className="font-medium py-4 px-6 rounded-xl border-2 border-black bg-transparent hover:bg-black text-black hover:text-white transition-all duration-200 "
          >
            Go Back
          </button>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Need help? Contact our{" "}
            <Link
              href="/contact"
              className="underline hover:opacity-80 text-main"
            >
              support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
