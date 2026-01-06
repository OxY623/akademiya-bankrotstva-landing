import { useEffect, useState } from 'react';
import './Timer.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Timer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

      const savedEndTime = localStorage.getItem('timerEndTime');
      let endTime: Date;

      if (savedEndTime) {
        endTime = new Date(parseInt(savedEndTime));
        if (endTime < now) {
          endTime = endOfMonth;
          localStorage.setItem('timerEndTime', endTime.getTime().toString());
        }
      } else {
        endTime = endOfMonth;
        localStorage.setItem('timerEndTime', endTime.getTime().toString());
      }

      const diff = endTime.getTime() - now.getTime();

      if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);

    return () => clearInterval(interval);
  }, []);

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="timer-block">
      <div className="timer-title">До конца акции «Паушальный взнос 0 ₽» осталось:</div>
      <div className="timer">
        <div className="timer-item">
          <span className="timer-value">{pad(timeLeft.days)}</span>
          <span className="timer-label">дней</span>
        </div>
        <div className="timer-item">
          <span className="timer-value">{pad(timeLeft.hours)}</span>
          <span className="timer-label">часов</span>
        </div>
        <div className="timer-item">
          <span className="timer-value">{pad(timeLeft.minutes)}</span>
          <span className="timer-label">минут</span>
        </div>
        <div className="timer-item">
          <span className="timer-value">{pad(timeLeft.seconds)}</span>
          <span className="timer-label">секунд</span>
        </div>
      </div>
    </div>
  );
}
