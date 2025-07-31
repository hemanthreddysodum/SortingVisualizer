import React from 'react'
import SortingVisualizer from './SortingVisualizer'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from 'react';

function QuickSort({selectedSort}) {
  const [language, setLanguage] = useState('java');
      
  const handleClick = (e) =>{
        const val  = e.target.value;
        console.log(val);
        setLanguage(val);
  }
  const java = `
// Sample Input:
// arr = {9, 4, 7, 6, 3, 1, 5}
//
// Output:
// Original array:
// 9 4 7 6 3 1 5 
// Sorted array:
// 1 3 4 5 6 7 9 

public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);

            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;

                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    public static void printArray(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = {9, 4, 7, 6, 3, 1, 5};

        System.out.println("Original array:");
        printArray(arr);

        quickSort(arr, 0, arr.length - 1);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}
`;
  const cpp = `
// Sample Input:
// arr = {9, 4, 7, 6, 3, 1, 5}
//
// Output:
// Original array:
// 9 4 7 6 3 1 5 
// Sorted array:
// 1 3 4 5 6 7 9 

#include <iostream>
using namespace std;

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high]; 
    int i = (low - 1); 

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++; 
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {9, 4, 7, 6, 3, 1, 5};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array:\\n";
    printArray(arr, n);

    quickSort(arr, 0, n - 1);

    cout << "Sorted array:\\n";
    printArray(arr, n);

    return 0;
}
`;

  const python = `# Sample Input:
# arr = [9, 4, 7, 6, 3, 1, 5]
#
# Output:
# Original array:
# 9 4 7 6 3 1 5 
# Sorted array:
# 1 3 4 5 6 7 9 

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[-1]
        left = [x for x in arr[:-1] if x < pivot]
        right = [x for x in arr[:-1] if x >= pivot]
        return quick_sort(left) + [pivot] + quick_sort(right)

def print_array(arr):
    print(" ".join(map(str, arr)))

if __name__ == "__main__":
    arr = [9, 4, 7, 6, 3, 1, 5]

    print("Original array:")
    print_array(arr)

    sorted_arr = quick_sort(arr)

    print("Sorted array:")
    print_array(sorted_arr)
`;



  const code = {
      java: java,
      cpp : cpp,
      python:python
  }
  return (
    <div className='sortingDescription'> 
      <h2>QuickSort</h2>
      <SortingVisualizer selectedSort={selectedSort} />
      <div className='description-container'>
          <div className='description'>
            <h2>QuickSort</h2>
            <h3>Description</h3>
            <p>
                QuickSort is a highly efficient, divide-and-conquer, comparison-based sorting algorithm.
                It works by selecting a 'pivot' element from the array and partitioning the other elements
                into two sub-arrays, according to whether they are less than or greater than the pivot.
                The sub-arrays are then sorted recursively.
            </p>

            <h3>Working Principle</h3>
            <ul>
                <li>Select a pivot element from the array.</li>
                <li>Partition the array into two sub-arrays:
                elements less than the pivot and elements greater than the pivot.</li>
                <li>Recursively apply the above steps to the sub-arrays.</li>
                <li>Combine the sorted sub-arrays to get the final sorted array.</li>
            </ul>

            <h3>Time Complexity</h3>
            <ul><b>Best Case:</b> O(n log n) — when partitioning is balanced</ul>
            <ul><b>Average Case:</b> O(n log n)</ul>
            <ul><b>Worst Case:</b> O(n²) — when pivot selection is poor (e.g., always picking smallest/largest)</ul>
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

export default QuickSort