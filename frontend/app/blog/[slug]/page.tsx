// app/blog/[slug]/page.tsx
'use client';
export default function BlogDetail({ params }: any) {
  const { slug } = params;
  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{slug.replace('-', ' ')}</h1>
      <div className="prose">
        <p>Nội dung chi tiết cho {slug}...</p>
      </div>
    </article>
  );
}
