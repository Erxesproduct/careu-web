import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { posts } from '@/data/content';

export const metadata: Metadata = {
  title: 'Нийтлэл',
  description: 'Хүүхдийн арчилгаа, хооллолт, хөгжүүлэх тоглоомын талаарх зөвлөгөө.',
};

export default function BlogPage() {
  return (
    <div className="container section-tight">
      <div className="page-head">
        <span className="eyebrow">Нийтлэл</span>
        <h1>Халамжийн тухай ярья</h1>
        <p>Хүүхдийн арчилгаа, хувирга сонголт, тоглоомоор хөгжүүлэх тухай бидний зөвлөгөө.</p>
      </div>
      <div className="post-grid">
        {posts.map((post) => (
          <article className="post-card" key={post.slug}>
            <Link className="post-cover" href={`/blog/${post.slug}`}>
              <Image src={post.image} alt={post.title} fill sizes="(max-width: 760px) 90vw, 360px" />
            </Link>
            <div className="post-body">
              <span className="post-meta">{post.category}</span>
              <Link href={`/blog/${post.slug}`}><h2>{post.title}</h2></Link>
              <p>{post.excerpt}</p>
              <div className="post-foot">{post.date} · {post.readTime}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
