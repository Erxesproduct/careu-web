import { ArrowRight, Heart, Leaf, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { categories, featuredProducts, products } from '@/lib/catalog';

export const metadata: Metadata = {
  title: 'Бидний тухай',
  description: 'Care U — Улаанбаатарт хүүхэд, гэр бүлийн хэрэгцээний бүтээгдэхүүн хүргэдэг дэлгүүр.',
};

export default function AboutPage() {
  const product = featuredProducts(1)[0];

  return (
    <>
      <div className="container page-head">
        <span className="eyebrow">Бидний тухай</span>
        <h1>Хүүхэд бүрийн өдөр тутмын халамж 💝</h1>
        <p>Care U нь Улаанбаатарт хүүхэд, гэр бүлийн хэрэгцээний бүтээгдэхүүн хүргэдэг дэлгүүр юм. Бид өдөр тутмын жижиг зүйлсийг сонгоход тань туслахыг зорьдог.</p>
      </div>

      <section className="section-tight">
        <div className="container info-grid">
          <div className="story-visual">
            <div className="story-photo story-photo-one">
              <Image src={product?.images[0] ?? '/images/product-placeholder.svg'} alt="Care U бүтээгдэхүүн" fill sizes="(max-width: 760px) 90vw, 420px" />
            </div>
            <div className="story-photo story-photo-two">
              <Image src={product?.images[1] ?? product?.images[0] ?? '/images/product-placeholder.svg'} alt="Хүүхдийн арчилгаа" fill sizes="(max-width: 760px) 60vw, 260px" />
            </div>
          </div>
          <div className="story-copy">
            <h2>Бид юу хийдэг вэ?</h2>
            <p>Хүүхдийн арчилгаа, хувирга, хооллолт, тоглоом, бэлэг — эдгээрийг нэг газраас сонгох нь эцэг эхчүүдэд цаг хэмнэдэг. Бид бүтээгдэхүүнээ ангилж, тайлбараар хангаж, хүргэлтийг хялбар болгохыг зорьдог.</p>
            <p>Захиалгыг сайтар савлаж, Улаанбаатар хотын хүрээнд хүргэдэг. Дэлгүүрээс авах сонголт ч боломжтой.</p>
            <div className="stat-row">
              <div className="stat"><strong>{categories.filter((category) => category.level === 0).length}</strong><span>ангилал</span></div>
              <div className="stat"><strong>{products.length}</strong><span>жишээ бүтээгдэхүүн</span></div>
              <div className="stat"><strong>1–2</strong><span>өдөр хүргэлт</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Бидний үнэт зүйлс</span>
            <h2>Халамжийг энгийн болгох</h2>
          </div>
          <div className="feature-grid three-up">
            <div className="info-card"><Heart size={26} color="var(--color-primary)" /><h3>Хайртай байдал</h3><p>Хүүхдэд тохирох зүйлсийг анхааралтай сонгодог.</p></div>
            <div className="info-card"><Sparkles size={26} color="var(--color-purple)" /><h3>Хялбар сонголт</h3><p>Ангилал, хайлт, тайлбараар хурдан олно уу.</p></div>
            <div className="info-card"><Leaf size={26} color="var(--color-secondary)" /><h3>Найдвартай хүргэлт</h3><p>Улаанбаатарт 1–2 ажлын өдөрт хүргэдэг.</p></div>
          </div>
          <p className="summary-note">Бодит бүтээгдэхүүн, үнэ, дүрсүүдийг erxes админд импортолсны дараа энэ хуудасны жишээ өгөгдлийг солино.</p>
          <div className="cta-panel">
            <div><h2>Манай бүтээгдэхүүнтэй танилцаарай</h2><p>Ангиллаар нь сонгож, сагсаа бүрдүүлээрэй.</p></div>
            <Link className="button button-light" href="/products">Бүтээгдэхүүн хайх <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
