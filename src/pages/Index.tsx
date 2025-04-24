
import React from "react";
import ProductModal from "@/components/ProductModal";

const Index = () => {
  const productDetails = {
    title: "Premium Wireless Headphones",
    imageSrc: "/lovable-uploads/8ac835b2-8156-4285-869d-a4ce0d58b607.png", // Updated image path
    description: "Experience unparalleled sound quality with our premium wireless headphones. Featuring active noise cancellation, 40-hour battery life, and ultra-comfortable memory foam ear cushions. Perfect for music enthusiasts and professionals alike.",
    price: "$299.99",
    features: ["Active noise cancellation technology", "40-hour battery life on a single charge", "Memory foam ear cushions for extended comfort", "Bluetooth 5.2 with multipoint connection", "Built-in high-quality microphone for calls", "Premium carrying case included"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 flex flex-col items-center justify-center p-4 py-[67px] bg-zinc-400">
      <div className="max-w-4xl w-full rounded-xl shadow-xl p-8 mb-8 py-[88px] bg-zinc-100 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 py-[32px] md:text-5xl">
          Modal with Image Magnifier 
        </h1>
        
        <p className="text-center mb-8 max-w-2xl mx-auto text-zinc-700 py-[9px]">
          Click the button below to open a modal with product details. 
          Hover over the image to activate the magnifier effect and see details up close.
        </p>
        
        <div className="flex justify-center w-full">
          <ProductModal 
            title={productDetails.title} 
            imageSrc={productDetails.imageSrc} 
            description={productDetails.description} 
            price={productDetails.price} 
            features={productDetails.features} 
            className="w-3/5" // Set width to 60%
          />
        </div>
      </div>
      
      <div className="text-center text-gray-500 text-sm">
        <p className="mt-1">Works on desktop, tablet and devices</p>
      </div>
    </div>
  );
};

export default Index;
