
import React, {Component} from 'react';
import './App.css';
import RecipeDetail from "./RecipeDetail";
import {MOCK} from "./mock";

class App extends Component{

    state = {
        recipes: MOCK
    };

    delete = (id) => () => {
        this.setState({
            recipes: this.state.recipes.filter(item => item.id !== id)
        })
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.recipes.map(recipe =>
                    <div className="col-md-3">
                        <RecipeDetail recipe={recipe} delete={this.delete}/>
                    </div>)}
                </div>
            </div>
        );
    };
}


export default App;
