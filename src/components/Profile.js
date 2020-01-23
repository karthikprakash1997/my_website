import React from 'react';
import {FaEnvelope, FaFacebook} from 'react-icons/fa';
import '../App.css';
//import  ReactCSSTransitionGroup from'react-addons-css-transition-group';
const Profile = props => {
    const profileObj = props.profileData;
    return  <div> 
               
    
                  <div className="profileImg image"><img role="presentation" className=" justify-content-center rounded-circle " src={require('../karthik.jpg')} width="200" alt="my_pic" /></div>
                  <h1 className="text-center" >{profileObj.name}</h1>
                  <h2 className="text-center">{profileObj.label}</h2>
                  <div className="divider"></div>
                  
                  <ul className="list-unstyled contact-links text-center">
                    <li><i className="fa fa-lg fa-location-arrow"></i>{profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode}</li>
                    <li><i className="fb"><FaEnvelope/></i><a href={`mailto:${profileObj.email}`}>{profileObj.email}</a></li>
                  </ul>
                  <div className="divider"></div>
                  <div>
                    <div>
                    <i className="fb">< FaFacebook /></i><a href={'https://facebook.com/'+profileObj.profiles[0].username}></a>

                    </div>
                  </div>
                  
            </div>
};

export default Profile;
