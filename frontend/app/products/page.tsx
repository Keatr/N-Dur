'use client';
// app/products/page.tsx
'use client';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function ProductsPage() {
  const { t } = useTranslation();
  const products = Array.from({length:9}).map((_,i)=>({id:i+1,name:`Sản phẩm ${i+1}`, image:'/prod1.jpg'}));
  const industries = ['Packaging','Label','Industrial'];
  const partners = ['ARMOR','RICOH','DNP'];

  return (
    <div className="container mx-auto px-4 py-8 md:flex md:gap-6">
      <aside className="md:w-1/4 bg-white p-4 rounded shadow mb-6 md:mb-0">
        <h3 className="font-semibold mb-2">{t('filters.industry')}</h3>
        <select className="w-full border p-2 mb-4">
          <option value="">{t('filters.all')}</option>
          {industries.map(i => <option key={i}>{i}</option>)}
        </select>

        <h3 className="font-semibold mb-2">{t('filters.partner')}</h3>
        {partners.map(p => (
          <label key={p} className="flex items-center gap-2 mb-2">
            <input type="checkbox" /> {p}
          </label>
        ))}
      </aside>

      <main className="flex-1">
        <h1 className="text-2xl font-bold mb-4">{t('products.title')}</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map(prod=>(
            <article key={prod.id} className="bg-white rounded shadow overflow-hidden">
              <Link href={`/products/${prod.id}`}>
                <img src={prod.image} alt={prod.name} className="h-40 w-full object-cover"/>
                <div className="p-3"><h3 className="font-semibold">{prod.name}</h3></div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-6">
          {/* simple pagination placeholder */}
          <div className="flex justify-center gap-2">
            <button className="px-3 py-1 border rounded">&laquo;</button>
            <button className="px-3 py-1 border rounded bg-blue-100">1</button>
            <button className="px-3 py-1 border rounded">2</button>
            <button className="px-3 py-1 border rounded">&raquo;</button>
          </div>
        </div>
      </main>
    </div>
  );
}
