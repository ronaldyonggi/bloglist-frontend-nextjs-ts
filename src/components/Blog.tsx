interface BlogProps {
  blog: IBlog
  user: IUser | null
  deleteBlog: (id: string) => void
}

const Blog = ({ blog, user, deleteBlog }: BlogProps) => {

  const handleDelete = () => {
    deleteBlog(blog.id)
  }
  
  return (
    <div>
      {blog.title} | Author: {blog.author} 
      {user && user.id === blog.userId 
      ? <button onClick={handleDelete}>delete</button>
      : null
      }

    </div>
  )
}
export default Blog