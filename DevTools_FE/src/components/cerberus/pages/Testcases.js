import React from 'react';

import TestComponentlist from '../../shared/test_component/list';
import ListCompontentHeader from '../../shared/test_component/listHeader';

const Testcases = props => {
  let logo = "fa-vial";
  let bg_color= "has-background-primary";
  let description = "Test case is the senario design to test the features of a program.";
  return(
    <div className="appContent">
      <ListCompontentHeader 
        name="Testcases"
        desc={description}
        logo={logo}
        color={bg_color}></ListCompontentHeader>
      <TestComponentlist list={props.sets} ></TestComponentlist>
    </div>
  );
}

export default Testcases;