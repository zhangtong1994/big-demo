import React,{Component} from 'react';


class Footer extends Component{
  render(){
    let styles = {
      root:{
      backgroundColor:'#212121',
      height:'300px',
      textAlign:'center'
    },
    img:{
      maxWidth:'200px',
      height:'200px'
    },
    p:{
      color:'#ccc',
      lineHeight:'80px'
    }
  }
    return(
     <div style={styles.root}>
             <p style={styles.p}>欢迎添加我的微信:zhangairen23</p>
             <img style={styles.img} src="http://obo85nywl.bkt.clouddn.com/images/wechat.jpg" />
    </div>
    )
  }
}

export default Footer;
