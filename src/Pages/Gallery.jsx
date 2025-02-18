import React from "react";
import GallerySection from "../components/GallerySection";
import CTASection from "../components/CTASection";

const Gallery = () => {
  return (
    <>
   <div className="relative min-h-screen">
        {/* SVG as Background */}
        <img
          src="/images/svg/gallery.svg"
          alt="Gallery Background"
          className="absolute top-0 left-0 w-full h-full object-cover scale-120 -translate-y-8 z-[-1]"
        />
        
        {/* Gallery Content */}
        <div className="relative z-10">
          <GallerySection />
        </div>
      </div>
    </>
  );
};

export default Gallery;
