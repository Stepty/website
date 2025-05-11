// app/page.tsx
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'


export default async function Home() {
  // Fetch & sort all posts
  const posts = await getAllPosts();
  // Show only the 2 (or however many) most recent
  const latest = posts.slice(0, 2);

  return (
    <main className="h-screen w-screen bg-gradient-to-l from-gray-200 via-fuchsia-200 to-stone-100 flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-white">
      
      {/* Hero */}
      <section className="text-center max-w-2xl bg-white/15 p-10 border rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Hi, I’m Stephen Ni.</h1>
        <p className="text-lg text-gray-600 mb-6">
          This is my personal website where I share my projects, thoughts, and more.
        </p>
        <Link
          href="/about"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Learn More About Me
        </Link>
      </section>

      {/* Blog */}
      <section className="mt-16 w-full max-w-4xl bg-white/15 p-10 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lattest blog posts */}
          {latest.map(({ slug, metadata }) => (
            <Link
              key={slug}
              href={`/posts/${slug}`}
              className="block p-6 border rounded-lg hover:shadow-lg transition"
            >
              <h3 className="text-xl font-medium mb-1">{metadata.title}</h3>
              <time className="text-gray-500 text-sm">{metadata.date}</time>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-16 text-center ">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600">
          Have questions? <br/>
          <Link href="/contact" className="text-blue-600 underline">Send me a message</Link>  
          &nbsp;or connect with me on&nbsp;
          <a
            href="https://linkedin.com/in/stephen-ni-991b1b265"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            LinkedIn
          </a>.
        </p>
      </section>
    </main>
  );
}
