import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import NewsItem from "./NewsItem";
import { fetchNews } from "../actions/fetchNews";
import {
  getNews,
  getNewsError,
  getNewsPending,
  getCategory,
} from "../reducers/index";
import formatEndpoint from "../utilities/formatEndpoint";

class NewsList extends React.Component {
  componentDidMount() {
    const { fetchNews, category } = this.props;

    if (category === undefined) {
      fetchNews(formatEndpoint("latest"));
    } else {
      fetchNews(formatEndpoint("category", category));
    }
  }

  render() {
    const { news, error, pending } = this.props;

    if (error) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-red-500 py-5 px-5 rounded-md shadow-md">
            <p>Error loading the news</p>
          </div>
        </div>
      );
    } else if (pending) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <div className="text-green-600 text-2xl ">
            <p>Loading...</p>
          </div>
        </div>
      );
    } else {
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
}

const mapStateToProps = (state) => ({
  error: getNewsError(state),
  news: getNews(state),
  pending: getNewsPending(state),
  category: getCategory(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchNews,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
