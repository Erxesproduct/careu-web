'use client';

import { useState } from 'react';

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-card">
        <h2>Мессеж илгээгдлээ</h2>
        <p className="detail-copy">Баярлалаа! Энэ бол standalone demo тул мессеж хадгалагдахгүй. Бодит хүсэлтээ 72729909 дугаарт эсвэл Facebook хуудсаар илгээнэ үү.</p>
        <button className="button button-outline" onClick={() => setSent(false)} type="button">Өөр мессеж бичих</button>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
      <h2>Бидэнд мессеж үлдээнэ үү</h2>
      <div className="field-grid">
        <div className="field"><label htmlFor="contact-name">Нэр</label><input id="contact-name" name="name" required placeholder="Таны нэр" /></div>
        <div className="field"><label htmlFor="contact-email">Имэйл</label><input id="contact-email" name="email" type="email" required placeholder="name@example.com" /></div>
      </div>
      <div className="field"><label htmlFor="contact-message">Мессеж</label><textarea id="contact-message" name="message" required placeholder="Асуулт эсвэл санал..." /></div>
      <button className="button button-primary" type="submit">Илгээх</button>
    </form>
  );
}
