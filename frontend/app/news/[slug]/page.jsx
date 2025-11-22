// app/news/[slug]/page.jsx
export default function NewsDetail({ params }) {
  const { slug } = params;
  const article = {
    title: 'Tiêu đề tin tức',
    content: 'Nội dung đầy đủ của tin tức...'
  };
  return (
    <article className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="prose">
        <p>{article.content}</p>
      </div>
    </article>
  );
}
