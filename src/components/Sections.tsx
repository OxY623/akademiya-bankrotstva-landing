import { Award, BarChart3, Building2, Check, Gavel, Handshake, Rocket, ShieldCheck, Trophy, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import './Sections.css';

function Section({ id, children }: { id: string; children: React.ReactNode }) {
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

    const element = document.getElementById(id);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [id]);

  return (
    <section id={id} className={`section ${visible ? 'visible' : ''}`}>
      {children}
    </section>
  );
}

export function Advantages() {
  return (
    <Section id="advantages">
      <div className="container">
        <h2 className="section-title">Почему паушальный взнос — 0 ₽?</h2>
        <p className="section-subtitle">Мы зарабатываем вместе с вами, а не на вас. Наш доход — это процент от ваших успешных сделок.</p>

        <div className="cards-grid">
          <div className="card">
            <div className="card-icon" style={{ color: '#00ff88' }}>
              <Handshake size={40} />
            </div>
            <h3 className="card-title">Честная модель</h3>
            <p className="card-text">Вы платите только роялти 30% от своего дохода. Заработали вы — заработали и мы. Нет дохода — нет платежей.</p>
          </div>
          <div className="card">
            <div className="card-icon" style={{ color: '#00ff88' }}>
              <Rocket size={40} />
            </div>
            <h3 className="card-title">Быстрый старт</h3>
            <p className="card-text">Не нужно копить на вход. Начинаете работать сразу после обучения с клиентами, которых мы предоставляем.</p>
          </div>
          <div className="card">
            <div className="card-icon" style={{ color: '#00ff88' }}>
              <ShieldCheck size={40} />
            </div>
            <h3 className="card-title">Минимальный риск</h3>
            <p className="card-text">Нулевые инвестиции на старте. Не берете кредиты, не рискуете личными средствами. Начинаете зарабатывать с первого клиента.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Market() {
  const [stats, setStats] = useState({ clients: 180000, growth: 40, potential: 15 });

  useEffect(() => {
    const animateStats = () => {
      let current = { clients: 0, growth: 0, potential: 0 };
      const target = { clients: 180000, growth: 40, potential: 15 };
      const duration = 2000;
      const step = duration / 16;

      const interval = setInterval(() => {
        current.clients += target.clients / (duration / step);
        current.growth += target.growth / (duration / step);
        current.potential += target.potential / (duration / step);

        if (current.clients >= target.clients) {
          current = target;
          clearInterval(interval);
        }

        setStats({
          clients: Math.floor(current.clients),
          growth: Math.floor(current.growth),
          potential: Math.floor(current.potential),
        });
      }, step);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateStats();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('market');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <Section id="market">
      <div className="container">
        <h2 className="section-title">Рынок банкротства растет</h2>
        <p className="section-subtitle">Сейчас самое время входить в эту нишу</p>

        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number">{stats.clients.toLocaleString('ru-RU')}</span>
            <p className="stat-label">заявлений на банкротство в 2023 году</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.growth}%</span>
            <p className="stat-label">рост рынка ежегодно</p>
          </div>
          <div className="stat-card">
            <span className="stat-number">{stats.potential} млн</span>
            <p className="stat-label">потенциальных клиентов в России</p>
          </div>
        </div>

        <div className="cards-grid" style={{ marginTop: '60px' }}>
          <div className="card">
            <div className="card-icon" style={{ color: '#00ff88' }}>
              <BarChart3 size={40} />
            </div>
            <h3 className="card-title">Высокий спрос</h3>
            <p className="card-text">По данным ЦБ РФ, более 15 млн россиян имеют просроченные кредиты и могут быть потенциальными клиентами процедуры банкротства.</p>
          </div>
          <div className="card">
            <div className="card-icon" style={{ color: '#00ff88' }}>
              <Gavel size={40} />
            </div>
            <h3 className="card-title">Легализация</h3>
            <p className="card-text">С 2015 года физлица могут законно списать долги через процедуру банкротства. Каждый год процедура становится проще и популярнее.</p>
          </div>
          <div className="card">
            <div className="card-icon" style={{ color: '#00ff88' }}>
              <Trophy size={40} />
            </div>
            <h3 className="card-title">Низкая конкуренция</h3>
            <p className="card-text">Рынок все еще молодой. Большинство регионов не насыщены качественными предложениями. У вас есть возможность стать лидером в своем городе.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Who() {
  return (
    <Section id="who">
      <div className="container">
        <h2 className="section-title">Для кого эта франшиза?</h2>
        <p className="section-subtitle">Проверьте, подходит ли вам этот бизнес</p>

        <div className="two-columns">
          <div className="column-card success">
            <h3 className="column-title">
              <Check size={24} style={{ color: '#00ff88' }} />
              Вам подойдет, если вы:
            </h3>
            <ul className="column-list">
              <li><Check size={16} style={{ color: '#00ff88' }} /> Хотите открыть прибыльный бизнес без больших вложений</li>
              <li><Check size={16} style={{ color: '#00ff88' }} /> Готовы работать с людьми и консультировать клиентов</li>
              <li><Check size={16} style={{ color: '#00ff88' }} /> Ищете стабильный доход в растущей нише</li>
              <li><Check size={16} style={{ color: '#00ff88' }} /> Хотите помогать людям решать финансовые проблемы законно</li>
              <li><Check size={16} style={{ color: '#00ff88' }} /> Готовы обучаться и следовать проверенной системе</li>
            </ul>
          </div>
          <div className="column-card danger">
            <h3 className="column-title">
              <X size={24} style={{ color: '#ff4444' }} />
              Не подойдет, если вы:
            </h3>
            <ul className="column-list">
              <li><X size={16} style={{ color: '#ff4444' }} /> Ищете пассивный доход без усилий</li>
              <li><X size={16} style={{ color: '#ff4444' }} /> Не готовы работать с клиентами и вести консультации</li>
              <li><X size={16} style={{ color: '#ff4444' }} /> Хотите заработать миллион за первый месяц</li>
              <li><X size={16} style={{ color: '#ff4444' }} /> Не умеете работать с документами и CRM-системами</li>
              <li><X size={16} style={{ color: '#ff4444' }} /> Планируете работать 1-2 часа в неделю</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process">
      <div className="container">
        <h2 className="section-title">Клиенты включены в пакет</h2>
        <p className="section-subtitle">Как это работает: от заявки до вашего дохода</p>

        <div className="process-steps">
          {[
            { num: 1, title: 'Получаете клиентов', text: 'Мы передаем вам теплые заявки из вашего региона через CRM-систему' },
            { num: 2, title: 'Проводите консультацию', text: 'По скриптам объясняете клиенту процесс и заключаете договор' },
            { num: 3, title: 'Передаете в работу', text: 'Наши юристы готовят документы и ведут дело в суде под вашим брендом' },
            { num: 4, title: 'Получаете доход', text: 'После оплаты клиента вы получаете 70% от суммы сделки' },
          ].map((step) => (
            <div key={step.num} className="step">
              <div className="step-number">{step.num}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Trust() {
  return (
    <Section id="trust">
      <div className="container">
        <h2 className="section-title">Полная прозрачность и доверие</h2>
        <p className="section-subtitle">Работаем официально с 2018 года</p>

        <div className="cards-grid">
          <div className="card">
            <div className="card-icon" style={{ color: '#00ff88' }}>
              {/* <FileContract size={40} /> */}
            </div>
            <h3 className="card-title">Официальный договор</h3>
            <p className="card-text">Заключаем юридически грамотный договор франчайзинга с прозрачными условиями. Никаких скрытых платежей.</p>
          </div>
          <div className="card">
            <div className="card-icon" style={{ color: '#00ff88' }}>
              <Award size={40} />
            </div>
            <h3 className="card-title">Проверенная репутация</h3>
            <p className="card-text">Более 5000 успешных дел по банкротству. Средний рейтинг 4.9/5 на независимых площадках.</p>
          </div>
          <div className="card">
            <div className="card-icon" style={{ color: '#00ff88' }}>
              <Building2 size={40} />
            </div>
            <h3 className="card-title">Офисы в 47 регионах</h3>
            <p className="card-text">Наши партнеры работают по всей России. Вы получаете поддержку федеральной сети.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
