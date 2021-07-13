import React from 'react';
import './ImageBox.scss';

const ImageBox = (props) => {
    const { className, src, alt } = props;
    return (
        <div className={`ImageBox ${className}`}>
            <img src={src} alt={alt} ></img>
        </div>
    )
}
export default ImageBox;