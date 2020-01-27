
import '../App.css'
import  React, {Component} from 'react';
//import {ReactComponent as Apple} from'../assets/svg/apple.svg';
import PL from './skillsets/pl';
import OS from './skillsets/os';
import Tools from './skillsets/tools';

class Skills extends Component {render(){
    return(
          <div>
          <PL></PL>
          <OS></OS>
          <Tools></Tools>
          </div>
          
    )
}}
export default Skills