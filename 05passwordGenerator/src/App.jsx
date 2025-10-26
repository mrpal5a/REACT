import { useState, useCallback, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordcreate = () =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let number = "0123456789"
    let char = "!@#$%^&*()-_=+{}[]|\/?><,.;:"

    if(numberAllowed) str += number
    if(charAllowed) str += char

    for(let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)

  }
  const passwordGenerator = useCallback(passwordcreate, [length, numberAllowed, charAllowed, setPassword])
  //useEffect hook, it runs passwordGenerator function for the first time and then as the value changes in the variable that are written inside array
  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  //useRef hooks, we are using it for copying the value to clipboard
  let passwordRef = useRef(null)
  let CopyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, length)
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <div className='w-full max-w-md mx-auto shadow-2xl rounded-lg bg-gray-800 px-4 py-3 my-4 text-orange-500'>
      <h1 className='text-center text-white'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" placeholder='Password' value={password} className='outline-none w-full py-1 px-4 bg-white text-gray-700' readOnly ref={passwordRef}/>
        <button className='outline-none bg-blue-700 text-white px-4 py-1 shrink-0' onClick={CopyPasswordToClipboard}>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex gap-x-1 items-center'>
          <input type="range" id='length' min={8} max={100}  defaultValue={8} className='cursor-pointer' onChange={(e) => (setLength(e.target.value))} />
          <label htmlFor="length">Length : {length} </label>
        </div>
        <div className='flex gap-x-1 items-center'>
        <input type="checkbox" id='numberInput' onChange={() => {setNumberAllowed((prev) => (!prev))}} />
        <label htmlFor="numberInput"> Numbers</label>
        </div>
         <div className='flex gap-x-1 items-center'>
        <input type="checkbox" id='charInput' onChange={() => {setCharAllowed((prev)=> (!prev))}}/>
        <label htmlFor="charInput"> Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App