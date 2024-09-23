import React, { useState } from 'react'
import './FilterButtons.css'
export default function FilterButtons({onFilterChange}) {
    const[isActive,setIsActive]=useState('all');
  return (

   <>
    <section id="filter-btns">
            <div className="container">
                <button onClick={() =>{onFilterChange('all'); setIsActive('all')} } className={isActive === 'all' ? 'active' : ''}>ALL</button>
                <button onClick={() => {onFilterChange('rings'); setIsActive('rings')}}className={isActive === 'rings' ? 'active' : ''}>RINGS</button>
                <button onClick={() => {onFilterChange('necklace'); setIsActive('necklace')}}className={isActive === 'necklace' ? 'active' : ''}>NECKLACE</button>
                <button onClick={() => {onFilterChange('glasses'); setIsActive('glasses') }}className={isActive === 'glasses' ? 'active' : ''}>GLASSES</button>
                <button onClick={() =>{ onFilterChange('earrings'); setIsActive('earrings')}}className={isActive === 'earrings' ? 'active' : ''}>EARRINGS</button>
            </div>
        </section>
   </>
  )
}
