import { v4 as uuid } from "uuid";

export const formatNews = (news) => ({
  id: uuid(),
  title: news.title,
  url: news.url,
  imgUrl: news.img_url,
  source: news.source_name,
  category: news.category,
});
