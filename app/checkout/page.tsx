'use client';

import { ArrowRight, CreditCard, MapPin, Store } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCart } from '@/components/CartProvider';
import { deliveryZones, freeDeliveryThreshold } from '@/data/content';
import { formatPrice } from '@/lib/format';

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [delivery, setDelivery] = useState(deliveryZones[0].name);
  const [payment, setPayment] = useState('qpay');
  const [barimt, setBarimt] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => setReady(true), []);

  const zone = deliveryZones.find((item) => item.name === delivery) ?? deliveryZones[0];
  const fee = zone.price === 0 || subtotal >= freeDeliveryThreshold ? 0 : zone.price;

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!items.length || submitting) return;
    setSubmitting(true);
    const number = `CU-${Date.now().toString(36).toUpperCase()}`;
    const order = {
      number,
      total: subtotal + fee,
      itemCount: items.length,
      delivery: zone.name,
      payment,
      barimt,
      status: 'pending',
    };
    window.localStorage.setItem('careu-last-order', JSON.stringify(order));
    clear();
    router.push(`/order-confirmed?order=${number}`);
  }

  if (!ready) return <div className="container section-tight"><div className="empty-state"><h1>Ачааллаж байна…</h1></div></div>;

  if (!items.length) {
    return (
      <div className="container section-tight">
        <div className="empty-state">
          <h1>Сагс хоосон байна</h1>
          <p>Эхлээд бүтээгдэхүүнээ сонгоно уу.</p>
          <Link className="button button-primary" href="/products">Бүтээгдэхүүн хайх</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container section-tight">
      <div className="page-head">
        <span className="eyebrow">Захиалга өгөх</span>
        <h1>Төлбөр ба хүргэлт</h1>
        <p>Мэдээллээ бөглөж, захиалгаа баталгаажуулна уу.</p>
      </div>

      <form className="cart-layout" onSubmit={handleSubmit}>
        <div className="form-card">
          <h2>Хүлээн авагчийн мэдээлэл</h2>
          <div className="field-grid">
            <div className="field"><label htmlFor="name">Нэр, овог</label><input id="name" name="name" required placeholder="Жишээ: Болд Энх" /></div>
            <div className="field"><label htmlFor="phone">Утас</label><input id="phone" name="phone" type="tel" required placeholder="99xx xxxx" /></div>
            <div className="field field-full"><label htmlFor="email">Имэйл</label><input id="email" name="email" type="email" required placeholder="name@example.com" /></div>
          </div>

          <h2>Хүргэлтийн хэлбэр</h2>
          <div className="radio-row">
            {deliveryZones.map((item) => (
              <label className="radio-option" key={item.name}>
                <input type="radio" name="delivery" value={item.name} checked={delivery === item.name} onChange={() => setDelivery(item.name)} />
                <span><MapPin size={16} /> <strong>{item.name}</strong> · {item.days} · {item.price === 0 ? 'үнэгүй' : formatPrice(item.price)}</span>
              </label>
            ))}
          </div>
          <div className="field"><label htmlFor="address">Хаяг (хүргэлтийн үед)</label><textarea id="address" name="address" placeholder="Дүүрэг, хороо, байр, орц" /></div>

          <h2>Төлбөр</h2>
          <div className="radio-row">
            <label className="radio-option">
              <input type="radio" name="payment" value="qpay" checked={payment === 'qpay'} onChange={() => setPayment('qpay')} />
              <span><CreditCard size={16} /> QPay — картаар аюулгүй төлөх</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="payment" value="cash" checked={payment === 'cash'} onChange={() => setPayment('cash')} />
              <span><Store size={16} /> Хүргэлтийн үед бэлнээр төлөх</span>
            </label>
          </div>
          <label className="checkbox-row">
            <input type="checkbox" checked={barimt} onChange={(event) => setBarimt(event.target.checked)} />
            eBarimt цахим баримт шаардлагатай
          </label>
        </div>

        <aside className="summary-card">
          <h2>Захиалгын дүн</h2>
          <div className="summary-row"><span>Бүтээгдэхүүн ({items.length})</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-row"><span>Хүргэлт</span><span>{fee === 0 ? 'Үнэгүй' : formatPrice(fee)}</span></div>
          <div className="summary-row total"><span>Нийт</span><span>{formatPrice(subtotal + fee)}</span></div>
          <button className="button button-primary" type="submit" disabled={submitting}>Захиалгаа баталгаажуулах <ArrowRight size={18} /></button>
          <p className="summary-note">Энэ бол standalone хувилбар: тест захиалга хадгалагдах боловч бодит төлбөр авагдахгүй, eBarimt баримт олгогдохгүй. QPay болон eBarimt тохиргоог erxes админд хийсний дараа бодит төлбөр холбоно.</p>
        </aside>
      </form>
    </div>
  );
}
