const initialState = {
  news: [],
  category: undefined,
  loadingError: false,
  isLoading: false,
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_ERROR":
      return {
        ...state,
        loadingError: true,
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
    default:
      return state;
  }
};

export default news;

export const getNews = (state) => state.news;
export const getNewsPending = (state) => state.pending;
export const getNewsError = (state) => state.error;
