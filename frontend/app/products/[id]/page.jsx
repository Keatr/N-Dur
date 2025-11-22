// app/products/[id]/page.jsx
export default function ProductDetail({ params }) {
  const { id } = params;
  // Mock product data lookup by id
  const product = {
    id,
    name: `Sản phẩm ${id}`,
    image: `/prod${id}.jpg`,
    description: `Mô tả chi tiết về Sản phẩm ${id}.`
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name}
             className="w-full md:w-1/2 object-cover rounded" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}
