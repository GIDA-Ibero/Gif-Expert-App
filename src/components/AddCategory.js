import React from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  
  const handleAddGifs = (e) =>  {
    e.preventDefault();
    setCategories( (cats) => [ 'Pokemon', ...cats ]);
  }

  return (
    <form>
      <div className="searchRow">
        <input 
          type="text" 
          placeholder="Find by name"
        />
        <button onClick={ handleAddGifs }>Add Gifs</button>
      </div>      
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}