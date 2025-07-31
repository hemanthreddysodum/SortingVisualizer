import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import SortingVisualizer from "./SortingVisualizer.jsx";

function BubbleSort({selectedSort}) {


 const [language, setLanguage] = useState('java');

  const handleClick = (e) =>{
      const val  = e.target.value;
      console.log(val);
      setLanguage(val);
  }

  const java = `
        public class BubbleSortExample {
          public static void main(String[] args) {
              int[] arr = {5, 3, 8, 4, 2};

              bubbleSort(arr);

              System.out.println("Sorted array:");
              for (int num : arr) {
                  System.out.print(num + " ");
              }
          }

        // Bubble Sort function
        public static void bubbleSort(int[] arr) {
            int n = arr.length;
            boolean swapped;

            // Outer loop - number of passes
            for (int i = 0; i < n - 1; i++) {
                swapped = false;

                // Inner loop - comparing adjacent elements
                for (int j = 0; j < n - i - 1; j++) {
                    // Swap if the current element is greater than the next
                    if (arr[j] > arr[j + 1]) {
                        // Swapping
                        int temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;

                        swapped = true;
                    }
                }

                // If no swaps occurred in the inner loop, the array is already sorted
                if (!swapped) break;
            }
        }
    
        }

      OUTPUT:
        2 3 4 5 8  
    `
  const cpp = `#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    bool swapped;

    // Outer loop for number of passes
    for (int i = 0; i < n - 1; i++) {
        swapped = false;

        // Inner loop for comparing adjacent elements
        for (int j = 0; j < n - i - 1; j++) {
            // Swap if elements are in the wrong order
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }

        // If no elements were swapped in inner loop, array is already sorted
        if (!swapped)
            break;
    }
}

// Utility function to print the array
void printArray(int arr[], int n) {
    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array: ";
    printArray(arr, n);

    bubbleSort(arr, n);

    cout << "Sorted array: ";
    printArray(arr, n);

    return 0;
}
`
  
  const python = `def bubble_sort(arr):
    n = len(arr)

    # Outer loop for number of passes
    for i in range(n - 1):
        swapped = False

        # Inner loop for comparing adjacent elements
        for j in range(n - i - 1):
            # Swap if elements are in the wrong order
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True

        # If no swaps occurred, the array is already sorted
        if not swapped:
            break

def print_array(arr):
    for num in arr:
        print(num, end=" ")
    print()

# Sample usage
arr = [5, 3, 8, 4, 2]

print("Original array:")
print_array(arr)

bubble_sort(arr)

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
      <h2>BubbleSort</h2>
      <SortingVisualizer selectedSort={selectedSort} />
      <div className='description-container'>
          <div className='description'>
            <h2>Bubble Sort</h2>
            <h3>Description</h3>
            <p>Bubble Sort is a simple comparison-based sorting algorithm.
              It repeatedly steps through the list, compares adjacent elements, 
              and swaps them if they are in the wrong order.
              This process is repeated until the list is sorted.
            </p>
            <h3>Working Principle</h3>
            <ul>
              <li>Compare adjacent elements.</li>
              <li>Swap them if they are in the wrong order.</li>
              <li>Repeat the process for all elements until no more swaps are needed.</li>
            </ul>

            <h3>Time Complexity</h3>
            <ul><b>Best Case : </b> O(n)</ul>
            <ul><b>Average & Worst Cases : </b> O(n*n)</ul>
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

export default BubbleSort