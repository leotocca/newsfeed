import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCategory } from "../actions/index";
import { getCategory } from "../reducers/index";
import { getCategoriesName } from "../utilities/categoriesUtilities";
import NewsList from "../components/Newslist";

function News({ setCategory, category }) {
  const { id } = useParams();
  setCategory(id);

  return (
    <div className="w-full flex-col flex items-center justify-center">
      <div className="w-5/6">
        <div className="mt-16 mb-8 flex justify-center">
          {category && (
            <h2 className="text-3xl text-gray-700 border-b-2 border-gray-700 w-1/4 text-center pb-2">
              {getCategoriesName(category)}
            </h2>
          )}
        </div>
      </div>
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
