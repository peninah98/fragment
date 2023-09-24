import { useState } from "react"
import Child from "./Child"
const Parent =()=>{

    const [parentCount, setParentCount] = useState(0)
    const [childCount, setChildtCount] = useState(0)
    const changeParentCount = ()=>{
        setParentCount(parentCount + 1)

    }

    const changeChildCount =()=>{
        setChildtCount(childCount  + 1)
    }
    return(
        <div>This is a parent component
            <h1>Parent Count {parentCount}</h1>
            <Child count = {childCount}/>
            <button onClick={changeParentCount}>Increment Parent</button>
            <button onClick={changeChildCount}>Increment Child</button>
        </div>
        
    )
}

export default Parent