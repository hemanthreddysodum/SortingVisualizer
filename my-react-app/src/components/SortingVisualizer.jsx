
import React, { useState, useEffect} from "react";
import "./SortingVisualizer.css";

const SortingVisualizer = ({selectedSort}) => {

  const [array, setArray] = useState([]);
  const [delay , setDelay] = useState(1000);
  const [comparing, setComparing] = useState([]);
  const [start ,setStart] = useState(0);
  const [end, setEnd] = useState(10000);
  const [swap, setSwap] = useState([]);
  const [picked , setPicked] = useState(null);
  const [tempLength , setTempLength] = useState(25);
  const [length , setLength] = useState(25);
  const finalDDisplayDelay = 1000;
  const highlightDelay = 400;

  const handleTempLength = (e)=>{
    setTempLength(e.target.value);
  }
  const handleLength = (e) =>{
    setLength(tempLength);
  }

  const handleSort = ()=>{
    switch (selectedSort) {
        case "BubbleSort":
          BubbleSort();
          break;
        case "SelectionSort":
          SelectionSort();
          break;
        case "InsertionSort":
          InsertionSort();
          break;
        case "MergeSort":
          MergeSort();
          break;
        case "QuickSort":
            QuickSort();
            break;
        default:
          console.log("Select any one sort");
    }
  }


  const BubbleSort = async ()=>{
      let n = array.length;

      for(let i = 0; i<n; i++){
          setEnd(n-i);
          for(let j = 0; j<n; j++){

               setComparing([j,j+1]);
               await new Promise((resolve) => setTimeout(resolve,highlightDelay));
               setComparing([]);
               if (array[j] > array[j + 1]) {
                  setSwap([j,j+1]);
                  await new Promise((resolve) => setTimeout(resolve,highlightDelay));
                  setSwap([]);

                  [array[j], array[j + 1]] = [array[j + 1], array[j]];
                  setArray([...array]); 
                  await new Promise((resolve) => setTimeout(resolve, delay)); 
              }
          }
      }
      setEnd(0);
      await new Promise((res)=>setTimeout(res,finalDDisplayDelay));
      setEnd(10000);
  }

  const SelectionSort = async ()=>{
      let n = array.length;
      for(let i = 0;i<n ;i++){
          let minIndex = i;
          for(let j = i+1; j<n; j++){
              setComparing([i,j]);
              if(array[j] < array[minIndex]){
                  minIndex = j;
              }
              await new Promise((resolve) => setTimeout(resolve , highlightDelay));
              setComparing([]);
          }
           
           [array[i], array[minIndex]] = [array[minIndex], array[i]]; 
           setSwap([i,minIndex]);
           await new Promise((resolve) => setTimeout(resolve , highlightDelay));
           setSwap([]);
           await new Promise((resolve) => setTimeout(resolve , highlightDelay));
           setStart(i+1);
           setArray([...array]);
           await new Promise((resolve) => setTimeout(resolve , delay));
      }
      await new Promise((resolve)=> setTimeout(resolve, finalDDisplayDelay));
      setStart(0);
  }

  const InsertionSort = async () =>{
      let n = array.length;

      for(let i = 1; i<n;i++){
        let key = array[i];
        let j = i-1;
        setStart(i+1);
        setPicked(i);
        await new Promise((resolve) => setTimeout(resolve,highlightDelay))

        while(j>=0 && array[j]>key){
            setComparing([i,j]);
            await new Promise((resolve) => setTimeout(resolve,highlightDelay));
            setComparing([]);

            array[j+1] = array[j];
            j--;

            setArray([...array]);
            await new Promise((resolve) => setTimeout(resolve,delay));
            
        }
        setSwap([i,j+1]);
        await new Promise((resolve) => setTimeout(resolve , highlightDelay));
        setSwap([]);
        
        array[j+1] = key;
        setArray([...array]);
        await new Promise((resolve) => setTimeout(resolve,delay));
        setPicked(null);
      }

      await new Promise((res) => setTimeout(res,finalDDisplayDelay));
      setStart(0);
  }


 const MergeSort = async () => {
  async function mergeSortHelper(arr, start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    await mergeSortHelper(arr, start, mid);
    await mergeSortHelper(arr, mid + 1, end);
    await merge(arr, start, mid, end);
  }

  async function merge(arr, start, mid, end) {
    const left = arr.slice(start, mid + 1);
    const right = arr.slice(mid + 1, end + 1);

    let i = 0, j = 0, k = start;

    while (i < left.length && j < right.length) {
      arr[k] = (left[i] <= right[j]) ? left[i++] : right[j++];
      setComparing([k]);
      setArray([...arr]);
      await new Promise(res => setTimeout(res, delay));
      setComparing([]);
      k++;
    }

    while (i < left.length) {
      arr[k] = left[i++];

      setComparing([k]);
      setArray([...arr]);
      await new Promise(res => setTimeout(res, delay));
      setComparing([]);
      k++;
    }

    while (j < right.length) {
      arr[k] = right[j++];

      setComparing([k]);
      setArray([...arr]);
      await new Promise(res => setTimeout(res, delay));
      setComparing([]);
      k++;
    }

    setStart(end+1);
  }

  const arrCopy = [...array];
  if (arrCopy.length <= 1) return;

  await mergeSortHelper(arrCopy, 0, arrCopy.length - 1);
  setArray([...arrCopy]); 
  setComparing([]);
  await new Promise(res => setTimeout(res,finalDDisplayDelay));
  setStart(0);
};


  const QuickSort = async () => {
    async function quickSort(arr, low, high) {
      if (low < high) {
        let pivotIndex = await partition(arr, low, high);
        await quickSort(arr, low, pivotIndex - 1);
        await quickSort(arr, pivotIndex + 1, high);
      }
    }

  async function partition(arr, low, high) {
    let pivot = arr[high];
    setComparing([high]); // highlight pivot

    let i = low - 1;

    for (let j = low; j < high; j++) {
      setComparing([j, high]); // highlight current element and pivot

      await new Promise((resolve) => setTimeout(resolve, delay));

      if (arr[j] <= pivot) {
        i++;

        // Swap arr[i] and arr[j]
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        setSwap([i,j]);
        await new Promise((res) => setTimeout(res,highlightDelay));
        setSwap([]);

        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      setComparing([]); // optional: reset comparing after each step
    }

    // Final swap: pivot to correct position
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;

    setArray([...arr]);
    setComparing([i + 1]); // highlight the final position of pivot
    await new Promise((resolve) => setTimeout(resolve, delay));

    setComparing([]); // clear highlighting
    return i + 1;
  }

  let arrCopy = [...array];
  await quickSort(arrCopy, 0, arrCopy.length - 1);
  setComparing([]); // reset comparing after complete
  setStart(arrCopy.length);
  await new Promise((res) => setTimeout(res,finalDDisplayDelay));
  setStart(0);
};

  
  const generateArray = () => {
    let n = (length==25) ?25:length;
    let newArray = [];
    for(let i = 0;i<n; i++){
        let val = Math.floor(Math.random()*300) +1 ;
        newArray.push(val);
    }
    setArray(newArray); 
  };



  useEffect(() => {
    generateArray(); // calls for  first render
  }, []);

  return (
    
    <div className="container">
      <input type="number"
        value={tempLength}
        onChange={handleTempLength}
        onBlur = {handleLength}
      />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={generateArray}>Generate New Array</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleSort}>Sort</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     <div className="speed-control">
    <label htmlFor="speed" className="speed">Speed: </label>
    <select
      id="speed"
      value={delay}
      onChange={(e) => setDelay(parseFloat(e.target.value))}
    >
        <option value={2500}>0.25x</option>
        <option value={2000}>0.50x</option>
        <option value={1500}>0.75x</option>
        <option value={1000}>1.00x</option>
        <option value={800}>1.25x</option>
        <option value={700}>1.50x</option>
        <option value={500}>1.75x</option>
        <option value={200}>2.00x</option>
      </select>
    </div>
      <div className="bars-container">
        {array.map((value, idx) => (
          <div
            className={`bar  
                        ${comparing.includes(idx) ? "comparing":""}
                        ${idx < start  || idx>=end ? "sorted":""}
                        ${swap.includes(idx)?"swapped":""}
                        ${picked == idx ? "picked":""}
                        `
                      }
            key={idx}
            style={{
              height: `${value+20}px`,
            }}
            
          >{value}</div>
        ))}
      </div>
    </div>
  
  );
};

export default SortingVisualizer;
