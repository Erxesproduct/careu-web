import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container section-tight">
      <div className="empty-state">
        <h1>Хуудас олдсонгүй</h1>
        <p>Хайж байгаа хуудасаа олж чадсангүй. Өөр хуудас руу шилжинэ үү.</p>
        <Link className="button button-primary" href="/">Нүүр хуудас руу</Link>
      </div>
    </div>
  );
}
