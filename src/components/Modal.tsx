import { useState } from 'react';
import { X } from 'lucide-react';
import { submitApplication } from '../services/supabase';
import './Modal.css';

export function Modal() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const formatPhone = (value: string) => {
    let digits = value.replace(/\D/g, '');
    if (digits.length > 0 && digits[0] !== '7') {
      digits = '7' + digits;
    }
    let formatted = '+7';
    if (digits.length > 1) formatted += ' (' + digits.substring(1, 4);
    if (digits.length >= 5) formatted += ') ' + digits.substring(4, 7);
    if (digits.length >= 8) formatted += '-' + digits.substring(7, 9);
    if (digits.length >= 10) formatted += '-' + digits.substring(9, 11);
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitApplication(formData);
      setSuccess(true);
      setTimeout(() => {
        closeModal();
        setFormData({ name: '', phone: '', email: '', city: '', consent: false });
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    document.getElementById('modal')?.classList.remove('active');
  };

  return (
    <div className="modal" id="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={closeModal}>
          <X size={24} />
        </button>
        <h2 className="modal-title">Зафиксировать условия 0 ₽</h2>

        {success ? (
          <div className="form-success" style={{ display: 'block' }}>
            Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Ваше имя *</label>
              <input
                type="text"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Телефон *</label>
              <input
                type="tel"
                name="phone"
                className="form-input"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="+7 (___) ___-__-__"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Город</label>
              <input
                type="text"
                name="city"
                className="form-input"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <label htmlFor="consent">
                Я согласен на обработку персональных данных и с политикой конфиденциальности
              </label>
            </div>

            <button
              type="submit"
              className="btn"
              style={{ width: '100%' }}
              disabled={loading}
            >
              {loading ? 'Отправка...' : 'Отправить заявку'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
