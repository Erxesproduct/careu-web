import type { Metadata } from 'next';
import { ProductExplorer } from '@/components/ProductExplorer';
import { products } from '@/lib/catalog';

export const metadata: Metadata = {
  title: 'Бүтээгдэхүүн',
  description: 'Care U хүүхдийн арчилгаа, хувирга, хооллолт, тоглоомын бүтээгдэхүүнүүд.',
};

export default function ProductsPage() {
  return (
    <div className="container section-tight">
      <div className="page-head">
        <span className="eyebrow">Дэлгүүр</span>
        <h1>Хүүхдийн хэрэгцээ</h1>
        <p>Ангилал, нэр, үнээр нь шүүж, хүүхдийнхээ хэрэгцээт зүйлсийг олно уу. Улаанбаатарт 1–2 өдөрт хүргэдэг.</p>
      </div>
      <ProductExplorer products={products} />
    </div>
  );
}
