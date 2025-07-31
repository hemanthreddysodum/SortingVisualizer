import React from 'react'
import { NavLink } from 'react-router'
import "./Home.css";
function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">🧠 Sorting Visualizer</h1>
      <p className="home-subtitle">
        Visualize how different sorting algorithms work, step by step!
      </p>

      <div className="button-group">
        <NavLink to="/bubbleSort" className="home-button">Try Bubble Sort</NavLink>
        <NavLink to="/mergeSort" className="home-button">Try Merge Sort</NavLink>
        <NavLink to="/quickSort" className="home-button">Try Quick Sort</NavLink>
        <NavLink to="/selectionSort" className="home-button">Try Selection Sort</NavLink>
        <NavLink to="/insertionSort" className="home-button">Try Insertion Sort</NavLink>
      </div>

      <div className="algo-list">
        <h2>Available Algorithms:</h2>
        <ul>
          <li>🫧 Bubble Sort – Simple but inefficient</li>
          <li>📌 Selection Sort – Picks the smallest each time</li>
          <li>📥 Insertion Sort – Builds one element at a time</li>
          <li>🔀 Quick Sort – Divide and conquer with pivots</li>
          <li>🔗 Merge Sort – Fast and stable, good for large data</li>
        </ul>
      </div>
       <footer className="home-footer">
        Created by Hemanth Reddy Sodum • © 2025
      </footer>
    </div>
  )
}

export default Home