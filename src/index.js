import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './component/Header.js';
import List from './component/List.js';
import Footer from './component/Footer.js';

class App extends Component{
  render(){

    return(
        <div>
           <Header />
           <List />
           <Footer />
        </div>
       )
  }
}


ReactDOM.render(<App />,document.getElementById('app'));
