import React from 'react';
import './App.css';
import IngredientList from './components/ingredient-list';
import IngredientAddForm from './components/ingredient-add-form';

function App() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <IngredientList></IngredientList>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <IngredientAddForm></IngredientAddForm>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
