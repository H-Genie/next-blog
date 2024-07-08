import { readFile, readdir } from "fs/promises"
import { marked } from "marked"
import matter from "gray-matter"

export const getPost = async slug => {
  const source = await readFile(`content/posts/${slug}.md`, "utf-8")
  const {
    data: { date, title },
    content
  } = matter(source)
  const body = marked(content)
  return { date, title, body }
}

export async function getSlugs() {
  const suffix = ".md"
  const files = readdir("content/posts")
  return (await files)
    .filter(file => file.endsWith(suffix))
    .map(file => file.slice(0, -suffix.length))
}
