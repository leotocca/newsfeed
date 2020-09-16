import React from "react";
import NewsItem from "./NewsItem";
import { connect } from "react-redux";
import { getNews, getNewsError, getNewsPending } from "../reducers/index";
import { bindActionCreators } from "redux";
import { fetchNews } from "../actions/fetchNews";

// ACA ES QUE TENES QUE IMPLEMENTAR REDUX
// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao

const ENDPOINT_LATEST = "https://api.canillitapp.com/latest/2020-09-16";
// const ENDPOINT_POLITICS = "https://api.canillitapp.com/news/category/1";
// const ENDPOINT_INTERNATIONAL = "https://api.canillitapp.com/news/category/2";
// const ENDPOINT_TECHNOLOGY = "https://api.canillitapp.com/news/category/3";
// const ENDPOINT_SHOW = "https://api.canillitapp.com/news/category/4";
// const ENDPOINT_SPORTS = "https://api.canillitapp.com/news/category/5";
// const ENDPOINT_DESIGN = "https://api.canillitapp.com/news/category/6";

class NewsList extends React.Component {
  constructor(props) {
    super(props);

    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchNews } = this.props;
    fetchNews(ENDPOINT_LATEST);
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  render() {
    const { news } = this.props;

    return (
      <div className="w-full flex flex-wrap justify-center items-center">
        {news &&
          news.map((newsItem) => (
            <NewsItem news={newsItem} key={newsItem.id} />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: getNewsError(state),
  news: getNews(state),
  pending: getNewsPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchNews: fetchNews,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
