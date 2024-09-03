
import { useState } from 'react';

import InputBox from './components/Input';
import useCurrencyInfo from './hooks/usedcurrencyinfo';


function App() {

  const [amount, setAmount] = useState(0)
  const [from , setFrom] =useState('usd')
  const [ to , setTo] = useState('inr')
  const [ convertedAmount , setConvertedAmount] = useState
  (0)

  const CurrencyInfo = useCurrencyInfo(from)

const options = Object.keys(CurrencyInfo)

const swap = () => {
  setFrom(to)
  setTo(from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
  
}
const convert = ()  => {
  setConvertedAmount(amount * CurrencyInfo[to])

}

  return (
   <div 
   className="w-full h-screen flex flex-wrap justify-center items-center bg-cover
   bg-no-repeat"
   style={{
   backgroundImage : `url('https://th.bing.com/th/id/OIP.z-zBQ7kU9NUjK5gwCXA-3AHaEC?rs=1&pid=ImgDetMain')`
   }}
   >
    <div className="w-full">
      <div className="max-w-xl  h-72 m-auto border rounded-lg p-5
       backdroup-blur-sm bg-white/30 ">
        <form action="" onSubmit={(e)=>{
          e.preventDefault();
          convert()
        }}
        >
          <div className="w-full mb-8   flex justify-center">
           <InputBox
            label="From" 
            amount={amount}
            CurrencyOptions={options}
            onCurrencyChange={(currency) => setAmount(amount)}
            selectCurrency={from}
            onAmountChange= {(amount) => setAmount(amount)}
           />
          </div>
          <div className="relative w-full h-0.5">
            <button
             type='button'
             className='absolute left-1/2
             -translate-x-1/2
             -translate-y-1/2
             rounded-md bg-blue-600 text-white px-6 py-3 '
             onClick={swap}
            > Convert</button>
          </div>
          <div className="w-full mt-16 mb-4">
            <InputBox
           label="To"
           amount={convertedAmount}
           CurrencyOptions={options}
           onCurrencyChange={(currency) => setTo(currency)}
           selectCurrency={from}
           amountDisable
            />
          </div>
          <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert{from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
       </div>
    </div>

   </div>
  );

}

export default App;
