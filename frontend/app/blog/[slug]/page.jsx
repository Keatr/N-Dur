// app/blog/[slug]/page.jsx
export default function BlogDetail({ params }) {
  const { slug } = params;
  // Mock post data by slug
  const post = {
    title: 'Tiêu đề bài viết',
    content: 'Nội dung chi tiết của bài viết...'
  };
  return (
    <article className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose">
        <p>{post.content}</p>
        {/* More paragraphs/images as needed */}
      </div>
    </article>
  );
}
