import React from 'react';

const Card = (props) => {
    const { color, title, number} = props;
    return (
        <div style={{ width: '200px', height: '75px', backgroundColor: color, borderRadius: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white', fontSize: '15px' }}>
            <p>{title}</p>
            <p>{number}</p>
        </div>
    )
}

export default Card;
