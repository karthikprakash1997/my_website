import React from 'react';
import Profile from './components/Profile';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Education from './components/Education';
import './App.css'
import Project from './components/Project';
import Intern from './components/Intern';
import Achievements from './components/Achievements';
import Hobbies from './components/Hobbies';
import {useSpring, animated} from 'react-spring';
import {Card,Accordion} from 'react-bootstrap';

const App = props => {
  const profileData = props.jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = props.jsonObj.work;
  const educationData = props.jsonObj.education;


  const prop = useSpring({to:{opacity: 1,marginTop:0} , from: {opacity: 0,marginTop:-500},config:{duration:1000}})
  
  // console.log(profileData)
  return (
    <animated.div style={prop}>
          <div className="container">
            <div className="row">
              <aside className="col-md-4">
                  <Card>
                  <Profile profileData={profileData} />
                  </Card>
                
              </aside>
              <main className="col-md-8">
                <Card>
                  < Accordion>
                   <Card>
                   <Accordion.Toggle as={Card.Header} eventKey="0">
                      <h2 className="text-uppercase" ><i className="fa fa-lg fa-user"></i > About</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                    <About aboutData={aboutData} />
                    </Accordion.Collapse>
                    </Card>
                     <Card>
                     <Accordion.Toggle as={Card.Header} eventKey="1">
                    <h2 className="text-uppercase" ><i className="fa fa-lg fa-user"></i > Education</h2>
                     </Accordion.Toggle>
                     <Accordion.Collapse eventKey="1">
                     <Education educationData={educationData} />
                     </Accordion.Collapse>
                    </Card>

                    <Card>
                   <Accordion.Toggle as={Card.Header} eventKey="2">
                      <h2 className="text-uppercase" ><i className="fa fa-lg fa-user"></i > skills</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Skills />
                    </Accordion.Collapse>
                    </Card>


                    <Card>
                   <Accordion.Toggle as={Card.Header} eventKey="3">
                      <h2 className="text-uppercase" ><i className="fa fa-lg fa-user"></i > Projects</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Project aboutData={aboutData} />
                    </Accordion.Collapse>
                    </Card>


                    <Card>
                   <Accordion.Toggle as={Card.Header} eventKey="4">
                      <h2 className="text-uppercase" ><i className="fa fa-lg fa-user"></i > Intern</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Intern aboutData={aboutData} />
                    </Accordion.Collapse>
                    </Card>


                    <Card>
                   <Accordion.Toggle as={Card.Header} eventKey="5">
                      <h2 className="text-uppercase" ><i className="fa fa-lg fa-user"></i > Work Experience</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Work workData={workData} />
                    </Accordion.Collapse>
                    </Card>


                    <Card>
                   <Accordion.Toggle as={Card.Header} eventKey="6">
                      <h2 className="text-uppercase" ><i className="fa fa-lg fa-user"></i > Achievements</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                      <Achievements aboutData={aboutData} />
                    </Accordion.Collapse>
                    </Card>


                    <Card>
                   <Accordion.Toggle as={Card.Header} eventKey="7">
                      <h2 className="text-uppercase" ><i className="fa fa-lg fa-user"></i > Hobbies</h2>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                      <Hobbies aboutData={aboutData} />
                    </Accordion.Collapse>
                    </Card>
                    </Accordion>
                    </Card>
              </main>
            </div>
          </div>
      </animated.div>
    )
};

export default App;
