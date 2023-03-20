import React from 'react'
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import CardSearch from './components/CardSearch';
import CardValue from './components/CardValue';


const App = () => {
  return (
    <div className='container is-fuild'>
        <CardForm/>
        <CardSearch/>
        <CardList/>
        <CardValue/>
    </div>
  )
}

export default App