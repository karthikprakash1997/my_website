import  React from 'react';
import {ReactComponent as Mongo} from'../../assets/svg/tools/mongo.svg'
import {ReactComponent as Node} from'../../assets/svg/tools/node.svg'
import {ReactComponent as Reactjs} from'../../assets/svg/tools/react.svg';
import {ReactComponent as Unity} from'../../assets/svg/tools/unity.svg';
import {Card} from 'react-bootstrap';
import "../../App.css"

const Tools =(props)=>{return (
    <Card className='skillCard'>
      <h4 className="heading">Tools</h4>
      <div className="pl">
          <Reactjs/>
          <Node/>
          <Mongo/>  
          <Unity/>
      </div>
    </Card>
);}
export default Tools