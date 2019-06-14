import React, {Component} from 'react';
import {Button, Card, CardBody, CardImg} from "reactstrap";
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardText from "reactstrap/es/CardText";
import CardTitle from "reactstrap/es/CardTitle";

class RecipeDetail extends Component{

    state = {
        recipe : this.props.recipe,
        editMode: this.props.editMode
    };

    toggleEditMode = () => {


        this.setState({editMode: !this.state.editMode});
        console.log("edit mode "+!this.state.editMode+" to "+this.state.editMode)


        if(this.props.addRe){
            this.props.addRe(this.state.recipe)
        }else if(!this.state.editMode){
            this.props.update(this.state.recipe)
        }

    };


    onPictureChange = event => {
        this.setState({recipe:{...this.state.recipe, picture: event.target.value}});
    };
    onNameChange = event => {
        this.setState({recipe:{...this.state.recipe, name: event.target.value}});
    };

    onDescriptionChange = event => {
        this.setState({recipe:{...this.state.recipe, description: event.target.value}});
    };

    render() {

        let {recipe} = this.state;

        return (
            <Card>
                <CardImg top width="100%" src={recipe.picture} alt="Card image cap" />
                {this.state.editMode && <input value={recipe.picture} onChange={this.onPictureChange}/>}
                <CardBody>
                    {
                        this.state.editMode ?
                        <input value={recipe.name} onChange={this.onNameChange}/> :
                        <CardTitle>{recipe.name}</CardTitle>
                    }
                    <br/>
                    {
                        this.state.editMode ?
                        <textarea value={recipe.description} onChange={this.onDescriptionChange}/> :
                        <CardText>{recipe.description}</CardText>
                    }
                    {
                        !this.state.addMode &&
                        <div>
                            <Button onClick={this.props.delete(recipe.id)}><FontAwesomeIcon icon={faTrash}/></Button>
                            <Button onClick={this.toggleEditMode}><FontAwesomeIcon icon={faPen}/></Button>
                        </div>
                    }
                </CardBody>
            </Card>
        );
    };
}

export default RecipeDetail;
