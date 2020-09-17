import React from "react";
import NewsItem from "./NewsItem";
import { connect } from "react-redux";
import { getNews, getNewsError, getNewsPending } from "../reducers/index";
import { bindActionCreators } from "redux";
import { fetchNews } from "../actions/fetchNews";
import formatEndpoint from "../utilities/formatEndpoint";

class NewsList extends React.Component {
  componentWillMount() {
    const { fetchNews } = this.props;
    fetchNews(formatEndpoint("latest"));
  }

  render() {
    const { news, error, pending } = this.props;

    if (error) {
      return (
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-red-500 py-5 px-5 rounded-md shadow-md">
            <p>Error when loading the news</p>
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
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchNews: fetchNews,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
