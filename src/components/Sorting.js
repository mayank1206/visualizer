import React, { useState, useEffect } from 'react';
import SortingAlgoDetails from './SortingAlgoDetails';
import SortingAlgoBar from './SortingAlgoBar';
const Sorting = ({algo}) => {

    const [array, setArray] = useState([]);
    const [sortingStatus, setSortingStatus] = useState(false);
    const [sizeSliderVal, setSizeSliderVal] = useState(50);
    const [speedSliderVal, setSpeedSliderVal] = useState(300);

    function changeSize(value) {
        setSortingStatus(false);
        setSizeSliderVal(value.target.value);
        resetArray();
    }
    function changeSpeed(value) {
        setSpeedSliderVal(value.target.value);
    }

    useEffect(() => {
        resetArray();
    },[]); 

    useEffect(() => {
        setSortingStatus(false);
    },[algo]); 
        
    function resetArray(){
        setSortingStatus(false);
        const rarray = [];
        for (let i = 0; i < sizeSliderVal; i++) {
        rarray.push(randomIntFromInterval(10, 500));
        }
        setArray(rarray);
    }

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function startSorting() {
        setSortingStatus(true);
    }
    
    function replaceSortedArray(){
        setArray(array.sort(function(a, b){return a - b}));
        setSortingStatus(false);
    }

    return (
        <div style={{ display: "flex", flexDirection : "column",}}>
            <SortingAlgoDetails sizeSliderVal={sizeSliderVal} speedSliderVal={speedSliderVal} algo={algo} resetArray={resetArray} startSorting={startSorting} changeSpeed = {changeSpeed} changeSize = {changeSize}/>
            <SortingAlgoBar algo={algo} array={array} sortingStatus={sortingStatus} speedSliderVal={speedSliderVal} replaceSortedArray={replaceSortedArray} />
        </div>
    )
}

export default Sorting