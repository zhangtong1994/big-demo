import React, { Component } from 'react';
import BlogList from './BlogList.js';
import map from 'lodash/fp/map';
import Search from './Search'
import axios from 'axios';
import CircularProgress from 'material-ui/CircularProgress';
// let blogs=[
//   {index:'1',title:'haha',date:'2014.2.26'},
//   {index:'2',title:'first',date:'2014.2.29'},
//   {index:'3',title:'second',date:'2014.7.26'},
//   {index:'4',title:'third',date:'2014.5.26'}
// ]
//https://raw.githubusercontent.com/zhangtong1994/big-demo/master/posts/index.json
class Blog extends Component {
        constructor(){
          super();
          this.state={
            search:''
          }
        }
        cardSearch(x){
          this.setState({search:x})
        }

  render(){

    return(
      <div>
        <Search handelSearch={this.cardSearch.bind(this)} />
        <BlogList search={this.state.search} />

      </div>
    )
  }
}

export default Blog;
