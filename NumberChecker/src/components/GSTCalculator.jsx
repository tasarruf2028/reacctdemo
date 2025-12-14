import React, { useState } from 'react'

const GSTCalculator = () => {

    const[baseAmount, setBaseAmount] = useState('');
    const[rate, setRate] = useState('');
    const[GSTAmount, setGSTAmount] = useState('');

    const handleBaseAmount = (e) => {
        setBaseAmount(e.target.value);
        setGSTAmount('');
    }

    const handleRate = (e) => {
        setRate(e.target.value);
        setGSTAmount('');
    }

    const calGST = () => {
        const baseAmountValue = parseFloat(baseAmount);
        const rateValue = parseFloat(rate);
        const GSTAmount = ((baseAmountValue * rateValue) / 100).toFixed(2);

        setGSTAmount(`The GST amount is ₹ ${GSTAmount}`);
    }

  return (
    <div className='m-4'>
      <div className='w-110 bg-white rounded py-4 px-6 shadow-xl'>
        <h1 className='text-3xl font-medium text-gray-800 text-center mb-4'>GST Calculator</h1>
        <div className='flex flex-col mb-6'>
            <label htmlFor="number" className='text-gray-600'>Enter base amount</label>
            <input 
                type="text" 
                value={baseAmount}
                onChange={handleBaseAmount} 
                placeholder='Enter base amount' 
                className='border-2 rounded px-2 h-10 border-gray-300 outline-0 hover:border-blue-400 trasistion duration-300' 
            />
            <label htmlFor="number" className='text-gray-600'>Enter GST rate</label>
            <input 
                type="text" 
                value={rate}
                onChange={handleRate} 
                placeholder='Enter GST rate' 
                className='border-2 rounded px-2 h-10 border-gray-300 outline-0 hover:border-blue-400 trasistion duration-300' 
            />
        </div>
        <button 
            onClick={calGST}
            className='w-full text-white text-xl h-10 bg-blue-500 rounded mb-4 cursor-pointer transition duration-200 hover:bg-blue-600'>Check</button>
        {GSTAmount && <p 
            className='text-center text-green-700 bg-green-200 p-1 border-2 border-green-600 rounded mb-6'>{GSTAmount}</p>}
      </div>
    </div>
  )
}

export default GSTCalculator
