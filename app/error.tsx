'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-black-200">
            <svg
              className="w-12 h-12 text-error"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-black">
            Something went wrong
          </h1>
          <p className="mb-8 text-gray-600">
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full font-semibold py-4 px-8 rounded-xl bg-black hover:bg-gray-800 text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>

          <button
            onClick={() => window.location.href = '/'}
            className="w-full font-medium py-4 px-8 rounded-xl border-2 border-black bg-transparent hover:bg-black text-black hover:text-white transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Go to Homepage
          </button>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="cursor-pointer text-sm hover:opacity-80 text-gray-500">
              Error details (development only)
            </summary>
            <pre className="mt-4 p-4 rounded-lg text-xs overflow-auto bg-black-200 text-black">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}