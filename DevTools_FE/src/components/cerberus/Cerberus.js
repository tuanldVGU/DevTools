import React from 'react';

import { Route, useRouteMatch, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import LoginCerberus from './auth/login';
import Sidebar from '../shared/sidebar';
import Topnav from '../shared/topnav';
import Dashboard from './pages/Dashboard';
import Testsets from './pages/Testsets';
import Testplans from './pages/Testplans';
import Testcases from './pages/Testcases';
import Testtemplate from './pages/Template';
import Execution from './pages/Executions';
import Bug from './pages/Bugs';

const Cerberus = props =>{  
  let match = useRouteMatch();

  let data = {
    sidebar_logo: {
      svg: '/logo/Cerberus_logo.svg',
      name: 'cerberus'
    },
    sidebar_items: [
      {
        id:'sb_m_01',
        icon: 'fas fa-file-alt',
        main: 'Documentation',
        subs: [
          {
            id:'sb_s_01_01',
            name: 'Requirement',
            link: '/cerberus/documentation/requirements'
          },
          {
            id:'sb_s_01_02',
            name: 'Test Plan',
            link: '/cerberus/testplans'
          },
          {
            id:'sb_s_01_03',
            name: 'Report',
            link: '/cerberus/documentation/report'
          }
        ]
      },
      {
        id:'sb_m_02',
        icon: 'fas fa-vial',
        main: 'Tools',
        subs: [
          {
            id:'sb_s_02_01',
            name: 'Test case',
            link: '/cerberus/testcases'
          },
          {
            id:'sb_s_02_02',
            name: 'Test set',
            link: '/cerberus/testsets'
          },
          {
            id:'sb_s_02_03',
            name: 'Template',
            link: '/cerberus/temps'
          },
          {
            id:'sb_s_02_04',
            name: 'Execution',
            link: '/cerberus/executions'
          }
        ]
      },
      {
        id:'sb_m_03',
        icon: 'far fa-smile',
        main: 'User',
        subs: [
          {
            id:'sb_s_03_01',
            name: 'Role',
            link: '/cerberus/user/roles'
          }
        ]
      }
    ]
  };

  const ProtectedRoute = ({children, ...rest}) => {
    return (
      <Route
        {...rest}
        render={() =>
          props.isAuthenticated ? (children) : 
          (<Redirect to={'/cerberus/login'}/>)
        }
      />
    );
  }

  return (
    <div className="Cerberus">
      {
        props.isAuthenticated ? <Topnav></Topnav>: null
      }
      {
        props.isAuthenticated === true ? <Sidebar logo={data.sidebar_logo} items={data.sidebar_items} user={props.activeUser}></Sidebar>: null
      }
      <Switch>
        <Route path={`${match.path}/login`}>
          {
            props.isAuthenticated ? <Redirect to={`${match.url}/`}/> : <LoginCerberus></LoginCerberus>
          }
        </Route>
        <ProtectedRoute path={`${match.path}/`} exact>
          <Dashboard user={props.activeUser} project={props.activeProject} changeProj={props.changeProject} projects={props.projects}></Dashboard>
        </ProtectedRoute>
        <ProtectedRoute path={`${match.path}/testplans`} exact>
          <Testplans sets={props.testplans}></Testplans>
        </ProtectedRoute>
        <ProtectedRoute path={`${match.path}/testsets`} exact>
          <Testsets sets={props.testsets}></Testsets>
        </ProtectedRoute>
        <ProtectedRoute path={`${match.path}/testcases`} exact>
          <Testcases sets={props.testcases}></Testcases>
        </ProtectedRoute>
        <ProtectedRoute path={`${match.path}/temps`} exact>
          <Testtemplate sets={props.testtemps}></Testtemplate>
        </ProtectedRoute>
        <ProtectedRoute path={`${match.path}/executions`} exact>
          <Execution sets={[]}></Execution>
        </ProtectedRoute>
        <ProtectedRoute path={`${match.path}/bugs`} exact>
          <Bug sets={[]}></Bug>
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated,
    activeUser: state.activeUser,
    activeProject: state.activeProject,
    testsets: state.Testsets,
    testcases: state.Testcases,
    testplans: state.Testplans,
    testtemps: state.Testtemps,
    projects: state.projects
  };
}

const mapDispatchToProps = dispatch => {
  return {
    changeProject: (name) => dispatch({type: 'CER_PROJ_CHANGE',value: name}),
    logOut: () => dispatch({type: 'CER_LOGOUT'})
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cerberus);
