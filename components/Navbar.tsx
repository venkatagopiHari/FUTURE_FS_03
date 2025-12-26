export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 flex justify-between items-center bg-black text-white">
      <h1 className="text-2xl font-bold tracking-widest">NIKE X</h1>

      <ul className="flex gap-6 text-sm font-medium">
  <li>
    <a href="#home" className="hover:text-gray-400">
      Home
    </a>
  </li>
  <li>
    <a href="#products" className="hover:text-gray-400">
      Products
    </a>
  </li>
  <li>
    <a href="#about" className="hover:text-gray-400">
      About
    </a>
  </li>
  <li>
    <a href="#contact" className="hover:text-gray-400">
      Contact
    </a>
  </li>
</ul>

    </nav>
  );
}
