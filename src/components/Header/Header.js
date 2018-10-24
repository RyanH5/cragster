import React, { Component } from 'react';
import './Header.css';
import { Hamburger } from '../Hamburger/Hamburger';

export class Header extends Component {
  render() {
    return(
      <div>
        <nav>
         <input type="checkbox" id="css-toggle-menu" name="css-toggle-menu" /> 
         <ul class="main">
               <li><a href="">Home</a></li>
               <li><a href="">Services</a></li>
               <li><a href="">Contact</a></li>
               <li><a href="">Login</a></li>
               <li><a href="">Sign up</a></li>
               <li><a href="">Settings</a></li>
         </ul> 
         <label for="css-toggle-menu" id="css-toggle-menu"></label> 
   </nav>
        
      </div>
    )
  }
}