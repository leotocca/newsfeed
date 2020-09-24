import { getCategoriesIdNumber } from "../utilities/categoriesUtilities";

const initialState = {
  news: [],
  category: undefined,
  loadingError: undefined,
  pending: undefined,
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_ERROR":
      return {
        ...state,
        pending: true,
      };
    case "LOADING_IN_PROGRESS":
      return {
        ...state,
        isLoading: true,
      };
    case "LOADING_SUCCESS":
      return {
        ...state,
        news: action.news,
      };
    case "SET_CATEGORY":
      return {
        ...state,
        category: getCategoriesIdNumber(action.category),
      };
    default:
      return state;
  }
};

export default news;

export const getNews = (state) => state.news;
export const getNewsPending = (state) => state.pending;
export const getNewsError = (state) => state.error;
export const getCategory = (state) => state.category;
