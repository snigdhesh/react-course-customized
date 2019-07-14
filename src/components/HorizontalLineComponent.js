import React from 'react';

const HorizontalLineComponent = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);



export default HorizontalLineComponent