"use client";
import { useEffect, useState } from "react";
import "./memory.css";

export default function Memory({ onClose }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="page">
      {/* Кнопка */}
      <button className="button-green" onClick={() => setOpen(true)}>
        Открыть
      </button>

      {/* Модальное окно */}
      {open && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={onClose}>Закрыть ❌</button>
            <h2>Наши дорогие минуты</h2>
            <p>
              Хочу на пару мгновений снова оказаться рядом с тобой в наших
              воспоминаниях…
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
