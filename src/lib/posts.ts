// lib/posts.ts
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDir = path.join(process.cwd(), 'src', 'content', 'posts')

export async function getAllSlugs() {
  const files = await fs.readdir(postsDir)
  return files.map(name => name.slice(0, -3)) // remove .md
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, `${slug}.md`)
  const raw = await fs.readFile(fullPath, 'utf-8')
  const { data, content } = matter(raw)

  const processed = await remark().use(html).process(content)
  const contentHtml = processed.toString()
  
  return {
    slug,
    metadata: {
      title: data.title as string,
      date: data.date as string,
    },
    contentHtml,
  }
}

export async function getAllPosts() {
  const slugs = await getAllSlugs()
  const posts = await Promise.all(slugs.map(getPostBySlug))
  // sort by date desc
  return posts.sort((a, b) => (a.metadata.date < b.metadata.date ? 1 : -1))
}
