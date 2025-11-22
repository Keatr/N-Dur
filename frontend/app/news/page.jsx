'use client';
// app/news/page.jsx
'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function NewsList() {
  const { t } = useTranslation();

  const latestNews = [
    { id: 1, title: 'Tin 1', excerpt: 'Tóm tắt 1' },
    { id: 2, title: 'Tin 2', excerpt: 'Tóm tắt 2' },
    { id: 3, title: 'Tin 3', excerpt: 'Tóm tắt 3' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-xl font-semibold mb-4">{t('news.latest')}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {latestNews.map(n => (
          <article key={n.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{n.title}</h3>
            <p className="text-sm text-gray-600">{n.excerpt}</p>
            <Link href={`/news/${n.id}`} className="text-blue-600 mt-2 inline-block">
              {t('home.readMore')}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
