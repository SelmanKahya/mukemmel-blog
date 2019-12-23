//import Hero from '../components/Hero.js'
import { loadFirebase } from '../lib/db.js'

export default class Index extends React.Component {
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
      })

      render() {
        const Blogs = this.props.Blogs
        return 
          <div id="Blogs">
            {(Blogs && Blogs.length > 0) 
              ? <ul>
                {Blogs.map(blog => 
                  <li key="{blog.id}">
                <h3>{blog.name} has a ranking of 
                <em>{blog.ranking}!</em></h3></li>)}
              </ul> 
              : <p><strong>Have nothing!!</strong></p>}
              <hr/>
          </div>
      }
    }