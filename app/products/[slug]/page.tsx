import { ArrowRight, PackageCheck, RotateCcw, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AddToCartButton } from '@/components/AddToCartButton';
import { ProductCard } from '@/components/ProductCard';
import { ProductGallery } from '@/components/ProductGallery';
import { getProduct, getRelated, products } from '@/lib/catalog';
import { formatPrice } from '@/lib/format';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = getProduct(params.slug);
  return { title: product?.name ?? 'Бүтээгдэхүүн олдсонгүй', description: product?.shortDescription || undefined };
}

export default function ProductPage({ params }: Props) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = getRelated(product);

  return (
    <div className="container section-tight">
      <div className="page-head">
        <nav className="breadcrumb"><Link href="/">Нүүр</Link> / <Link href="/products">Бүтээгдэхүүн</Link> / {product.name}</nav>
      </div>
      <div className="detail-grid">
        <ProductGallery images={product.images} name={product.name} />
        <div className="detail-info">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>
          <div className="detail-meta">
            <span className="detail-tag">Хүүхдийн хэрэгцээ</span>
            {product.tags.slice(0, 3).map((tag) => <span className="detail-tag" key={tag}>{tag}</span>)}
          </div>
          <div className="detail-price">
            {formatPrice(product.price)}
            {product.oldPrice ? <span className="detail-old">{formatPrice(product.oldPrice)}</span> : null}
          </div>
          <p className="detail-stock">{product.stock > 0 ? `Нөөцөд ${product.stock} ширхэг байна` : 'Захиалгаар'} · 1–2 өдөрт хүргэнэ</p>
          <div className="detail-actions">
            <AddToCartButton slug={product.slug} />
            <Link className="button button-outline" href="/cart">Сагс руу <ArrowRight size={18} /></Link>
          </div>
          <p className="detail-copy">
            {product.description || `${product.name} — хүүхдийн өдөр тутмын хэрэгцээнд зориулсан, сайтар сонгосон бүтээгдэхүүн. Улаанбаатарт 1–2 өдөрт хүргэгдэнэ.`}
          </p>
          <ul className="detail-points">
            <li><PackageCheck size={16} /> Сайтар савлаж, бэлэгний картын хамт илгээнэ.</li>
            <li><ShieldCheck size={16} /> QPay аюулгүй төлбөр, eBarimt цахим баримт.</li>
            <li><RotateCcw size={16} /> Гэмтэлтэй тохиолдолд 7 хоногт солино.</li>
          </ul>
        </div>
      </div>

      {related.length ? (
        <section className="section">
          <div className="section-heading">
            <span className="eyebrow">Төстэй бүтээгдэхүүн</span>
            <h2>Мөн сонирхож магадгүй</h2>
          </div>
          <div className="product-grid">
            {related.map((item) => <ProductCard key={item.slug} product={item} />)}
          </div>
        </section>
      ) : null}
    </div>
  );
}
