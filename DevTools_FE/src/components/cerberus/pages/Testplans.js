import React from 'react';

import TestComponentlist from '../../shared/test_component/list';
import ListCompontentHeader from '../../shared/test_component/listHeader';

const Testplans = props => {
  let logo = "fa-clipboard";
  let description = "Test case is the senario design to test the features of a program.";
  let bg_color= "has-background-grey-light";
  return(
    <div className="appContent">
      <ListCompontentHeader 
        name="Testplans" 
        desc={description}
        logo={logo}
        color={bg_color}></ListCompontentHeader>
      <TestComponentlist list={props.sets}></TestComponentlist>
    </div>
  );
}

export default Testplans;