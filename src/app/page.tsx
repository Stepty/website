// app/page.tsx

import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-white">
      
      {/* Hero */}
      <section className="text-center max-w-2xl">
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

      {/* Featured Projects */}
      <section className="mt-16 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Card #1 */}
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-medium mb-2">Project One</h3>
            <p className="text-gray-700">
              A brief description of what Project One does and why it’s cool.
            </p>
            <Link
              href="/projects/one"
              className="text-blue-600 hover:underline mt-2 block"
            >
              View Project →
            </Link>
          </div>

          {/* Project Card #2 */}
          <div className="p-6 border rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-medium mb-2">Project Two</h3>
            <p className="text-gray-700">
              A quick note on Project Two—what problem it solves or tech you used.
            </p>
            <Link
              href="/projects/two"
              className="text-blue-600 hover:underline mt-2 block"
            >
              View Project →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600">
          Interested in collaborating? <br/>
          <Link href="/contact" className="text-blue-600 underline">Send me a message</Link>  
          &nbsp;or find me on&nbsp;
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Twitter
          </a>.
        </p>
      </section>
    </main>
  )
}
