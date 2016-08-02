import React, { Component } from 'react';
import BlogCard from './Blogcard.js';
import map from 'lodash/fp/map';


let blogs=[
  {index:'1',title:'haha',date:'2014.2.26'},
  {index:'2',title:'first',date:'2014.2.29'},
  {index:'3',title:'second',date:'2014.7.26'},
  {index:'4',title:'third',date:'2014.5.26'}
]
class List extends Component {
  render(){
    // console.log(Cards.length);
    var blogCards = [];
    if (this.props.search=='') {
    map((b) =>  {
              blogCards.push(
                <BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>);},blogs)
  }else{
      let query=new RegExp(this.props.search,"i");
      for (var i = 0; i < blogs.length; i++) {
        if (query.test(blogs[i].title)) {
          blogCards.push(<BlogCard title={blogs[i].title} date={blogs[i].date} index={blogs[i].index} key={Math.random()}/>)
        }
      }

  }
    // console.log(AllCards);
    return(
      <div>
        {blogCards}
      </div>
    )
  }
}

export default List;
