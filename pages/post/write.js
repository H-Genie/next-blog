import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Layout from '../../components/Layout'


const write = () => {
  const idRef = useRef(undefined)
  const titleRef = useRef(undefined)
  const contentRef = useRef(undefined)

  const [showLink, setShowLink] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    const id = idRef.current.value
    const title = titleRef.current.value
    const content = contentRef.current.value

    if (id && title && content) {
      fetch('/api/post/write', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title,
          content
        })
      })
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('Fetch Error')
        }
        )
        .then(data => {
          setShowLink(true)
          alert(data.message)
        }
        )
        .catch(err => alert(`request error : ${err}`))
    }
  }

  return (
    <Layout>
      <h1>Write a post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder='id' ref={idRef} />
        <br />
        <input type="text" name="title" placeholder='title' ref={titleRef} />
        <br />
        <textarea name="content" placeholder='content' ref={contentRef} />
        <br />
        <input type='submit' value='create' />
      </form>
      {showLink && <Link href={`/posts/${idRef.current.value}`}>Created Post</Link>}
    </Layout>
  )
}

export default write