import * as dayjs from "dayjs";

// const ENDPOINT_LATEST = "https://api.canillitapp.com/latest/2020-09-16";
// const ENDPOINT_POLITICS = "https://api.canillitapp.com/news/category/1";

export default function getFormattedEndpoint(type, categoryNumber) {
  if (type === "latest") {
    const date = dayjs(new Date()).format("YYYY[-]MM[-]DD");
    return `https://api.canillitapp.com/latest/${date}`;
  } else {
    return `https://api.canillitapp.com/news/category/${categoryNumber}`;
  }
}
