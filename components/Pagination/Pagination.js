import Link from "next/link";

import "./Pagination.css";

class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="pagination">
        {/* <h2>Current Page: { pageNumber }</h2>
        <h2>Is Next Page Exists: { isNextPageExists?"Yes":"No" }</h2> */}
    
        <ul className="pagination-list">
          <li key="previous">
            <Link href={"/?page="+(this.props.pageNumber==0?0:this.props.pageNumber-1)}>
              <a className={"pagination-link "+((this.props.pageNumber==0)?"disabled":"")}>
                {"<"}
              </a>
            </Link>
          </li>
          <li key="current">{ <span className="pagination-link">{this.props.pageNumber}</span> }</li>
          <li key="next">
            <Link href={"/?page="+(this.props.pageNumber+1)}>
              <a className={"pagination-link "+((this.props.isNextPageExists==false)?"disabled":"")}>
                {">"}
              </a>
            </Link>
          </li>
        </ul>
      </div>  
    )
  }
}

export default Pagination;