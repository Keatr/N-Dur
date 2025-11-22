'use client';
// app/products/page.jsx
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function ProductsPage() {
  const { t } = useTranslation();
  // Mock data and filter options
  const products = [ /* Array of product objects */ ];
  const industries = ['Industry A', 'Industry B', 'Industry C'];
  const partners = ['ARMOR', 'RICOH', 'Other'];
  
  return (
    <div className="container mx-auto my-8 flex flex-col md:flex-row">
      {/* Filter Sidebar */}
      <aside className="md:w-1/4 p-4 border rounded mb-6 md:mb-0 md:mr-6">
        <h3 className="font-semibold mb-2">{t('filters.industry')}</h3>
        <select className="w-full border p-2 mb-4">
          <option value="">{t('filters.all')}</option>
          {industries.map((ind) => (
            <option key={ind} value={ind}>{ind}</option>
          ))}
        </select>
        <h3 className="font-semibold mb-2">{t('filters.partner')}</h3>
        {partners.map((par) => (
          <div key={par} className="flex items-center mb-1">
            <input type="checkbox" id={par} name={par} className="mr-2" />
            <label htmlFor={par}>{par}</label>
          </div>
        ))}
      </aside>

      {/* Product Grid */}
      <main className="flex-1">
        <h1 className="text-2xl font-bold mb-4">{t('products.title')}</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((prod) => (
            <article key={prod.id} className="bg-white shadow rounded overflow-hidden">
              <Link href={`/products/${prod.id}`}>
                  <img src={prod.image} alt={prod.name} className="h-40 w-full object-cover" />
                  <div className="p-2">
                    <h3 className="font-bold">{prod.name}</h3>
                  </div>
                </Link>
            </article>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="mt-6">
          {/* Use a styled pagination bar (see below) */}
          <Pagination />
        </div>
      </main>
    </div>
  );
}
