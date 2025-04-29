"use client";
import { useEffect, useState } from "react";

const Quotes = () => {
  const [finalquote, setQuote] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(window.location.origin + "/quotes"); // Replace with actual URL
      const data = await response.text();
      const lines = data.split(";;");
      const quote = lines[Math.floor(Math.random() * lines.length)];
      setQuote(quote);
    };
    fetchData();
  }, []);
  return (
    <div className="p-10 bg-white dark:bg-neutral-950 rounded-md relative border border-neutral-800  dark:border-neutral-800 my-10 py-10 flex flex-col items-center">
      <div className="text-sm md:text-lg lg:text-2xl underline">
        Quote of the day
      </div>
      <br />
      <div>{finalquote}</div>
      </div>
  );
};

export default Quotes;
