import React from "react";
import NewsItem from "./NewsItem";

const NewsList = (props) => {
  const { news } = props;

  return (
    <div className="w-full flex flex-wrap justify-center items-center">
      {news &&
        news.map((newsItem) => <NewsItem news={newsItem} key={newsItem.id} />)}
    </div>
  );
};

export default NewsList;
