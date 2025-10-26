import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setconvertedAmount] = useState(0);
const currencyinfo = useCurrencyInfo(from);

const options = Object.keys(currencyinfo); // it will return all the keys that we are getting from the API call OR from data that was returned from useCurrencyInfo. here key means all the options fo currencies that we can convert into

const swap = (()=>{
  setFrom(to)
  setTo(from)
  setconvertedAmount(amount)
  setAmount(convertedAmount)
})

const convert = () =>{
  setconvertedAmount(amount * currencyinfo[to])
}
   return (
   <div
  className="w-full h-screen flex justify-center items-center bg-cover bg-no-repeat"
  style={{
    backgroundImage: `url('https://images.pexels.com/photos/8369590/pexels-photo-8369590.jpeg')`,
  }}
>
  <div className="flex justify-center items-center gap-10">
    {/* Left Card (Image) */}
    <div>
      <video
        className="w-full max-w-md border border-gray-200 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-lg"
        src="https://www.pexels.com/download/video/6700266/"  autoPlay loop
        alt=""
      />
    </div>

    {/* Right Card (Form or Content) */}
    <div className="w-full max-w-md border border-gray-200 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-lg">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
