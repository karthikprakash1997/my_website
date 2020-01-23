import  React from 'react';
import {ReactComponent as C} from'../../assets/svg/programmingLang/c.svg'
import {ReactComponent as Cp} from'../../assets/svg/programmingLang/c++.svg'
import {ReactComponent as Js} from'../../assets/svg/programmingLang/js.svg';
import {ReactComponent as Csh} from'../../assets/svg/programmingLang/c#.svg'
import {ReactComponent as Css} from'../../assets/svg/programmingLang/css.svg';
import {Card} from 'react-bootstrap';
import "../../App.css";
import {Spring} from 'react-spring/renderprops'

const pl =(props)=>{return (
  <Card className='cards'>
      <h4 className="heading">ProgrammingLanguage</h4>
      <div className="pl">
      <C/>
      <Cp/>
      <Js/>
      <Csh/>
      <Css />
      </div>
     </Card>
)}
export default pl