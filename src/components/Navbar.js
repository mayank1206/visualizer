import React from 'react';

const Navbar = ({onAlgoChange}) => {

    function onChange(e,algoDetails) {
        onAlgoChange(algoDetails);
    }

    return (
        <div className="navbar-horizontal">
            <div className="navbar-block">
                <div className="dropdown navbar-block-btn" href="javascript:void(0);">
                    <div className="dropbtn">Sorting</div>
                    <div className="dropdown-content">
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['sort','Merge Sort'])}>Merge Sort</a>
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['sort','Quick Sort'])}>Quick Sort</a>
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['sort','Heap Sort'])}>Heap Sort</a>
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['sort','Bubble Sort'])}>Bubble Sort</a>
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['sort','Insertion Sort'])}>Insertion Sort</a>
                    </div>
                </div>
            </div>
            {/* <div className="navbar-block">
                <div className="dropdown navbar-block-btn" href="javascript:void(0);">
                    <div className="dropbtn">Path Finding</div>
                    <div className="dropdown-content">
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['path-finding',"Dijkstra's Algorithm"])}>Dijkstra's Algorithm</a>
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['path-finding',"A* Search"])}>A* Search</a>
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['path-finding',"Greedy Best-first Search"])}>Greedy Best-first Search</a>
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['path-finding',"Swarm Algorithm"])}>Swarm Algorithm</a>
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['path-finding',"Convergent Swarm Algorithm"])}>Convergent Swarm Algorithm</a>
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['path-finding',"Bidirectional Swarm Algorithm"])}>Bidirectional Swarm Algorithm</a>
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['path-finding',"Breath-first Search"])}>Breath-first Search</a>
                        <a href="javascript:void(0);" onClick={(e) =>onChange(e,['path-finding',"Deapth-first Search"])}>Deapth-first SearchS</a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Navbar