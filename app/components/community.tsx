import * as React from "react";
import { FaHeart, FaRegClock } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import ComHeader from "./comheader";
import { IoIosPricetags } from "react-icons/io";


export default function community(): React.ReactElement {
  return (

    <div className="bg-[#010101] p-8">
      <ComHeader/>
      <div className="grid grid-cols-3 gap-4">
        <div className="relative group mb-36">
          <div className="image-container">
            <img
              src="/images/flower.png"
              alt="Silhouetted figures with floral overlay"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Text "bird" in the top left corner (Initially hidden) */}
            <div className="absolute top-3 left-1 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className=" bg-opacity-50 p-1 rounded">Flower</span>
            </div>
            
            {/* Heart button in the top right corner (Initially hidden) */}
            <div className="absolute top-4 right-4 p-2 scale-150 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white">
                <i className="fa fa-heart"><FaHeart/></i>
              </button>
            </div>
            {/* Blue "Sale" Button at the bottom (Initially hidden) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center">
                <span>Sale</span>
                <span className="ml-2"><IoIosPricetags /></span>
              </button>
            </div>
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
              <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
              <span className="text-black">Like</span>
            </button>
          </div>
          {/* Horizontal Line */}
          <div className="absolute left-0 w-full border-t border-gray-300 mt-6"></div>

          {/* Text "bird" */}
          <div className="absolute left-0 mt-8 text-lg font-bold">
            Flower
          </div>

          {/* Text "19 items" */}
          <div className="absolute left-0 mt-14 text-sm text-gray-500">
            19 items
          </div>
          {/* Box with Text "$999" positioned on the far right */}
          <div className="absolute right-0 mt-12">
            <span className="text-xl font-bold">$999</span>
          </div>
        </div>



        <div className="relative group mb-36">
          <div className="image-container">
            <img
              src="/images/fox.png"
              alt="Silhouetted figures with floral overlay"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Text "bird" in the top left corner (Initially hidden) */}
            <div className="absolute top-3 left-1 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className=" bg-opacity-50 p-1 rounded">Fox</span>
            </div>
            
            {/* Heart button in the top right corner (Initially hidden) */}
            <div className="absolute top-4 right-4 p-2 scale-150 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white">
                <i className="fa fa-heart"><FaHeart/></i>
              </button>
            </div>
            {/* Blue "Sale" Button at the bottom (Initially hidden) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center">
                <span>Sale</span>
                <span className="ml-2"><IoIosPricetags /></span>
              </button>
            </div>
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
              <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
              <span className="text-black">Like</span>
            </button>
          </div>
          {/* Horizontal Line */}
          <div className="absolute left-0 w-full border-t border-gray-300 mt-6"></div>

          {/* Text "bird" */}
          <div className="absolute left-0 mt-8 text-lg font-bold">
            Fox
          </div>

          {/* Text "19 items" */}
          <div className="absolute left-0 mt-14 text-sm text-gray-500">
            19 items
          </div>
          {/* Box with Text "$999" positioned on the far right */}
          <div className="absolute right-0 mt-12">
            <span className="text-xl font-bold">$999</span>
          </div>
        </div>

        <div className="relative group mb-36">
          <div className="image-container">
            <img
              src="/images/tiger.png"
              alt="Silhouetted figures with floral overlay"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Text "bird" in the top left corner (Initially hidden) */}
            <div className="absolute top-3 left-1 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className=" bg-opacity-50 p-1 rounded">Tiger</span>
            </div>
            
            {/* Heart button in the top right corner (Initially hidden) */}
            <div className="absolute top-4 right-4 p-2 scale-150 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white">
                <i className="fa fa-heart"><FaHeart/></i>
              </button>
            </div>
            {/* Blue "Sale" Button at the bottom (Initially hidden) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center">
                <span>Sale</span>
                <span className="ml-2"><IoIosPricetags /></span>
              </button>
            </div>
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
              <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
              <span className="text-black">Like</span>
            </button>
          </div>
          {/* Horizontal Line */}
          <div className="absolute left-0 w-full border-t border-gray-300 mt-6"></div>

          {/* Text "bird" */}
          <div className="absolute left-0 mt-8 text-lg font-bold">
            Tiger
          </div>

          {/* Text "19 items" */}
          <div className="absolute left-0 mt-14 text-sm text-gray-500">
            19 items
          </div>
          {/* Box with Text "$999" positioned on the far right */}
          <div className="absolute right-0 mt-12">
            <span className="text-xl font-bold">$999</span>
          </div>
        </div>
        <div className="relative group mb-36">
          <div className="image-container">
            <img
              src="/images/wolf.png"
              alt="Silhouetted figures with floral overlay"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Text "bird" in the top left corner (Initially hidden) */}
            <div className="absolute top-3 left-1 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className=" bg-opacity-50 p-1 rounded">Wolf</span>
            </div>
            
            {/* Heart button in the top right corner (Initially hidden) */}
            <div className="absolute top-4 right-4 p-2 scale-150 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white">
                <i className="fa fa-heart"><FaHeart/></i>
              </button>
            </div>
            {/* Blue "Sale" Button at the bottom (Initially hidden) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center">
                <span>Sale</span>
                <span className="ml-2"><IoIosPricetags /></span>
              </button>
            </div>
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
              <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
              <span className="text-black">Like</span>
            </button>
          </div>
          {/* Horizontal Line */}
          <div className="absolute left-0 w-full border-t border-gray-300 mt-6"></div>

          {/* Text "bird" */}
          <div className="absolute left-0 mt-8 text-lg font-bold">
            Wolf
          </div>

          {/* Text "19 items" */}
          <div className="absolute left-0 mt-14 text-sm text-gray-500">
            19 items
          </div>
          {/* Box with Text "$999" positioned on the far right */}
          <div className="absolute right-0 mt-12">
            <span className="text-xl font-bold">$999</span>
          </div>
        </div>
        <div className="relative group mb-36">
          <div className="image-container">
            <img
              src="/images/bug.png"
              alt="Silhouetted figures with floral overlay"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Text "bird" in the top left corner (Initially hidden) */}
            <div className="absolute top-3 left-1 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className=" bg-opacity-50 p-1 rounded">Bug</span>
            </div>
            
            {/* Heart button in the top right corner (Initially hidden) */}
            <div className="absolute top-4 right-4 p-2 scale-150 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white">
                <i className="fa fa-heart"><FaHeart/></i>
              </button>
            </div>
            {/* Blue "Sale" Button at the bottom (Initially hidden) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center">
                <span>Sale</span>
                <span className="ml-2"><IoIosPricetags /></span>
              </button>
            </div>
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
              <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
              <span className="text-black">Like</span>
            </button>
          </div>
          {/* Horizontal Line */}
          <div className="absolute left-0 w-full border-t border-gray-300 mt-6"></div>

          {/* Text "bird" */}
          <div className="absolute left-0 mt-8 text-lg font-bold">
            Bug 
          </div>

          {/* Text "19 items" */}
          <div className="absolute left-0 mt-14 text-sm text-gray-500">
            19 items
          </div>
          {/* Box with Text "$999" positioned on the far right */}
          <div className="absolute right-0 mt-12">
            <span className="text-xl font-bold">$999</span>
          </div>
        </div>
        <div className="relative group mb-36">
          <div className="image-container">
            <img
              src="/images/bus.png"
              alt="Silhouetted figures with floral overlay"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Text "bird" in the top left corner (Initially hidden) */}
            <div className="absolute top-3 left-1 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className=" bg-opacity-50 p-1 rounded">Building</span>
            </div>
            
            {/* Heart button in the top right corner (Initially hidden) */}
            <div className="absolute top-4 right-4 p-2 scale-150 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white">
                <i className="fa fa-heart"><FaHeart/></i>
              </button>
            </div>
            {/* Blue "Sale" Button at the bottom (Initially hidden) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center">
                <span>Sale</span>
                <span className="ml-2"><IoIosPricetags /></span>
              </button>
            </div>
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
              <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
              <span className="text-black">Like</span>
            </button>
          </div>
          {/* Horizontal Line */}
          <div className="absolute left-0 w-full border-t border-gray-300 mt-6"></div>

          {/* Text "bird" */}
          <div className="absolute left-0 mt-8 text-lg font-bold">
            Building
          </div>

          {/* Text "19 items" */}
          <div className="absolute left-0 mt-14 text-sm text-gray-500">
            19 items
          </div>
          {/* Box with Text "$999" positioned on the far right */}
          <div className="absolute right-0 mt-12">
            <span className="text-xl font-bold">$999</span>
          </div>
        </div>
        <div className="relative group mb-36">
          <div className="image-container">
            <img
              src="/images/rain.png"
              alt="Silhouetted figures with floral overlay"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Text "bird" in the top left corner (Initially hidden) */}
            <div className="absolute top-3 left-1 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className=" bg-opacity-50 p-1 rounded">Rain</span>
            </div>
            
            {/* Heart button in the top right corner (Initially hidden) */}
            <div className="absolute top-4 right-4 p-2 scale-150 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white">
                <i className="fa fa-heart"><FaHeart/></i>
              </button>
            </div>
            {/* Blue "Sale" Button at the bottom (Initially hidden) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center">
                <span>Sale</span>
                <span className="ml-2"><IoIosPricetags /></span>
              </button>
            </div>
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
              <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
              <span className="text-black">Like</span>
            </button>
          </div>
          {/* Horizontal Line */}
          <div className="absolute left-0 w-full border-t border-gray-300 mt-6"></div>

          {/* Text "bird" */}
          <div className="absolute left-0 mt-8 text-lg font-bold">
            Rain
          </div>

          {/* Text "19 items" */}
          <div className="absolute left-0 mt-14 text-sm text-gray-500">
            19 items
          </div>
          {/* Box with Text "$999" positioned on the far right */}
          <div className="absolute right-0 mt-12">
            <span className="text-xl font-bold">$999</span>
          </div>
        </div>
        <div className="relative group mb-36">
          <div className="image-container">
            <img
              src="/images/dance.png"
              alt="Silhouetted figures with floral overlay"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Text "bird" in the top left corner (Initially hidden) */}
            <div className="absolute top-3 left-1 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className=" bg-opacity-50 p-1 rounded">Dance</span>
            </div>
            
            {/* Heart button in the top right corner (Initially hidden) */}
            <div className="absolute top-4 right-4 p-2 scale-150 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white">
                <i className="fa fa-heart"><FaHeart/></i>
              </button>
            </div>
            {/* Blue "Sale" Button at the bottom (Initially hidden) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center">
                <span>Sale</span>
                <span className="ml-2"><IoIosPricetags /></span>
              </button>
            </div>
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
              <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
              <span className="text-black">Like</span>
            </button>
          </div>
          {/* Horizontal Line */}
          <div className="absolute left-0 w-full border-t border-gray-300 mt-6"></div>

          {/* Text "bird" */}
          <div className="absolute left-0 mt-8 text-lg font-bold">
            Dance
          </div>

          {/* Text "19 items" */}
          <div className="absolute left-0 mt-14 text-sm text-gray-500">
            19 items
          </div>
          {/* Box with Text "$999" positioned on the far right */}
          <div className="absolute right-0 mt-12">
            <span className="text-xl font-bold">$999</span>
          </div>
        </div>
        <div className="relative group mb-36">
          <div className="image-container">
            <img
              src="/images/deer.png"
              alt="Silhouetted figures with floral overlay"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            {/* Text "bird" in the top left corner (Initially hidden) */}
            <div className="absolute top-3 left-1 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <span className=" bg-opacity-50 p-1 rounded">Deer</span>
            </div>
            
            {/* Heart button in the top right corner (Initially hidden) */}
            <div className="absolute top-4 right-4 p-2 scale-150 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-white">
                <i className="fa fa-heart"><FaHeart/></i>
              </button>
            </div>
            {/* Blue "Sale" Button at the bottom (Initially hidden) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-blue-800 text-white px-4 py-2 rounded flex items-center">
                <span>Sale</span>
                <span className="ml-2"><IoIosPricetags /></span>
              </button>
            </div>
            <button className="absolute bottom-4 left-4 bg-white py-2 px-3 rounded-lg flex items-center shadow-md">
              <i className="fa fa-heart text-red-500 mr-2"> <FaHeart/></i> 
              <span className="text-black">Like</span>
            </button>
          </div>
          {/* Horizontal Line */}
          <div className="absolute left-0 w-full border-t border-gray-300 mt-6"></div>

          {/* Text "bird" */}
          <div className="absolute left-0 mt-8 text-lg font-bold">
            Deer
          </div>

          {/* Text "19 items" */}
          <div className="absolute left-0 mt-14 text-sm text-gray-500">
            19 items
          </div>
          {/* Box with Text "$999" positioned on the far right */}
          <div className="absolute right-0 mt-12">
            <span className="text-xl font-bold">$999</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button className="text-white font-roboto bg-[#121212] py-2 px-4 rounded-lg mr-2 flex items-center">
          <i className="fa fa-clock-o mr-2"><FaRegClock/></i> Recent
        </button>
        <button className="text-white font-roboto bg-[#121212] py-2 px-4 rounded-lg flex items-center">
          <i className="fa fa-star mr-2"><CiStar/></i> Top
        </button>
      </div>
    </div>
  );
}