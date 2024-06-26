
import { useState } from 'react';
import Comments from './Commments'

export default function ParentComment() {
    const [page, setPage] = useState(1);

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePreviousPage = () => setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  return (
    <div>
      <Comments postId={page.toString()}  />
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </div>
  )
}
