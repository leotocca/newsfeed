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
      <div className="w-5/6">
        <div className="mt-16 mb-8 flex justify-center">
          {category && !loading && !searchKeyword && (
            <h2 className="text-3xl text-gray-700 border-b-2 border-gray-700 w-1/3 text-center pb-2">
              {getCategoriesName(category)}
            </h2>
          )}
          {searchKeyword && (
            <h2 className="text-3xl text-gray-700 border-b-2 border-gray-700 w-1/4 text-center pb-2">
              Results for: {searchKeyword}
            </h2>
          )}
        </div>
      </div>
      <NewsList news={news} error={error} loading={loading} />
    </div>
  );
};
