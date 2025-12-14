import React, { useState } from 'react'

const PrimeNumber = () => {

    const [number, setNumber] = useState('')
    const [result, setResult] = useState('')

    const handleInputChange = (e) => {
        setNumber(e.target.value);
        setResult('');
    }

    const checkPrime = () => {
        const numValue = parseInt(number, 10);
        let i;

        if(isNaN(numValue)){
            setResult('Please enter valid number!');
        }
        
        for(i = 2; i<= numValue-1; i++){
            if(numValue % i == 0){
                setResult(`The number ${number} is not a Prime Number`);
                break;
            }
        }
        if(i == numValue){
            setResult(`The is number ${number} is Prime Number`);
        }
    }

  return (
    <div className='m-4'>
      <div className='w-110 bg-white rounded py-4 px-6 shadow-xl'>
        <h1 className='text-3xl font-medium text-gray-800 text-center mb-4'>Prime Number Checker</h1>
        <div className='flex flex-col mb-6'>
            <label htmlFor="number" className='text-gray-600'>Enter number</label>
            <input 
                type="text" 
                value={number}
                onChange={handleInputChange} 
                placeholder='Enter number' 
                className='border-2 rounded px-2 h-10 border-gray-300 outline-0 hover:border-blue-400 trasistion duration-300' 
            />
        </div>
        <button 
            onClick={checkPrime}
            className='w-full text-white text-xl h-10 bg-blue-500 rounded mb-4 cursor-pointer transition duration-200 hover:bg-blue-600'>Check</button>
        {result && <p 
            className='text-center text-green-700 bg-green-200 p-1 border-2 border-green-600 rounded mb-6'>{result}</p>}
      </div>
    </div>
  )
}

export default PrimeNumber
