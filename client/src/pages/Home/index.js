import React from 'react';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import Col from "react-bootstrap/Col";
//import InputGroup from "react-bootstrap/InputGroup";
import API from "../../utils/API"
//import List from "../../components/List"
import ListItem from "../../components/List"
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import ModalHeader from "react-bootstrap/ModalHeader";
import "./style.css";


class Home extends React.Component {
    state = {
        news: [],
        conditions: [],
        symptoms: [],
        modalShow: [],
        selectedSymptom: []
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
                console.log(data);
                data.data.sort((a, b) => a.name.localeCompare(b.name))
                this.setState({
                    conditions: data.data
                })
            })
            .catch(err => console.log(err))
    };

    getSymptomsMethod = () => {

        API.getSymptoms()
            .then(data => {
                console.log(data);
                data.data.sort((a, b) => a.name.localeCompare(b.name));
                this.setState({
                    symptoms: data.data
                })
            })
            .catch(err => console.log(err))
    };

    filterConditionsMethod = () => {
        API.getConditions()
            .then(data => {
                console.log(data);
                data.data.sort((a, b) => a.name.localeCompare(b.name));
                data.data.filter(condition => !this.state.selectedSymptom.length || condition.symptoms.includes(this.state.selectedSymptom))
                this.setState({
                    selectedSymptom: data.data
                })
            })
            .catch(err => console.log(err))
    };

    setModalShow = () => {
        this.setState({ modalShow: true })
    };




    render() {
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
                                <h2>Hypochondriac Symptom Checker</h2>
                                <hr />
                                <div className="doubleCol">
                                    {this.state.symptoms.map(item => (
                                        <ListItem key={item.ObjectID}>
                                            <input
                                                name="slector"
                                                type="checkbox"
                                                className="sympSelect"
                                                onClick={() => this.setState({ selectedSymptom: true })}
                                            />
                                            {item.name}
                                        </ListItem>
                                    ))}
                                </div>
                                {/* should pull in list of Symptoms with checkboxes. As each checkbox is clicked it narrows the list of conditions below */}
                            </Col>
                        </Row>
                        <Row>
                            <Col className="cond">
                                <h2>Medical Conditions of Concern</h2>
                                <hr />
                                <div className="doubleCol">
                                    {this.state.conditions
                                        .filter(condition => !this.state.selectedSymptom.length || condition.symptoms.includes(this.state.selectedSymptom))
                                        .map(item => (
                                            <div>
                                                <ListItem key={item.ObjectID} onClick={() => this.setState({ modalShow: true })}>
                                                    {item.name}
                                                </ListItem>

                                                <Modal animation={false} centered>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title> {item.name}</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body> {item.description}</Modal.Body>
                                                    <Modal.Footer>
                                                        {item.link}
                                                        {/* <Button onClick={() => this.setState({ modalShow: false })}>Close</Button> */}
                                                    </Modal.Footer>
                                                </Modal>
                                            </div>
                                        ))}
                                </div>
                                {/* Pull in names of conditions here. Each name should be clickable and call up full info on that condition */}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    };
}

export default Home