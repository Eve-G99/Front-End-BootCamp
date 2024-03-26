import { useEffect, useState } from 'react';

const RAMDOM_QUOTE_API = 'https://api.quotable.io/random';

function QuoteFetcher() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    useEffect(() => { //useEffect不接受用async方程，所以我们传给useEffect的是一个空方程，在这个方程中调用async
        async function getInitialQuote() {
            const response = await fetch(RAMDOM_QUOTE_API);
            const jsonResponse = await response.json();
            const ramdomQuote = jsonResponse.content;
            const author = jsonResponse.author;
            setQuote(ramdomQuote);
            setAuthor(author);
        }
        getInitialQuote();
    }, []);


    async function fetchQuote() {
        const response = await fetch(RAMDOM_QUOTE_API);
        const jsonResponse = await response.json();
        const ramdomQuote = jsonResponse.content;
        const author = jsonResponse.author;
        setQuote(ramdomQuote);
        setAuthor(author);
    }

    return (
        <div>
            <button onClick={fetchQuote}>Get Quote Using Handler</button>
            <h2>{quote}</h2>
            <h3>{author}</h3>
        </div>
    )

}

export default QuoteFetcher;