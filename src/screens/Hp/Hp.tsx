import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ContactSection } from "./sections/ContactSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { LocationMapSection } from "./sections/LocationMapSection";
import { MainContentSection } from "./sections/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection";
import { NewsletterSection } from "./sections/NewsletterSection";
import { PromotionsSection } from "./sections/PromotionsSection";
import { SectionWrapper } from "./sections/SectionWrapper";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

const pressLogos = [
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-9-1.png",
    alt: "Group",
    className: "top-2.5 left-0 w-28 h-9",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/vector.svg",
    alt: "Vector",
    className: "w-full h-[41.28%] top-[29.32%] left-0",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-6-1.png",
    alt: "Group",
    className: "top-3.5 left-0 w-28 h-7",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-1.png",
    alt: "Group",
    className: "w-[100.00%] h-[44.65%] top-[27.68%] left-0",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-17-1.png",
    alt: "Group",
    className: "top-[19px] left-0.5 w-[108px] h-8",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-5-1.png",
    alt: "Group",
    className: "top-2.5 left-0 w-28 h-[37px]",
  },
  {
    src: "https://c.animaapp.com/mguqfb52epzWzu/img/group-7-1.png",
    alt: "Group",
    className: "top-3.5 -left-2 w-[129px] h-[27px]",
  },
];

export const Hp = (): JSX.Element => {
  return (
    <div
      className="bg-white w-full min-w-[1700px] flex justify-center"
      data-model-id="2336:8735"
    >
      <div className="flex w-[1700px] relative flex-col items-center gap-[110px]">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] w-full">
          <PromotionsSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] w-full">
          <SectionWrapper />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full">
          <ContentWrapperSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] w-full">
          <MainContentSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] w-full">
          <NavigationSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] w-full">
          <FeaturedProductsSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms] w-full">
          <HeroSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms] w-full">
          <TestimonialsSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1600ms] w-full">
          <ServicesSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1800ms] w-full">
          <AboutUsSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2000ms] w-full">
          <LocationMapSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2200ms] w-full">
          <NewsletterSection />
        </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2400ms] w-full">
          <ContactSection />
        </div>

        <section className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2600ms] flex flex-col w-[1320px] items-start gap-6 relative flex-[0_0_auto]">
          <h2 className="relative self-stretch mt-[-1.00px] font-desktop-l2-16px font-[number:var(--desktop-l2-16px-font-weight)] text-gray-900 text-[length:var(--desktop-l2-16px-font-size)] text-center tracking-[var(--desktop-l2-16px-letter-spacing)] leading-[var(--desktop-l2-16px-line-height)] [font-style:var(--desktop-l2-16px-font-style)]">
            Napsali O Nás
          </h2>

          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            {pressLogos.map((logo, index) => (
              <div key={index} className="relative w-28 h-14">
                <img
                  className={`absolute ${logo.className}`}
                  alt={logo.alt}
                  src={logo.src}
                />
              </div>
            ))}
          </div>
        </section>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:2800ms] w-full">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
