import React, { Component } from 'react';
import {Router,hashHistory} from 'react-router';

class Blogcard extends Component {
   handleClick(){
      this.context.router.push(`blog/${this.props.url}`)
   }
  render(){
    console.log(this.context.router)
    let styles={
      root:{
        width:'80%',
        height:'100px',
        marginTop:'10px',
        boxShadow:'0px 5px 15px #888888',
        margin:'20px auto'
     },
     left:{
       width:'20%',
       height:'100px',
       lineHeight:'100px',
       color:'#fff',
       textAlign:'center',
       float:'left',
       backgroundColor:'teal',
       maxWidth:'130px'
     },
     right:{

       height:'100px',
       color:'#777',
       float:'left',
       marginLeft:'20px'

     },
     h3:{
       margin:'0px'
     },
     p:{
       margin:'0px'
     }
    }
    return (
      <div style={styles.root} onClick={this.handleClick.bind(this)}>
         <div style={styles.left}>{this.props.index}</div>
         <div style={styles.right}>
            <h3>{this.props.title}</h3>
            <p>{this.props.date}</p>
         </div>
      </div>
      )
    }
  }
  Blogcard.propTypes = {
    title:React.PropTypes.string.isRequired,
    index:React.PropTypes.number.isRequired,
    date:React.PropTypes.string.isRequired,
  }
  Blogcard.defaultProps = {
    title:"请输入标题",
    index:1,
    date:'2016.3.24',
  };
  Blogcard.contextTypes = {
    router:React.PropTypes.object.isRequired
  }
  export default Blogcard;
