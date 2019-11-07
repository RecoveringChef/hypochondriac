import React from 'react';
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import Col from "react-bootstrap/Col";
import "./style.css";



class Home extends React.Component {
    render() {
        return (
            <div className="myBox">
                <Row className="noMargin">
                    <Col className="stories" >

                        <h2>Worrisome Health News</h2>

                        <hr />

                        <Card>
                            {/* need to pull in Headline form News db to populate card header */}

                            In a rare moment of honesty W.H.O. officials have admitted the current Ebola outbreak has been found well outside the supposed 'containment ring' which had already been expanded mutiple times. Current cases are reported in at least five coutnries, and that's just the officially reported ones. <br /> Sreenings procedured for travellers from affected areas are to check for passengers showing flu-like symptoms; however carriers of the virus can be transmitting the deadly virus for days before showing the first symptoms themselves. Thus the odds of Ebola making it to Europe, Asia, Oceania, and the Americas increases daily (just like the number of cases in those affected countries). <br />The three main strains of the virus vary in fatality rates from just 68% to over 90%. However even if you are one of the lucky ones to survive chances are you will have life long and life altering after effects from the disease.
                           { /* Should pull in first X# charchters of story to populte card */}
                        </Card>

                        <Card>

                        </Card>

                        <Card>

                        </Card>
                        { /* all cards should be clickable to open into their own screen. Also be able to pin "worry about it later" if user is logged in */}
                    </Col>
                    <Col >
                        <Row>

                            <Col className="symp">

                                <h3>Hypochondriac Symptom Checker</h3>

                                <hr />

                                {/* should pull in list (possibly 2 or 3 column) of Symptoms with radio buttons next to them. As each button is clicked it narrows the list of conditions below */}


                            </Col>
                        </Row>
                        <Row>


                            <Col className="cond">


                                <h3>Medical Conditions of Concern</h3>

                                <hr />
                                {/* need to pull in names of conditions here alphabeticaly (possibly 2 column) and scroll through. each naem shoudl be clickabel and call up full info on that condition */}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home