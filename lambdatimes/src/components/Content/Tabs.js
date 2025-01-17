import React from 'react';
import pt from "prop-types";
import Tab from './Tab';
const Tabs = props => {
  const { tabs, selectedTab, selectTabHandler } = props;
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {tabs.map((tab, index)=> {
              return <Tab 
              key={index} 
              tab={tab}
              selectedTab={selectedTab}
              selectTabHandler={selectTabHandler}
              />
            })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;


Tabs.propTypes = {
  tabs: pt.arrayOf(pt.string),
  selectedTab: pt.string,
  selectTabHandler: pt.func
}