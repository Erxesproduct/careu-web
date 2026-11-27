import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { nav, site } from '@/data/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <Link className="brand brand-footer" href="/">
            <span className="brand-mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
            <span className="brand-text">Care <strong>U</strong></span>
          </Link>
          <p>{site.tagline} 💝</p>
          <p className="footer-small">{site.deliveryNote}</p>
          <div className="footer-socials">
            {site.socials.map((social) => (
              <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noreferrer">
                <Facebook size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3>Туслах цэс</h3>
          <ul className="footer-links">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3>Холбоо барих</h3>
          <ul className="footer-contact">
            <li><MapPin size={17} /> {site.address}</li>
            <li><Phone size={17} /> <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>
            {site.email ? <li><Mail size={17} /> <a href={`mailto:${site.email}`}>{site.email}</a></li> : null}
            <li>
              <Facebook size={17} />
              <a href={site.socials[0].href} target="_blank" rel="noreferrer">Facebook хуудас</a>
            </li>
          </ul>
        </div>

        <div className="footer-cta">
          <h3>Care U-гийн мэдээг хүлээж аваарай</h3>
          <p>Шинэ бүтээгдэхүүн, арчилгааны зөвлөгөө, хямдралын мэдээг биднээс хүлээж аваарай.</p>
          <Link className="button button-light" href="/blog">Нийтлэл унших</Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Care U. Бүх эрх хадгалагдсан.</span>
        <span>Онлайн худалдааг хөгжүүлэгч платформ</span>
      </div>
    </footer>
  );
}
