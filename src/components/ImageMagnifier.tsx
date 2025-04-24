
import React, { useState, useRef, useEffect } from "react";

interface ImageMagnifierProps {
  src: string;
  width: number;
  height: number;
  magnifierSize?: number;
  zoomLevel?: number;
  className?: string;
}

export const ImageMagnifier: React.FC<ImageMagnifierProps> = ({
  src,
  width,
  height,
  magnifierSize = 150,
  zoomLevel = 2.5,
  className = ""
}) => {
  const [showMagnifier, setShowMagnifier] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0
  });
  
  const imgRef = useRef<HTMLImageElement>(null);
  const magnifierRef = useRef<HTMLDivElement>(null);
  
  // Pre-load the image to ensure it's cached for the magnifier
  useEffect(() => {
    const img = new Image();
    img.src = src;
  }, [src]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;

    // Get position directly from the event for better performance
    const rect = imgRef.current.getBoundingClientRect();
    
    // Calculate cursor position relative to the image with more precise values
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Immediately update position without setState to avoid re-render delay
    if (magnifierRef.current && x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      // Update mouse position for calculations
      setMousePosition({ x, y });
      
      // Calculate magnifier position directly
      const halfMagnifier = magnifierSize / 2;
      let posX = x - halfMagnifier;
      let posY = y - halfMagnifier;

      // Boundary checks
      posX = Math.max(0, Math.min(posX, rect.width - magnifierSize));
      posY = Math.max(0, Math.min(posY, rect.height - magnifierSize));

      // Calculate background position
      const bgPosX = (x / rect.width) * 100;
      const bgPosY = (y / rect.height) * 100;

      // Apply styles directly to the DOM for immediate feedback
      Object.assign(magnifierRef.current.style, {
        left: `${posX}px`,
        top: `${posY}px`,
        backgroundPosition: `${bgPosX}% ${bgPosY}%`
      });
    }
  };

  return (
    <div 
      className={`relative inline-block cursor-zoom-in ${className}`} 
      style={{
        width: `${width}px`,
        height: `${height}px`
      }} 
      onMouseEnter={() => setShowMagnifier(true)} 
      onMouseLeave={() => setShowMagnifier(false)} 
      onMouseMove={handleMouseMove}
    >
      <img 
        ref={imgRef} 
        src={src} 
        alt="Magnifiable image" 
        className="w-full h-full rounded-lg object-fill" 
      />
      
      {showMagnifier && (
        <div 
          ref={magnifierRef}
          className="absolute border-2 border-white rounded-full shadow-lg pointer-events-none z-10 overflow-hidden will-change-transform"
          style={{
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`
          }} 
        />
      )}
    </div>
  );
};

export default ImageMagnifier;
