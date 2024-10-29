'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const handleNewQuote  = () => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      headers: {
        'X-Api-Key': 'E9RnlGgGnY8YCagN3/pRyQ==hHggYRmbybhlrBRE'
      }
    }).then(res => res.json()).then(data => {
      setAuthor(data[0].author);
      setQuote(data[0].quote);
    });
  }

  useEffect(() => {
    handleNewQuote();
  }, [])
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-[500px] h-[230px] gap-8 row-start-2 items-center sm:items-start bg-white">
        <div id="wrapper">
          <div id="quote-box">
            <div id="quote-text" className="text-center font-bold text-slate-700 p-4">
              <i>``</i>
              <span id="text" className="">{quote}</span>
            </div>
            <div id="quote-author" className="flex justify-end m-2">
              <span id="author" className="mt-4 text-xl font-medium text-slate-700">{author}</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex space-x-4">
                <a id="tweet-quote" className="text-blue-500 hover:underline">Tweet</a>
                <a id="tweet-quote" className="text-blue-500 hover:underline">Tweet 2</a>
              </div>
              <button id="new-quote" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleNewQuote}>
                New Quote
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
