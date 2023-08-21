import classnames from "classnames";
import { usePagination, DOTS } from "../../hooks/usePagination";

type PaginationProps = {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: 1;
  currentPage: number;
  pageSize: number;
  className: string;
};

const Pagination = (props: PaginationProps) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames("paginationContainer", { [className]: className })}
    >
      <li
        className={classnames("paginationItem", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li className="paginationItem dots" key={index}>
                &#8230;
              </li>
            );
          }

          return (
            <li
              key={index}
              className={classnames("paginationItem", {
                selected: pageNumber === currentPage,
                number: pageNumber,
              })}
              onClick={() => onPageChange(pageNumber as number)}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={classnames("paginationItem", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
