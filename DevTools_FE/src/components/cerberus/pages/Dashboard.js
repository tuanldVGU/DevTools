import React from 'react';
import {Line} from 'react-chartjs-2';

const Dashboard = props => {
  const openProjectDropdown = event =>{
    document.querySelector('#dd-project').classList.toggle('is-active');
  }
  const progressData = {
    labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb'],
    datasets: [{
      label: 'Test perform',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
      ],
      borderWidth: 1
      },{
        label: 'Bugs',
        data: [4, 5, 1, 1, 1, 1],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderWidth: 2
      }
    ]
  };
  return (
    <div className="appContent">

      {/* Dashboard header */}
      <article className="media project-header">
        <figure className="media-left project-logo">
          <p className="image is-64x64"><img src="https://bulma.io/images/placeholders/128x128.png" alt=""/></p>
        </figure>
        <div className="media-content">
          <div className="project-info">
            <p>
              <small>Project</small> <br/>
              <strong> {props.project} </strong> <br/>
              <span className="project-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              </span>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="buttons">
            <button className="button is-info">Sprint 7</button>
            <div id="dd-project"className="dropdown is-right">
              <div className="dropdown-trigger">
                <button className="button is-primary" aria-haspopup="true" aria-controls="dropdown-menu2" onClick={openProjectDropdown}>
                  <span>Projects</span>
                  <span className="icon is-small"><i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dd-list" role="menu">
                <div className="dropdown-content">
                  {
                    props.projects.map( proj => {
                      let classList = "dropdown-item";
                      classList += (proj.name === props.project) ?  " is-active" : "";
                      return (
                        <div className={classList} key={proj.id}>{proj.name}</div>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Dashboard general */}
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Project performance
          </p>
        </header>
        <div className="card-content">
          <div className="content columns">
            {/* Features */}
            <div className="column">
              <div className="media">
                <div className="media-left">
                  <div className="rounded-circle is-54x54 has-background-warning dashboard-icon-center"> 
                    <i className="fas fa-cocktail"></i> 
                  </div>
                </div>
                <div className="media-content">
                  <p className="subtitle is-6">Features</p>
                  <p className="title is-2 is-mini-title">20</p>
                  <p className="subtitle is-6"><span className="has-text-success">80%</span> tested</p>
                </div>
              </div>
            </div>
            {/* Bugs */}
            <div className="column">
              <div className="media">
                <div className="media-left">
                  <div className="rounded-circle is-54x54 has-background-danger dashboard-icon-center"> 
                    <i className="fas fa-bug"></i>
                  </div>
                </div>
                <div className="media-content">
                  <p className="subtitle is-6">Bugs</p>
                  <p className="title is-2 is-mini-title">100</p>
                  <p className="subtitle is-6"><span className="has-text-danger">50</span> major bugs</p>
                </div>
              </div>
            </div>

            {/* Teams */}
            <div className="column">
              <div className="media">
                <div className="media-left">
                  <div className="rounded-circle is-54x54 has-background-info dashboard-icon-center pl-16"> 
                    <i className="fas fa-user-secret"></i>
                  </div>
                </div>
                <div className="media-content">
                  <p className="subtitle is-6">Testers</p>
                  <p className="title is-2 is-mini-title">5</p>
                  <p className="subtitle is-6">Good performance</p>
                </div>
              </div>
            </div>

            {/* Ends */}
          </div>
        </div>
        <div className="card-footer">
          <button className="button is-link is-rounded m-1-center">View Complete Report</button>
        </div>
      </div>
    
      {/* Progress and Timeline */}
      <div className="columns mt-1">
        {/* Progress */}
        <div className="column is-two-thirds">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Progress
              </p>
            </header>
            <div className="card-content">
              <Line data={progressData} height={300} options={{ maintainAspectRatio: false }}></Line>
            </div>
            <div className="card-footer">
              <div className="progress-info">
                <div className="progress-content">
                  <div className="content-left">
                    <div className="heading">Total Success</div>
                    <div className="subheading">Stable features</div>
                  </div>
                  <div className="content-right">
                    <span className="has-text-success">30 <i className="fas fa-check-circle"></i></span>
                  </div>
                </div>
                <div className="progress-detail">
                  <progress className="progress is-primary" value="30" max="100">30%</progress>
                  <div className="progress-note">
                    <span className="left">Project progress</span>
                    <span className="right">30%</span>
                  </div> 
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* Timeline */}
        <div className="column">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                Timeline
              </p>
            </header>
            <div className="card-content" style={{height: '425px'}}>
              <div className="timeline">
                <div className="timeline-header"><span className="tag is-medium is-primary">Start</span></div>

                <div className="timeline-item is-primary">
                  <div className="timeline-marker is-primary"></div>
                  <div className="timeline-content">
                    <p className="heading">January 2016</p>
                    <p className="text-is-small">Client meeting</p>
                  </div>
                </div>

                <div className="timeline-item is-primary">
                  <div className="timeline-marker is-icon is-info"><i className="far fa-clipboard"></i></div>
                  <div className="timeline-content">
                    <p className="heading">February 2016</p>
                    <p className="text-is-small">Test planning</p>
                  </div>
                </div>

                <div className="timeline-item is-primary">
                  <div className="timeline-marker is-primary"></div>
                  <div className="timeline-content">
                    <p className="heading">February 2016</p>
                    <p className="text-is-small">Test Execution</p>
                  </div>
                </div>

                <div className="timeline-item is-primary">
                  <div className="timeline-marker is-icon is-danger"><i className="fa fa-flag"></i></div>
                  <div className="timeline-content">
                    <p className="heading">March 2016</p>
                    <p className="text-is-small">UAT</p>
                  </div>
                </div>
  
                <div className="timeline-header"><span className="tag is-medium is-primary">Go live</span></div>

              </div>
            </div>

            <div className="card-footer">
              <button className="button is-link is-rounded m-1-center">Modify</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;