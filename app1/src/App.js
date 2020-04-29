import React, {Component} from 'react';
import Top from './Components/Top';
import DescMain from './Components/DescMain';
import Navi from './Components/NavigationBar';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mode : 'notWelcome'
    }
  }
  getComponent(){
    var _compo=null;
    if(this.state.mode==='welcome'){
      _compo=<Navi></Navi>
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
        {this.getComponent()}
      </div>
    );
  }
}

export default App;
