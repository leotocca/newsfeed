import React from "react";
import NewsList from "../components/Newslist";
import formattedNews from "../exampleData";

function News() {
  return <NewsList news={formattedNews} />;
}

export default News;
