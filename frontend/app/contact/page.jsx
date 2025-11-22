'use client';
// app/contact/page.jsx
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto my-8 grid md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <form className="space-y-4">
        <h1 className="text-2xl font-bold">{t('contact.title')}</h1>
        <div>
          <label className="block">{t('contact.nameLabel')}</label>
          <input type="text" placeholder={t('contact.namePlaceholder')} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block">{t('contact.emailLabel')}</label>
          <input type="email" placeholder={t('contact.emailPlaceholder')} className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block">{t('contact.messageLabel')}</label>
          <textarea placeholder={t('contact.messagePlaceholder')} className="w-full border p-2 rounded" rows="5"></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white">{t('contact.submit')}</button>
      </form>

      {/* Company Contact Info */}
      <div>
        <h2 className="text-xl font-bold">{t('contact.info')}</h2>
        <p className="mt-2">{t('contact.address')}</p>
        <p className="mt-1">{t('contact.phone')}</p>
        <p className="mt-1">{t('contact.email')}</p>
      </div>
    </div>
  );
}
