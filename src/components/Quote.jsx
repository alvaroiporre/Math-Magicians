import { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading('Loadinng ...');
      const headers = { 'X-Api-Key': '2k4g3z75gK7QxyXJKapcsg==aFMrsCxvQrn6eWSD' };
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=education', { headers });
      const json = await res.json();
      if (json.error) {
        setError(`Error! ${json.error}`);
      } else {
        setQuote(`${json[0].quote} - "${json[0].author}"`);
      }
    };
    fetchData();
  }, []);

  return (
    <p>{quote || error || loading}</p>
  );
};

export default Quote;
