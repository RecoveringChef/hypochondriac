import React from 'react';
import _ from 'lodash';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
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
        selectedSymptom: [],
        modalShow: false,
        selectedCondition: null
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
                const filtered_data = data.data.filter(condition => !condition.symptoms.includes(this.state.selectedSymptom || this.state.selectedSymptom.length))
                this.setState({ selectedSymptom: filtered_data });
            })
            .catch(err => console.log(err))
    };

    toggleModal = () => {
        this.setState(prevState => ({ modalShow: !prevState.modalShow }))
    };

    render() {
        const { conditions, selectedSymptom, modalShow, selectedCondition } = this.state;
        let allConditions = [], filteredConditions;
        const selectedSymptoms = selectedSymptom.map(s => s._id);
        if (selectedSymptoms.length) {
            conditions.forEach(c => allConditions = allConditions.concat(c.symptoms));
            filteredConditions = allConditions.filter(c => selectedSymptoms.includes(c));
            filteredConditions = _.uniq(filteredConditions);
            filteredConditions = filteredConditions.map(co => conditions.find(c => c.symptoms.includes(co)));
            filteredConditions = _.uniqBy(filteredConditions, '_id');
        } else {
            filteredConditions = conditions
        }
        return (
            <div className="myBox">
                {modalShow && <Modal show={modalShow} animation={false} centered onHide={this.toggleModal}>
                    <Modal.Header closeButton>
                        <Modal.Title> {selectedCondition.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body> {selectedCondition.description}</Modal.Body>
                    {/* <Button onClick={() => this.setState({ modalShow: false })}>Close</Button> */}
                    <Modal.Footer>
                        {/* <Link to={'https://' + selectedCondition.link}>Learn More</Link> */}
                        {selectedCondition.link}
                        {/* <a href="{selectedCondition.link}" target="_blank" rel="noopener">Learn More</a> */}

                    </Modal.Footer>
                </Modal>}
                <Row className="noMargin">
                    <Col className="stories" >
                        <h2>Worrisome Health News</h2>
                        <hr />
                        {this.state.news.map((item, i) => (
                            <Card
                                title={item.headline}
                                key={i}
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
                                                onClick={() => this.setState(prevState => ({ selectedSymptom: [...prevState.selectedSymptom, item] }))}

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
                                    {filteredConditions.map(item => (
                                        <div>
                                            <ListItem key={item.ObjectID} onClick={() => this.setState({ modalShow: true, selectedCondition: item })}>
                                                {item.name}
                                            </ListItem>
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