import React from 'react';
import Pic1 from '../assets/scroll01.jpg';

const Card = () => {
  return (
    <div class="mx-auto mt-11 h-1/2 w-1/3 transform overflow-hidden rounded-lg bg-white dark:bg-slate-500 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img class="h-2/3 w-full object-cover object-center" src={Pic1} alt="Product" />
        <div class="p-4">
        <h2 class="mb-2 text-lg font-medium dark:text-white text-gray-900">Product Name</h2>
        <p class="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
        <div class="flex items-center">
            <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-slf-800">$20.00</p>
            <p class="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
            <p class="ml-auto text-base font-medium text-green-500">20% off</p>
        </div>
        </div>
        
    </div>
  )
}

export default Card