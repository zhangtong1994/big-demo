import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './component/Header/Header.js';
import List from './component/List/List.js';
import Footer from './component/Footer.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
class App extends Component{
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
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
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

ReactDOM.render(<App />,document.getElementById('app'));
