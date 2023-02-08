import { getSortedPostsData } from "../../lib/posts"

const handler = (_, res) => {
  const allPostsData = getSortedPostsData()
  res.status(200).json({ allPostsData })
}

export default handler