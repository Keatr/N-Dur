'use client';
// app/blog/page.tsx
'use client';
import Link from 'next/link';
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function BlogList() {
  const { t } = useTranslation();
  const posts = Array.from({length:6}).map((_,i)=>({id:i+1,slug:`post-${i+1}`,title:`Bài viết ${i+1}`, summary:'Tóm tắt...'}));
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{t('blog.title')}</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map(p=>(
          <article key={p.id} className="bg-white p-4 rounded shadow">
            <Link href={`/blog/${p.slug}`}>
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.summary}</p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
