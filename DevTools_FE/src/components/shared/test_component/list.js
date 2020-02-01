import React from 'react';

const DataList = props => {
  return (
    <div className="card-content">
      {/* table header */}
      <div className="columns">
        <div className="column">
          <div className="field">
            <p className="control has-icons-left">
              <input className="input" type="email"/>
              <span className="icon is-small is-left">
              <i className="fas fa-filter"></i>
              </span>
            </p>
          </div>
        </div>
        <div className="column">
          <div className="select is-right">
            <select defaultValue="10">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div> 
        </div>
      </div>
      {/* table */}
      <div className="list">
        <table className="table is-striped is-hoverable dataList is-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Feature</th>
              <th>Sprint</th>
              <th>Author</th>
              <th>Created date</th>
            </tr>
          </thead>
          <tbody>
            {
              props.list.map(data =>{
                return(
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.feature}</td>
                  <td>NA</td>
                  <td>{data.author}</td>
                  <td>NA</td>
                </tr>);
              })
            }
          </tbody>
        </table>
      </div>
        <nav className="pagination" role="navigation" aria-label="pagination">
          <button className="pagination-previous button is-primary" title="This is the first page" disabled>Previous</button>
          <button className="pagination-next button is-primary">Next page</button>
          <ul className="pagination-list">
            <li>
              <button className="pagination-link is-current" aria-label="Page 1" aria-current="page">1</button>
            </li>
            <li>
              <button className="pagination-link" aria-label="Goto page 2">2</button>
            </li>
            <li>
              <button className="pagination-link" aria-label="Goto page 3">3</button>
            </li>
          </ul>
        </nav>
    </div>
  );
}

const NodataList = props => {
  return (
    <div className="card-content">
      <p className="has-text-centered">No items yet.</p>
    </div>
  );
}
const TestComponentlist = props => {
  return (
    <div className="listContainer card mt-1">
      {
        (typeof props.list !== 'undefined'  && props.list.length > 0) ? <DataList list={props.list}></DataList> : <NodataList></NodataList>
      }
    </div>
  );
}

export default TestComponentlist;