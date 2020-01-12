import React from 'react';

const Dashboard = props => {
  return (
    <div className="appContent">
      <div className="hero is-primary is-bold">
        <div className="hero-body">
          <h1 className="title">Hello, {props.user}</h1>
        </div>
      </div>
      <div className="project">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-8">
            <article className="tile is-child box is-flex">
              <h2 className="text-is-vertical text-is-15">PROJECT</h2>
              <h1 className="title text-is-big">{props.project}</h1>
            </article> 
          </div>
          <div className="tile is-vertical is-parent has-text-centered">
            <div className="tile is-child box">
              <p className="title"> 100k </p>
              <p className="subtitle"> Features </p>
            </div>
            <div className="tile is-child box">
              <p className="title"> 2Months </p>
              <p className="subtitle"> Timeline </p>
            </div>
          </div>
        </div>
      </div>
      <div className="info-tiles">
        <div className="tile is-ancestor has-text-centered">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title"> 100k </p>
              <p className="subtitle"> Test plans </p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title"> 100k </p>
              <p className="subtitle"> Test sets </p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title"> 100k </p>
              <p className="subtitle"> Tests </p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title"> 100k </p>
              <p className="subtitle"> Features </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;