// app/posts/page.tsx
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export default async function PostsPage() {
  const posts = await getAllPosts()

  return (
    <main className="mx-auto max-w-2xl p-4">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-4">
        {posts.map(({ slug, metadata }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`} className="text-xl text-blue-600 hover:underline">
              {metadata.title}
            </Link>
            <p className="text-gray-500 text-sm">{metadata.date}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
