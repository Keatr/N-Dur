// components/Pagination.jsx
export default function Pagination() {
  return (
    <nav className="flex justify-center space-x-1">
      <button className="px-3 py-1 border rounded">&laquo;</button>
      <button className="px-3 py-1 border rounded bg-blue-100">1</button>
      <button className="px-3 py-1 border rounded">2</button>
      <button className="px-3 py-1 border rounded">3</button>
      <button className="px-3 py-1 border rounded">&raquo;</button>
    </nav>
  );
}
