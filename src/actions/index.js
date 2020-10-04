export const SET_CATEGORY = "SET_CATEGORY";
export const FETCH_NEWS_BEGIN = "FETCH_NEWS_BEGIN";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";
export const SET_SEARCH_KEYWORD = "SET_SEARCH_KEYWORD";

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  payload: { category },
});

export const setSearchKeyword = (keyword) => ({
  type: SET_SEARCH_KEYWORD,
  payload: { keyword },
});

export const fetchNewsBegin = () => ({
  type: FETCH_NEWS_BEGIN,
});

export const fetchNewsSuccess = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: { news },
});

export const fetchNewsFailure = (error) => ({
  type: FETCH_NEWS_FAILURE,
  payload: { error },
});
