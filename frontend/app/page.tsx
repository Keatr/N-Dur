'use client';
// app/page.tsx
'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';// ensure i18n initialized
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation();

  const latestPosts = [
    { id: 1, title: 'Bài mới 1', image: '/sample1.jpg' },
    { id: 2, title: 'Bài mới 2', image: '/sample2.jpg' },
    { id: 3, title: 'Bài mới 3', image: '/sample3.jpg' },
    { id: 4, title: 'Bài mới 4', image: '/sample4.jpg' },
    { id: 5, title: 'Bài mới 5', image: '/sample5.jpg' },
  ];

  const partners = ['/partners/armor.png','/partners/ricoh.png','/partners/dnp.png','/partners/dynic.png','/partners/general.png','/partners/iimak.png','/partners/union.png','/partners/cas.png','/partners/acettr.png'];

  const latestNews = [
    { id: 1, title: 'Tin 1', excerpt: 'Tóm tắt 1' },
    { id: 2, title: 'Tin 2', excerpt: 'Tóm tắt 2' },
    { id: 3, title: 'Tin 3', excerpt: 'Tóm tắt 3' },
  ];

  const featuredProducts = [
    { id: 1, name: 'Prod 1', image: '/prod1.jpg' },
    { id: 2, name: 'Prod 2', image: '/prod2.jpg' },
    { id: 3, name: 'Prod 3', image: '/prod3.jpg' },
  ];

  useEffect(() => {
    // optional: any client-only init
  }, []);

  return (
    <div>
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">{t('home.newestPosts')}</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {latestPosts.map(p => (
            <article key={p.id} className="min-w-[260px] bg-white rounded shadow">
              <img src={p.image} alt={p.title} className="h-44 w-full object-cover rounded-t" />
              <div className="p-3">
                <h3 className="font-semibold">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-6">{t('home.partners')}</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partners.map((p, idx) => <img key={idx} src={p} alt={`partner-${idx}`} className="h-12" />)}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">{t('home.latestNews')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latestNews.map(n => (
            <article key={n.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">{n.title}</h3>
              <p className="text-sm text-gray-600">{n.excerpt}</p>

              {/* <-- SỬA Ở ĐÂY: bỏ <a> bên trong Link */}
              <Link href={`/news/${n.id}`} className="text-blue-600 mt-2 inline-block">
                {t('home.readMore')}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-4">{t('home.featuredProducts')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProducts.map(p => (
            <article key={p.id} className="bg-white rounded shadow overflow-hidden">
              <img src={p.image} alt={p.name} className="h-44 w-full object-cover" />
              <div className="p-3">
                <h3 className="font-semibold">{p.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
