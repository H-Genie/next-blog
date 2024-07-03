import { readFile } from "fs/promises"

export const getPost = async slug => {
  const data = await readFile(`content/posts/${slug}.json`, "utf-8")
  return JSON.parse(data)
}
