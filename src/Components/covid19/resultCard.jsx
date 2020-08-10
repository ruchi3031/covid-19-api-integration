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
                </Card.Body>
            </Card>
        );
    }
}
