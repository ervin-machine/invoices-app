import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import "./Pagination.css"

function Pagination(props) {
    const { items, setCurrentItems } = props
    const [itemOffset, setItemOffset] = useState(0);
    const [isPageChanged, setIsPageChanged] = useState(true)

    useEffect(() => {
      if(isPageChanged){
        setCurrentItems(items.slice(itemOffset, itemOffset + 5))
        setIsPageChanged(false)
    }
    // eslint-disable-next-line
    }, [isPageChanged])
    
    const pageCount = Math.ceil(items.length / 5);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * 5) % items.length;
      setItemOffset(newOffset);
      setIsPageChanged(true)
    };

  return (
    <div>
        <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageLinkClassName="num-page"
      />
    </div>
  )
}

export default Pagination