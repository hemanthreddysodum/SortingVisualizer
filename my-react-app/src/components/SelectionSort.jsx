import React from 'react'
import SortingVisualizer from './SortingVisualizer'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from 'react';

function SelectionSort({selectedSort}) {
  const [language, setLanguage] = useState('java');
  
  const handleClick = (e) =>{
      const val  = e.target.value;
      console.log(val);
      setLanguage(val);
  }
  const java = `public class SelectionSortExample {
    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};

        selectionSort(arr);

        System.out.println("Sorted array:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    // Function to perform Selection Sort
    public static void selectionSort(int[] arr) {
        int n = arr.length;

        // Outer loop to move boundary of unsorted subarray
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;

            // Find the minimum element in the unsorted part
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            // Swap the found minimum element with the first element
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
}`

  const cpp = `#include <iostream>
using namespace std;

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;

        // Find the minimum element in unsorted array
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex])
                minIndex = j;
        }

        // Swap the found minimum element with the first element
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array: ";
    printArray(arr, n);

    selectionSort(arr, n);

    cout << "Sorted array: ";
    printArray(arr, n);

    return 0;
}
`
  const python = `def selection_sort(arr):
    n = len(arr)

    for i in range(n - 1):
        min_index = i

        # Find the minimum element in remaining unsorted array
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j

        # Swap the found minimum element with the first element
        arr[i], arr[min_index] = arr[min_index], arr[i]

def print_array(arr):
    for num in arr:
        print(num, end=" ")
    print()

arr = [64, 25, 12, 22, 11]

print("Original array:")
print_array(arr)

selection_sort(arr)

print("Sorted array:")
print_array(arr)
`;

  const code = {
      java: java,
      cpp : cpp,
      python:python
  }

  return (
    <div className='sortingDescription'> 
      <h2>SelectionSort</h2>
      <SortingVisualizer selectedSort={selectedSort} />
      <div className='description-container'>
          <div className='description'>
              <h2>Selection Sort</h2>

              <h3>Description</h3>
              <p>
                Selection Sort is a simple comparison-based sorting algorithm. It works by repeatedly finding the minimum 
                (or maximum) element from the unsorted part and moving it to the beginning of the array.
                It's easy to understand but not suitable for large datasets due to its time complexity.
              </p>

              <h3>Working Principle</h3>
              <ul>
                <li>Start from the beginning of the array.</li>
                <li>Find the smallest element in the unsorted portion.</li>
                <li>Swap it with the first unsorted element.</li>
                <li>Repeat the process for the remaining unsorted portion.</li>
              </ul>

              <h3>Time Complexity</h3>
              <ul><b>Best Case:</b> O(n²)</ul>
              <ul><b>Average Case:</b> O(n²)</ul>
              <ul><b>Worst Case:</b> O(n²)</ul>
        </div>
        <div className='code-container'> 
            <div className='languages'>
                <button className='java' value="java" onClick={handleClick}>Java</button>
                <button className='cpp' value='cpp' onClick={handleClick}>C++</button>
                <button className='python' value='python' onClick={handleClick}>Python</button>
            </div>
            <div className="code">
                <SyntaxHighlighter language={language} style={vscDarkPlus} showLineNumbers>
                    {code[language]}
                </SyntaxHighlighter>
            </div>
        </div>
      </div>
     </div>
    
  )
}

export default SelectionSort