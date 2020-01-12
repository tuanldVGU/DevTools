import React from 'react';

import TestComponentheader from '../../shared/test_component/header';
import TestComponentlist from '../../shared/test_component/list';

const Testplans = props => {
  let selected = 0;
  let logo = "fa-clipboard";
  return(
    <div className="appContent">
      <div className="columns">
        <div className="column is-4">
          <TestComponentlist name="Testplans" list={props.sets} logo={logo}></TestComponentlist>
        </div>
        <div className="column is-8">
          <div className="card">
            {/* Brief */}
            <TestComponentheader name={props.sets[selected].name} author={props.sets[selected].author} logo={logo}></TestComponentheader>
            {/* Details */}
            <div className="content">
              <div class="field is-grouped">
                <p class="control">
                  <button className="button is-primary is-small">{props.sets[selected].feature}</button>
                </p>
                <p class="control">
                  <button className="button is-gray is-small">
                    <span className="icon"><i class="fas fa-paperclip"></i></span>
                    <span>Attach</span>
                  </button>
                </p>
                <p class="control">
                  <button className="button is-gray is-small">
                    <span className="icon"><i class="fas fa-link"></i></span>
                    <span>Link</span>
                  </button>
                </p>
              </div>
              <div className="description">
                <p className="gray-text">Description:</p>
                <p>{props.sets[selected].desc}</p>
              </div>
              <div className="content-list">
                <p className="gray-text">Testcases:</p>
                {
                  props.sets[selected].testcases.map(testcase => {
                    return (
                      <a className="panel-block" key={testcase.id} href={`/cerberus/testcase/?id=${testcase.id}`}>
                        <span className="panel-icon">
                          <i className="fas fa-book" aria-hidden="true"></i>
                        </span>
                        <span>{testcase.name}</span>
                      </a>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testplans;