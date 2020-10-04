import React from "react";
import NewsItem from "./NewsItem";

export const NewsList = (props) => {
  const { news, error, loading } = props;

  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center bg-gray-200">
      {news &&
        news.map((newsItem) => <NewsItem news={newsItem} key={newsItem.id} />)}

      {loading && (
        <div className="">
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <div className="bg-red-500 py-5 px-5 rounded-md shadow-md">
          <p>Error loading the news</p>
        </div>
      )}
    </div>
  );
};
