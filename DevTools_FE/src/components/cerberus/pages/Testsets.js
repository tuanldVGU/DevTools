import React from 'react';
import TestComponentlist from '../../shared/test_component/list';
import ListCompontentHeader from '../../shared/test_component/listHeader';

const Testsets = props => {
  let logo = "fa-vials text-is-23";
  let description = "Test set is a set of testcase with of the same feature or test purposes.";
  let bg_color= "has-background-info";
  return(
    <div className="appContent">
       <ListCompontentHeader 
        name="Testsets" 
        desc={description}
        logo={logo}
        color={bg_color}></ListCompontentHeader>
      <TestComponentlist list={props.sets}></TestComponentlist>
    </div>
  );
}

export default Testsets;