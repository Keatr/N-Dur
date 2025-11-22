'use client';
// app/contact/page.tsx
'use client';
import { useTranslation } from 'react-i18next';
import '../../i18n';

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
      <form className="space-y-4 bg-white p-4 rounded shadow">
        <h1 className="text-2xl font-bold">{t('contact.title')}</h1>
        <label className="block">
          <span className="text-sm font-medium">{t('contact.nameLabel')}</span>
          <input className="mt-1 block w-full border p-2 rounded" type="text" />
        </label>
        <label className="block">
          <span className="text-sm font-medium">{t('contact.emailLabel')}</span>
          <input className="mt-1 block w-full border p-2 rounded" type="email" />
        </label>
        <label className="block">
          <span className="text-sm font-medium">{t('contact.messageLabel')}</span>
          <textarea className="mt-1 block w-full border p-2 rounded" rows={5}></textarea>
        </label>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">{t('contact.submit')}</button>
      </form>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-semibold">{t('contact.info')}</h2>
        <p className="mt-2">{t('contact.address')}</p>
        <p className="mt-1">{t('contact.phone')}</p>
        <p className="mt-1">{t('contact.email')}</p>
      </div>
    </section>
  );
}
