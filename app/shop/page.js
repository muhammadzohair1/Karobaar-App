import Product from "../components/Product";

export default function Shop() {
  const products = [
    {
      id: 1,
      name: "Olivia 100",
      category: "Skincare",
      price: "450",
      src: "/1.png",
      detail:
        "Classic moisturizing cream that works smoothly without leaving a white cast.",
    },
    {
      id: 2,
      name: "Black Cat",
      category: "Nostalgia",
      price: "280",
      src: "/2.png",
      detail:
        "The iconic childhood talcum powder with that unforgettable classic fragrance.",
    },
    {
      id: 3,
      name: "Zeera Biscuit",
      category: "Bakery",
      price: "150",
      src: "/3.png",
      detail:
        "Crispy, savory cumin biscuits—just like the old days when 6 came for Rs. 2.5!",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Our Collection
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Timeless classics and everyday favorites curated just for you.
            </p>
          </div>
          <span className="text-sm font-medium text-gray-500">
            Showing {products.length} products
          </span>
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              category={product.category}
              price={product.price}
              src={product.src}
              detail={product.detail}
            />
          ))}
        </div>
      </div>
    </main>
  );
}