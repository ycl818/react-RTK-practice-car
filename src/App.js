import React from 'react'
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import CardSearch from './components/CardSearch';
import CardValue from './components/CardValue';


const App = () => {
  return (
    <div>
        <CardForm/>
        <CardList/>
        <CardSearch/>
        <CardValue/>
    </div>
  )
}

export default App