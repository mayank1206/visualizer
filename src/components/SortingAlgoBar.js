import React, { useEffect } from 'react';
let letMeGoOut = false;
let newSpeed = 4;
const SortingAlgoBar = ({algo,array,sortingStatus,speedSliderVal,replaceSortedArray}) => {

    useEffect(() => {
        if(sortingStatus===true){
            letMeGoOut = false;
            newSpeed = speedSliderVal;
            if(algo[1]==="Bubble Sort"){
                showSorting(bubbleSort());
            }
            else if(algo[1]==="Insertion Sort"){
                showSorting(insertionSort());
            }
            else if(algo[1]==="Merge Sort"){
                var A = array.slice(0); 
                var MSA = [];
                mergeSort(A,0,A.length-1,MSA);
                showSorting(MSA);
            }
            else if(algo[1]==="Heap Sort"){
                showSorting(heapSort());
            }
            else if(algo[1]==="Quick Sort"){
                var A = array.slice(0); 
                var QSA = [];
                quickSort(A,0,A.length-1,QSA);
                showSorting(QSA);
            }
        }
        else{
            letMeGoOut = true;
        }
    },[sortingStatus]);

    useEffect(() => {
        newSpeed = speedSliderVal;
    },[speedSliderVal]); 

    function merge(A,start,mid,end,MSA) {
        var p = start;
        while(p<mid){
            MSA.push([1,p,mid]);
            if(A[p]>A[mid]){
                MSA.push([2,p,mid,A[mid],A[p]]);
                var temp = A[p];
                A[p] = A[mid];
                A[mid] = temp;
                var q = mid;
                if(q<=end-1){
                    MSA.push([1,q,q+1]);
                }
                while(q<=end-1 && A[q]>A[q+1]){
                    MSA.push([2,q,q+1,A[q+1],A[q]]);
                    var temp = A[q];
                    A[q] = A[q+1];
                    A[q+1] = temp; 
                    q++;
                    if(q+1<=end-1){
                        MSA.push([1,q+1,q+2]);
                    }
                }
            }
            p++;
        }
    }

    function mergeSort(A,start,end,MSA){
        if( start < end ) {
            var mid = Math.floor(( start + end ) / 2);           
            mergeSort( A , start , mid , MSA ) ;                
            mergeSort( A , mid+1 , end , MSA ) ;            
            merge( A , start , mid+1 , end, MSA ); 
        }
    }

    function quickSort(A,start,end,QSA){
        if( start < end ) {
            var piv_pos = partition (A,start , end ,QSA) ;     
            quickSort(A,start , piv_pos -1,QSA);    
            quickSort(A,piv_pos +1 , end,QSA) ;
        }
    }

    function partition(A,start,end,QSA) {
        var i = start + 1;
        var piv = A[start];
        for(var j =start + 1; j <= end ; j++ )  {
            QSA.push([1,start,j]);
            if( A[ j ] < piv){
                QSA.push([2,i,j,A[j],A[i]]);
                var temp = A[ i ];
                A[ i ] = A [ j ];
                A [ j ] = temp;
                i += 1;
            }
        }
        QSA.push([2,i-1,start,A[start],A[i-1]]);
        var temp = A[i-1];
        A[i-1] = A[ start ];
        A[ start ] = temp;
        return i-1;
    }

    function bubbleSort(){
        var A = array.slice(0); 
        var temp;
        var n = A.length;
        var SA = [];
        for(let k = 0; k< n-1; k++) {
            for(let i = 0; i < n-k-1; i++) {
                SA.push([1,i,i+1]);
                if(A[ i ] > A[ i+1] ) {
                    SA.push([2,i,i+1,A[i+1],A[i]]);
                    temp = A[ i ];
                    A[ i ] = A[ i+1 ];
                    A[ i + 1] = temp;
                }
            }
        }
        return SA;
    }

    function insertionSort(){
        var A = array.slice(0); 
        var temp;
        var n = A.length;
        var SA = [];
        for( let i = 0 ;i < n ; i++ ) {
            temp = A[ i ];    
            let j = i;
            if(j>0){
                SA.push([1,j,j-1]);
            }
            while(  j > 0  && temp < A[ j -1]) {
                SA.push([2,j,j-1,A[j-1],temp]);
                A[ j ] = A[ j-1];   
                j = j - 1;
                if(j>0){
                    SA.push([1,j,j-1]);
                }
            }
            A[ j ] = temp;    
        }
        return SA;
    }

    function heapify(arr, n, i){
        var largest = i;  //Initialize largest as root
        var l = 2 * i + 1;     
        var r = 2 * i + 2 ;   
        let SA = [];
        //See if left child of root exists and is
        //greater than root
        if(l < n){
            SA.push([1,largest,l]);
        }
        if(l < n && arr[largest] < arr[l]){
            largest = l;
        }
        //See if right child of root exists and is
        //greater than root
        if(r < n){
            SA.push([1,i,r]);
        }
        if(r < n && arr[largest] < arr[r]){
            largest = r
        }
        //Change root, if needed
        if(largest != i){
            SA.push([2,i,largest,arr[largest],arr[i]]);
            var temp = arr[i];
            arr[i] = arr[largest];
            arr[largest] = temp;
            //Heapify the root.
            SA = SA.concat(heapify(arr, n, largest))
        }
        return SA;
    }
 
    function heapSort(){
        var A = array.slice(0);
        var n = A.length;
        let SA = [];
        for(var i = (n/2)-1; i>-1;i--){ 
            SA = SA.concat(heapify(A, n, i))
        }
        console.log(SA);
        //One by one extract elements
        for(var i = n-1; i>0;i--){
            SA.push([2,i,0,A[0],A[i]]);
            var temp = A[i];
            A[i] = A[0];
            A[0] = temp;     
            SA = SA.concat(heapify(A, i, 0))
        }
        return SA;
    }

    function delay(delayInms) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(2);
          }, delayInms);
        });
    }

    async function showSorting(animations) {
        for (let i = 0; i < animations.length; i++) {
            if(letMeGoOut){
                break;
            }
            const arrayBars = document.getElementsByClassName('array-bar');
            if (animations[i][0] == 1) {
                const barOneIdx = animations[i][1];
                const barTwoIdx = animations[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                barOneStyle.backgroundColor = "cyan";
                barTwoStyle.backgroundColor = "cyan";
                let delayres = await delay(newSpeed);
                barOneStyle.backgroundColor = "#333";
                barTwoStyle.backgroundColor = "#333";
                if(letMeGoOut){
                    break;
                }
            } else{
                const barOneIdx = animations[i][1];
                const barTwoIdx = animations[i][2];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                barOneStyle.transition = "height "+newSpeed+"ms";
                barTwoStyle.transition = "height "+newSpeed+"ms";
                barOneStyle.height = `${animations[i][3]}px`;
                barTwoStyle.height = `${animations[i][4]}px`;
                barOneStyle.backgroundColor = "#FFA500";
                barTwoStyle.backgroundColor = "#FFA500";
                let delayres = await delay(newSpeed);
                barOneStyle.transition = "none";
                barTwoStyle.transition = "none";
                barOneStyle.backgroundColor = "#333";
                barTwoStyle.backgroundColor = "#333";
                if(letMeGoOut){
                    break;
                }
            }
        }
        replaceSortedArray();
    }
 
  return (
    <div className="array-container">
        {array.map((value, idx) => (
            <div className="array-bar" style={{ backgroundColor: "#333",  height: `${value}px`,}} key={idx}></div>
        ))}
    </div>
  )
}

export default SortingAlgoBar