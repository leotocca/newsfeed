import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../actions/index";
import { getCategoriesName } from "../utilities/categoriesUtilities";
import { NewsList } from "../components/Newslist";
import { fetchNews } from "../utilities/fetchNews";

export const News = () => {
  const { id } = useParams();
  const { news, loading, error, category, searchKeyword } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  if (getCategoriesName(category) !== id) {
    dispatch(setCategory(id));
  }

  useEffect(() => {
    fetchNews(dispatch, category, searchKeyword);
  }, [category, dispatch, id, searchKeyword]);

  return (
    <div
      className={`${
        loading ? "h-screen" : "h-full"
      } w-full flex-col flex items-center justify-center bg-gray-200`}
    >
      {category && !searchKeyword && (
        <div className="w-11/12 h-full">
          <div className="mt-16 mb-0 md:mt-8 md:mb-4">
            <h2 className="text-2xl lg:text-4xl text-gray-700 text-center lg:text-left font-semibold">
              {getCategoriesName(category)}
            </h2>
          </div>
        </div>
      )}

      {searchKeyword && !loading && (
        <div className="w-11/12 h-full">
          <div className="mt-16 mb-0 md:mt-8 md:mb-4">
            <h2 className="text-2xl lg:text-4xl text-gray-700 text-center lg:text-left font-semibold">
              Results for: {searchKeyword}
            </h2>
          </div>
        </div>
      )}

      <NewsList news={news} error={error} loading={loading} />
    </div>
  );
};
