import Link from 'next/link'
import { getAllCategories, getPostsByCategory } from '@/lib/posts'

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({ category }))
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = await params
  const posts = await getPostsByCategory(category)

  return (
    <main className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{category}</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} className="text-blue-600 hover:underline">
              {post.metadata.title}
            </Link>
            <p className="text-gray-500 text-sm">{post.metadata.date}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}