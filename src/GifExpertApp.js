import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {
  
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className="container">
      <h1>Gif Expert App</h1>
      <hr />
      <AddCategory setCategories={ setCategories } />
      {
        categories.map( (category, i) => {
          return <GifGrid
            key={ i }
            category={ category }
          />
        })
      }
    </div>
  )
}
