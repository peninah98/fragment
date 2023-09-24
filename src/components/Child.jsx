import React from "react"
const Child = ({count})=>{
    return (
        <dv>ChildCount  {count}</dv>
    )
}

export default React.memo(Child)