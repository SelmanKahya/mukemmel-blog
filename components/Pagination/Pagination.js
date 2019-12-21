import Link from "next/link";

import "./Pagination.css";

const Pagination = ({ pageNumber, isNextPageExists }) => (
  <div className="pagination">
    {/* <h2>Current Page: { pageNumber }</h2>
    <h2>Is Next Page Exists: { isNextPageExists?"Yes":"No" }</h2> */}

    <ul className="pagination-list">
      <li key="previous">
        <Link href={"/?page="+(pageNumber==0?0:pageNumber-1)}>
          <a className={"pagination-link "+((pageNumber==0)?"disabled":"")}>
            {"<"}
          </a>
        </Link>
      </li>
      <li key="current">{ <span className="pagination-link">{pageNumber}</span> }</li>
      <li key="next">
        <Link href={"/?page="+(pageNumber+1)}>
          <a className={"pagination-link "+((isNextPageExists==false)?"disabled":"")}>
            {">"}
          </a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Pagination;