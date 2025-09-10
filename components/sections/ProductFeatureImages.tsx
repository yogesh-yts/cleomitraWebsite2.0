"use client";

import Image from "next/image";
import ScrollScaleImage from "../ui/ScrollScaleImage";

interface ProductFeatureImagesProps {
  images: string[];
  productName: string;
}

const ProductFeatureImages = ({
  images,
  productName,
}: ProductFeatureImagesProps) => {
  return (
    <section className="pt-15">
      <div className="container-responsive ">
        <div className="space-y-30">
          {images.map((imagePath, index) => (
            <ScrollScaleImage
              key={index}
              src={imagePath}
              alt={`${productName} feature ${index + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
              wrapperClassName="border-2 border-dashed border-black/20 rounded-lg p-4 hover:border-gray-400 transition-colors"
              quality={100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureImages;
