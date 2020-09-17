import { v4 as uuid } from "uuid";
import * as dayjs from "dayjs";

export const formatNews = (news) => {
  return news.map((singleNews) => {
    return {
      id: uuid(),
      title: singleNews.title,
      url: singleNews.url,
      imgUrl: singleNews.img_url,
      date: dayjs(singleNews.date).format("D/M/YY"),
      source: singleNews.source_name,
      category: singleNews.category,
    };
  });
};
