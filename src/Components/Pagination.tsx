import React from "react";
import ReactPaginate from "react-paginate";

type PaginationProps = {
  onChangePage: (page: number) => void;
  currentPage: number;
};

const Pagination: React.FC<PaginationProps> = React.memo(
  ({ onChangePage, currentPage }) => {
    return (
      <>
        <ReactPaginate
          breakLabel="..."
          nextLabel="→"
          className="pagination"
          onPageChange={(event) => onChangePage(event.selected + 1)}
          pageRangeDisplayed={2}
          pageCount={3}
          previousLabel="←"
          forcePage={currentPage - 1}
          renderOnZeroPageCount={undefined}
        />
      </>
    );
  }
);

export default Pagination;
