// components/LanguageSwitcher.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import i18nInstance from '../i18n';

export default function LanguageSwitcher() {
  const [lang, setLang] = useState(i18nInstance.language || 'vi');

  function changeLang(code: string) {
    i18nInstance.changeLanguage(code);
    setLang(code);
  }

  return (
    <div className="flex items-center gap-2">
      <button className={`px-2 py-1 rounded ${lang === 'vi' ? 'bg-blue-600 text-white' : 'bg-white'}`} onClick={() => changeLang('vi')}>VI</button>
      <button className={`px-2 py-1 rounded ${lang === 'en' ? 'bg-blue-600 text-white' : 'bg-white'}`} onClick={() => changeLang('en')}>EN</button>
    </div>
  );
}
