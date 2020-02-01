import React from 'react';

import TestComponentlist from '../../shared/test_component/list';
import ListCompontentHeader from '../../shared/test_component/listHeader';

const Testtemplate = props => {
  let logo = "fa-file-alt";
  let description = "Test case is the senario design to test the features of a program.";
  return(
    <div className="appContent">
      <ListCompontentHeader 
        name="Templates" 
        desc={description}
        logo={logo}></ListCompontentHeader>
      <TestComponentlist list={props.sets}></TestComponentlist>
    </div>
  );
}

export default Testtemplate;