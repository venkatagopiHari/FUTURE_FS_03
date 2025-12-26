export default function Hero() {
  return (
    <section
  id="home"
  className="h-[80vh] flex flex-col items-center justify-center text-center px-6"
>

      <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
        JUST DO IT
      </h1>

      <p className="mt-6 max-w-xl text-gray-300">
        Push your limits. Run faster. Train harder.
        Discover the future of performance wear.
      </p>

      <button className="mt-8 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
        Shop Now
      </button>
    </section>
  );
}
