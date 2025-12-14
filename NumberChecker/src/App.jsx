import React from 'react'
import OddEvenCheck from './components/OddEvenCheck'
import PalindromeCheck from './components/PalindromeCheck'
import Armstrong from './components/Armstrong'
import GSTCalculator from './components/GSTCalculator'
import PrimeNumber from './components/PrimeNumber'
// import Palindrome from './pages/Palindrome'

const App = () => {
  return (
    <div className='flex flex-wrap bg-amber-200 w-full h-screen'>
      <OddEvenCheck/>
      <PalindromeCheck/>
      <Armstrong/>
      <GSTCalculator/>
      <PrimeNumber/>
    </div>
  )
}

export default App
