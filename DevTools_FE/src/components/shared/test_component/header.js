import React from 'react';
const TestComponentheader = props => {
  return (
    <div className="card-content">
      <div className="media">
        <div className="media-left"><span className="icon is-large"><i className={`fas fa-3x ${props.logo}`}></i></span></div>
        <div className="media-content">
          <p className="title is-4">{props.name}</p>
          <p className="subtitle is-6">@{props.author}</p>
        </div>
        <div className="media-right">
          <div className="field">
            <label htmlFor="assignee" className="text-is-small">Assignee:</label>
            <div className="control has-icons-left">  
              <div className="select is-small">
                <select name="assignee">
                  <option selected>User</option>
                  <option>Admin</option>
                  <option>Tester</option>
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className="fas fa-globe"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestComponentheader;