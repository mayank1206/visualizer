import React, { useState, useEffect } from 'react';
import SortingAlgoDetails from './SortingAlgoDetails';
import PathFinderGrid from  './PathFinderGrid';

const PathFinder = ({algo}) => {

    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        getInitialGrid();
    },[]); 

    useEffect(() => {
        // setSortingStatus(false);
    },[algo]); 
    
    function getInitialGrid (){
        const grid = [];
        for (let row = 0; row < 20; row++) {
            const currentRow = [];
            for (let col = 0; col < 50; col++) {
                    const isStart= row === 10 && col === 5;
                    const isFinish= row === 10 && col === 45;
                    const currentNode=[
                        col,
                        row,
                        isStart,
                        isFinish
                    ];
                currentRow.push(currentNode);
            }
            grid.push(currentRow);
        }
        setNodes(grid);
    };

    return (
        <div style={{ display: "flex", flexDirection : "column",}}>
            <PathFinderGrid algo={algo} nodes={nodes}/>
        </div>
    )
}

export default PathFinder