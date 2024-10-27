import { useState } from 'react';
import { Rate } from '../../components/Rate';
import './style.css';

export const HomePage = () => {
  const [currency, setCurrency] = useState('USD');

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <div className="container">
      <h1>Kurzovní lístek</h1>
      <div className="currency-info">
        <form>
          <div className="form-field">
            <label htmlFor="currency-select">Měna:</label>
            <select
              id="currency-select"
              value={currency}
              onChange={handleCurrencyChange}
            >
              <option value="USD">Americký dolar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">Britská libra</option>
              <option value="JPY">Japonský jen</option>
              <option value="RUB">Ruský rubl</option>
              <option value="CHF">Švýcarský frank</option>
              <option value="BRL">Brazilský real</option>
              <option value="ILS">Izraelský šekel</option>
              <option value="MXN">Mexické peso</option>
            </select>
          </div>
        </form>
        <Rate from={currency} />
      </div>
    </div>
  );
};
