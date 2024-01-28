import React from 'react'

function Button({ name, className, action }) {
    const style = 'btn-view-rule ' + className
    return (
        <div className={style} onClick={action}>{name}</div>
    )
}

export default Button
