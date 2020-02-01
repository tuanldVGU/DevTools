import React from 'react';
import TestComponentlist from '../../shared/test_component/list';
import ListCompontentHeader from '../../shared/test_component/listHeader';

const Executions = props => {
  let logo = "fa-clipboard-check";
  let description = "Execution is a record of the testing processes";
  let bg_color= "has-background-success";
  return(
    <div className="appContent">
       <ListCompontentHeader 
        name="Executions" 
        desc={description}
        logo={logo}
        color={bg_color}></ListCompontentHeader>
      <TestComponentlist list={props.sets}></TestComponentlist>
    </div>
  );
}

export default Executions;