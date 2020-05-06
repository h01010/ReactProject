import React, {Component} from 'react';
import Top from './Components/Top';
import DescMain from './Components/DescMain';
import Navi from './Components/NavigationBar';
import Board from './Components/Board';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode : 'notwelcome'
    }
  }
  getComponent(){
    var _compo=null;
    if (this.state.mode === "board"){
      _compo=<Board></Board>
    }
    else{
      _compo=<DescMain></DescMain>
    }
    return _compo;
  }
  render(){
    return(
      <div id="App">
        <Top onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          })
        }.bind(this)}></Top>
        <Navi onChangeMode={function(_mode){
        this.setState({
          mode:_mode
        })}.bind(this)}></Navi>
        {this.getComponent()}
      </div>
    );
  }
}

export default App;
