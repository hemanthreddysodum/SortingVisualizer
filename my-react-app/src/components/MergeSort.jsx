import React from 'react'
import SortingVisualizer from './SortingVisualizer'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from 'react';

function MergeSort({selectedSort}) {
  const [language, setLanguage] = useState('java');
        
    const handleClick = (e) =>{
          const val  = e.target.value;
          console.log(val);
          setLanguage(val);
    }
    const java = `
// Sample Input:
// arr = {12, 11, 13, 5, 6, 7}
//
// Output:
// Original array:
// 12 11 13 5 6 7 
// Sorted array:
// 5 6 7 11 12 13 

public class MergeSort {
    void merge(int arr[], int l, int m, int r) {
        int n1 = m - l + 1;
        int n2 = r - m;

        int L[] = new int[n1];
        int R[] = new int[n2];

        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];

        int i = 0, j = 0;
        int k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    void sort(int arr[], int l, int r) {
        if (l < r) {
            int m = l + (r - l) / 2;

            sort(arr, l, m);
            sort(arr, m + 1, r);

            merge(arr, l, m, r);
        }
    }

    static void printArray(int arr[]) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }

    public static void main(String args[]) {
        int arr[] = {12, 11, 13, 5, 6, 7};
        System.out.println("Original array:");
        printArray(arr);

        MergeSort ob = new MergeSort();
        ob.sort(arr, 0, arr.length - 1);

        System.out.println("Sorted array:");
        printArray(arr);
    }
}
`;

    const cpp = `
// Sample Input:
// arr = {12, 11, 13, 5, 6, 7}
//
// Output:
// Original array:
// 12 11 13 5 6 7 
// Sorted array:
// 5 6 7 11 12 13 

#include <iostream>
using namespace std;

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[n1], R[n2];

    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j])
            arr[k++] = L[i++];
        else
            arr[k++] = R[j++];
    }

    while (i < n1)
        arr[k++] = L[i++];
    while (j < n2)
        arr[k++] = R[j++];
}

void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        merge(arr, l, m, r);
    }
}

void printArray(int A[], int size) {
    for (int i = 0; i < size; i++)
        cout << A[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {12, 11, 13, 5, 6, 7};
    int arr_size = sizeof(arr) / sizeof(arr[0]);

    cout << "Original array:\\n";
    printArray(arr, arr_size);

    mergeSort(arr, 0, arr_size - 1);

    cout << "Sorted array:\\n";
    printArray(arr, arr_size);

    return 0;
}
`;
const python = `# Sample Input:
# arr = [12, 11, 13, 5, 6, 7]
#
# Output:
# Original array:
# 12 11 13 5 6 7 
# Sorted array:
# 5 6 7 11 12 13 

def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0

        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1

def print_array(arr):
    print(" ".join(map(str, arr)))

if __name__ == "__main__":
    arr = [12, 11, 13, 5, 6, 7]
    print("Original array:")
    print_array(arr)

    merge_sort(arr)

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
      <h2>MergeSort</h2>
      <SortingVisualizer selectedSort={selectedSort} />
      <div className='description-container'>
        <div className='description'>
          <h2>MergeSort</h2>

          <h3>Description</h3>
          <p>
            MergeSort is a stable, comparison-based, divide-and-conquer sorting algorithm.
            It works by recursively splitting the array into halves, sorting each half,
            and then merging the sorted halves to produce the final sorted array.
            It's known for its predictable performance and is often used in stable sorting applications.
          </p>

          <h3>Working Principle</h3>
          <ul>
            <li>Divide the array into two halves recursively until each sub-array has one element.</li>
            <li>Merge the sub-arrays back together in a sorted manner.</li>
            <li>Continue the merge process until the entire array is reassembled in sorted order.</li>
          </ul>

          <h3>Time Complexity</h3>
          <ul><b>Best Case:</b> O(n log n)</ul>
          <ul><b>Average Case:</b> O(n log n)</ul>
          <ul><b>Worst Case:</b> O(n log n)</ul>
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

export default MergeSort