import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { useGallery } from "../api/service/galleryServive";

const GallerySection = () => {
  const { data: images } = useGallery();

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;
  const totalPages = Math.ceil(images?.length / imagesPerPage);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images?.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container mx-auto px-6 md:px-12 py-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-start px-12 mb-8">
          <Camera className="w-8 h-8 text-teal-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-800">Gallery</h1>
        </div>

        {/* Image Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-8 sm:px-0">
            {images?.map((image, index) => (
              <div
                key={index}
                className="relative group w-full h-auto sm:w-64 sm:h-76 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="sm:absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                <img
                  src={`https://api.sahayogisaathi.org${image.imageurl}`}
                  alt={image.title}
                  className="sm:absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    currentPage === index + 1
                      ? "bg-teal-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GallerySection;
