import { useEffect, useState } from 'react'

export default function PricingCalculator() {
  const [selectedModel, setSelectedModel] = useState('gpt-3.5-turbo-0125')
  const [pricePerToken, setPricePerToken] = useState(0.000001)
  const [numOfTokens, setnumOfTokens] = useState(0)
  const [Price, setPrice] = useState(0)

  // I wanted to see messages in red as I type code
  // Quokka does not work for this funciton.
  function calculateCredits() {
    console.log('calculating credits')
    setPrice(numOfTokens * pricePerToken)
    console.log(Price)
  }

  useEffect(() => {
    console.log(selectedModel)
    if (selectedModel === 'gpt-3.5-turbo-0125') {
      setPricePerToken(0.000001)
    } else if (selectedModel === 'gpt-3.5-turbo-instruct') {
      setPricePerToken(0.000002)
    }
  }, [selectedModel])

  // Quokka does not work. I wanted to see messages in red as I type code
  {
    {
      let price_1_million_tokens = 0.5
      let price_per_token = price_1_million_tokens / 1000000
      console.log(price_per_token)
    }
  }

  return (
    <div className='container mx-auto w-1/2 bg-slate-300 h-screen'>
      <div className='flex flex-col gap-6 items-center justify-center'>
        <h1 className='text-2xl font=bold mt-20'>AI Credits Calculator</h1>
        <h2 className='text-2xl font-bold'>Price: ${Price}</h2>
        <select
          className='select select-bordered w-full max-w-xs'
          value={selectedModel}
          onChange={e => setSelectedModel(e.target.value)}>
          <option value='gpt-3.5-turbo-0125'>gpt-3.5-turbo-0125</option>
          <option value='gpt-3.5-turbo-instruct'>gpt-3.5-turbo-instruct</option>
        </select>
        <input
          type='number'
          className='input input-bordered w-full max-w-xs'
          value={numOfTokens}
          onChange={e => setnumOfTokens(e.target.value)}
          placeholder='enter number of tokens'
        />
        <button
          className='btn btn-neutral w-full max-w-xs'
          onClick={calculateCredits}>
          Calculate
        </button>
      </div>
    </div>
  )
}
