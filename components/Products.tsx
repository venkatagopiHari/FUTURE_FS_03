const products = [
  {
    id: 1,
    name: "Air Zoom Alpha",
    price: "₹9,999",
    image: "/images/shoe1.webp",
  },
  {
    id: 2,
    name: "React Infinity Run",
    price: "₹12,499",
    image: "/images/shoe2.webp",
  },
  {
    id: 3,
    name: "Pegasus Turbo",
    price: "₹10,999",
    image: "/images/shoe3.webp",
  },
];

export default function Products() {
  return (
    <section id="products" className="px-8 py-20 bg-black text-white">
      <h2 className="text-4xl font-bold mb-10 text-center">
        Featured Shoes
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        {products.map((item) => (
          <div
            key={item.id}
            className="border border-gray-800 p-6 rounded-xl transition hover:scale-105 hover:border-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-contain bg-gray-900 rounded-lg mb-4"
            />

            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-400 mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
