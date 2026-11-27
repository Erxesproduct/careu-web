import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice, truncate } from '@/lib/format';
import type { Product } from '@/lib/types';
import { AddToCartButton } from './AddToCartButton';

export function ProductCard({ product }: { product: Product }) {
  const image = product.images[0] ?? '/images/product-placeholder.svg';

  return (
    <article className="product-card">
      <Link className="product-image" href={`/products/${product.slug}`}>
        <Image src={image} alt={product.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
        {product.oldPrice ? <span className="sale-badge">Хямдрал</span> : null}
      </Link>
      <div className="product-body">
        <span className="product-category">{product.category}</span>
        <Link href={`/products/${product.slug}`}><h3>{product.name}</h3></Link>
        {product.shortDescription ? <p>{truncate(product.shortDescription, 62)}</p> : null}
        {product.rating > 0 ? (
          <span className="product-rating"><Star size={14} fill="currentColor" /> {product.rating.toFixed(1)}</span>
        ) : null}
        <div className="product-bottom">
          <div className="product-price">
            <strong>{formatPrice(product.price)}</strong>
            {product.oldPrice ? <s>{formatPrice(product.oldPrice)}</s> : null}
          </div>
          <AddToCartButton slug={product.slug} compact />
        </div>
      </div>
    </article>
  );
}
