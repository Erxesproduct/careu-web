import { ArrowRight, Gift, Heart, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { faqs, highlights, site } from '@/data/content';
import { featuredProducts, products, topCategories } from '@/lib/catalog';

const categoryEmoji = ['🧴', '🧷', '🍚', '🧸', '🎁'];
const highlightIcons = [Truck, ShieldCheck, Heart, Gift];

export default function HomePage() {
  const heroProducts = featuredProducts(3);
  const picked = featuredProducts(8);
  const categories = topCategories;

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow"><Sparkles size={14} /> Хүүхдийн өдөр тутмын халамж</span>
            <h1>Хайрлаж, хамгаалж, <em>өсгөнө</em>.</h1>
            <p className="hero-lead">{site.tagline}. Арчилгаа, хувирга, хооллолт, тоглоом — хүүхдийн хэрэгцээт бүхнийг нэг дороос олно уу.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/products">Бүтээгдэхүүн хайх <ArrowRight size={18} /></Link>
              <Link className="button button-outline" href="/about">Бидний тухай</Link>
            </div>
            <div className="hero-note"><span className="hero-note-dot" /> {site.deliveryNote}</div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-blob" />
            {heroProducts.map((product, index) => (
              <div key={product.slug} className={`hero-book hero-book-${index + 1}`}>
                <Image src={product.images[0] ?? '/images/product-placeholder.svg'} alt="" fill sizes="240px" priority />
              </div>
            ))}
            <div className="hero-sticker"><strong>1–2</strong><span>өдөрт хүргэнэ</span></div>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          {highlights.map((item, index) => {
            const Icon = highlightIcons[index];
            return (
              <div className="trust-item" key={item.title}>
                <span className="trust-icon"><Icon size={22} /></span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Ангилал</span>
            <h2>Хүүхэд бүрт хэрэгтэй зүйлс</h2>
            <p>Өдөр тутмын арчилгаанаас эхлээд тоглоом, бэлэг хүртэл ангиллаар нь хайж олоорой.</p>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Link className="category-card" href="/products" key={category.id}>
                <span className="category-emoji">{categoryEmoji[index % categoryEmoji.length]}</span>
                <h3>{category.name}</h3>
                <span>Шарах →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Шилдэг сонголт</span>
            <h2>Эхлээд үүнээс харж болно</h2>
            <p>Эцэг эхчүүдийн хамгийн их хайдаг, шинээр нэмэгдсэн бүтээгдэхүүнүүд энд байна.</p>
          </div>
          <div className="product-grid">
            {picked.map((product) => <ProductCard key={product.slug} product={product} />)}
          </div>
          <div className="hero-actions center-actions">
            <Link className="button button-dark" href="/products">Бүх бүтээгдэхүүн <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section feature-band">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Яагаад Care U?</span>
            <h2>Хүргэлтээс илүү зүйл</h2>
            <p>Хүүхдийнхээ өдөр тутмын хэрэгцээг найдвартай, хялбархан хангахын тулд энэ дэлгүүрийг бэлдсэн.</p>
          </div>
          <div className="feature-grid">
            {highlights.map((item) => (
              <div className="feature-item" key={item.title}>
                <span aria-hidden="true">✦</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <div className="story-visual">
            <div className="story-photo story-photo-one">
              <Image src={heroProducts[0]?.images[1] ?? heroProducts[0]?.images[0] ?? '/images/product-placeholder.svg'} alt="Care U бүтээгдэхүүн" fill sizes="(max-width: 760px) 90vw, 420px" />
            </div>
            <div className="story-photo story-photo-two">
              <Image src={heroProducts[1]?.images[0] ?? '/images/product-placeholder.svg'} alt="Хүүхдийн арчилгааны бүтээгдэхүүн" fill sizes="(max-width: 760px) 60vw, 260px" />
            </div>
            <div className="story-badge"><strong>5</strong><span>үндсэн ангилал</span></div>
          </div>
          <div className="story-copy">
            <span className="eyebrow">Бидний тухай</span>
            <h2>Хүүхдийн халамжийг хялбар болгоё</h2>
            <p>Care U нь Улаанбаатарт хүүхэд, гэр бүлийн хэрэгцээний бүтээгдэхүүн хүргэдэг дэлгүүр юм. Бид арчилгаа, хувирга, хооллолт, тоглоом, бэлгийг нэг дор цуглуулж, сонгоход хялбар болгохыг зорьдог.</p>
            <ul className="check-list">
              <li>Нас, хэрэгцээгээр нь ангилсан бүтээгдэхүүн</li>
              <li>Улаанбаатарт 1–2 өдөрт хүргэлт, дэлгүүрээс авах боломж</li>
              <li>QPay төлбөр болон eBarimt цахим баримтын сонголт</li>
            </ul>
            <p className="summary-note">Энэ хувилбарт үзүүлсэн каталог болон үнэ нь review зориулсан жишээ өгөгдөл юм. Бодит каталогийг erxes админд импортолсны дараа холбоно.</p>
            <Link className="button button-primary" href="/about">Илүү мэдэх <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container faq-grid">
          <div className="section-heading">
            <span className="eyebrow">Түгээмэл асуулт</span>
            <h2>Таны сонирхож байгаа зүйлс</h2>
            <p>Хүргэлт, төлбөр, захиалгын талаарх түгээмэл асуултуудад хариуллаа.</p>
            <Link className="button button-outline" href="/faq">Бүх асуулт хариулт <ArrowRight size={18} /></Link>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 4).map((faq) => (
              <div className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="cta-panel">
            <div>
              <h2>Хүүхдийнхээ хэрэгцээт зүйлсийг олъё</h2>
              <p>{products.length} жишээ бүтээгдэхүүнээс эхлэн та бүтээгдэхүүнээ сонгож, сагсаа бүрдүүлээрэй.</p>
            </div>
            <Link className="button button-light" href="/products">Дэлгүүр хэсэх <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
