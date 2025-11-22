'use client';
// app/about/page.jsx
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto my-8 space-y-6">
      <h1 className="text-2xl font-bold">{t('about.title')}</h1>
      <p>{t('about.content')}</p>
      {/* Add images or team info as desired */}
    </div>
  );
}
