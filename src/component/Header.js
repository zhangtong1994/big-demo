import React,{Component} from 'react';
class Header extends Component{
  render(){
    let styles = {
       backgroundColor:'#00bcd4',
       width:'100%',
       height:'400px'
    }
    return(
     <div style={styles}>
        Header
     </div>
    )
  }
}

export default Header;
