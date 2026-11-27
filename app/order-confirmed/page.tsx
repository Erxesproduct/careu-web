'use client';

import { Check, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { orderStatuses } from '@/data/content';
import { formatPrice } from '@/lib/format';

type TestOrder = {
  number: string;
  total: number;
  itemCount: number;
  delivery: string;
  payment: string;
  barimt: boolean;
  status: string;
};

export default function OrderConfirmedPage({ searchParams }: { searchParams: { order?: string } }) {
  const [order, setOrder] = useState<TestOrder | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem('careu-last-order');
      setOrder(stored ? (JSON.parse(stored) as TestOrder) : null);
    } catch {
      setOrder(null);
    }
  }, []);

  const number = searchParams.order ?? order?.number ?? 'CU-DEMO';
  const statusLabel = orderStatuses.find((item) => item.key === order?.status)?.label ?? orderStatuses[0].label;

  return (
    <div className="container section-tight">
      <div className="confirm-card">
        <div className="confirm-icon"><Check size={40} /></div>
        <h1>Захиалга баталгаажлаа!</h1>
        <p>Баярлалаа. Таны тест захиалга энэ төхөөрөмж дээр хадгалагдлаа. Бодит баталгаажуулалт, төлбөр, баримтыг erxes админ холбогдсоны дараа хийнэ.</p>
        <div className="order-number">Захиалгын дугаар: {number}</div>
        <div className="summary-card">
          <h2>Захиалгын баримт (тест)</h2>
          <div className="summary-row"><span>Төлөв</span><span>{statusLabel}</span></div>
          <div className="summary-row"><span>Бүтээгдэхүүн</span><span>{order?.itemCount ?? '—'} ширхэг</span></div>
          <div className="summary-row"><span>Хүргэлт</span><span>{order?.delivery ?? '—'}</span></div>
          <div className="summary-row"><span>Төлбөр</span><span>{order?.payment === 'cash' ? 'Бэлнээр' : 'QPay (симуляци)'}</span></div>
          <div className="summary-row"><span>eBarimt</span><span>{order?.barimt ? 'Шаардсан' : 'Шаардаагүй'}</span></div>
          <div className="summary-row total"><span>Нийт</span><span>{order ? formatPrice(order.total) : '—'}</span></div>
          <p className="summary-note">Энэ нь зөвхөн standalone demo баримт бөгөөд erxes дээр бүртгэгдээгүй болно.</p>
        </div>
        <div className="hero-actions center-actions">
          <Link className="button button-primary" href="/products">Дахиад дэлгүүр хэсэх <ShoppingBag size={18} /></Link>
          <Link className="button button-outline" href="/contact">Холбоо барих</Link>
        </div>
      </div>
    </div>
  );
}
