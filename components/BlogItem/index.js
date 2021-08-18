import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const blogItemCamelCase = {
    author: blogItem.author,
    avatarUrl: blogItem.avatar_url,
    imageUrl: blogItem.image_url,
    title: blogItem.title,
    topic: blogItem.topic,
  }
  console.log(blogItem)
  const {title, author, avatarUrl, imageUrl, topic} = blogItemCamelCase
  return (
    <div className="blog-item-container">
      <div className="blog-item-content">
        <img src={imageUrl} alt="blog pic" className="blog-image" />
        <div className="blog-item-bottom-content">
          <p className="topic-tag">{topic}</p>
          <h1 className="blog-title">{title}</h1>
          <div className="author-details">
            <img
              className="author-avatar"
              src={avatarUrl}
              alt="author avatar"
            />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
