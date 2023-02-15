import React from 'react'
import Category from './components/category/Category'
import Header from './components/header/Header'
import './index.css'


const App = () => {
  return (
    <div className='container'>
        <Header/>
        <Category/>
    </div>
  )
}

export default App