import React from "react";
import { Link } from "react-router-dom"; 
import Bio from "../../assets/images/Bio-Picture.jpeg"; 

function Home() {
    return (
      <section className="home my-5">
        <div className="title">
          <h2>Hello!</h2>
          <p>Welcome to my Portfolio!</p>
          <Link to="portfolio">
            <button>View my Projects</button>
          </Link>
        </div>
        <div className="picture">
          <img
            src={Bio}
            alt="Alvin" 
          />
        </div>
      </section>
    );
  }
  
  export default Home;