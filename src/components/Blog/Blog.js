import React, { Component } from 'react';
import BlogCard from './BlogCard.js';
import map from 'lodash/fp/map';
import Search from './Search'
import axios from 'axios';
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
     this.state = {
       posts: ''

     }
  }
  componentDidMount(){
    axios.get(`https://raw.githubusercontent.com/zhangtong1994/big-demo/master/posts/index.json?v=${Math.random()}`)
         .then((res) => {
           this.setState({
              posts:res.data

           })
         })
  }
  render(){
    var blogCards = [];

    map((b) =>  {
              blogCards.push(
                <BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>);},this.state.posts)


    return(
      <div>
        <Search />
        {blogCards}
      </div>
    )
  }
}

export default Blog;
