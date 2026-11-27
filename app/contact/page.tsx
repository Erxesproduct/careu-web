import { Facebook, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/data/content';

export const metadata: Metadata = {
  title: 'Холбоо барих',
  description: 'Care U дэлгүүртэй холбогдох утас, хаяг, Facebook хуудас.',
};

export default function ContactPage() {
  return (
    <div className="container section-tight">
      <div className="page-head">
        <span className="eyebrow">Холбоо барих</span>
        <h1>Бидэнтэй ярилцаарай</h1>
        <p>Бүтээгдэхүүн, захиалга, хүргэлтийн талаарх асуултад таатайгаар хариулна.</p>
      </div>
      <div className="contact-grid">
        <div>
          <div className="contact-detail"><span><MapPin size={20} /></span><div><h3>Хаяг</h3><p>{site.address}</p></div></div>
          <div className="contact-detail"><span><Phone size={20} /></span><div><h3>Утас</h3><p><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></p></div></div>
          <div className="contact-detail"><span><Facebook size={20} /></span><div><h3>Facebook</h3><p><a href={site.socials[0].href} target="_blank" rel="noreferrer">Care U Facebook хуудас</a></p></div></div>
          <div className="info-card">
            <h3>Ажлын цаг</h3>
            <p>Даваа – Баасан: 09:00 – 18:00<br />Бямба: 10:00 – 15:00<br />Ням: амралтын өдөр</p>
          </div>
          <div className="info-card">
            <h3>Хүргэлт</h3>
            <p>{site.deliveryNote} Хүргэлтийн дүн 80,000₮-оос дээш захиалгад үнэгүй.</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
