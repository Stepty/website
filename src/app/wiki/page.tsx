import Link from 'next/link'
import { getAllCategories } from '@/lib/posts'

export default async function Wiki() {
  const categories = await getAllCategories()
  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Wiki</h1>
      <ul className="space-y-4">
        {categories.map((cat) => (
          <li key={cat}>
            <Link href={`/wiki/${encodeURIComponent(cat)}`} className="text-blue-600 hover:underline text-xl">
              {cat}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}