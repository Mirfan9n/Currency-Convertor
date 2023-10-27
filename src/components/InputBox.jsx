import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmtChng,
  onCurrChng,
  currencyOptions=[],
  selectCur="usd",
  amtDis = false,
  curDis = false,

  className = "",
}) {
  const amtid = useId()

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amtid} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
        id={amtid}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled= {amtDis}
          value={amount}
          onChange={(e)=> onAmtChng && onAmtChng(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCur}
          onChange={(e)=> onCurrChng && onCurrChng(e.target.value)}
          disabled= {curDis}
        >
          {currencyOptions.map((currency)=>(
           <option key={currency} value={currency}>
             {currency}
           </option>
         ))}

        </select>
      </div>
    </div>
  );
}

export default InputBox;