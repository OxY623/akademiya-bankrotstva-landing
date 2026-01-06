import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import './Header.css';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Преимущества', href: '#advantages' },
    { label: 'Рынок', href: '#market' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Сравнение', href: '#comparison' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">
            АКАДЕМИЯ <span>БАНКРОТСТВА</span>
          </a>

          <nav className="nav-desktop">
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <button className="btn btn-pulse" onClick={() => document.getElementById('modal')?.classList.add('active')}>
              Зафиксировать 0 ₽
            </button>
          </nav>

          <button
            className="burger-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <>
          <div
            className="mobile-overlay"
            onClick={() => setMobileMenuOpen(false)}
          />
          <nav className="mobile-menu">
            <ul className="mobile-menu-list">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="btn btn-pulse"
              style={{ width: '100%' }}
              onClick={() => {
                document.getElementById('modal')?.classList.add('active');
                setMobileMenuOpen(false);
              }}
            >
              Зафиксировать 0 ₽
            </button>
          </nav>
        </>
      )}
    </header>
  );
}
