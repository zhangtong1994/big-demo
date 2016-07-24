import React,{Component} from 'react';
class Header extends Component{
  render(){
    let styles = {
       backgroundColor:'#f0ffff',
       width:'100%',
       height:'400px'
    }
    return(
     <div style={styles}>
        <p>Header</p>
     </div>
    )
  }
}

export default Header;
