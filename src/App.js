import React, {useState} from "react";

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previosCount => previosCount + 1)
  const decrement2 = () => setCount(previosCount => previosCount - 1)

  const reset = () => setCount(0)

  const multiplication = () => setCount(count * 2)

  const threeQuotient = () => count % 3 === 0 ? setCount(count / 3) : count
  return (
    <>
    <div>
     count: {count}
    </div>
    <div>
     <button onClick={increment}>+1</button>
     <button onClick={decrement}>-1</button>
    </div>
    <div>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
    </div>
    <div>
      <button onClick={reset}>reset</button>
      <button onClick={multiplication}>x2</button>
      <button onClick={threeQuotient}>3の倍数の時だけ3で割る</button>
    </div>
    </>
  )
}

export default App;
