'use client';

import { Check, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useCart } from './CartProvider';

type Props = {
  slug: string;
  label?: string;
  compact?: boolean;
};

export function AddToCartButton({ slug, label = 'Сагсанд нэмэх', compact = false }: Props) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    add(slug);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  const className = compact
    ? added ? 'icon-add is-added' : 'icon-add'
    : added ? 'button button-success' : 'button button-primary';

  return (
    <button className={className} onClick={handleClick} type="button" aria-label={label || 'Сагсанд нэмэх'}>
      {added ? <Check size={compact ? 18 : 18} /> : <ShoppingBag size={18} />}
      {compact ? null : <span>{added ? 'Нэмэгдлээ' : label}</span>}
    </button>
  );
}
