'use client';

import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '@/lib/types';

export function ProductExplorer({ products }: { products: Product[] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Бүгд');
  const [sort, setSort] = useState('featured');

  const categories = useMemo(
    () => ['Бүгд', ...Array.from(new Set(products.map((product) => product.category)))],
    [products],
  );

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'Бүгд' || product.category === category;
      const matchesQuery = !needle || product.name.toLowerCase().includes(needle) || product.category.toLowerCase().includes(needle);
      return matchesCategory && matchesQuery;
    });

    if (sort === 'price-asc') return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') return [...filtered].sort((a, b) => b.price - a.price);
    if (sort === 'name') return [...filtered].sort((a, b) => a.name.localeCompare(b.name, 'mn'));
    return filtered;
  }, [products, query, category, sort]);

  return (
    <>
      <div className="toolbar">
        <div className="search-box">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Бүтээгдэхүүн хайх..." aria-label="Бүтээгдэхүүн хайх" />
        </div>
        <select className="select-box" value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Эрэмбэлэх">
          <option value="featured">Эрэмбэ: дэлгэцэнд байгаагаар</option>
          <option value="price-asc">Үнэ: багаас их рүү</option>
          <option value="price-desc">Үнэ: ихээс бага руу</option>
          <option value="name">Нэрээр</option>
        </select>
      </div>
      <div className="chip-row">
        {categories.map((item) => (
          <button className={item === category ? 'chip is-active' : 'chip'} key={item} onClick={() => setCategory(item)} type="button">
            {item}
          </button>
        ))}
      </div>
      <p className="result-count">{visible.length} бүтээгдэхүүн олдлоо</p>
      {visible.length ? (
        <div className="product-grid">
          {visible.map((product) => <ProductCard product={product} key={product.slug} />)}
        </div>
      ) : (
        <div className="empty-state">
          <h2>Хайсан бүтээгдэхүүн олдсонгүй</h2>
          <p>Өөр түлхүүр үг эсвэл ангилал сонгож үзнэ үү.</p>
          <button className="button button-primary" onClick={() => { setQuery(''); setCategory('Бүгд'); }} type="button">Шүүлтүүр цэвэрлэх</button>
        </div>
      )}
    </>
  );
}
