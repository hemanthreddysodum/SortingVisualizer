import React from 'react'
import { Outlet } from 'react-router-dom'
import Sorts from "./Sorts.jsx"
import Home from './Home.jsx'
export default function Layout() {
  return (
    <div >
        <Sorts />
        <main className='sort-container'>
            <Outlet />
        </main>
    </div>
  )
}

