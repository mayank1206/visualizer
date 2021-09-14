import React, { useState } from 'react';

const SortingAlgoDetails = ({algo,resetArray,startSorting,changeSpeed,changeSize,sizeSliderVal,speedSliderVal}) => {
    return (
        <div className="algo-details">
            <div className="algo-details-block">{algo[1]}</div>
            <div className="algo-details-block">
                <a href="javascript:void(0);" onClick={resetArray}>New Array</a>  
            </div>
            <div className="algo-details-block">
                Size
                <input className="size-speed" type="range" min="4" max="100" value={sizeSliderVal} onChange={changeSize}></input>
            </div>
            <div className="algo-details-block">
                Time
                <input className="size-speed" type="range" min="4" max="1000" value={speedSliderVal} onChange={changeSpeed}></input>
            </div>
            <div className="algo-details-block">
                <a href="javascript:void(0);" onClick={startSorting}>Start</a>  
            </div>
        </div>
    )
}

export default SortingAlgoDetails