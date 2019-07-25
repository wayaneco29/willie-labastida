import React from 'react';

import './box.styles.scss';

const Box = ({ title, years, description }) => (
    <div className="skill">
        <h3 className='box-title'>{title}</h3>

        {
            years ? <span className='box-years'>{years}</span>
                : ''
        }
        <p className='box-description'>{description}</p>
    </div>
)

export default Box;