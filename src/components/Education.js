import React,{Component} from 'react';
import moment from 'moment';
import '../App.css';
class Education extends Component {
	
 render(){   
   const getEducation = this.props.educationData.map(function(item, index) {
		 const startdate = moment(item.startDate).format('MMM, YYYY');
		 const enddate = moment(item.endDate).format('MMM, YYYY');
		 return (
		 <div key={index}>
		   <h3>{item.studyType} {item.area}</h3>
				   <h4>{item.institution}</h4>
				   <p>Studied: {startdate} - {enddate}</p>
		   </div>
		   )
	 });
	 return (


  <div>{getEducation}</div>

  
	 )
 }
}

export default Education;