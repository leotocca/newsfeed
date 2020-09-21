import React from "react";

const NewsItem = (props) => {
  const { title, imgUrl, url, date, source } = props.news;

  const titleToShow =
    title.split(" ").length > 10
      ? title.split(" ").slice(0, 12).join(" ").concat("...")
      : title;

  return (
    <div className="w-1/4 bg-gray-100 flex flex-col m-10 rounded-lg shadow-md">
      <a href={url} target="_blank">
        <div className="h-56 w-full overflow-hidden">
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://via.placeholder.com/600?text=News+Without+Image"
            }
            alt={title}
          />
        </div>
        <div className="pt-1 pb-5 px-5">
          <span className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full text-sm">
            {source}
          </span>
          <h4 className="font-semibold text-gray-800 text-xl mt-2">
            {titleToShow}
          </h4>
          <p className="text-gray-800 mt-4">Read More...</p>
        </div>
      </a>
    </div>
  );
};

export default NewsItem;
