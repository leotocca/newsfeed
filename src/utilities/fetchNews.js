import { formatNews } from "../utilities/formatNews";
import {
  loadingError,
  loadingInProgress,
  loadingSuccess,
} from "../actions/index";

export const fetchNews = (endpoint) => {
  return (dispatch) => {
    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((news) => news.slice(0, 10))
      .then((news) => {
        console.log("aca");
        return news.map((news) => formatNews(news));
      })
      .then((news) => {
        dispatch(loadingInProgress(false));
        dispatch(loadingSuccess(news));
      })
      .catch(() => dispatch(loadingError(true)));
  };
};

export default fetchNews;
