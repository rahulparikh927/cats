import { useState } from "react";
import CatCard from "../atoms/CatCard";
import { useCatFeeds } from "../../hooks/api/useCatFeed";
import Pagination from "../molecules/Pagination";

const PageSize = 10;

const CatFeed = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data: catFeeds, isLoading } = useCatFeeds({
    limit: 10,
    has_breeds: true,
    page: currentPage,
  });

  return (
    <>
      {isLoading ? (
        <div className="loaderContainer">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <div className="catFeeds gridRow">
            {catFeeds?.map((cat) => {
              return <CatCard cat={cat} key={cat.id} />;
            })}
          </div>
          {catFeeds && (
            <Pagination
              className="paginationBar"
              currentPage={currentPage}
              totalCount={catFeeds.length * PageSize}
              pageSize={PageSize}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
        </>
      )}
    </>
  );
};

export default CatFeed;
