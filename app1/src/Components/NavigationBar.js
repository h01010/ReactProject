import React, {Component} from 'react';
import './allCss.css';

class Navigation extends Component{
  render(){
    return (
      <nav>
          <ul id='navi'>
              <li class="navi-item"><a class="navi-a" href="/" onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('welcome');
              }.bind(this)}>ARGOS</a></li>
              <li class="navi-item"><a class="navi-a" href="/"  onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('about');
              }.bind(this)}>About</a></li>
              <li class="navi-item"><a class="navi-a" href="/"  onClick={function(e){
                e.preventDefault();
                this.props.onChangeMode('board');
              }.bind(this)}>Board</a></li>
              <li class="navi-item"><a class="navi-a" href="https://sites.google.com/view/argos-cnu">ARGOS Open Page</a></li>
          </ul>
      </nav>
    );
  }
}

export default Navigation;