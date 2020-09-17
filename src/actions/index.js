const LOADING_ERROR = "LOADING_ERROR";
const LOADING_IN_PROGRESS = "LOADING_IN_PROGRESS";
const LOADING_SUCCESS = "LOADING_SUCCESS";
const SET_CATEGORY = "SET_CATEGORY";

export const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

export const loadingError = (bool) => ({
  type: LOADING_ERROR,
  hasErrored: bool,
});

export const loadingInProgress = (bool) => ({
  type: LOADING_IN_PROGRESS,
  isLoading: bool,
});

export const loadingSuccess = (news) => ({
  type: LOADING_SUCCESS,
  news,
});
