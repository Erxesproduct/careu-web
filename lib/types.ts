export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  categoryId: number;
  price: number;
  oldPrice: number | null;
  images: string[];
  shortDescription: string;
  description: string;
  stock: number;
  rating: number;
  featured: boolean;
  tags: string[];
};

export type CategoryNode = {
  id: number;
  name: string;
  parent_id: number | null;
  level: number;
};

export type CartLine = {
  slug: string;
  quantity: number;
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  body: string[];
  image: string;
};
