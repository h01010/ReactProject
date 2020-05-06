import React, {Component} from 'react';
import './allCss.css';

class Navigation extends Component{
  render(){
    return (
      <nav>
          <ul id='navi'>
              <li class="navi-item"><a class="navi-a" href="/">ARGOS</a></li>
              <li class="navi-item"><a class="navi-a" href="/">About</a></li>
              <li class="navi-item"><a class="navi-a" href="/">Board</a></li>
              <li class="navi-item"><a class="navi-a" href="/">ARGOS Seminar</a></li>
          </ul>
      </nav>
    );
  }
}

export default Navigation;