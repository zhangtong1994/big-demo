import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import Footer from './Footer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
class App extends Component{
  constructor(){
    super();
    this.state={
      search:''
    }
  }
  cardSearch(x){
    this.setState({search:x})
  }
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render(){

    return(
        <div>
           <Header change={this.cardSearch.bind(this)} />
           {this.props.children}
           <Footer />
        </div>
       )
  }
}
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};
export default App;
