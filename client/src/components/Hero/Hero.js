import './Hero.css';
import React from 'react';
import { Parallax, Background } from 'react-parallax';


const MyComponent = () => (
  <div className="abc" id="hero">
  
    {/* <Parallax
      blur={2}
      bgImage={require('../../img/b1.jpg')}
      bgImageAlt="back-1"
      strength={100}
      
    >
      Put some text content here
      or even an empty div with fixed dimensions
      to have a height for the parallax.
      <div style={{ height: '700px' }} />
    </Parallax> */}
    <Parallax
      blur={{ min: -1 , max: 3 }}
      bgImage={require('../../img/back3.jpg') }
      bgImageAlt="back-2"
      strength={150}
      bgClassName="blurimage"
       
    >
    <div className="copywriting">
    <div className="intro">
      {/* <img className="logo1" src={logo} alt="logi" />  */}
      <h3 className="agency">WEB DESIGN AGENCY</h3>
      <hr className="hr1" />
      <h2 className="we">WORLD WIDE WEB PROS</h2>
    </div>
    <div className="matn">
      <p className="para1">You need coolest website with highest functionality
      <br />
      We Provide what you desigre</p>
      <button className="btn btn-primary">Let's Take a Tour</button>
      </div>
      </div>
      <div style={{ height: '270px' }} />
    </Parallax>
    {/* <Parallax 
      // blur={{ min: -1 , max: 1 }}
      bgImage={require('../../img/bg4.jpg')}
      bgImageAlt="back-2"
      strength={400}
    >
      <div classname="secondimage">
        
      </div>
      <div style={{ height: '400px' } } />
    </Parallax> */}
    
  </div>
);
export default MyComponent;