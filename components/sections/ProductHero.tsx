"use client";

import StartFreeTrialButton from "../ui/StartFreeTrialButton";
import GetDemoButton from "../ui/GetDemoButton";
import SlideUpText from "../ui/ElasticText";

interface ProductHeroProps {
  title: string;
  description: string;
}

const ProductHero = ({ title, description }: ProductHeroProps) => {
  return (
    <section className="container-responsive section-spacing">
      <div className="text-center  mx-auto ">
        <SlideUpText
          as="h1"
          delay={0}
          className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight whitespace-normal md:whitespace-pre-wrap"
        >
          {title}
        </SlideUpText>

        <SlideUpText
          as="p"
          delay={0.4}
          className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto whitespace-normal md:whitespace-pre-wrap"
        >
          {description}
        </SlideUpText>

        <SlideUpText
          delay={0.8}
          className="flex flex-row gap-4 items-center justify-center  mb-12"
        >
          <StartFreeTrialButton />
          <GetDemoButton />
        </SlideUpText>
      </div>
    </section>
  );
};

export default ProductHero;
