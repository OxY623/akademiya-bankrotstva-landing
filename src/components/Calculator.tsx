import { useState, useEffect } from 'react';
import './Calculator.css';

export function Calculator() {
  const [clients, setClients] = useState(5);
  const [price, setPrice] = useState(120000);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('calculator');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const totalRevenue = clients * price;
  const yourShare = totalRevenue * 0.7;
  const royalty = totalRevenue * 0.3;

  const formatCurrency = (value: number) => {
    return value.toLocaleString('ru-RU');
  };

  return (
    <section id="calculator" className={`section ${visible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Реальные цифры вашего бизнеса</h2>
        <p className="section-subtitle">Рассчитайте свой доход. Все прозрачно и честно.</p>

        <div className="calculator">
          <div className="calculator-row">
            <label className="calculator-label">Количество клиентов в месяц:</label>
            <input
              type="range"
              min="1"
              max="20"
              value={clients}
              onChange={(e) => setClients(Number(e.target.value))}
              className="calculator-input"
            />
            <div className="calculator-value">{clients}</div>
          </div>

          <div className="calculator-row">
            <label className="calculator-label">Средний чек (₽):</label>
            <input
              type="range"
              min="80000"
              max="200000"
              step="10000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="calculator-input"
            />
            <div className="calculator-value">{formatCurrency(price)}</div>
          </div>

          <div className="calculator-result">
            <div className="result-row">
              <span className="result-label">Паушальный взнос:</span>
              <span className="result-value">0 ₽</span>
            </div>
            <div className="result-row">
              <span className="result-label">Ваш доход (70%):</span>
              <span className="result-value">{formatCurrency(Math.floor(yourShare))} ₽</span>
            </div>
            <div className="result-row">
              <span className="result-label">Роялти (30%):</span>
              <span className="result-value">{formatCurrency(Math.floor(royalty))} ₽</span>
            </div>
            <div className="result-row highlight">
              <span className="result-label">Ваш чистый доход:</span>
              <span className="result-value">{formatCurrency(Math.floor(yourShare))} ₽</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
