interface BlogProps {
  blog: IBlog
}

const Blog = ({ blog }: BlogProps) => {
  return (
    <div>
      {blog.title} {blog.author}
    </div>
  )
}
export default Blog