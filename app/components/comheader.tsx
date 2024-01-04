import * as React from "react";
import ColorDropdown from "./colorDropdown";

export default function comHeader() {
  const baseButtonClasses =
    "rounded-lg px-4 py-1.5 border-2 focus:outline-none transition-all";
  const filterButtonClasses =
    "bg-[#3f51b5] text-white " +
    baseButtonClasses +
    " flex items-center justify-center space-x-2";
  const anyColorButtonClasses =
    "bg-transparent text-white border-white " +
    baseButtonClasses +
    " flex items-center justify-center";
  const otherButtonClasses =
    "bg-transparent text-white border-gray-600 " + baseButtonClasses;
  const startSearchButtonClasses = "flex items-center justify-center bg-black text-white " + baseButtonClasses;
  const textButtonClasses = "text-white font-roboto";
  return (
    <div className="flex flex-col bg-[#010101] text-white p-4 justify-between">
      <header className="pt-8 flex justify-between items-end">
        <div>
          <div className="font-roboto text-lg lg:text-xl leading-tight mb-2">
            Create, explore, & collect digital art.
          </div>
          <h1 className="font-crimson-text text-8xl lg:text-4xl leading-none mb-6">
          Community Showcase
          </h1>
        </div>
        <button className={startSearchButtonClasses + "flex self-center"}>
          <span className="font-roboto">Start search</span>
        </button>
      </header>
      {/* <main className="flex-1"> */}
        <div className="flex justify-between items-center mb-10">
          <button className={anyColorButtonClasses}>
            <span className="font-roboto">Any color</span>
            <i className="fa fa-chevron-down"></i>
          </button>
           <div className="flex items-center">
          {/* Use the ColorDropdown component */}
                {/* <ColorDropdown /> */}
            </div>



          <div className="flex space-x-4 items-center">
            {/* Centered the buttons using the 'flex' and 'space-x-4' classes */}
            <div className="flex space-x-4 items-center">
              <button className={otherButtonClasses}>
                <span className="font-roboto">Sale</span>
              </button>
              <span className={textButtonClasses}>Special offer</span>
              <span className={textButtonClasses}>Cosmos</span>
              <span className={textButtonClasses}>Artwork</span>
            </div>
          </div>
          {/* Moved the filter button to the right */}
          <button className={filterButtonClasses}>
            <span className="font-roboto">Filter</span>
            <i className="fa fa-filter"></i>
          </button>
        </div>
      {/* </main> */}
    </div>
  );
}