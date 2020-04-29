import React, {Component} from 'react';

class Navigation extends Component{
  render(){
    return (
      <div id='navi'>
          <ul>
              <li><a href="/">ARGOS</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Board</a></li>
              <li><a href="/">ARGOS Seminar</a></li>
          </ul>
      </div>
    );
  }
}

export default Navigation;