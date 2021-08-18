import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {isLoading: true, blogsList: {}}

  componentDidMount() {
    this.fetchBlogList()
  }

  fetchBlogList = async () => {
    const fetchedResult = await fetch('https://apis.ccbp.in/blogs')
    const fetchedResultJson = await fetchedResult.json()
    this.setState({isLoading: false, blogsList: fetchedResultJson})
  }

  renderBlogItems = () => {}

  render() {
    const {isLoading, blogsList} = this.state
    console.log(blogsList)
    return (
      <div className="blogs-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-items-container">
            {blogsList.map(blogItem => (
              <Link
                className="link-item"
                to={`/blog/${blogItem.id}`}
                key={blogItem.id}
              >
                <BlogItem blogItem={blogItem} />
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default BlogList
