import React from 'react';
import Nav from '../../shared/Nav';

const About = () => {
  return(
    <div>
      <Nav />
      <div style={{paddingLeft:20}}>
        <h1>About Web</h1>
        <div style={{width:165,backgroundColor:'#aaa',height:2}}/>
        <div>
          <h3>Author of this website</h3>
          <p>Name : Christian Yoda Nangoy</p>
          <p>NIM : 105011910011</p>
          <p>Study Program : System Information</p>
        </div>
        <br/>
        <div>
          <p>This web app build using edaman recipe API. The purpose of this website is to track the meal plan that you're gonna make.</p>
          <p>It can make you a meal plan based on the options you choose.</p>
        </div>
      </div>
    </div>
  )
}

export default About;
