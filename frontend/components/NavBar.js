// frontend/components/NavBar.js
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
function NavBar() {
  const { t, i18n } = useTranslation();
  return (
    <nav>
      <Link href="/">{t('nav.home')}</Link> | 
      <Link href="/products">{t('nav.products')}</Link> | 
      <Link href="/blog">{t('nav.blog')}</Link> | 
      <Link href="/news">{t('nav.news')}</Link> | 
      <Link href="/about">{t('nav.about')}</Link> | 
      <Link href="/contact">{t('nav.contact')}</Link>
      <button onClick={() => i18n.changeLanguage('vi')}>VI</button>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
    </nav>
  );
}
