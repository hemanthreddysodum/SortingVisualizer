import React from 'react'

import "./sorts.css";
import { NavLink } from 'react-router-dom';

function Sorts() {
  return (
    <div className='sorts'>
      <div className='heading'>
        <h1>Sorting Visualizer</h1>
      </div>
      <nav className='navbar'>
         <NavLink to="/" className={({isActive }) => (isActive?"red":"")} >
              <h2>Home</h2>
        </NavLink>
        <NavLink to="/bubbleSort" className={({isActive }) => (isActive?"red":"")} >
              <h2>BubbleSort</h2>
        </NavLink>
        <NavLink to="/selectionSort" className={({isActive }) => (isActive?"red":"")}>
                <h2>SelectionSort</h2>
        </NavLink>
        <NavLink to="/insertionSort" className={({isActive }) => (isActive?"red":"")}>
                <h2>InsertionSort</h2>
        </NavLink>
        <NavLink to="/mergeSort" className={({isActive }) => (isActive?"red":"")}>
                <h2>MergeSort</h2>
        </NavLink>
        <NavLink to="/quickSort" className={({isActive }) => (isActive?"red":"")}>
                <h2>QuickSort</h2>
        </NavLink>
      </nav>
       
    </div>
  )
}

export default Sorts