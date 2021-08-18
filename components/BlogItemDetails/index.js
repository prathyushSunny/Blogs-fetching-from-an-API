import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogDetails: {}}

  componentDidMount() {
    this.fetchBlogDetails()
  }

  fetchBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const result = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const jsonData = await result.json()
    const jsonDataCamel = {
      author: jsonData.author,
      avatarUrl: jsonData.avatar_url,
      imageUrl: jsonData.image_url,
      content: jsonData.content,
      title: jsonData.title,
      topic: jsonData.topic,
    }
    console.log(jsonDataCamel)
    this.setState({isLoading: false, blogDetails: jsonDataCamel})
  }

  render() {
    const {isLoading, blogDetails} = this.state
    const {author, avatarUrl, imageUrl, content, title, topic} = blogDetails
    return (
      <div className="blog-details-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-details-content">
            <h1 className="blog-details-title">{title}</h1>
            <div className="author-details">
              <img
                className="author-avatar"
                src={avatarUrl}
                alt="author avatar"
              />
              <p className="author-name">{author}</p>
            </div>
            <img className="blog-details-image" src={imageUrl} alt="blog pic" />
            <p className="blog-details-text-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
