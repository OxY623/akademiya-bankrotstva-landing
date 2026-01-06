import { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import './Comparison.css';

export function Comparison() {
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

    const element = document.getElementById('comparison');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="comparison" className={`section ${visible ? 'visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Почему мы, а не другие?</h2>
        <p className="section-subtitle">Сравните и убедитесь сами</p>

        <div className="table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Параметр</th>
                <th>Академия Банкротства</th>
                <th>Другие франшизы</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Паушальный взнос</td>
                <td>
                  <Check size={20} style={{ color: '#00ff88' }} />
                  <span> 0 ₽</span>
                </td>
                <td>
                  <X size={20} style={{ color: '#ff4444' }} />
                  <span> От 300 000 ₽</span>
                </td>
              </tr>
              <tr>
                <td>Клиентская база включена</td>
                <td>
                  <Check size={20} style={{ color: '#00ff88' }} />
                  <span> Да</span>
                </td>
                <td>
                  <X size={20} style={{ color: '#ff4444' }} />
                  <span> Нет</span>
                </td>
              </tr>
              <tr>
                <td>Юридическое сопровождение</td>
                <td>
                  <Check size={20} style={{ color: '#00ff88' }} />
                  <span> Полное</span>
                </td>
                <td>
                  <X size={20} style={{ color: '#ff4444' }} />
                  <span> Частичное или нет</span>
                </td>
              </tr>
              <tr>
                <td>Роялти</td>
                <td>
                  <Check size={20} style={{ color: '#00ff88' }} />
                  <span> 30% от дохода</span>
                </td>
                <td>
                  <X size={20} style={{ color: '#ff4444' }} />
                  <span> Фиксированные 50-80 т.р./мес</span>
                </td>
              </tr>
              <tr>
                <td>Окупаемость</td>
                <td>
                  <Check size={20} style={{ color: '#00ff88' }} />
                  <span> От 1 месяца</span>
                </td>
                <td>
                  <X size={20} style={{ color: '#ff4444' }} />
                  <span> От 6-12 месяцев</span>
                </td>
              </tr>
              <tr>
                <td>Обучение</td>
                <td>
                  <Check size={20} style={{ color: '#00ff88' }} />
                  <span> Бесплатно</span>
                </td>
                <td>
                  <X size={20} style={{ color: '#ff4444' }} />
                  <span> Платно (от 50 000 ₽)</span>
                </td>
              </tr>
              <tr>
                <td>CRM-система</td>
                <td>
                  <Check size={20} style={{ color: '#00ff88' }} />
                  <span> Включена</span>
                </td>
                <td>
                  <X size={20} style={{ color: '#ff4444' }} />
                  <span> За доп. плату</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
