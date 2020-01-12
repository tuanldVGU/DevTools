import React from 'react';
import { Link} from "react-router-dom";

const Sidebar = props => {
    return (
      <nav className="sidenav">
        <div className="app_name">
          <img className='logo' src={process.env.PUBLIC_URL + props.logo.svg} alt="" width='50px'/>
          <span className="brandName">{props.logo.name} </span>
        </div>
        <ul className="main-buttons">
          { props.items.map(item=>{
            return (
              <li key={item.id}>
                <i className={item.icon}></i>
                <span>{item.main}</span>
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
          <a href="/">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </a>
        </div>
      </nav> 
  );
}

export default Sidebar;