import { useEffect, useState } from "react";

import Card from "../../components/Card";
import { Link } from "react-router-dom";
import { useData } from "../../hooks/useData";

function Projects(props) {
  // const itemsPerPage = 2;
  const [page, setPage] = useState(1);

  const {  isError, isLoading, items, hasMore, fetchMoreData} = useData(page);

  useEffect(() => {fetchMoreData(page)}, [page])

  const onLoadMoreClick = () => {
    setPage(page + 1)
};
  
  return ( <>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <Link to={"add"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add project
        </Link>
      </button>
      <Card projects={items} loading={isLoading} error={isError}></Card>
      <button disabled={!hasMore} onClick={onLoadMoreClick}>Load more</button>
    

    </>
  )
}

export default Projects;
