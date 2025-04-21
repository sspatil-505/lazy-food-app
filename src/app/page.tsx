import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-amber-50 text-gray-900 p-4">
      <h1 className="text-4xl font-bold mb-6">🍽️ Lazy Food App</h1>

      <div className="space-y-4">
        <Link href="/dish-search">
          <button className="px-6 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition">
            Search by Dish Name
          </button>
        </Link>

        <Link href="/ingredients-upload">
          <button className="px-6 py-3 rounded-xl bg-green-500 text-white hover:bg-green-600 transition">
            Upload Ingredients
          </button>
        </Link>

        <Link href="/dish-upload">
          <button className="px-6 py-3 rounded-xl bg-purple-500 text-white hover:bg-purple-600 transition">
            Upload Dish Image
          </button>
        </Link>
      </div>
    </main>
  );
}
