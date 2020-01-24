import React from 'react';
import {Link} from "react-router-dom";

const Sidebar = props => {
    const toogleSidebar= (e) =>{
      e.preventDefault();
      document.querySelector('#sidenav').classList.toggle('hide');
      document.querySelector('.appContent').classList.toggle('collapse');
    }
    return (
      <nav id="sidenav">
        <Link className="app_name" to="/cerberus">
          <img className='logo' src={process.env.PUBLIC_URL + props.logo.svg} alt="" width='50px'/>
          <span className="brandName item-name">{props.logo.name} </span>
        </Link>
        <ul className="main-buttons">
          { props.items.map(item=>{
            return (
              <li key={item.id}>
                <i className={item.icon}></i>
                <span className="item-name">{item.main}</span>
                <ul className="hidden">
                  {item.subs.map(sub=>{
                    return (
                      <li key={sub.id}><Link to={sub.link}>{sub.name}</Link></li>
                    )
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
        <div className="end">
          <ul className="main-buttons">
            <li>
              <i className="fas fa-user-circle"></i>
              <span className="item-name">{props.user}</span>
            </li>
            <li onClick={toogleSidebar}>
              <i className="fas fa-bars"></i>
              <span className="item-name">collapse</span>
            </li>
          </ul>
        </div>
      </nav> 
  );
}

export default Sidebar;