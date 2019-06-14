import React, {Component} from 'react';
import {Button} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAd} from "@fortawesome/free-solid-svg-icons";
import RecipeDetail from "../Component/RecipeDetail";
import axios from 'axios';

const API_URL = 'http://10.0.1.119:8080/api/v1';


class RecipeList extends Component{

    state = {
        recipes: [],
        addMode: false
    };

    getAll (){
        const url = `${API_URL}/recipes`;
        axios.get(url)
            .then((r) => {
                this.setState({
                    recipes: r.data })
            })
    }

    componentDidMount() {
        this.getAll()
    }


    delete = (id) => () => {
        axios.delete("http://10.0.1.119:8080/api/v1/recipes/"+id).then();
        this.getAll();
    };



    addRe = (recipe) => {
        axios.post("http://10.0.1.119:8080/api/v1/recipes/", {...recipe,ingredients:[{
                "recipeId": 1,
                "ingredientId": 1,
                "name": "Dark rum (Appleton Estate Reserve)",
                "quantity": 2,
                "unit": "oz"
            }],
            instructions: "Coucou"})
            .then();
    }

    update = (recipe) => {
        console.log("dans update")
        axios.patch("http://10.0.1.119:8080/api/v1/recipes/", recipe).then(response =>
            console.log(response.data)
        ).catch(error => console.log(error));
    }


    toggleAddMode = () => {
        this.setState({addMode: !this.state.addMode});
    };

    render() {
        return (
            <div>
                <Button onClick={this.toggleAddMode}><FontAwesomeIcon icon={faAd}/></Button>
                <div className="container">
                    <div className="row">
                        {
                            this.state.recipes.map(recipe =>
                                <div className="col-md-3"><RecipeDetail recipe={recipe} delete={this.delete} editMode={false}  update={this.update} /></div>)
                        }
                        {
                            (this.state.addMode) && <div className="col-md-3">   <RecipeDetail recipe={{}} delete={this.delete} update={this.update}  editMode={true} addRe={this.addRe}/> </div>
                        }
                    </div>
                </div>
            </div>
        );
    };

}

export default RecipeList;
