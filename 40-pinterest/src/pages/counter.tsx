import { useEffect, useState } from "react"
import store from '@/redux/store'

const CounterIndex = () => {
    const [count, setCount] = useState(0)

    const handlePlus = () => {
        // 1. DISPATCH A TYPE OR A FUNCTION
        store.dispatch({ type: 'INCREMENT' })
    }

    const handleMinus = () => {
        store.dispatch({ type: 'DECREMENT' })
    }


    useEffect(() => {
        // SUBSRIBE -> USE REDUX STORE
        store.subscribe(() => {
            setCount(store.getState().value)
        })
    },[])


    return (
        <div>
            <h1>Counter</h1>
            <div>
                <button onClick={handlePlus}>+</button>
                <span>{count}</span>
                <button onClick={handleMinus}>-</button>
            </div>
        </div>
    )
}

export default CounterIndex