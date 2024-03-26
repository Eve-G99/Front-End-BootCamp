import { useEffect, useState } from 'react';

const RAMDOM_QUOTE_API = 'https://api.quotable.io/random';

function QuoteFetcherLoader() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getInitialQuote() {
            const response = await fetch(RAMDOM_QUOTE_API);
            const jsonResponse = await response.json();
            const ramdomQuote = jsonResponse.content;
            const author = jsonResponse.author;
            setQuote(ramdomQuote);
            setAuthor(author);
            setIsLoading(false);
        }
        getInitialQuote();
    }, []);


    return (
        <div>
            <p className='Loader' style={{ opacity: isLoading ? 1 : 0 }}>Loading...</p>
            <h2>{quote}</h2>
            <h3>{author}</h3>
        </div>
    )

}

export default QuoteFetcherLoader;