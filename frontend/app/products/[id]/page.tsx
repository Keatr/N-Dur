// app/products/[id]/page.tsx
'use client';
import { useRouter } from 'next/router';

export default function ProductDetail({ params }: any) {
  const id = params?.id ?? '1';
  const product = { id, name: `Sản phẩm ${id}`, image: '/prod1.jpg', description: 'Mô tả chi tiết...' };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="md:flex gap-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 rounded" />
        <div className="mt-4 md:mt-0">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
