import type { Metadata } from 'next';
import { Noto_Sans_Mongolian } from 'next/font/google';
import { CartProvider } from '@/components/CartProvider';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './globals.css';

const bodyFont = Noto_Sans_Mongolian({
  subsets: ['mongolian', 'latin'],
  weight: '400',
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Care U — Хүүхдийн хэрэгцээын ертөнц',
    template: '%s | Care U',
  },
  description:
    'Care U бол Улаанбаатарт хүүхэд, гэр бүлийн хэрэгцээний бүтээгдэхүүн хүргэдэг дэлгүүр. Арчилгаа, хувирга, хооллолт, тоглоом.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn">
      <body className={bodyFont.variable}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
