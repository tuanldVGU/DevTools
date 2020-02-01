import React from 'react';
const ListComponentheader = props => {
  let bg_color = props.color || "";
  bg_color += (bg_color !== "") ? ' has-text-white-ter' : ""; 
  return (
    <article className="media project-header">
        <figure className="media-left">
          <div className={`ref-icon ${bg_color}`}><i className={`fas ${props.logo}`}></i></div>
        </figure>
        <div className="media-content">
          <div className="project-info">
            <p>
              {/* <small>Project</small> <br/> */}
              <span className="title is-4">{props.name}</span> <br/>
              <span className="subtitle is-6">{props.desc}</span>
              {/* <strong>  </strong> <br/>
              <span className="project-desc">  </span> */}
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="buttons">
            <button className="button is-info m-1">Hello world</button>
          </div>
        </div>
      </article>
  );
}

export default ListComponentheader;