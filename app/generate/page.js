"use client"

import {React, useState} from 'react'
import Link from 'next/link';
import Navbar from '../../components/navbar';


function page() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [generated, setGenerated] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
    <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Shorten Your URLs
              <span className="text-blue-600 block">Instantly</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform long, complex URLs into short, memorable links. Track clicks, 
              analyze performance, and share with confidence.
            </p>
            
            {/* URL Shortener Form */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex flex-col gap-5 bg-red-500 dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col md:flex-row sm:flex-col gap-4">
                  <input
                    type="url"
                    value={url}
                    placeholder="Enter your long URL here..."
                    className="flex-1 px-6 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <input
                    type="url"
                    value={url}
                    placeholder="Enter your short form..."
                    className=" px-6 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
                <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                    Shorten URL
                  </button>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  No registration required • Free forever • Secure & reliable
                </p>
              </div>
            </div>

            
          </div>
        </div>
        </main>
        </div>
  )
}

export default page