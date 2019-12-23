import { loadFirebase } from '../lib/db.js'

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
      render() {
        const Blogs = this.props.Blogs
        return (
            <div>{Blogs.forEach(element => console.log(element))}</div>
        );
    }
  }