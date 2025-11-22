// app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import NavBar from '../components/NavBar';

export const metadata = {
  title: 'ABC Co.',
  description: 'Landing page',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4">
            <NavBar />
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-gray-100">
          <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between">
            <div>
              <p className="font-semibold">ABC Co.</p>
              <p>Địa chỉ: 123 Đường A, TP</p>
              <p>Phone: +84 123 456 789</p>
              <p>Email: info@abc.com</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p>&copy; {new Date().getFullYear()} ABC Co. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
