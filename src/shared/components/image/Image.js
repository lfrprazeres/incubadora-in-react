import React from 'react';

const Image = ({source, style, className, alt}) => (
    <img 
        style={style}
        alt={alt}
        className={className}
        src={require(`../../assets/img/${source}`)}
    />
);

export default Image;
