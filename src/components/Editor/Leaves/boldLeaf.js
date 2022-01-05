import React from 'react'

const BoldLeaf = props => {
    return (
        <span 
            {...props.attributes}
            style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
        >
            {props.children}
        </span>
    )
}


export default BoldLeaf