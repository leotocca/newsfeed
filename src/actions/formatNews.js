import { v4 as uuid } from "uuid";

const formatNews = (news) => {
  return news.map((singleNews) => {
    return {
      id: uuid(),
      title: singleNews.title,
      url: singleNews.url,
      imgUrl: singleNews.img_url,
      date: singleNews.date,
      source: singleNews.source_name,
      category: singleNews.category,
    };
  });
};

export default formatNews;
