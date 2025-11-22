'use client';
// app/page.jsx
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();
  // Mock data
  const latestPosts = [
    { id: 1, title: 'Bài đăng mới 1', image: '/post1.jpg' },
    // ...5 posts
  ];
  const partnerLogos = ['/armor.png', '/ricoh.png', /* ... */];
  const latestNews = [
    { id: 1, title: 'Tin tức 1', excerpt: 'Nội dung tóm tắt 1' },
    // ...3 news
  ];
  const featuredProducts = [
    { id: 1, name: 'Sản phẩm 1', image: '/prod1.jpg' },
    // ...several products
  ];

  return (
    <div>
      {/* Section 1: Horizontal Slider of Latest Posts */}
      <section className="container mx-auto my-8">
        <h2 className="text-xl font-semibold mb-4">{t('home.newestPosts')}</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {latestPosts.map((post) => (
            <article key={post.id} className="min-w-[250px] bg-white shadow rounded">
              <img src={post.image} alt={post.title} className="h-40 w-full object-cover rounded-t" />
              <div className="p-2">
                <h3 className="font-bold">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 2: Business Partner Logos */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-xl font-semibold mb-6">{t('home.partners')}</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {partnerLogos.map((logo, idx) => (
              <img key={idx} src={logo} alt={`Đối tác ${idx+1}`} className="h-12" />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Latest News Articles */}
      <section className="container mx-auto my-8">
        <h2 className="text-xl font-semibold mb-4">{t('home.latestNews')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <article key={news.id} className="bg-white shadow p-4 rounded">
              <h3 className="font-bold">{news.title}</h3>
              <p className="mt-2 text-gray-600">{news.excerpt}</p>
              <Link href={`/news/${news.id}`} className="text-blue-600 mt-2 inline-block">{t('home.readMore')}</Link>
            </article>
          ))}
        </div>
      </section>

      {/* Section 4: Featured/Popular Products */}
      <section className="container mx-auto my-8">
        <h2 className="text-xl font-semibold mb-4">{t('home.featuredProducts')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {featuredProducts.map((prod) => (
            <article key={prod.id} className="bg-white shadow rounded overflow-hidden">
              <img src={prod.image} alt={prod.name} className="h-40 w-full object-cover" />
              <div className="p-2">
                <h3 className="font-bold">{prod.name}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
