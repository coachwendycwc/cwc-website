"use client";

import { useState } from "react";
import { Header, Footer } from "@/components";
import { siteConfig } from "@/config";

const galleryImages = [
  "0B1A7927.jpg",
  "0B1A7930.jpg",
  "123_1.jpeg",
  "123_1(1).jpeg",
  "733ED64B-574D-490C-8F4F-848FE25D03EE.jpg",
  "7a737989-1850-4045-83b1-5a9536b5ff1d.jpg",
  "b141a127-fa91-465b-92b2-98ebbadc20de.jpg",
  "CC0562F7-6DEE-40B1-9DF0-FA9683F1938A.jpg",
  "DSC_0750.JPG",
  "DSC_0993.JPG",
  "DSC_1001.JPG",
  "DSC_1003.JPG",
  "DSC_1024.JPG",
  "DSC_1036.JPG",
  "e2436e28-8f30-49ae-b036-85437b23456b.jpg",
  "ffc4dc4d-87eb-405a-9eb4-0d836786e83f.jpg",
  "image000004.jpg",
  "IMG_0064.jpg",
  "IMG_0271.jpg",
  "IMG_0272.jpg",
  "IMG_0302.jpg",
  "IMG_0303.jpg",
  "IMG_0479.PNG",
  "IMG_0494.PNG",
  "IMG_0650.jpg",
  "IMG_0654.jpg",
  "IMG_0729.PNG",
  "IMG_1180.jpg",
  "IMG_1362.jpg",
  "IMG_20190301_065318.jpg",
  "IMG_2870.jpeg",
  "IMG_2877.jpeg",
  "IMG_2976.PNG",
  "IMG_3034.jpg",
  "IMG_3036.jpg",
  "IMG_3191.jpg",
  "IMG_3301.jpg",
  "IMG_3346.jpg",
  "IMG_3450.PNG",
  "IMG_3451.PNG",
  "IMG_3482.jpg",
  "IMG_3531.JPG",
  "IMG_3878.jpg",
  "IMG_4489.jpg",
  "IMG_4535.jpg",
  "IMG_4733.jpg",
  "IMG_4929.jpg",
  "IMG_4966.jpg",
  "IMG_5159.jpg",
  "IMG_5225.PNG",
  "IMG_5419.PNG",
  "IMG_5940.jpg",
  "IMG_6428.PNG",
  "IMG_6430.PNG",
  "IMG_6431.PNG",
  "IMG_6446.JPG",
  "IMG_6448.JPG",
  "IMG_6669.PNG",
  "IMG_6714.jpeg",
  "IMG_6715.jpeg",
  "IMG_6722.jpeg",
  "IMG_6724.jpeg",
  "IMG_7023.jpg",
  "IMG_7026.jpg",
  "IMG_7209.JPG",
  "IMG_7210.JPG",
  "IMG_7211.JPG",
  "IMG_7316.PNG",
  "IMG_7443.jpg",
  "IMG_7527.PNG",
  "IMG_7542.jpg",
  "IMG_7747.jpg",
  "IMG_7817.jpg",
  "IMG_7820.jpg",
  "IMG_8010.jpg",
  "IMG_8031.jpg",
  "IMG_8066.JPG",
  "IMG_8119.PNG",
  "IMG_8451.JPG",
  "IMG_8505.jpg",
  "IMG_9068.jpg",
  "IMG_9096.jpg",
  "IMG_9112.jpg",
  "IMG_9196.jpg",
  "IMG_9267.jpg",
  "IMG_9270.jpg",
  "IMG_9274.jpg",
  "IMG_9545.PNG",
  "IMG_9852.JPG",
  "IMG_9919.jpg",
  "IMG_9921.jpg",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <Header />

      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-12 bg-gradient-to-b from-[#E8F8FD] to-white">
          <div className="container-wide text-center">
            <p className="text-sm font-medium text-[#3EBCE8] uppercase tracking-widest mb-4">
              In Action
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1A1A1A] leading-tight">
              Gallery
            </h1>
            <p className="body-large mt-6 max-w-2xl mx-auto">
              Moments from keynotes, workshops, retreats, and coaching sessions
              — empowering leaders and transforming organizations.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="section bg-white">
          <div className="container-wide">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="mb-4 break-inside-avoid cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${siteConfig.basePath}/images/gallery/${image}`}
                    alt={`Gallery photo ${index + 1}`}
                    className="w-full rounded-lg shadow-sm group-hover:shadow-lg transition-shadow duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-[#3EBCE8] transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[#3EBCE8] transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryImages.indexOf(selectedImage);
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
              setSelectedImage(galleryImages[prevIndex]);
            }}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-[#3EBCE8] transition-colors p-2"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = galleryImages.indexOf(selectedImage);
              const nextIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
              setSelectedImage(galleryImages[nextIndex]);
            }}
            aria-label="Next image"
          >
            &#8250;
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${siteConfig.basePath}/images/gallery/${selectedImage}`}
            alt="Gallery photo"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </>
  );
}
