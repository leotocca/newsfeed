import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCategory } from "../actions/index";
import { getCategory } from "../reducers/index";
import NewsList from "../components/Newslist";

function News({ setCategory, category }) {
  const { id } = useParams();
  setCategory(id);

  return (
    <div>
      <div>Id: {id}</div>
      <div>Category: {category}</div>
      <NewsList />
    </div>
  );
}

const mapStateToProps = (state) => ({
  category: getCategory(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCategory,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(News);
