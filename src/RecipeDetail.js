import React, {Component} from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RecipeDetail extends Component{


    render() {

        let {recipe} = this.props;

        return (
            <Card>
                <CardImg top width="100%" src={recipe.picture} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{recipe.name}</CardTitle>
                    <CardText>{recipe.description}</CardText>
                    <Button onClick={this.props.delete(recipe.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                </CardBody>
            </Card>
        );
    };
}

export default RecipeDetail;
