import React from 'react'
import quotesData from  './quotesData.js'

export default function Quote() {
    
    const [allQuotes, setAllQuotes] = React.useState(quotesData)
    
    const initialQuote = Math.floor(Math.random() * allQuotes.quotes.length)
    
    const [quote, setQuote] = React.useState({
        text: allQuotes.quotes[initialQuote].quote,
        author: allQuotes.quotes[initialQuote].author
    })
    
    function getQuote() {
        const quotesArray = allQuotes.quotes
        const randomNumber = Math.floor(Math.random() * quotesArray.length)
        const text = quotesArray[randomNumber].quote
        const author = quotesArray[randomNumber].author
        setQuote(prevQuote => ({
            // ...prevQuote,
            text: text,
            author: author
        }))
    }
    
    const colors = ["#F94144", "#F3722C", "#F8961E", "#F9844A", "#F9C74F", "#90BE6D", "#43AA8B", "#4D908E", "#577590", "#277DA1"]
    const randomColor = Math.floor(Math.random() * colors.length)
    
    const styles = {
        backgroundColor: colors[randomColor]
    }
    
    return (
        <main style={styles}>
            <div id="quote-box">
                <div id="text" style={{color: colors[randomColor]}}><i className="fa fa-quote-left"></i> {quote.text} <i className="fa fa-quote-right"></i></div>
                <div id="author" style={{color: colors[randomColor]}}>- {quote.author}</div>
                <div id="buttons">
                    <div>
                        <a
                            style={styles} 
                            href="twitter.com/intent/tweet" 
                            className="button" 
                            id="tweet-quote" 
                            target="_blank">
                            <i className="fa fa-twitter logo"></i>
                        </a>
                        <a 
                            style={styles}
                            href="#" 
                            className="button">
                            <i className="fa fa-tumblr logo"></i>
                        </a>
                    </div>
                    <button
                        style={styles} 
                        className="button"
                        id="new-quote" 
                        onClick={getQuote}>New quote</button>
                </div>
            </div>
        </main>
    )
}