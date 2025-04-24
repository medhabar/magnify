
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ImageMagnifier from "./ImageMagnifier";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductModalProps {
  title: string;
  imageSrc: string;
  description: string;
  price: string;
  features?: string[];
  className?: string;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  title,
  imageSrc,
  description,
  price,
  features = [],
  className
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Button 
        onClick={() => setIsOpen(true)} 
        className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 rounded-full py-[26px] px-[40px] text-base"
      >
        View Details
      </Button>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] xl:max-w-[1000px] p-0 rounded-xl bg-white overflow-hidden">
          <div className="absolute right-4 top-4 z-10">
            <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 bg-white/90 hover:bg-white/70 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 flex items-center justify-center bg-gray-50">
              {isMobile ? (
                <img 
                  src={imageSrc} 
                  alt={title} 
                  className="w-full h-auto object-cover rounded-lg shadow-md" 
                /> 
              ) : (
                <ImageMagnifier 
                  src={imageSrc} 
                  width={400} 
                  height={400} 
                  magnifierSize={120} 
                  zoomLevel={2.5} 
                  className="shadow-lg w-full" 
                />
              )}
            </div>
            
            <div className="p-6 flex flex-col justify-between">
              <div>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-800">
                    {title}
                  </DialogTitle>
                  <p className="text-xl font-semibold text-purple-600 mt-2">
                    {price}
                  </p>
                </DialogHeader>
                
                <div className="mt-4 space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    {description}
                  </p>
                  
                  {features.length > 0 && (
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2">Key Features</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        {features.map((feature, index) => (
                          <li key={index} className="text-gray-600">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-8">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductModal;
