import React, { Component } from 'react';
import GithubAccount from './GithubAccount/GithubAccount'
import D from './D.js'
class About extends Component {
   render(){
     return(
       <div>
         <GithubAccount />
         <D />
       </div>
     )
   }
}
export default About;
