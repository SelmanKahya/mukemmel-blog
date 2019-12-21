import ReactMarkdown from "react-markdown";

import './FullPost.css';

class FullPost extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <React.Fragment>
        <h2 className="post-title">{this.props.post.title}</h2>
        <div className="post-text">
          <ReactMarkdown source={this.props.post.details} />
        </div>
        <div className="post-date">{this.props.post.date}</div>
      </React.Fragment>
    )
  }
}

export default FullPost;