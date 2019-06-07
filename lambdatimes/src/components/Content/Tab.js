import React from 'react';
import pt from "prop-types";

const Tab = props => {
  const { tab, selectedTab, selectTabHandler} = props;
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      const activeTab = selectedTab === tab? 'tab active-tab': 'tab'
  return (
    <div
      className={activeTab}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         selectTabHandler(tab)
      }}
    >
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;

Tab.propTypes = {
  tabs: pt.string,
  selectedTab: pt.string,
  selectTabHandler: pt.func
}

