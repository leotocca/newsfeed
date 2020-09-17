import React from "react";
import { Link } from "react-router-dom";

const NewsItem = (props) => {
  const { title, imgUrl, url, date, source } = props.news;

  return (
    <div className="w-1/4 bg-gray-100 flex flex-col m-10 rounded-lg shadow-md">
      <a href={url} target="_blank">
        <div className="">
          <img
            className="w-full"
            src={
              imgUrl
                ? imgUrl
                : "https://via.placeholder.com/800?text=News+Without+Image"
            }
            alt={title}
          />
        </div>
        <div className="py-5 px-5">
          <p>
            {source} - {date}
          </p>
          <h4 className="font-semibold text-gray-800 text-xl">{title}</h4>
        </div>
      </a>
    </div>
  );
};

export default NewsItem;
