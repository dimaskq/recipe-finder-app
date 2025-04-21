import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:text-gray-200 transition"
        >
          Recipe Finder
        </Link>
        <nav className="flex space-x-4">
          <Link
            href="/"
            className="text-sm font-medium hover:text-gray-200 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/recipes"
            className="text-sm font-medium hover:text-gray-200 transition-colors duration-200"
          >
            Recipes
          </Link>
        </nav>
      </div>
    </header>
  );
}
