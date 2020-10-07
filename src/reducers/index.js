import {
  FETCH_NEWS_BEGIN,
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_SUCCESS,
  SET_CATEGORY,
  SET_SEARCH_KEYWORD,
} from "../actions";
import { getCategoriesIdNumber } from "../utilities/categoriesUtilities";

const initialState = {
  news: [],
  category: undefined,
  error: false,
  loading: false,
  searchKeyword: undefined,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_BEGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        news: action.payload.news,
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        news: [],
        error: action.payload.error,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: getCategoriesIdNumber(action.payload.category),
        loading: true,
        news: [],
        searchKeyword: undefined,
      };
    case SET_SEARCH_KEYWORD:
      return {
        ...state,
        loading: true,
        news: [],
        searchKeyword: action.payload.keyword,
      };
    default:
      return state;
  }
};

export default newsReducer;
