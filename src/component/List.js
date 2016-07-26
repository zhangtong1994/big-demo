import React, { Component } from 'react';
import CardList from './CardList.js';
import map from 'lodash/fp/map';
let meg=[
  {title:'haha',date:'2014.2.26'},
  {title:'haha',date:'2014.2.26'},
  {title:'haha',date:'2014.2.26'},
  {title:'haha',date:'2014.2.26'}
]
class List extends Component {

  render(){
    let styles = {
      width:'80%',
      marginLeft:'10%'
    }
    let megs=[];
    for(var i=0;i<meg.length;i++){
      megs.push(
        <CardList title={meg[i].title} date={meg[i].date} index={i} key={i} />
      )
    }
    return(
        <div style = {styles}>
           {megs}
        </div>
    )
  }
}
export default List;
