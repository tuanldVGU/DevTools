import React from 'react';
import TestComponentlist from '../../shared/test_component/list';
import ListCompontentHeader from '../../shared/test_component/listHeader';

const Bugs = props => {
  let logo = "fas fa-bug has-text-danger";
  let description = "The deflect occurs inside a features";
  return(
    <div className="appContent">
       <ListCompontentHeader 
        name="Bugs" 
        desc={description}
        logo={logo}></ListCompontentHeader>
      <TestComponentlist list={props.sets}></TestComponentlist>
    </div>
  );
}

export default Bugs;