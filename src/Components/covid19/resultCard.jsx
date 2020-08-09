import React, { Component } from 'react';
// import { Button, Accordion } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default class ResultCard extends Component {
    render() {
        return (
            <Card style={{ width: '15rem' }} bg={this.props.bg}>
                <Card.Body>
                    <Card.Title>{this.props.value}</Card.Title>
                    <Card.Text>
                        {this.props.title}
                    </Card.Text>
                    {/* <Accordion>
                        <Card.Text>
                            <Accordion.Toggle as={Button} variant="light" eventKey="1" >
                                View Details
                        </Accordion.Toggle>
                        </Card.Text>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Detail statement </Card.Body>
                        </Accordion.Collapse>
                    </Accordion> */}
                </Card.Body>
            </Card>
        );
    }
}
