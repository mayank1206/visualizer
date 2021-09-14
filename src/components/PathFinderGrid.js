import React, { useEffect } from 'react';

const PathFinderGrid = ({algo,nodes}) => {
    
 
    return (
        <div className="grid-container">
            {nodes.map((row,rowIdx)=>{
                return <div key={rowIdx} className="grid">
                    {row.map((node,nodeIdx)=><div className={`grid-box${node[3] ? ' node-finish' : node[2] ? ' node-start' :''}` }></div>)}
                    </div>
            })}
        </div>
    )
}

export default PathFinderGrid