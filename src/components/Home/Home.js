import React, { PropTypes } from 'react';
import Works from './works'
class Home extends React.Component {
  render () {
    let styles={
      root:{
        width:'100%',
        height:'100vh',
        background: 'url("https://raw.githubusercontent.com/zhangtong1994/big-demo/e1cac8ff7a97351f08c72f8734be737e9cad493a/src/images/Home.jpg") no-repeat fixed center center/cover'
      },
      title:{
        color:'#fff',
        textAlign:'center',
        paddingTop:'40vh',
        fontSize:'48px'
      },
      span:{
        color:'#00BCD4',
        fontSize:'36px'
      },
      cover:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.3)'
      }
    }
    return(
      <div>
        <div style={styles.root}>
          <div style={styles.cover}>
            <h1 style={styles.title}>欢迎光临<br/><span style={styles.span}>Helo everyone</span></h1>
          </div>
        </div>
       <Works />
      </div>
    )
  }
}
export default Home;
