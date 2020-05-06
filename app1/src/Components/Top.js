import React, {Component} from 'react';
import logo from '../images/Argos_Logo.png';
import './allCss.css';

class Top extends Component{
  render(){
    return (
      <div id='top'>
        <img alt="cannot show you" src={logo} width='300' height='80'></img>
        <div id='loginBox'>
        <form action="/login_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              alert("submit!!");
              this.props.onChangeMode('welcome');
              document.getElementById("loginBox").style.display="none";
            }.bind(this)}
        >
          <table>
            <tbody>
            <tr>
              <th>ID</th>
              <td><input type="text" id="id" name="id" required/></td>
            </tr>
            <tr>
              <th>PW</th>
              <td><input type="text" id="id" name="id" required/></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit"></input></td>
            </tr>
            </tbody>
          </table>

        </form>
        </div>
      </div>
    );
  }
}

export default Top;