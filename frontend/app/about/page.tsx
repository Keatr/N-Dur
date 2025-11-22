'use client';
// app/about/page.tsx
import '../../i18n';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{t('about.title')}</h1>
      <p>ABC Co. là công ty chuyên cung cấp ... (viết nội dung ở đây)</p>
    </section>
  );
}
