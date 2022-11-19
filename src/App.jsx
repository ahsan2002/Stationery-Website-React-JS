import React from 'react'
import Books from './Components/Books';
import Footer from './Components/Footer';
import Header from './Components/Header'
import Journal from './Components/Journal';

const App = () => {
  return (
    <>
      <Header />
      <Journal />
      <Books />
      <Footer />
    </>
  )
}

export default App;