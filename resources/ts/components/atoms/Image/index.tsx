import React from 'react';

interface ImageProps{
    src:string,
    width:number | string,
    height:number | string,
    alt?:string
}

const Image = ({
    src,
    width,
    height,
    alt
}:ImageProps) => {
    return (
        <img 
            src={src}
            width={width}
            height={height}
            alt={alt}
        />
    )
}

export default Image