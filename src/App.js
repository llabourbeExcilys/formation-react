
import React, {Component} from 'react';
import './App.css';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {MOCK} from './mock';

class App extends Component{
    render() {
        return (
            <Card>
                <CardImg top width="100%" src={MOCK[0].picture} alt="Card image cap" />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        );
    };
}


export default App;
