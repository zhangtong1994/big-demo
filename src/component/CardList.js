import React, { Component } from 'react';

class CardList extends Component {

  render(){
    let styles={
      root:{
        width:'80%',
        height:'100px',
        marginTop:'10px',
        boxShawdow:'0px 2px 5px 0px #ddd'
     },
     left:{
       width:'20%',
       height:'100px',
       lineHeight:'100px',
       color:'#fff',
       textAlign:'center',
       float:'left',
       backgroundColor:'teal'
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
      <div style={styles.root}>
         <div style={styles.left}>{this.props.index}</div>
         <div style={styles.right}>
            <h3>{this.props.title}</h3>
            <p>{this.props.date}</p>
         </div>
      </div>
      )
    }
  }
  CardList.propTypes = {
    title:React.PropTypes.string.isRequired,
    index:React.PropTypes.number.isRequired,
    date:React.PropTypes.string.isRequired,
  }
  CardList.defaultProps = {
    title:"请输入标题",
    index:1,
    date:'2016.3.24',
  };
  export default CardList;
