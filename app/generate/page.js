"use client"

import {React, useState} from 'react'
import Link from 'next/link';
import Navbar from '../../components/navbar';


function page() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleShorten = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      url: url,
      shorturl: shortUrl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:3000/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.shorturl) {
          setShortenedUrl(result.shorturl);
          setGenerated(true);
        } else {
          setShortenedUrl("");
          setGenerated(false);
          alert(result.error || "Failed to generate short URL");
        }
      })
      .catch((error) => {
        setShortenedUrl("");
        setGenerated(false);
        alert("An error occurred. Please try again.");
        console.error(error);
      });
  };


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
                    value={shortUrl}
                    placeholder="Enter your short form..."
                    className=" px-6 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
                    onChange={(e) => setShortUrl(e.target.value)}
                  />
                </div>
                <button onClick={handleShorten} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Shorten URL
                </button>
                {generated && (
                  <div className="mt-6 flex flex-col items-center animate-fade-in">
                    <span className="text-lg text-green-700 dark:text-green-400 font-semibold mb-2">Your Short URL:</span>
                    <div className="flex items-center gap-3 bg-white dark:bg-gray-900 border border-green-300 dark:border-green-700 rounded-xl px-4 py-3 shadow-md">
                      <a
                        href={shortenedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 dark:text-blue-300 font-mono text-base underline break-all hover:text-blue-900 dark:hover:text-blue-100 transition-colors duration-150"
                      >
                        {shortenedUrl}
                      </a>
                      <button
                        className="ml-2 px-3 py-1 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg text-sm shadow transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-green-400"
                        onClick={() => {
                          navigator.clipboard.writeText(shortenedUrl);
                        }}
                        title="Copy to clipboard"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block align-middle mr-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75h-2.25A2.25 2.25 0 014 13.5v-7.5A2.25 2.25 0 016.25 4.5h7.5A2.25 2.25 0 0116 6.75v2.25m-7.75 6.75A2.25 2.25 0 006.25 19.5h7.5A2.25 2.25 0 0016 17.25v-7.5A2.25 2.25 0 0013.75 7.5h-7.5A2.25 2.25 0 004 9.75v7.5A2.25 2.25 0 006.25 19.5z" />
                        </svg>
                        Copy
                      </button>
                    </div>
                  </div>
                )}
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