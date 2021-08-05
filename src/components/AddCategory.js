import React from 'react'
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'

export const AddCategory = ({ setCategories }) => {
  
  const handleAddGifs = (e) =>  {
    e.preventDefault();
    
    const searchInputRef = document.querySelector('#searchInput');
    const { value:inputValue } = searchInputRef;

    if( inputValue.length > 0 ) {
      setCategories( (cats) => [ inputValue,  ...cats ]);
      searchInputRef.value = '';
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Fill search box',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }

  return (
    <form>
      <div className="searchRow">
        <input 
          type="text" 
          placeholder="Find by name"
          id="searchInput"
        />
        <button onClick={ handleAddGifs }>Add Gifs</button>
      </div>      
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}