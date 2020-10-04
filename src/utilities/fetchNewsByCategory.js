import { fetchNews } from "./fetchNews";
import getFormattedEndpoint from "./getFormattedEndpoint";

export const fetchNewsByCategory = (category) => {
  return category === undefined
    ? fetchNews(getFormattedEndpoint("latest"))
    : fetchNews(getFormattedEndpoint("category", category));
};
