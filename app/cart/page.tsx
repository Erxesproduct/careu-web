'use client';

import { ArrowRight, ShoppingBag, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '@/components/CartProvider';
import { freeDeliveryThreshold } from '@/data/content';
import { formatPrice } from '@/lib/format';

export default function CartPage() {
  const { items, count, subtotal, setQuantity, remove, clear } = useCart();
  const [ready, setReady] = useState(false);

  useEffect(() => setReady(true), []);

  if (!ready) return <div className="container section-tight"><div className="empty-state"><h1>Сагс ачааллаж байна…</h1></div></div>;

  if (!items.length) {
    return (
      <div className="container section-tight">
        <div className="empty-state">
          <ShoppingBag size={42} />
          <h1>Таны сагс хоосон байна</h1>
          <p>Хүүхдэд тохирох зүйлсийг олоход бид туслая.</p>
          <Link className="button button-primary" href="/products">Бүтээгдэхүүн хайх <ArrowRight size={18} /></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container section-tight">
      <div className="page-head">
        <span className="eyebrow">Захиалга</span>
        <h1>Миний сагс</h1>
        <p>{count} бүтээгдэхүүн · Нийт {formatPrice(subtotal)}</p>
      </div>
      <div className="cart-layout">
        <div className="cart-lines">
          {items.map(({ product, quantity }) => (
            <div className="cart-line" key={product.slug}>
              <Link className="cart-line-image" href={`/products/${product.slug}`}>
                <Image src={product.images[0] ?? '/images/product-placeholder.svg'} alt={product.name} fill sizes="96px" />
              </Link>
              <div>
                <h3>{product.name}</h3>
                <p>{formatPrice(product.price)}</p>
                <div className="qty-control">
                  <button onClick={() => setQuantity(product.slug, quantity - 1)} type="button" aria-label="Багасгах">−</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(product.slug, quantity + 1)} type="button" aria-label="Нэмэгдүүлэх">+</button>
                </div>
              </div>
              <div className="cart-line-total">
                <strong>{formatPrice(product.price * quantity)}</strong>
                <button className="link-button" onClick={() => remove(product.slug)} type="button"><Trash2 size={13} /> Устгах</button>
              </div>
            </div>
          ))}
          <button className="link-button" onClick={clear} type="button">Сагсийг бүрэн цэвэрлэх</button>
        </div>
        <aside className="summary-card">
          <h2>Захиалгын дүн</h2>
          <div className="summary-row"><span>Бүтээгдэхүүн ({count})</span><span>{formatPrice(subtotal)}</span></div>
          <div className="summary-row"><span>Хүргэлт</span><span>{subtotal >= freeDeliveryThreshold ? 'Үнэгүй' : 'Тооцоолно'}</span></div>
          <div className="summary-row total"><span>Нийт</span><span>{formatPrice(subtotal)}</span></div>
          <Link className="button button-primary" href="/checkout">Захиалах <ArrowRight size={18} /></Link>
          <p className="summary-note">Улаанбаатарт 1–2 өдөрт хүргэдэг. {formatPrice(freeDeliveryThreshold)}-оос дээш захиалгад хүргэлт үнэгүй.</p>
        </aside>
      </div>
    </div>
  );
}
