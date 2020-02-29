import React, { Component } from 'react';
import { getIngredients } from '../services/testIngredientService.js';

export default class IngredientList extends Component {
  state = {
    ingredients: getIngredients()
  };

  removeIngredient = ingredient => {
    const ingredients = this.state.ingredients.filter(
      i => i.id !== ingredient.id
    );
    this.setState({ ingredients });
  };

  render() {
    return (
      <ul className='list-group'>
        {this.state.ingredients.map(ingredient => (
          <li
            className='list-group-item d-flex justify-content-between align-items-center'
            key={ingredient.id}
          >
            {ingredient.title}
            <span>
              <span className='badge badge-primary badge-pill'>
                {ingredient.amount} {ingredient.unit}
              </span>
              <button
                onClick={() => this.removeIngredient(ingredient)}
                className='btn btn-danger btn-sm'
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    );
  }
}
