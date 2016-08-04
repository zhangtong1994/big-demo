import React, { Component } from 'react';
import axios from 'axios';
import {Card} from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
class Home extends Component {
  constructor(props){
     super(props);
     this.state = {
       resString: {},
       wait:true
     }
  }
  componentDidMount(){
    axios.get('https://api.github.com/users/zhangtong1994')
         .then((res) => {
           this.setState({
              resString:res.data,
              wait:false
           })
         })
  }
  render(){


    return(
      <div className='account'>
        <Card className="content">{
           this.state.wait ? <div>Reading.....<CircularProgress /></div> :

            <div>
              <img className='pic' src = {this.state.resString.avatar_url} />
              <ul className='list'>
                 <li>
                    <p>Follows</p>
                    <p>{this.state.resString.followers}</p>
                </li>
                <li>
                    <p>Repos</p>
                    <p>{this.state.resString.public_repos}</p>
                </li>
                <li>
                    <p>Following</p>
                    <p>{this.state.resString.following}</p>
                </li>
              </ul>
            </div>
          }
       </Card>
      </div>
    );
  }
}

export default Home;
