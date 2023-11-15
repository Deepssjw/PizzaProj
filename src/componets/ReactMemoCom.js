import React from 'react'

const ReactMemoCom = (props) => {
    return (
        <div>
            {console.log("My React Memo render")}
            <h2>This is My ReactMemo Function Component</h2>
            <p>My Name is :<strong>{props.name}</strong></p>
        </div>
    )
}

export default React.memo(ReactMemoCom) 
