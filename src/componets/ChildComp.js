import React from 'react'

const ChildComp = ({count,company}) => {

    // const {count} = props;
    return (
        <div>
            <h2>This is child componets</h2>
            <p>Count value is:<strong> {count}</strong></p>
            <p>Company:<strong> {company}</strong></p>
        </div>
    )
}

export default ChildComp;
