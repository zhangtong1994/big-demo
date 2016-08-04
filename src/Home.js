import React, { Component } from 'react';
import axios from 'axios';
import {Card} from 'material-ui/Card';
class Home extends Component {
  constructor(props){
     super(props);
     this.state = {
       resString: {}
     }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/zhangtong1994')
         .then((res) => {
           this.setState({
              resString:res.data
           })
         })
  }
  render(){

    return(
      <div className='account'>
        <Card className="content">

         <img className='pic' src = {this.state.resString.avatar_url} />
        <ul className='list'>
         <li>
           <p>Follows</p>
           <p>{this.state.resString.follows}</p>
         </li>
         <li>
           <p>Repos</p>
           <p>{this.state.resString.repos}</p>
         </li>
         <li>
           <p>Following</p>
           <p>{this.state.resString.following}</p>
         </li>
        </ul>
       </Card>
      </div>
    );
  }
}

export default Home;
