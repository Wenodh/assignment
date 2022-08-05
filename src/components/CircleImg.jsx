import React from 'react';

const CircleImg = (props) => {
    const circle = {
        borderRadius: '50%',
        height: props?.size,
        width: props?.size,
        border: `${props.br ?? '0px'} solid #D7DFE9`,
    };
    return <img style={circle} src={props?.src} alt="" />;
};

export default CircleImg;
