import React from 'react';
import './SliderControls.scss';

const SliderControls = (props) => {
    const { prevSlide, nextSlide } = props;
    return (
        <div className="SliderControls">
            <div className='slider-controls'>
                <div className='left-arrow-holder' onClick={prevSlide}>
                    <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 0L1 12l12 12" stroke="#FFF" fill="none" fillRule="evenodd" /></svg>
                </div>
                <div className='right-arrow-holder' onClick={nextSlide}>
                    <svg width="14" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 0l12 12L1 24" stroke="#FFF" fill="none" fillRule="evenodd" /></svg>
                </div>
            </div>
        </div>
    )
}
export default SliderControls;