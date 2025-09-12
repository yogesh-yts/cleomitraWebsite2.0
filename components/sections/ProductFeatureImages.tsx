"use client";

import ScrollScaleImage from "../ui/ScrollScaleImage";
import StartFreeTrialButton from "../ui/StartFreeTrialButton";
import SlideUpText from "../ui/ElasticText";

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
    <section className="pt-15 pb-15">
      <div className="container-responsive">
        <div className="space-y-30">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-10 border-2 border-dashed border-black/40 rounded-3xl py-8 px-6 lg:py-15 lg:px-10 bg-black-400 hover:border-gray-400 transition-colors ${
                  !isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Section */}
                <div className={`w-full lg:w-[45%] space-y-6 `}>
                  <SlideUpText
                    as="h3"
                    delay={0.1}
                    className="text-xl md:text-2xl xl:text-3xl font-bold text-black"
                  >
                    {feature.heading}
                  </SlideUpText>

                  <SlideUpText
                    as="p"
                    delay={0.3}
                    className="text-sm md:text-lg 2xl:text-xl text-black/40"
                  >
                    {feature.description}
                  </SlideUpText>

                  <SlideUpText delay={0.5} className="pt-4 lg:pt-8">
                    <StartFreeTrialButton />
                  </SlideUpText>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-[55%]">
                  <ScrollScaleImage
                    src={feature.image}
                    alt={`${productName} feature: ${feature.heading}`}
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
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
