import { v4 as uuid } from "uuid";

export const formatNews = (news) => {
  return news.map((singleNews) => {
    return {
      id: uuid(),
      title: singleNews.title,
      url: singleNews.url,
      imgUrl: singleNews.img_url,
      source: singleNews.source_name,
      category: singleNews.category,
    };
  });
};
