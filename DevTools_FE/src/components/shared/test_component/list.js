import React from 'react';
const TestComponentlist = props => {
  return (
    <div className="card">
    <header className="card-header">
      <p className="card-header-title">{props.name}</p>
      <div className="card-header-icon">
        <span className="icon">
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </div>
    </header>
    <div className="card-table">
      <div className="table-content">
        <table className="table is-fullwidth is-striped">
          <tbody>
            {
              props.list.map((testset,i) => {
                return (
                  <tr className="dataList" key={testset.id}>
                    <td><i className={`fas ${props.logo}`}></i></td>
                    <td>{testset.name}</td>
                    <td className="level-right"><p className="button is-primary is-small">
                      {testset.feature === null ? "-" : testset.feature}
                      </p></td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
    <footer className="card-footer"></footer>
  </div>
  );
}

export default TestComponentlist;