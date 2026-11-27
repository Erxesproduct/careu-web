import { ArrowRight, MessageCircleQuestion } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { faqs, orderStatuses } from '@/data/content';

export const metadata: Metadata = {
  title: 'Түгээмэл асуултууд',
  description: 'Care U хүргэлт, төлбөр, захиалгын талаарх түгээмэл асуултууд.',
};

export default function FaqPage() {
  return (
    <div className="container section-tight">
      <div className="page-head">
        <span className="eyebrow">Тусламж</span>
        <h1>Түгээмэл асуулт, хариулт</h1>
        <p>Хүргэлт, төлбөр, захиалгын талаар хамгийн их асуудаг зүйлсийг энд цуглууллаа.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <div className="faq-item" key={faq.question}>
            <h3><MessageCircleQuestion size={16} /> {faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Захиалгын төлөв</span>
          <h2>Захиалга маань хаана байна?</h2>
          <p>Захиалга дараах шатуудаар дамжина. Төлөв бүрт танд мэдэгдэл очно.</p>
        </div>
        <div className="chip-row">
          {orderStatuses.map((status, index) => (
            <span className="chip" key={status.key}>{index + 1}. {status.label}</span>
          ))}
        </div>
        <div className="cta-panel">
          <div><h2>Өөр асуулт байна уу?</h2><p>Бидэнд шууд хандаж, бүх асуултаа асуугаарай.</p></div>
          <Link className="button button-light" href="/contact">Холбоо барих <ArrowRight size={18} /></Link>
        </div>
      </section>
    </div>
  );
}
