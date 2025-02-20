import React from "react";
import GallerySection from "../components/GallerySection";
import CTASection from "../components/CTASection";

const Gallery = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="absolute inset-0 w-full h-full z-[-1]">
          <img
            src="/images/svg/gallery.svg"
            alt="Projects Background"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        {/* Gallery Content */}
        <div className="relative z-10">
          <GallerySection />
        </div>
      </div>
    </>
  );
};

export default Gallery;
