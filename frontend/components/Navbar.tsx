export default function Navbar() {
  return (
    <nav className="w-full border-b border-neutral-200 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">
          AKDresser
        </h1>

        <div className="flex gap-6">
          <button className="text-neutral-700">
            Login
          </button>

          <button className="bg-black text-white px-5 py-2 rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
