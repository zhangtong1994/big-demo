import React, { PropTypes } from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { Route, IndexRoute } from 'react-router';
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       open: false,
       title:''
     };
  }
  handleToggle(){
    this.setState({open: !this.state.open});
  }
  handleClose(){
    this.setState({open: false})

  }
  // componentWillReceiveProps() {
  //    this.setNavState();
  //  }
  //  componentDidMount(){
  //    this.setNavState();
  //  }
  //  setNavState(){
  //    this.setState({
  //      title:this.context.router.isActive('/', true) ? 'HOME' :
  //        this.context.router.isActive('/blog')? 'BLOG' :
  //        this.context.router.isActive('/about')? 'ABOUT' : 'HOME'
  //    });
  //  }
  render () {
    let styles={
      title:{
        color:'#fff',
        fontSize:'32px',
        lineHeight:'64px',
        textAlign:'center',
        backgroundColor:'#00BCD4',
        marginBottom:'20px'
      },
      menu:{
        textAlign:'center',
        display:'block'
      },
      navTitle:{
        color:'#fff',
        lineHeight:'60px',
        fontSize:'20px',
        backgroundColor:'#00BCD4',
        marginBottom:'10px',
        marginTop: '0'
      },
      link:{
        textDecoration:'none',
        display:'block',
        color:'#333'
      },
      navTitle:{
        color:'#fff',
        lineHeight:'75px',
        fontSize:'20px',
        backgroundColor:'#00BCD4',
        marginBottom:'10px',
        marginTop: '0'
      }
    }
    return(
      <div>

        <Drawer
          docked={false}
          width={256}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >

          <div style={styles.menu}>
           <p style={styles.navTitle} onClick={this.handleClose.bind(this)}>hello</p>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
                <Link to="/" style={styles.link}>首页</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
                <Link to="blog" style={styles.link} activeStyle={{color: '#E91E63'}}>博客</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose.bind(this)}>
                <Link to="about" style={styles.link} activeStyle={{color: '#E91E63'}}>关于</Link>
            </MenuItem>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default NavBar;
