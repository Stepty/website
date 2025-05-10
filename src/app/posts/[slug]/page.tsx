import { getAllSlugs, getPostBySlug } from '@/lib/posts'

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { metadata, contentHtml } = await getPostBySlug(slug);

  return (
    <article className="prose mx-auto p-4">
      <h1>{metadata.title}</h1>
      <time className="block mb-6 text-gray-500">{metadata.date}</time>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  )
}