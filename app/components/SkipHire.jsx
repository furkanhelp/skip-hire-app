"use client";
import React, { useState } from "react";

const SkipHire = () => {
  const [selectedSkip, setSelectedSkip] = useState(null);

  const skipSizes = [
    {
      id: 1,
      size: "4 Yards",
      description: "Ideal for small clearances or garden waste",
      price: 2227,
      duration: "7 day hire period",
      
      popular: false,
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg", // Added image path
    },
    {
        id: 2,
        size: "5 Yards",
        description: "Perfect for medium renovations or house clearances",
        price: 3300,
        duration: "14 day hire period",
        
        popular: true,
        image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/5-yarder-skip.jpg", // Added image path
    },
    {
        id: 3,
        size: "6 Yards",
        description: "Great for large projects or construction waste",
        price: 3325,
        duration: "7 day hire period",
        
        popular: false,
        image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/6-yarder-skip.jpg", // Added image path
    },
    {
        id: 4,
        size: "8 Yards",
        description: "For substantial building or demolition projects",
        price: 3800,
        duration: "7 day hire period",
        
        popular: false,
        image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/8-yarder-skip.jpg", // Added image path
    },
    {
        id: 5,
        size: "10 Yards",
        description: "Maximum capacity for large-scale projects",
        price: 4200,
        duration: "14 day hire period",
        
        popular: false,
        image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/10-yarder-skip.jpg", // Added image path
    },
    {
      id: 6,
      size: "12 Yards",
      description: "Our largest skip for industrial projects",
      price: 4800,
      duration: "7 day hire period",
      
      popular: false,
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/12-yarder-skip.jpg", // Added image path
    },
    {
        id: 7,
        size: "14 Yards",
        description: "Our largest skip for industrial projects",
        price: 4800,
        duration: "7 day hire period",
        
        popular: false,
        image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/14-yarder-skip.jpg", // Added image path
    },
    {
        id: 8,
        size: "16 Yards",
        description: "Our largest skip for industrial projects",
        price: 4800,
        duration: "7 day hire period",
        popular: false,
        image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg", // Added image path
    },
    {
        id: 9,
        size: "20 Yards",
        description: "Our largest skip for industrial projects",
        price: 4800,
        duration: "7 day hire period",
        popular: false,
        image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg", // Added image path
    },
    {
      id: 10,
      size: "40 Yards",
      description: "Our largest skip for industrial projects",
      price: 4800,
      duration: "7 day hire period",
      popular: false,
      image:
        "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg", // Added image path
    },
    
  ];

  const handleSelect = (id) => {
    setSelectedSkip(id === selectedSkip ? null : id);
  };

  const formatPrice = (price) => {
    return `£${(price / 100).toFixed(2)}`;
  };

  
  const isNotAllowedOnRoad = (size) => {
      const yardSize = parseInt(size);
    return yardSize >= 10;
  };

  return (
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Choose Your Skip Size
        </h1>
        <p className="text-lg text-gray-600">
          Select the skip size that best suits your needs
        </p>
      </div>

      {/* Skip Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {skipSizes.map((skip) => (
            <div
            key={skip.id}
            className={` relative rounded-lg border p-6 transition-all duration-200 shadow-sm hover:shadow-lg
                ${
                    selectedSkip === skip.id
                    ? "border-blue-700 bg-blue-900 text-white"
                    : "border-blue-900 bg-white hover:bg-gray-300 "
                }
                ${skip.popular ? "border-t-4 border-orange-500" : ""}
                ${
                    isNotAllowedOnRoad(skip.size)
                    //   ? "hover:bg-blue-100"
                    //   : "hover:bg-blue-50"
                }`}
                >
            {/* Popular Badge */}
            {skip.popular && (
                <div className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}

            {/* Road Restriction Warning */}
            {isNotAllowedOnRoad(skip.size) && (
                <div className="absolute bottom-43 left-6 z-20 mb-4.5 h-54 overflow-hidden rounded-md">
                <div className="bg-red-600 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                    >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <span className="text-xs font-bold text-black ">
                    NOT ALLOWED ON ROAD
                  </span>
                </div>
              </div>
            )}



            {/* Skip Image */}
            {skip.image && (
                <div className="mb-4 h-48 overflow-hidden rounded-md">
                <img
                  src={skip.image}
                  alt={`${skip.size} skip`}
                  className={`w-full h-full object-cover ${
                      selectedSkip === skip.id ? "opacity-90" : "opacity-100"
                    }`}
                    onError={(e) => {
                        e.target.src = "../public/images/4-yarder-skip.jpg";
                    }}
                    />
              </div>
            )}

            {/* Skip Header */}
            <div className="mb-4">
              <h2
                className={`text-2xl font-bold ${
                    selectedSkip === skip.id ? "text-white" : "text-gray-900"
                }`}
                >
                {skip.size}
              </h2>
              <p
                className={`text-sm mt-1 ${
                    selectedSkip === skip.id ? "text-blue-100" : "text-gray-600"
                }`}
                >
                {skip.description}
              </p>
            </div>

            {/* Skip Details */}
            <div className="my-6">
              <div className="flex justify-between items-center mb-3">
                <span
                  className={`text-2xl font-bold ${
                      selectedSkip === skip.id ? "text-white" : "text-gray-900"
                    }`}
                    >
                  {formatPrice(skip.price)}
                </span>
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                      selectedSkip === skip.id
                      ? "bg-gray-50 text-blue-500"
                      : "bg-gray-100 text-gray-800"
                    }`}
                    >
                  {skip.duration}
                </span>
              </div>
              <div
                className={`text-sm ${
                    selectedSkip === skip.id ? "text-blue-200" : "text-red-600"
                }`}
                >
                {/* <span className="font-medium">Dimensions:</span>{" "}
                {skip.dimensions} */}
              </div>
            </div>

            {/* Select Button */}
            <button
              className={`w-full py-2 px-4 rounded-md font-medium transition-colors duration-200
                ${
                    selectedSkip === skip.id
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
                onClick={() => handleSelect(skip.id)}
                >
              {selectedSkip === skip.id ? "Selected ✓" : "Select This Skip"}
            </button>
          </div>
        ))}
      </div>

      {/* Selection Summary */}
      {selectedSkip && (
          <div className="bg-gray-50 rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            You've selected the{" "}
            {skipSizes.find((s) => s.id === selectedSkip).size} skip
          </h3>
          {isNotAllowedOnRoad(
              skipSizes.find((s) => s.id === selectedSkip).size
            ) && (
                <div className="bg-blue-900 border-l-4 border-gray-900 text-gray-100 p-4 mb-4">
              <div className="flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <span className="font-bold"></span> Imagery and
                information shown throughout this website may not reflect the
                exact shape or size specification, colours may vary, options
                and/or accessories may be featured at additional cost.
                {/* <span className="font-bold text-red-800"> NOT ALLOWED </span> */}
              </div>
            </div>
          )}
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-md transition-colors duration-200">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default SkipHire;