import React from 'react';

const Home = () => {
  let navItem = [
    {
      name: "Home",
      url: "/"
    },
    {
      name: "Cerberus",
      url: "/cerberus"
    },
    {
      name: "About",
      url: "/about"
    },
  ]
  return (
    <div className="Home">
      <section className="hero is-fullheight is-main-hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h3 className="subtitle">Hi, I am</h3>
            <h1 className="title">Tuan</h1>
            <h2 className="subtitle bottom">A Web Developer</h2>
          </div>
        </div>
      </section>
      <div className="bottom-nav">
       <ul>
         {
           navItem.map(item => {
             return(
              <li className="nav-item">
                <a href={item.url}>{item.name}</a>
              </li>
             )
           })
         }
       </ul>
      </div>
    </div> 
  );
}

export default Home;
