import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import BubbleSort from "./components/BubbleSort.jsx";
import SelectionSort from "./components/SelectionSort.jsx";
import InsertionSort from "./components/InsertionSort.jsx";
import MergeSort from "./components/MergeSort.jsx";
import QuickSort from "./components/QuickSort.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index:true,
          path:"/",
          element:<Home />
        },
        {
          path: "/bubbleSort",
          element: <BubbleSort  selectedSort = "BubbleSort"/>,
        },
        {
          path: "/selectionSort",
          element: <SelectionSort selectedSort="SelectionSort" />,
        },
        {
          path: "/insertionSort",
          element: <InsertionSort selectedSort = "InsertionSort"/>,
        },
        {
          path: "/mergeSort",
          element: <MergeSort selectedSort = "MergeSort"/>,
        },
        {
          path:"/quickSort",
          element:<QuickSort  selectedSort="QuickSort"/>
        }
      ],
    },
  ]);

  return <>
    <RouterProvider router={router} />;
  </>
}

export default App;
