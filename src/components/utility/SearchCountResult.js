import React from "react";
import UnopDropdown from "unop-react-dropdown"
import sort from '../../images/sort.png'
const SearchCountResult = ({ title}) => {
  const handler=()=>{}
  return (
    <div className="d-flex justify-content-between pt-3 px-2">
      <div className="sub-title">{title}</div>
      <div className="search-count-text d-flex ">
        <UnopDropdown
          onAppear={handler}
          onDisappearStart={handler}
          trigger={
            <p className="mx-1 sub-title">
              <img
                width="20px"
                height="20px"
                className="ms-1"
                src={sort}
                alt=""
              />
              sort by
            </p>
          }
          delay={0}
          align="CENTER"
          hover
        >
          <div className="card-filter">
            <div className="border-bottom card-filter-item">Most selling</div>
            <div className="border-bottom card-filter-item">Most Popular</div>
            <div className="border-bottom card-filter-item">
              Prices from up to down
            </div>
            <div className=" card-filter-item"> Prices from down to up  </div>
          </div>
        </UnopDropdown>
      </div>
    </div>
  );
};

export default SearchCountResult;
