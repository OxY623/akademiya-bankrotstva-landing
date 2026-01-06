import { Facebook, Twitch, MessageCircle } from 'lucide-react';
import './Footer.css';

export function Footer() {
  return (
    <footer id="contacts" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>О компании</h3>
            <p>Академия Банкротства — федеральная сеть по оказанию услуг банкротства физических лиц. Работаем с 2018 года.</p>
          </div>
          <div className="footer-section">
            <h3>Контакты</h3>
            <p>Email: info@academy-bankrupt.ru</p>
            <p>Телефон: +7 (800) 123-45-67</p>
            <p>Адрес: г. Москва, ул. Примерная, д. 1</p>
          </div>
          <div className="footer-section">
            <h3>Навигация</h3>
            <ul className="footer-links">
              <li><a href="#advantages">Преимущества</a></li>
              <li><a href="#market">Рынок</a></li>
              <li><a href="#calculator">Калькулятор</a></li>
              <li><a href="#comparison">Сравнение</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Документы</h3>
            <ul className="footer-links">
              <li><a href="#">Договор оферты</a></li>
              <li><a href="#">Политика конфиденциальности</a></li>
              <li><a href="#">Пользовательское соглашение</a></li>
            </ul>
            <div className="social-links">
              <a href="#" aria-label="VK">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Telegram">
                <Twitch size={20} />
              </a>
              <a href="#" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Академия Банкротства. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
