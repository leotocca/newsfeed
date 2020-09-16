const LOADING_ERROR = "LOADING_ERROR";
const LOADING_IN_PROGRESS = "LOADING_IN_PROGRESS";
const LOADING_SUCCESS = "LOADING_SUCCESS";

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

//   export const clearRepos = () => (
//     {
//       type: 'CLEAR_REPOS'
//     }
//   )
