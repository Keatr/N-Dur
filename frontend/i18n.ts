// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      "home.newestPosts": "5 bài mới nhất",
      "home.partners": "Đối tác của chúng tôi",
      "home.latestNews": "Tin mới",
      "home.readMore": "Đọc thêm",
      "home.featuredProducts": "Sản phẩm nổi bật",
      "products.title": "Sản phẩm",
      "filters.industry": "Ngành",
      "filters.partner": "Đối tác",
      "filters.all": "Tất cả",
      "blog.title": "Blog",
      "news.title": "News",
      "about.title": "Về chúng tôi",
      "contact.title": "Liên hệ",
      "contact.nameLabel": "Họ tên",
      "contact.emailLabel": "Email",
      "contact.messageLabel": "Nội dung",
      "contact.submit": "Gửi",
      "contact.info": "Thông tin liên hệ",
      "contact.address": "Địa chỉ: 123 Đường A",
      "contact.phone": "Phone: +84 123 456 789",
      "contact.email": "Email: info@abc.com"
    }
  },
  en: {
    translation: {
      "home.newestPosts": "5 newest posts",
      "home.partners": "Our partners",
      "home.latestNews": "Latest news",
      "home.readMore": "Read more",
      "home.featuredProducts": "Featured products",
      "products.title": "Products",
      "filters.industry": "Industry",
      "filters.partner": "Partner",
      "filters.all": "All",
      "blog.title": "Blog",
      "news.title": "News",
      "about.title": "About us",
      "contact.title": "Contact",
      "contact.nameLabel": "Name",
      "contact.emailLabel": "Email",
      "contact.messageLabel": "Message",
      "contact.submit": "Send",
      "contact.info": "Contact info",
      "contact.address": "Address: 123 A Street",
      "contact.phone": "Phone: +84 123 456 789",
      "contact.email": "Email: info@abc.com"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi',
    lng: 'vi',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
