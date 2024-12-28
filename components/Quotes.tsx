"use client";
import CardSpotlight from "@/components/ui/card-spotlight"
import { useEffect, useState } from "react";

const Quotes = () => {
    const [finalquote, setQuote] = useState("");
    useEffect(() => {
    const fetchData = async () => {
    
        const response = await fetch(window.location.origin + "/quotes"); // Replace with actual URL
        const data = await response.text();
        const lines = data.split(';;');
        const quote = lines[Math.floor(Math.random() * lines.length)];
        setQuote(quote);
     
    };
    fetchData();
    },[])
    return (
        <div className="my-10 py-10 flex flex-col items-center">
      <CardSpotlight className="h-40 w-192">
        <p className="text-sm md:text-lg lg:text-2xl underline">Quote of the day</p><br />
        <p>{finalquote}</p>
        </CardSpotlight>
      </div>)
}

export default Quotes;
