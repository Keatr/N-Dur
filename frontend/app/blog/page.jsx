'use client';
// app/blog/page.jsx
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function BlogList() {
  const { t } = useTranslation();
  const posts = [
    { id: 1, title: 'Bài viết 1', summary: 'Tóm tắt...' , slug:'bai-viet-1' },
    // ... more posts
  ];

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">{t('blog.title')}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white shadow p-4 rounded">
            <Link href={`/blog/${post.slug}`}>
              <h3 className="font-bold">{post.title}</h3>
              <p className="mt-2 text-gray-600">{post.summary}</p>
            </Link>
          </article>
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-6">
        <Pagination />
      </div>
    </div>
  );
}
