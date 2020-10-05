import { callApi } from "./callApi";
import * as dayjs from "dayjs";

export const fetchNews = (dispatch, category, searchKeyword) => {
  if (category && !searchKeyword) {
    dispatch(callApi(`https://api.canillitapp.com/news/category/${category}`));
  } else if (searchKeyword) {
    dispatch(callApi(`https://api.canillitapp.com/search/${searchKeyword}`));
  } else {
    const date = dayjs(new Date()).format("YYYY[-]MM[-]DD");
    dispatch(callApi(`https://api.canillitapp.com/latest/${date}`));
  }
};
