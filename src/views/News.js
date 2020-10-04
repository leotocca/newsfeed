import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../actions/index";
import { getCategoriesName } from "../utilities/categoriesUtilities";
import { NewsList } from "../components/Newslist";
import { fetchNewsByCategory } from "../utilities/fetchNewsByCategory";

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
    dispatch(fetchNewsByCategory(category));
  }, [category, dispatch, id]);

  return (
    <div className="w-full flex-col flex items-center justify-center bg-gray-200">
      <div className="w-5/6">
        <div className="mt-16 mb-8 flex justify-center">
          {category && (
            <h2 className="text-3xl text-gray-700 border-b-2 border-gray-700 w-1/4 text-center pb-2">
              {getCategoriesName(category)}
            </h2>
          )}
        </div>
      </div>
      <NewsList news={news} error={error} loading={loading} />
    </div>
  );
};
