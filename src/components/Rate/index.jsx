import { useEffect, useState } from 'react';
import './style.css';

const currencies = {
  USD: { CZK: 23.823 },
  EUR: { CZK: 24.74 },
  GBP: { CZK: 29.067 },
  JPY: { CZK: 0.1556 },
  RUB: { CZK: 25.71 },
  CHF: { CZK: 27.816}
};

export const Rate = ({ from }) => {
  const [rate,setRate] = useState(currencies[from].CZK);

 useEffect(() =>{
   const fetchCurrency = async () => {
     const response = await fetch(
       `https://api.frankfurter.app/latest?from=${from}&to=CZK`);
     const data = await response.json();
     setRate(data.rates.CZK);
   };

   fetchCurrency();
 },[from]);

  return (
    <div className="rate">
      <div className="rate__currency">1 {from}</div>
      <div>=</div>
      <div className="rate__value">{rate} CZK</div>
    </div>
  );
};
