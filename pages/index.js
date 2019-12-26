import { loadFirebase } from '../lib/db.js'
import BlogForm from "../components/BlogForm";

export default class extends React.Component {

  static getInitialProps = () =>
    loadFirebase().firestore().collection('Blogs')
      .limit(10)
      .get()
      .then(snapshot => {
        let data = []
        snapshot.forEach((doc) => {
          data.push({
            id: doc.id,
            ...doc.data()
          })
        })
        return { Blogs: data }
        console.log(Blogs)
      })

  state = {
    Blogs: this.props.Blogs,
  };


  render() {
    const Blogs = this.props.Blogs
    return (
      <React.Fragment>

        {Blogs.map(blog =>
          <div key={"blog.id"}>
            <h3>Existing Data:</h3>
            <p>Blog Name:{blog.Name}  </p>
            <p>Blog Ranking:{blog.Ranking}</p>
          </div>)}

        <h3>Add Data</h3>
        <div>
          <BlogForm />
        </div>


      </React.Fragment>



    );
  }
}