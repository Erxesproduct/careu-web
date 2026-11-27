import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '@/data/content';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((item) => item.slug === params.slug);
  return { title: post?.title ?? 'Нийтлэл олдсонгүй', description: post?.excerpt };
}

export default function PostPage({ params }: Props) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="container section-tight">
      <nav className="breadcrumb"><Link href="/">Нүүр</Link> / <Link href="/blog">Нийтлэл</Link> / {post.title}</nav>
      <article className="article">
        <h1 className="article-title">{post.title}</h1>
        <p className="post-foot">{post.category} · {post.date} · {post.readTime}</p>
        <div className="article-cover">
          <Image src={post.image} alt={post.title} fill sizes="(max-width: 760px) 90vw, 780px" priority />
        </div>
        <p className="post-meta">{post.excerpt}</p>
        {post.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <Link className="button button-outline" href="/blog">Бүх нийтлэл <ArrowRight size={18} /></Link>
      </article>
    </div>
  );
}
