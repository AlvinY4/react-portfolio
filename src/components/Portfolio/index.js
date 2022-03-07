import React from 'react';

import GuessThatMovie from "../../assets/images/app-image.png";
import WineShare from "../../assets/images/wine-share-app.png";


function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={GuessThatMovie}
              alt="Guess-that-movie-screenshot"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/AlvinY4/Group-Project1" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://alviny4.github.io/Group-Project1/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={WineShare}
              alt="Wine-Share-Website-Screenshot"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/AlvinY4/Group-Project-2-" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://wine-share.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
}

export default Portfolio;