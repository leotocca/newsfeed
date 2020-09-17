import * as dayjs from "dayjs";

const ENDPOINT_LATEST = "https://api.canillitapp.com/latest/2020-09-16";
// const ENDPOINT_POLITICS = "https://api.canillitapp.com/news/category/1";
// const ENDPOINT_INTERNATIONAL = "https://api.canillitapp.com/news/category/2";
// const ENDPOINT_TECHNOLOGY = "https://api.canillitapp.com/news/category/3";
// const ENDPOINT_SHOW = "https://api.canillitapp.com/news/category/4";
// const ENDPOINT_SPORTS = "https://api.canillitapp.com/news/category/5";
// const ENDPOINT_DESIGN = "https://api.canillitapp.com/news/category/6";

export default function formatEndpoint(type, categoryNumber) {
  if (type === "latest") {
    const date = dayjs(new Date()).format("YYYY[-]MM[-]DD");
    return `https://api.canillitapp.com/latest/${date}`;
  } else {
    return `https://api.canillitapp.com/news/category/${categoryNumber}`;
  }
}
