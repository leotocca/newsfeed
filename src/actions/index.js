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

const ENDPOINT_LATEST = "https://api.canillitapp.com/latest/2020-09-13";
const ENDPOINT_POLITICS = "https://api.canillitapp.com/news/category/1";
const ENDPOINT_INTERNATIONAL = "https://api.canillitapp.com/news/category/2";
const ENDPOINT_TECHNOLOGY = "https://api.canillitapp.com/news/category/3";
const ENDPOINT_SHOW = "https://api.canillitapp.com/news/category/4";
const ENDPOINT_SPORTS = "https://api.canillitapp.com/news/category/5";
const ENDPOINT_DESIGN = "https://api.canillitapp.com/news/category/6";
