import React, { Component } from 'react';
import BlogCard from './Blogcard.js';
import map from 'lodash/fp/map';


let blogs=[
  {index:'1',title:'haha',date:'2014.2.26'},
  {index:'2',title:'haha',date:'2014.2.26'},
  {index:'3',title:'haha',date:'2014.2.26'},
  {index:'4',title:'haha',date:'2014.2.26'}
]
class List extends Component {
  render(){
    // console.log(Cards.length);
    var blogCards = [];
    map((b) =>  {
                  blogCards.push(
                    <BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>
                  );
                },
        blogs
    );
    // console.log(AllCards);
    return(
      <div>
        {blogCards}
      </div>
    )
  }
}

export default List;
