'use client';

import { Menu, Search, ShoppingBag, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { nav } from '@/data/content';
import { useCart } from './CartProvider';

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="container header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </span>
          <span className="brand-text">Care <strong>U</strong></span>
        </Link>

        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Үндсэн цэс">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link className="icon-button" href="/products" aria-label="Хайх">
            <Search size={20} />
          </Link>
          <Link className="cart-button" href="/cart" aria-label="Сагс">
            <ShoppingBag size={20} />
            {count > 0 ? <span className="cart-count">{count}</span> : null}
          </Link>
          <button className="icon-button menu-toggle" onClick={() => setOpen((value) => !value)} type="button" aria-label="Цэс">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
