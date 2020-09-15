import { formatNews } from "./formatNews";
import { loadingError, loadingInProgress, loadingSuccess } from "./index";

export const getNews = (endpoint) => {
  return (dispatch) => {
    dispatch(loadingError(false));

    dispatch(loadingInProgress(true));

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(loadingInProgress(false));

        return response;
      })
      .then((response) => response.json())
      .then((news) => formatNews(news))
      .then((news) => dispatch(loadingSuccess(news)))
      .catch(() => dispatch(loadingError(true)));
  };
};

export default fethNews;
