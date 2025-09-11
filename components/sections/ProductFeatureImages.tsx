"use client";

import ScrollScaleImage from "../ui/ScrollScaleImage";
import StartFreeTrialButton from "../ui/StartFreeTrialButton";

interface ProductFeatureItem {
  image: string;
  heading: string;
  description: string;
}

interface ProductFeatureImagesProps {
  features: ProductFeatureItem[];
  productName: string;
}

const ProductFeatureImages = ({
  features,
  productName,
}: ProductFeatureImagesProps) => {
  return (
    <section className="pt-15">
      <div className="container-responsive">
        <div className="space-y-30">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-15 border-2 border-dashed border-black/40 rounded-3xl py-8 px-6 lg:py-15 lg:px-10 bg-black-400 hover:border-gray-400 transition-colors ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Section */}
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-black">
                    {feature.heading}
                  </h3>
                  <p className="text-xl text-black/40 ">
                    {feature.description}
                  </p>
                  <div className="pt-10">
                    <StartFreeTrialButton />
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 ">
                  <ScrollScaleImage
                    src={feature.image}
                    alt={`${productName} feature: ${feature.heading}`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg "
                    quality={100}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatureImages;
