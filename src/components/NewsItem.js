import React from "react";

const NewsItem = (props) => {
  const { title, imgUrl, url, source } = props.news;

  const titleToShow =
    title.split(" ").length > 10
      ? title.split(" ").slice(0, 12).join(" ").concat("...")
      : title;

  return (
    <div className="w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/4 h-full bg-gray-100 flex flex-col m-10 rounded-lg shadow flex-grow">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="h-32 sm:h-56 md:h-40 xl:h-56 w-full overflow-hidden">
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://via.placeholder.com/600?text=News+Without+Image"
            }
            alt={title}
          />
        </div>
        <div className="pt-1 pb-5 px-5 flex flex-col items-start">
          <p className="bg-gray-300 text-gray-800 px-2 py-1 rounded-full text-sm">
            {source}
          </p>
          <h4 className="font-semibold text-gray-800 text-xl mt-2 flex-grow">
            {titleToShow}
          </h4>
          <p className="text-gray-800 mt-4">Read More...</p>
        </div>
      </a>
    </div>
  );
};

export default NewsItem;
