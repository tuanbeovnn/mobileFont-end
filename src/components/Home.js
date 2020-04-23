import React, {Component} from 'react';
import './../App.css';


class Home extends Component{
        render(){
            return (
                    <section id="hero">
					    <div className="hero-container">
					      <h1>Tuan Nguyen</h1>
					      <h2>I'm a Student In Vaasa City</h2>
					      <a href="#about" className="btn-scroll scrollto" title="Scroll Down"><i className="bx bx-chevron-down"></i></a>
					    </div>
  					</section>
                );
    }
}

export default Home;