import React from 'react';

import "./Carousel.css";

import one from '../../img/one.jpg';
import two from '../../img/two.jpg'
import three from '../../img/three.jpg'

const Carousel = () => (
  <div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
      <li data-target="#carousel-example-1z" data-slide-to="1"></li>
      <li data-target="#carousel-example-1z" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner" role="listbox">
      <div className="carousel-item active">
        <img className="d-block w-100" src={one}
          alt="First slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={two}
          alt="Second slide"/>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={three}
          alt="Third slide"/>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
);

export default Carousel;
