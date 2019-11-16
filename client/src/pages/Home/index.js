import React from 'react';
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import Col from "react-bootstrap/Col";
import API from "../../utils/API"
//import List from "../../components/List"
import ListItem from "../../components/List"
import "./style.css";



class Home extends React.Component {

    state = {
        news: [],
        conditions: [],
        symptoms: [],
        secondColumnStart: 0
    }
    componentDidMount() {
        this.getNewsMethod();
        this.getConditionsMethod();
        this.getSymptomsMethod();
    }

    getNewsMethod = () => {

        API.getNews()
            .then(data => {
                console.log(data)
                this.setState({
                    news: data.data
                })
            })
            .catch(err => console.log(err))
    };

    getConditionsMethod = () => {

        API.getConditions()
            .then(data => {
                console.log(data)
                this.setState({
                    conditions: data.data
                })
            })
            .catch(err => console.log(err))
    };

    getSymptomsMethod = () => {

        API.getSymptoms()
            .then(data => {
                console.log(data)
                this.setState({
                    symptoms: data.data
                })
            })
            .catch(err => console.log(err))
    };






    render() {
        //    const secondColumnStart = Math.floor(this.state.symptoms.length / 2),
        return (
            <div className="myBox">
                <Row className="noMargin">
                    <Col className="stories" >

                        <h2>Worrisome Health News</h2>

                        <hr />
                        {this.state.news.map(item => (
                            <Card
                                title={item.headline}
                            >
                                <div className="storyText">
                                    {item.description.split("\n\n").map((paragraph, i) => {
                                        return (
                                            <p key={`para-${i}`}>
                                                {paragraph.split("\n").map((line, j) => {
                                                    return (
                                                        <React.Fragment key={`line-${j}`}>
                                                            {line}
                                                            <br />
                                                        </React.Fragment>
                                                    );
                                                })}
                                            </p>
                                        );
                                    })}
                                </div>
                            </Card>
                        ))};

                        { /* all cards should be clickable to open into their own screen. Also be able to pin "worry about it later" if user is logged in */}
                    </Col>
                    <Col >
                        <Row>

                            <Col className="symp">

                                <h3>Hypochondriac Symptom Checker</h3>

                                <hr />

                                <div className="doubleCol">
                                    {this.state.symptoms.map(item => (

                                        <ListItem>
                                            <input
                                                type="radio"
                                                name="react-tips"
                                                value="option 2"
                                                checked={false}
                                                className="form-check-input"
                                            />

                                            {item.name}
                                        </ListItem>

                                    ))}
                                </div>
                                {/* should pull in list (possibly 2 or 3 column) of Symptoms with radio buttons next to them. As each button is clicked it narrows the list of conditions below */}


                            </Col>
                        </Row>
                        <Row>


                            <Col className="cond">


                                <h3>Medical Conditions of Concern</h3>

                                <hr />
                                <div className="doubleCol">
                                    {this.state.conditions.map(item => (
                                        <ListItem>
                                            {item.name}
                                        </ListItem>

                                    ))}
                                </div>
                                {/* need to pull in names of conditions here alphabeticaly (possibly 2 column) and scroll through. each naem shoudl be clickabel and call up full info on that condition */}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    };
}

export default Home