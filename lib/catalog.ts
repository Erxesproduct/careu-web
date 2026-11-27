import categoriesJson from '@/data/categories.json';
import productsJson from '@/data/products.json';
import type { CategoryNode, Product } from './types';

export const products = productsJson as Product[];

export const categories = categoriesJson as CategoryNode[];

export const topCategories = categories.filter((category) => category.level === 0);

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getRelated(product: Product, limit = 4): Product[] {
  return products
    .filter((item) => item.slug !== product.slug && item.category === product.category)
    .slice(0, limit);
}

export function featuredProducts(limit = 8): Product[] {
  const featured = products.filter((product) => product.featured);
  const pool = featured.length >= limit ? featured : products;
  return pool.slice(0, limit);
}

export function categoryCounts(): Map<string, number> {
  const counts = new Map<string, number>();
  for (const product of products) {
    counts.set(product.category, (counts.get(product.category) ?? 0) + 1);
  }
  return counts;
}
