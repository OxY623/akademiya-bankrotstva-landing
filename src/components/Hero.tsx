import { useEffect, useState } from 'react';
import { CheckCircle, Users, TrendingUp, Shield, DollarSign } from 'lucide-react';
import { Timer } from './Timer';
import './Hero.css';

export function Hero() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={`hero ${visible ? 'visible' : ''}`}>
      <div className="container">
        <div className="hero-content">
          <h1>Бизнес по банкротству физических лиц с доходом от 300 000 ₽ в месяц</h1>
          <p className="hero-subtitle">Готовый бизнес под ключ. Клиентская база включена. Паушальный взнос — 0 ₽</p>

          <div className="hero-facts">
            <div className="fact-item">
              <CheckCircle size={24} className="fact-icon" />
              <div className="fact-text">Без юридического образования и опыта работы с судами</div>
            </div>
            <div className="fact-item">
              <Users size={24} className="fact-icon" />
              <div className="fact-text">Клиенты включены в пакет франшизы — начинаете зарабатывать сразу</div>
            </div>
            <div className="fact-item">
              <TrendingUp size={24} className="fact-icon" />
              <div className="fact-text">Рынок банкротства физлиц растет на 40% ежегодно</div>
            </div>
            <div className="fact-item">
              <Shield size={24} className="fact-icon" />
              <div className="fact-text">Полное юридическое сопровождение и подготовка документов нашими специалистами</div>
            </div>
            <div className="fact-item">
              <DollarSign size={24} className="fact-icon" />
              <div className="fact-text">Окупаемость от 1 месяца при среднем чеке 120 000 ₽</div>
            </div>
          </div>

          <Timer />

          <div className="hero-cta">
            <button
              className="btn btn-pulse"
              onClick={() => document.getElementById('modal')?.classList.add('active')}
            >
              Зафиксировать 0 ₽
            </button>
            <a href="#calculator" className="btn btn-secondary">
              Рассчитать доход
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
