import React, { useEffect } from 'react'
import './Index.css'
import { useState } from 'react';

const Index = () => {

  const[quote, setQuote]= useState('');

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random()*data.length);
      setQuote(data[randomNum]);
    })
  };

  useEffect(() => {
    getQuotes();
  },[]);

  return (
    <div className="quote-wrapper">
      <div className="quote-card">
        <h2 className="quote-head">Quotes of the Day</h2>
        <p className="quote-text">
          <span>
            <h2>"</h2>
          </span>
          {quote.text}
          <span>
            <h2>"</h2>
          </span>
        </p>
        <cite className="quote-author">~ {quote.author}</cite>
        <button onClick={getQuotes} type="submit" className="button-new-quote">
          Get new Quote
        </button>
      </div>
    </div>
  );
}

export default Index