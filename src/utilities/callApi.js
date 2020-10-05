import { formatNews } from "./formatNews";
import {
  fetchNewsBegin,
  fetchNewsFailure,
  fetchNewsSuccess,
} from "../actions/index";

export const callApi = (endpoint) => {
  return (dispatch) => {
    dispatch(fetchNewsBegin());

    fetch(endpoint)
      .then((response) => response.json())
      .then((news) => news.slice(0, 10))
      .then((news) => {
        return news.map((news) => formatNews(news));
      })
      .then((news) => {
        dispatch(fetchNewsSuccess(news));
      })
      .catch(() => dispatch(fetchNewsFailure(true)));
  };
};
