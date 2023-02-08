import React,{useState} from 'react'

function Rate() {
    [ret, setRet] = useState(0)
    [weight, setWeight] = useState("")

    function convertToUSD(inr) {
        const usd = inr / 81.06; 
        return usd;
    }
    

  return (
    <div>

    </div>
  )
}

export default Rate