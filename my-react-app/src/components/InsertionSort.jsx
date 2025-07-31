import React from 'react'
import SortingVisualizer from './SortingVisualizer'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from 'react';

function InsertionSort({selectedSort}) {
  const [language, setLanguage] = useState('java');
    
  const handleClick = (e) =>{
      const val  = e.target.value;
      console.log(val);
      setLanguage(val);
  }
  const java = `
  // Sample Input:
  // arr = {9, 5, 1, 4, 3}
  //
  // Output:
  // Original array:
  // 9 5 1 4 3 
  // Sorted array:
  // 1 3 4 5 9 

  public class InsertionSort {
      public static void insertionSort(int[] arr) {
          int n = arr.length;

          for (int i = 1; i < n; i++) {
              int key = arr[i];
              int j = i - 1;

              while (j >= 0 && arr[j] > key) {
                  arr[j + 1] = arr[j];
                  j = j - 1;
              }

              arr[j + 1] = key;
          }
      }

      public static void printArray(int[] arr) {
          for (int value : arr) {
              System.out.print(value + " ");
          }
          System.out.println();
      }

      public static void main(String[] args) {
          int[] arr = {9, 5, 1, 4, 3};

          System.out.println("Original array:");
          printArray(arr);

          insertionSort(arr);

          System.out.println("Sorted array:");
          printArray(arr);
      }
  }
  `;

const cpp = `
// Sample Input:
// arr = {9, 5, 1, 4, 3}
//
// Output:
// Original array:
// 9 5 1 4 3 
// Sorted array:
// 1 3 4 5 9 

#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }
}

void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {9, 5, 1, 4, 3};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array:" << endl;
    printArray(arr, n);

    insertionSort(arr, n);

    cout << "Sorted array:" << endl;
    printArray(arr, n);

    return 0;
}
`;

const python = `# Sample Input:
# arr = [9, 5, 1, 4, 3]
#
# Output:
# Original array:
# 9 5 1 4 3 
# Sorted array:
# 1 3 4 5 9 

def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key

def print_array(arr):
    print(" ".join(str(x) for x in arr))

if __name__ == "__main__":
    arr = [9, 5, 1, 4, 3]

    print("Original array:")
    print_array(arr)

    insertion_sort(arr)

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
      <h2>Insertion Sort</h2>
      <SortingVisualizer selectedSort={selectedSort} />
      <div className='description-container'>
          <div className='description'>
            <h2>Insertion Sort</h2>
            <h3>Description</h3>
            <p>
              Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time.
              It is similar to the way you might sort playing cards in your hands. 
              It's efficient for small datasets and mostly sorted arrays.
            </p>

            <h3>Working Principle</h3>
            <ul>
              <li>Start from the second element, and compare it with the elements before it.</li>
              <li>Shift all larger elements one position to the right.</li>
              <li>Insert the current element into its correct position.</li>
              <li>Repeat for all elements until the array is sorted.</li>
            </ul>

            <h3>Time Complexity</h3>
            <ul><b>Best Case:</b> O(n) — when the array is already sorted</ul>
            <ul><b>Average Case:</b> O(n²)</ul>
            <ul><b>Worst Case:</b> O(n²) — when the array is sorted in reverse</ul>
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

export default InsertionSort