import { SyntheticEvent, useState } from "react"

interface BlogFormProps {
  addBlog: (blog: NewBlog) => Promise<boolean>
}

const BlogForm = ({ addBlog }: BlogFormProps ) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')
  
  const handleAdd = async (e: SyntheticEvent) => {
    e.preventDefault()

    const newBlog = {
      title: newTitle,
      author: newAuthor,
      url: newUrl
    }

    const submitSuccessful = await addBlog(newBlog)
    if (submitSuccessful) {
      setNewTitle('')
      setNewAuthor('')
      setNewUrl('')
    }

  }

  return (
    <form onSubmit={handleAdd}>
      <div>
        title:
        <input type="text" value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder="title..." />
      </div>
      <div>
        author:
        <input type="text" value={newAuthor} onChange={e => setNewAuthor(e.target.value)} placeholder="author..." />
      </div>
      <div>
        url:
        <input type="text" value={newUrl} onChange={e => setNewUrl(e.target.value)} placeholder="url..." />
      </div>
      <button type="submit">Save Blog</button>
    </form>
  )
}
export default BlogForm